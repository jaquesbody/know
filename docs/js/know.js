/* =============================================================================
   know.js — Know project scripts
   Responsibilities:
   - First-visit privacy notice
   - Accordion open/close per section
   - Checkbox state — read/write to localStorage
   - Progress bar — calculate and update from checkbox state
   - Section completion (Done button) — checks/unchecks all in section
   - Completion detection — surface /know/complete/ link
   - PWA install prompt
   ============================================================================= */


/* -----------------------------------------------------------------------------
   Constants
----------------------------------------------------------------------------- */

const STORAGE_PREFIX = 'know_';
const NOTICE_KEY     = 'know_notice_dismissed';
const COMPLETE_KEY   = 'know_complete';


/* -----------------------------------------------------------------------------
   Utility — localStorage helpers
----------------------------------------------------------------------------- */

function storageGet(key) {
  try {
    return localStorage.getItem(key);
  } catch (e) {
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

function storageRemove(key) {
  try {
    localStorage.removeItem(key);
  } catch (e) {
    console.warn('localStorage remove failed:', e);
  }
}


/* -----------------------------------------------------------------------------
   First-visit privacy notice
----------------------------------------------------------------------------- */

function initNotice() {
  const notice  = document.getElementById('privacy-notice');
  const dismiss = document.getElementById('notice-dismiss');

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
   Checkboxes — remove disabled, restore state, persist on change
   Hugo renders - [ ] as <input type="checkbox" disabled> by default
   Key format: know_cb_{sectionId}_{index}
----------------------------------------------------------------------------- */

function initCheckboxes() {
  const sections = document.querySelectorAll('.section-item');

  if (!sections.length) return;

  sections.forEach(function (section) {
    const id          = section.dataset.sectionId;
    const checkboxes  = section.querySelectorAll('input[type="checkbox"]');

    if (!id || !checkboxes.length) return;

    checkboxes.forEach(function (cb, index) {
      // remove Hugo's disabled attribute
      cb.removeAttribute('disabled');

      // restore saved state
      const saved = storageGet(STORAGE_PREFIX + 'cb_' + id + '_' + index);
      if (saved === 'true') {
        cb.checked = true;
      }

      // persist on change
      cb.addEventListener('change', function () {
        storageSet(STORAGE_PREFIX + 'cb_' + id + '_' + index, cb.checked ? 'true' : 'false');
        updateProgress();
      });
    });
  });
}


/* -----------------------------------------------------------------------------
   Progress bar — driven by checkbox state
----------------------------------------------------------------------------- */

function updateProgress() {
  const fill        = document.getElementById('progress-fill');
  const bar         = document.querySelector('.progress-bar');
  const allBoxes    = document.querySelectorAll('.section-item input[type="checkbox"]');

  if (!fill || !allBoxes.length) return;

  const total   = allBoxes.length;
  const checked = Array.from(allBoxes).filter(function (cb) {
    return cb.checked;
  }).length;

  const pct = Math.round((checked / total) * 100);

  fill.style.width = pct + '%';

  if (bar) {
    bar.setAttribute('aria-valuenow', pct);
  }

  if (checked === total) {
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
   Section completion — Done/Undo toggle
   Done  — checks all checkboxes in section, marks complete, closes accordion
   Undo  — unchecks all checkboxes in section, clears state, resets visual
----------------------------------------------------------------------------- */

function initDoneButtons() {
  const buttons = document.querySelectorAll('.section-item__done');

  if (!buttons.length) return;

  buttons.forEach(function (btn) {
    const id = btn.dataset.sectionId;
    if (!id) return;

    // restore done state on load
    if (storageGet(STORAGE_PREFIX + 'done_' + id) === 'true') {
      setSectionDone(id, btn);
    }

    btn.addEventListener('click', function () {
      const isDone = storageGet(STORAGE_PREFIX + 'done_' + id) === 'true';

      if (isDone) {
        undoSection(id, btn);
      } else {
        checkAllInSection(id);
        storageSet(STORAGE_PREFIX + 'done_' + id, 'true');
        setSectionDone(id, btn);
      }

      updateProgress();
    });
  });
}

function checkAllInSection(id) {
  const section    = document.querySelector('[data-section-id="' + id + '"]');
  if (!section) return;

  const checkboxes = section.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (cb, index) {
    cb.checked = true;
    storageSet(STORAGE_PREFIX + 'cb_' + id + '_' + index, 'true');
  });
}

function uncheckAllInSection(id) {
  const section    = document.querySelector('[data-section-id="' + id + '"]');
  if (!section) return;

  const checkboxes = section.querySelectorAll('input[type="checkbox"]');

  checkboxes.forEach(function (cb, index) {
    cb.checked = false;
    storageRemove(STORAGE_PREFIX + 'cb_' + id + '_' + index);
  });
}

function setSectionDone(id, btn) {
  btn.textContent = 'Undo';
  btn.classList.add('section-item__done--complete');
  btn.disabled = false;

  const status = document.getElementById('section-status-' + id);
  if (status) {
    status.textContent = '';
  }

  const item = document.querySelector('[data-section-id="' + id + '"]');
  if (item) item.classList.add('section-item--complete');

  const trigger = document.querySelector('[aria-controls="section-body-' + id + '"]');
  const body    = document.getElementById('section-body-' + id);

  if (trigger && body) {
    trigger.setAttribute('aria-expanded', 'false');
    body.hidden = true;
  }
}

function undoSection(id, btn) {
  uncheckAllInSection(id);
  storageRemove(STORAGE_PREFIX + 'done_' + id);

  btn.textContent = 'Done';
  btn.classList.remove('section-item__done--complete');
  btn.disabled = false;

  const status = document.getElementById('section-status-' + id);
  if (status) {
    status.textContent = '';
  }

  const item = document.querySelector('[data-section-id="' + id + '"]');
  if (item) item.classList.remove('section-item--complete');
}


/* -----------------------------------------------------------------------------
   Completion prompt
----------------------------------------------------------------------------- */

function showCompletionPrompt() {
  if (storageGet(COMPLETE_KEY) === 'true') {
    const prompt = document.getElementById('completion-prompt');
    if (prompt) prompt.hidden = false;
    return;
  }
  storageSet(COMPLETE_KEY, 'true');
  setTimeout(function () {
    window.location.href = '/know/complete/';
  }, 50);
}


/* -----------------------------------------------------------------------------
   Cloud section deep link
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
  initCheckboxes();
  initDoneButtons();
  updateProgress();
  if (storageGet(COMPLETE_KEY) === 'true') {
    const prompt = document.getElementById('completion-prompt');
    if (prompt) prompt.hidden = false;
  }
});   