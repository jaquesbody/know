/* =============================================================================
   know.js — Know project scripts
   Responsibilities:
   - First-visit privacy notice
   - Accordion open/close per section
   - Checkbox state — read/write to localStorage
   - Progress bar — calculate and update
   - Section completion (Done button)
   - Completion detection — surface /know/complete/ link
   - PWA install prompt
   ============================================================================= */


/* -----------------------------------------------------------------------------
   Constants
----------------------------------------------------------------------------- */

const STORAGE_PREFIX    = 'know_';
const NOTICE_KEY        = 'know_notice_dismissed';
const COMPLETE_KEY      = 'know_complete';


/* -----------------------------------------------------------------------------
   Utility — localStorage helpers
   Flags missing null/undefined checks explicitly where relevant
----------------------------------------------------------------------------- */

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
    // localStorage unavailable — private browsing or permissions
    console.warn('localStorage unavailable:', e);
    return null;
  }
}

function storageSet(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (e) {
    console.warn('localStorage write failed:', e);
  }
}


/* -----------------------------------------------------------------------------
   First-visit privacy notice
----------------------------------------------------------------------------- */

function initNotice() {
  const notice  = document.getElementById('privacy-notice');
  const dismiss = document.getElementById('notice-dismiss');

  // null check — elements may not exist on non-guide pages
  if (!notice || !dismiss) return;

  if (storageGet(NOTICE_KEY) === 'true') {
    notice.hidden = true;
    return;
  }

  notice.hidden = false;

  dismiss.addEventListener('click', function () {
    notice.hidden = true;
    storageSet(NOTICE_KEY, 'true');
  });
}


/* -----------------------------------------------------------------------------
   Progress bar
----------------------------------------------------------------------------- */

function updateProgress() {
  const fill     = document.getElementById('progress-fill');
  const bar      = document.querySelector('.progress-bar');
  const sections = document.querySelectorAll('.section-item');

  if (!fill || !sections.length) return;

  const total     = sections.length;
  const completed = Array.from(sections).filter(function (s) {
    const id = s.dataset.sectionId;
    return storageGet(STORAGE_PREFIX + 'done_' + id) === 'true';
  }).length;

  const pct = Math.round((completed / total) * 100);

  fill.style.width = pct + '%';

  // aria update — null check on bar
  if (bar) {
    bar.setAttribute('aria-valuenow', pct);
  }

  // completion detection
  if (completed === total) {
    showCompletionPrompt();
  }
}


/* -----------------------------------------------------------------------------
   Accordion
----------------------------------------------------------------------------- */

function initAccordions() {
  const triggers = document.querySelectorAll('.section-item__trigger');

  if (!triggers.length) return;

  triggers.forEach(function (trigger) {
    const bodyId = trigger.getAttribute('aria-controls');

    // null check — body element must exist
    if (!bodyId) return;

    const body = document.getElementById(bodyId);
    if (!body) return;

    trigger.addEventListener('click', function () {
      const isExpanded = trigger.getAttribute('aria-expanded') === 'true';

      if (isExpanded) {
        trigger.setAttribute('aria-expanded', 'false');
        body.hidden = true;
      } else {
        trigger.setAttribute('aria-expanded', 'true');
        body.hidden = false;
      }
    });
  });
}


/* -----------------------------------------------------------------------------
   Section completion — Done button
----------------------------------------------------------------------------- */

function initDoneButtons() {
  const buttons = document.querySelectorAll('.section-item__done');

  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    const id = btn.dataset.sectionId;

    // null check — sectionId must be present
    if (!id) return;

    // restore state on load
    if (storageGet(STORAGE_PREFIX + 'done_' + id) === 'true') {
      markSectionDone(id, btn);
    }

    btn.addEventListener('click', function () {
      storageSet(STORAGE_PREFIX + 'done_' + id, 'true');
      markSectionDone(id, btn);
      updateProgress();
    });
  });
}

function markSectionDone(id, btn) {
  // update button state
  btn.textContent = 'Done';
  btn.classList.add('section-item__done--complete');
  btn.disabled = true;

  // update status indicator in trigger
  const status = document.getElementById('section-status-' + id);
  if (status) {
    status.textContent = '✓';
  }

  // close the accordion
  const trigger = document.querySelector('[aria-controls="section-body-' + id + '"]');
  const body    = document.getElementById('section-body-' + id);

  if (trigger && body) {
    trigger.setAttribute('aria-expanded', 'false');
    body.hidden = true;
  }
}


/* -----------------------------------------------------------------------------
   Completion prompt
----------------------------------------------------------------------------- */

function showCompletionPrompt() {
  const prompt = document.getElementById('completion-prompt');
  if (!prompt) return;
  prompt.hidden = false;
}


/* -----------------------------------------------------------------------------
   Cloud section deep link
   Called by anchor in 04-quick-wins.md — opens cloud accordion and scrolls
----------------------------------------------------------------------------- */

function openSection(sectionId) {
  const section = document.getElementById('section-' + sectionId);
  if (!section) return;

  const trigger = section.querySelector('.section-item__trigger');
  const bodyId  = trigger ? trigger.getAttribute('aria-controls') : null;
  const body    = bodyId ? document.getElementById(bodyId) : null;

  if (!trigger || !body) return;

  trigger.setAttribute('aria-expanded', 'true');
  body.hidden = false;

  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
}


/* -----------------------------------------------------------------------------
   PWA install prompt
----------------------------------------------------------------------------- */

let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  deferredPrompt = e;
  // prompt surfaced after first section is completed — see markSectionDone
});

function triggerInstallPrompt() {
  if (!deferredPrompt) return;

  deferredPrompt.prompt().catch(function (e) {
    console.warn('Install prompt failed:', e);
  });

  deferredPrompt.userChoice.then(function (result) {
    deferredPrompt = null;
  }).catch(function (e) {
    console.warn('userChoice failed:', e);
  });
}


/* -----------------------------------------------------------------------------
   Init
----------------------------------------------------------------------------- */

document.addEventListener('DOMContentLoaded', function () {
  initNotice();
  initAccordions();
  initDoneButtons();
  updateProgress();
});