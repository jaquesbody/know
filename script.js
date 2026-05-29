// Define the navigation order: 'type' can be 'button' or 'title'
//const navStructure = [
//    { type: 'title', text: 'Getting Started'},//title 
//    { type: 'button', id: 'whatsatstake'},
//    { type: 'button', id: 'whatcanyoudo'},
//    { type: 'button', id: 'intro'},
//    { type: 'button', id: 'quickwins'},
//    { type: 'title', text: 'Deep Dive' },//title
//    { type: 'button', id: 'deepdive'},
//    { type: 'button', id: 'dns'},
//    { type: 'button', id: 'vpn'},
//    { type: 'button', id: 'email'},
//    { type: 'button', id: 'messaging'},    
//    { type: 'button', id: 'passwords'},
//    { type: 'button', id: 'browser'},    
//    { type: 'button', id: 'calendar'},
//    { type: 'button', id: 'cloud'},
//   { type: 'button', id: 'video'},    
//    { type: 'button', id: 'office'},
//    { type: 'button', id: 'ai'},
//    { type: 'button', id: 'google'},
//    { type: 'button', id: 'microsoft'},
//    { type: 'button', id: 'meta'},
//    { type: 'button', id: 'maintenance'},
//    { type: 'title', text: 'Next Level'},//title
//    { type: 'button', id: 'nextlevel'}
//];

// CHUNK 2A: Network Layer (DNS, VPN, Router)
const networkData = {
    "whatisatstake": 
    {
        id: "whatisatstake",
        title: "What is at stake?",
        icon: "🔍",
        html: `
        
        Your digital profile isn't just your search history. It includes your passwords, intimate emails, contacts, location history, the metadata of your daily life (dates, times, durations etc) and a whole lot more. Your data can be sold to brokers and collected by governments, used to surveil you, it can be exposed in breaches and will be used to sell to you.<br><br>
        <strong>You should control what personal data you share and to who.</strong>
    `
    },

    "whatcanyoudo": 
    {
        id: "whatcanyoudo",
        title: "What can you do?",
        icon: "🔍",
        html: `
        
        By reducing the amount of data you leak unknowingly or give away freely without thinking, you can limit the effects of data collection.
        <br><br>
        If this is news to you and a little confusing, have a quick read of <strong>Understanding Your Digital Profile</strong> and if you do nothing else go to <strong>10 Quick Digital Privacy Wins</strong> and start reclaiming your digital privacy.
        <br><br>
        Then below there are more detailed steps to greater privacy.
        <br><br> 
        <strong>Tick off items as you go</strong><br>
        Click 'Done' when you've finished a section<br>
        <strong>Don't rush, take your time</strong><br>
        Make some small changes first  
    `
    },

    "intro": {
    id: "intro",
    title: "Understanding Your Digital Profile",
    icon: "🛡️",
    html: `
        <h2>Understanding Your Digital Profile</h2>
        
        <h3>What is currently happening?</h3>
        <p>You open an account to order some ink cartridges, book a train ticket, or reserve a table at a restaurant. You use a Gmail account to receive the confirmation and pop a reminder in your calendar app.</p>
        <p>In a matter of minutes you've just handed over your name, home address, email, phone number, location and card details to the retailer, the email provider, and data brokers.</p>
        <p>Within a year, this data could easily be on 50+ databases, where they can start to compile a Digital Profile that can then be sold on to advertisers, insurers, and governments. And if any single company or organisation in this chain suffers a breach, your personal details are exposed. Now think of how many times you've done that - hundreds. That's a lot of data and personal information.</p>

        <h3>What can your Digital Profile include?</h3>
        <ul style="text-align: left; margin-left: 1rem;">
            <li>Personal details (Name, DOB, Nationality, Address)</li>
            <li>Location history (Favourite routes, current location)</li>
            <li>Behavioral data (Search keywords, medical queries, hobbies)</li>
            <li>Communication logs (Emails, chat logs, contact lists)</li>
            <li>Device fingerprints (Screen size, browser type, active times)</li>
            <li>Photos (Face, eyes, fingerprints, mood, location metadata)</li>
        </ul>

        <p>And if that wasn't enough, take a look at Meta's data collection policy for the full potential of data collection. Full article by Its Not Nicole can be found <a href="https://medium.com/@ItsNotNicole/i-read-the-policies-so-you-dont-have-to-meta-facebook-instagram-whatsapp-threads-etc-7a4113eee0e9" target="_blank">here</a>.</p>

        <div class="tech-details">
            <button class="tech-toggle" onclick="toggleTech(this)">Data Meta collects</button>
                <div class="tech-content">
                <ul style="text-align: left; margin-left: 1rem; font-size: 0.9rem;">
                    <li>Name</li>
                    <li>Email</li>
                    <li>Phone number</li>
                    <li>What is clicked</li>
                    <li>What is 'liked'</li>
                    <li>Any photos uploaded</li>
                    <li>Metadata of images uploaded</li>
                    <li>Posts made</li>
                    <li>Comments made on posts</li>
                    <li>Audio</li>
                    <li>Camera roll (if not restricted)</li>
                    <li>Metadata of images in camera roll (if permissions are not restricted to camera roll)</li>
                    <li>Messages sent and received including their content</li>
                    <li>IP address</li>
                    <li>Mobile operator / Internet Service Provider</li>
                    <li>Information about other nearby devices</li>
                    <li>Connection and download speed</li>
                    <li>Time zone</li>
                    <li>Wi-Fi hotspots you're connected to</li>
                    <li>Ads viewed</li>
                    <li>Ads interacted with (and how)</li>
                    <li>How long you run any Meta apps</li>
                    <li>Check-ins (within a Meta product app)</li>
                    <li>Purchases or transactions through Meta Checkout</li>
                    <li>Hashtags used</li>
                    <li>Time, frequency and duration of activities</li>
                    <li>Religious views</li>
                    <li>Sexual orientation</li>
                    <li>Political views</li>
                    <li>Health information</li>
                    <li>Racial or ethnic origin</li>
                    <li>Philosophical beliefs</li>
                    <li>Trade union membership</li>
                    <li>Information from Partners about things done both on and off Meta products (including websites visited, apps used, online games played etc)</li>
                    <li>Information from Integrated Partners (advertisers, businesses and people who use our products to sell or offer goods and services, publishers and their vendors, app developers, game developers, device manufacturers, e-commerce platforms)</li>
                    <li>Friends</li>
                    <li>Followers</li>
                    <li>Groups</li>
                    <li>Accounts</li>
                    <li>Facebook Pages (following, viewed, actions taken)</li>
                    <li>Users and Communities connected with on and off Meta products</li>
                    <li>Device contacts (phone and email)</li>
                    <li>Type of device</li>
                    <li>Operating system</li>
                    <li>Hardware and software details</li>
                    <li>Brand and model</li>
                    <li>Battery level</li>
                    <li>Signal strength</li>
                    <li>Available storage</li>
                    <li>Browser type</li>
                    <li>App and file names and types</li>
                    <li>Plugins</li>
                    <li>Device ID</li>
                    <li>Mobile Advertiser ID</li>
                    <li>Gamer ID(s)</li>
                    <li>Family Device IDs</li>
                    <li>GPS</li>
                    <li>Language setting</li>
                    <li>Keyboards</li>
                    <li>Bluetooth signals</li>
                    <li>Nearby Wi-Fi access points</li>
                    <li>Beacons</li>
                    <li>Cell towers</li>
                    <li>When you use Social plugins, Facebook Login, in-app browser link history or auto-fill</li>
                    <li>Purchases within an online game</li>
                    <li>Donations to a friend's fundraiser</li>
                    <li>Subscriptions, Meta Pay or Meta Checkout payments</li>
                    <li>Credit or debit card number</li>
                    <li>Billing, delivery & contact details</li>
                    <li>Items purchased and how many</li>
                    <li>Other devices connected to the network the product is accessed from (computers, phones, hardware, TVs, Meta Quest and other web-connected devices)</li>
                </ul>
            </div>
        </div>

        <h3>Why does this matter?</h3>
        <p>You might argue you have nothing to hide or you're not important. Well, hackers or scammers don't care for starters. But what if a political party gets in power in the future that isn't keen on your comments, posts or activities? Or even worse, you already live in or visit a country that punishes or harms you for your online activity?</p>
        <p>Yes, it's your data. You're very welcome to hand it out as you feel, but would you broadcast your search history and browsing, medical conditions, intimate messages or fringe views to strangers in the street? Would you let people see what you watch on telly or see what you're up to behind closed doors? Would you tell them where you go every day, at what time and for how long?</p>
        <p><strong>It's your data, your privacy and your right.</strong></p>

        <h3>Here's a few resources to check out</h3>
        <ul class="checklist-interactive">
            <li><input type="checkbox"><span style="display: inline;"><a href="https://justdeleteme.xyz" target="_blank">Just Delete Me</a> - simply search for a company and follow the instructions</span></li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://coveryourtracks.eff.org" target="_blank">Cover Your Tracks</a> - find out how well your browser protects you from tracking</span></li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://ipleak.net" target="_blank">IP Leak</a> - Is your IP address and location being leaked?</span></li>
        </ul>

        <p>We also highly recommend checking out these privacy advocates for a deeper dive on all things digital privacy and security.</p>
        <ul class="checklist-interactive">
            <li><input type="checkbox"><span style="display: inline;"><a href="https://www.youtube.com/@NaomiBrockwellTV" target="_blank">Naomi Brockwell</a> - simple, clear YouTube videos</span></li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://profincognito.me/tools/" target="_blank">Sooraj Sathyanarayanan</a> - a comprehensive list of privacy tools</span></li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://untraceabledigitaldissident.com/" target="_blank">Ghost</a> - technical deep dives on reducing your data leaking</span></li>
        </ul>
        
        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
    <button class="done-btn" onclick="toggleSectionComplete(this, 'intro')">Done</button>
</div>
    `
},
"quickwins": {
    id: "quickwins",
    title: "10 Quick Digital Privacy Wins",
    icon: "⚡",
    html: `
        <h2>10 Quick Digital Privacy Wins</h2>
        
        <div style="margin-bottom: 2rem; text-align: left;">
            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Install Brave browser</strong> <em>(5 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Visit <a href="https://brave.com/download" target="_blank">brave.com/download</a>. They don't track your usage, collect data or advertise to you. Even better, turn on Shields and you can block adverts, cookies and tracking. And while you're there why not give Brave Search and their own AI Leo a go - they don't store your searches or conversations.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Set up a Proton account</strong> <em>(10 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Visit <a href="https://proton.me" target="_blank">proton.me</a> then download their password manager <a href="https://proton.me/pass/download" target="_blank">Proton Pass</a>. Set super strong passwords, sync them across multiple devices, no need to remember them or copy and paste them. This one's a win win win!</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Move from WhatsApp to Signal</strong> <em>(5 mins + ongoing)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Download from <a href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms" target="_blank">Play Store</a>. This one's only difficult 'cos all your friends and family are on WhatsApp, but the access they have and the data they collect is not worth it. Whereas Signal collects almost no data whatsoever and have no access to your messages, contacts or call logs. Run Signal alongside WhatsApp and slowly migrate people as and when.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Sign up for a privacy respecting email address</strong> <em>(5 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Visit <a href="https://proton.me/mail" target="_blank">proton.me/mail</a>. They don't read your emails, docs or use your conversations to train their AI models. And stop using your name and DOB in the address.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Move to an encrypted Cloud Storage provider</strong> <em>(10 mins)</em>
                    </div>
                </div>
                    <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;"><a href="#" onclick="switchToCloud(); return false;">Checkout alternatives here</a>. They won't use your photos or snoop on your documents.</p>
                </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Check Have I Been Pwned</strong> <em>(30 secs)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Visit <a href="https://haveibeenpwned.com" target="_blank">haveibeenpwned.com</a>. See if your email has been leaked in a data breach. If so, consider changing it ASAP, at least change the password.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Review your apps</strong> <em>(10 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Delete any apps you don't use as they still collect data and drain your battery even when not in use.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Review your app permissions</strong> <em>(10 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Take a quick look at what permissions you're giving all your apps. Do they need access to your pictures 24/7? Do they need to know your exact location, use your microphone or have access to your phone contacts?</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Check your app settings</strong> <em>(30 mins - deliberately difficult)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Look for the Settings 'cog' in most apps, then have a dig around for Privacy and Security settings. What is ON? Can you limit the telemetry they are tracking, switch off the advertising settings and triple check for AI or 'smart' features as these can scrape anything to feed AI models.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Check out PrivacyPack</strong> <em>(5 mins)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;">Visit <a href="https://privacypack.org" target="_blank">privacypack.org</a>. Have a look at all the brilliant alternatives to the standard Google, Meta, Microsoft.</p>
            </div>

            <div style="margin-bottom: 1.5rem;">
                <div style="display: flex; align-items: flex-start; gap: 0.5rem;">
                    <input type="checkbox" style="margin-top: 0.2rem; flex-shrink: 0;">
                    <div>
                        <strong>Set a 3-month reminder</strong> <em>(1 hour every 3 months)</em>
                    </div>
                </div>
                <p style="margin: 0.5rem 0 0 1.5rem; font-size: 0.95rem;"><a href="javascript:void(0);" onclick="openCalendarReminder()">Create calendar reminders</a> for every 3 months. They'll remind you to delete unused apps, review settings and permissions, send opt out emails, unsubscribe from pointless emails, change passwords, and check Have I Been Pwned.</p>
            </div>
        </div>
        </div>
        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
    <button class="done-btn" onclick="toggleSectionComplete(this, 'quickwins')">Done</button>
</div>
    `
},

"deeperdive": 
{
  //  id: "deeperdive",
    title: "More steps to greater privacy",
    //icon: "🔍",
    html: `
        
    Below is a deeper dive into regaining even more online privacy, by targeting your network and connections, understanding email, passwords and browsers a bit better, dialling back AI's reach and zooming in on Big Tech.<br><br>
    <strong>Take this at your own pace</strong><br>
    Make small changes that will stick<br>
    <strong>Watch as you start to regain your privacy</strong>
   `
},

"dns": {
    id: "dns",
    title: "Domain Name Service (DNS)",    
    icon: "🔍",
    html: `
        <h2>Domain Name Service (DNS)</h2>
        <p><strong>What is it?</strong> DNS translates human-readable web addresses (e.g., www.google.com) into machine-readable IP addresses (e.g., 142.250.190.4). By default, your Internet Service Provider (ISP) (e.g., Virgin Media, BT, EE, Sky) handles this, allowing them to see every website you visit.</p>
        <p><strong>What about privacy?</strong> Without a privacy-focused DNS, your ISP and default DNS providers build a complete log of your browsing history. This data can be sold to advertisers, used to throttle your connection speeds, or handed over to authorities without a warrant in some jurisdictions. The default DNS providers are usually Google's 8.8.8.8 or Cloudflare's 1.1.1.1.</p>
        
        <h3 class="providers-heading">Privacy Providers</h3>
        <ul class="providers-list">
            <li><a href="https://nextdns.io" target="_blank" class="provider-link">NextDNS</a></li>
            <li><a href="https://quad9.net" target="_blank" class="provider-link">Quad9 DNS</a></li>
            <li><a href="https://www.cloudflare.com/en-gb/application-services/products/dns/" target="_blank" class="provider-link">Cloudflare DNS</a></li>
        </ul>
        
        <div class="benefit-combined">
            <strong>✅ Benefits</strong>
            <ul>
                <li>Significantly faster browsing experience as ad-tracking requests are blocked before they load.</li>
                <li>Your ISP can no longer see the specific websites you visit.</li>
                <li>Bypasses ISP-level censorship.</li>
            </ul>
        </div>
        
        <p>We recommend <strong>NextDNS</strong>. It is a privacy-focused, configurable DNS provider that blocks ads, trackers, and malware at the network level.</p>
        <ul class="checklist-interactive">
            <li><input type="checkbox"> Visit<a href="https://nextdns.io" target="_blank">NextDNS.io</a>and create a free account.</li>
            <li><input type="checkbox"> Set up a "Profile" for each specific device (Mobile, Laptop, Router).</li>
            <li><input type="checkbox"> On your mobile and laptop download the NextDNS app (Android/iOS/Windows/Mac) and log in.</li>
            <li><input type="checkbox"> Follow the simple Setup Guide for the specific device and operating system.</li>
            <li><input type="checkbox"> Set it up on your router for whole-home coverage. Login to your router and enter your NextDNS ID into your router's DNS settings (usually under WAN/Internet settings).</li>
            <li><input type="checkbox"> On your preferred browser go to Settings > Network (or similar) and enable "Use Secure DNS" and select "Custom" and enter your NextDNS URL.</li>
            <li><input type="checkbox"> Tip: Start with conservative blocklists and if a website breaks, simply add its domain to the "Allowlist" in your NextDNS dashboard (e.g., example.com, not the full URL).</li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://ipleak.net" target="_blank">IP Leak</a> - After setting up your private DNS, test to see if its leaking?</span></li>
        </ul>

        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
            <button class="done-btn" onclick="toggleSectionComplete(this, 'dns')">Done</button>
        </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
            <h3 class="providers-heading">Further reading</h3>
            <a href="https://untraceabledigitaldissident.com/set-up-nextdns-dns-privacy-guide/" target="_blank">Untraceable Digital Dissident: NextDNS Guide</a>
            <a href="https://proton.me/business/blog/dns-security-for-business" target="_blank">Proton: DNS Privacy Explained</a>
        </div>
    `
},
   "vpn": {
    id: "vpn",
    title: "Virtual Private Network (VPN)",
    icon: "🔒",
    html: `
        <h2>Virtual Private Network (VPN)</h2>        
        <p><strong>What is it?</strong> A VPN creates an encrypted tunnel between your device and a VPN server. All your internet traffic passes through this server, masking your real IP address and location from the websites you visit.</p>
        <p><strong>What about privacy?</strong> Without a VPN, your ISP can see every unencrypted site you visit and can throttle your speed for specific activities (like streaming). On public Wi-Fi, hackers on the same network can intercept your data (passwords, emails) if the site doesn't use HTTPS.</p>

        <h3>Privacy Providers:</h3>
        <ul class="providers-list">
            <li><a href="https://proton.me/vpn" target="_blank" class="provider-link">Proton VPN</a></li>
            <li><a href="https://www.brave.com/firewall-vpn/" target="_blank" class="provider-link">Brave VPN</a></li>
            <li><a href="https://mullvad.net" target="_blank" class="provider-link">Mullvad</a></li>
        </ul>

        <div class="benefit-combined">
            <strong>✅ Benefits</strong>
            <ul>
                <li>Secure browsing on public Wi-Fi (cafes, airports).</li>
                <li>Your ISP and local network can no longer see what you are doing, only that you are connected to a VPN.</li>
                <li>Access to geo-blocked content and prevents ISP throttling based on your activity.</li>
            </ul>
        </div>

        <p>We recommend <strong>Proton VPN</strong>. It is open-source, based in Switzerland (strong privacy laws), and has a strict "No-Logs" policy.</p>
        <ul class="checklist-interactive">
            <li><input type="checkbox"> Download the app from<a href="https://proton.me/vpn" target="_blank">Proton.me/vpn</a></li>
            <li><input type="checkbox"> Create a free account (no credit card required).</li>
            <li><input type="checkbox"> Install the app on your phone and computer.</li>
            <li><input type="checkbox"> Connect to the "Fastest" server or a specific country.</li>
            <li><input type="checkbox"> Tip: Add the VPN to your easy access menu, so you can switch it on and off easily as some sites (e.g. banking apps) sometimes stop you using them.</li>
            <li><input type="checkbox"><span style="display: inline;"><a href="https://ipleak.net" target="_blank">IP Leak</a> - After setting up your VPN, test to see if its leaking your location?</span></li>
        </ul>

        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
            <button class="done-btn" onclick="toggleSectionComplete(this, 'vpn')">Done</button>
        </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
            <h3 class="providers-heading">Further reading</h3>
            <a href="https://protonvpn.com/what-is-a-vpn" target="_blank">Proton: What is a VPN?</a>
            <a href="https://untraceabledigitaldissident.com/why-you-want-your-own-router/" target="_blank">Untraceable Digital Dissident: VPN Security</a>
        </div>
    `
},
};
const identityData = {
   "email": {
    id: "email",
    title: "Email",
    icon: "📧",
    html: `
        <h2>Email</h2>
        <p><strong>What is it?</strong> Your email is your digital identity. It links to banking, social media, and shopping accounts. Using a single email address creates a centralised target for data brokers and hackers.</p>
        <p><strong>What about privacy?</strong> Using yourname@gmail.com everywhere means if one service is breached, attackers can use that email to try password resets on your bank, social media, and other accounts (Credential Stuffing). It also allows trackers to link your shopping habits to your email address.</p>

        <h3>Privacy Providers:</h3>
        <ul class="providers-list">
            <li><a href="https://proton.me/mail" target="_blank" class="provider-link">Proton Mail</a></li>
            <li><a href="https://simplelogin.io" target="_blank" class="provider-link">SimpleLogin</a></li>
            <li><a href="https://tuta.com" target="_blank" class="provider-link">Tuta</a></li>
        </ul>

        <div class="benefit-combined">
            <strong>✅ Benefits</strong>
            <ul>
                <li>Your real email address is hidden from 90% of online services.</li>
                <li>Even if one alias is breached, your main identity remains safe.</li>
                <li>Eliminates spam and prevents cross-site tracking via email addresses.</li>
            </ul>
        </div>

        <p>We can recommend <strong>Proton Mail</strong>, it is end-to-end encrypted and based in Switzerland. Do not use your real name or date of birth in the registration.</p>
        <ul class="checklist-interactive">
            <li><input type="checkbox"> Sign up at <a href="https://proton.me/mail" target="_blank">Proton Mail</a></li> 
            <li><input type="checkbox"> Install the app on your phone and computer.</li>
            <li><input type="checkbox"> Go to Settings > Privacy and Security to turn on even more features.</li>
            <li><input type="checkbox"> Via Proton Pass create email aliases. This can be used to segregate any sign-ups into seperate groups, but all emails will be directed to your main inbox. Here's a few suggestions to get your started:</li>
                <ul style="text-align: left; margin-left: 1rem;">
                    <li>random.official@youralias.com (Banks, Government)</li>
                    <li>random.shopping@youralias.com (Online Stores, Subscriptions)</li>
                    <li>random.social@youralias.com (Social Media, Forums)</li>
                    <li>random.temp@youralias.com (One-off sign-ups, Newsletters)</li>
                </ul>
            <li><input type="checkbox"> <span style="display: inline;">Tip: Manage your email aliases at <a href="https://app.simplelogin.io/auth/login" target="_blank">Simple Login</a> using your Proton login details.</span></li>        
        </ul>
    
        <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
            <button class="done-btn" onclick="toggleSectionComplete(this, 'email')">Done</button>
        </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
            <h3 class="providers-heading">Further reading</h3>
            <a href="https://proton.me/mail" target="_blank">Proton Mail</a>
            <a href="https://haveibeenpwned.com" target="_blank">Check Have I Been Pwned</a>
        </div>
    `
},

    "messaging": {
        id: "messaging",
        title: "Messaging",
        icon: "☁️",
        html: `
            <h2>Messaging</h2>
            <p><strong>What is it?</strong> Messaging apps are a gateway to many of your relationships (who you call) and your habits - when you call, where you call from and for how long.</p>
            <p><strong>What about privacy?</strong> Over 3 billion people use WhatsApp, although they dont see your messages, they do collect a lot of data from your phone, which can be collated to build a digital profile of you to use in Meta's advertising.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://signal.org" target="_blank" class="provider-link">Signal</a></li>
                <li><a href="https://simplex.chat" target="_blank" class="provider-link">SimpleX Chat</a></li>
            </ul>

            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>No collection of your call logs or contacts.</li>
                    <li>End-to-end encrypted messages.</li>
                    <li>Secure messaging without revealing your phone number.</li>
                </ul>
            </div>
            
            <p>We highly recommend <strong>Signal</strong>, it feels alot like WhatsApp, it's easy to use, they can't read your messages and collect next to none of your data.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Download <a href="https://play.google.com/store/apps/details?id=org.thoughtcrime.securesms" target="_blank">Signal</a></li>
                <li><input type="checkbox">Don't want to broadcast your phone number? Head to Settings > Privacy > Phone number</li>
                <li><input type="checkbox">Run Signal alongside WhatsApp and slowly migrate people over as and when they are ready.</li>                
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'messaging')">Done</button>
            </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://www.softmaker.com/en/blog/friday-chat/blog-messenger-comparison-privacy-2026" target="_blank">Messenger comparison 2026</a>
            </div>
        `
    },

    "passwords": {
        id: "passwords",
        title: "Passwords",
        icon: "🔑",
        html: `
            <h2>Passwords</h2>
            <p><strong>What is it?</strong> Passwords are the first line of defence. Weak or reused passwords are the cause of 80% of data breaches. A good Password Manager and Two-Factor Authentication (2FA) app makes online life easier and more secure.</p>
            <p><strong>What about privacy?</strong> If you use an easy to guess password (e.g. Password123) or even reuse a password, a single breach on a website can lead to attackers trying that same password on your bank, email, and social media. SMS-text-based 2FA (those 6 digit confirmation codes) is also insecure and vulnerable to SIM-swapping attacks.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://proton.me/pass" target="_blank" class="provider-link">Proton Pass</a></li>
                <li><a href="https://bitwarden.com/products/personal/" target="_blank" class="provider-link">Bitwarden</a></li>
            </ul>

            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>Eliminates the need to remember passwords, saves you time and is super convenients.</li>
                    <li>Every account uses a unique character random password. So if one is stolen, the others remain secure.</li>
                </ul>
            </div>
            
            <p>We recommend <strong>Proton Pass</strong>, it's end-to-end encrypted, easy to use and can be synced between phones and laptops</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Download <a href="https://proton.me/pass" target="_blank">Proton Pass</a></li>
                <li><input type="checkbox">Add login details and new passwords as you go. Dont try to change all your passwords in one go.</li>
                <li><input type="checkbox">Add their browser extension to your pc and auto-fill passwords.</li>
                <li><input type="checkbox"> <span style="display: inline;">For greater security download <a href="https://proton.me/authenticator/download" target="_blank">Proton Authenticator</a> and set up 2FA for  critical accounts (Email, Bank, Social). You will need to go into Settings for each app to find 2FA.</span></li>
                <li><input type="checkbox">Tip: Password managers often copy passwords to your clipboard. Enable "Clear clipboard after X seconds" to prevent other apps from reading it.</li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'passwords')">Done</button>
            </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://proton.me/blog/how-do-password-managers-work" target="_blank">How do password managers work?</a>
            </div>
        `
    },
    "browser": {
        id: "browser",
        title: "Browser & Search Engine",
        icon: "🌐",
        html: `
            <h2>Browser & Search Engine</h2>
            <p><strong>What is it?</strong> Your browser is the window to the internet, it's how you access websites, email services and do your shopping. Your Search Engine is how you interact with the browser to search for online information</p>
            <p><strong>What about privacy?</strong> Default browsers like Chrome and Edge will track your browsing, sell data to advertisers and integrate AI that harvests your inputs. Default search engines will also record and track your search history and keystrokes, even if you dont click 'search' to train AI models and build a profile of every site you visit.</p>
            
            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://brave.com/download" target="_blank" class="provider-link">Brave Browser & Search</a></li>
                <li><a href="https://mullvad.net/en/browser" target="_blank" class="provider-link">Mullvad Browser</a></li>
                <li><a href="https://torproject.org/download/" target="_blank" class="provider-link">Tor Browser</a></li>
            </ul>
            
            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>Faster browsing (less crap to load on every page).</li>
                    <li>No ads, no annoying pop-ups and no tracking your clicks or browsing.</li>
                    <li>YouTube works without ads.</li>
                    <li>Your search history and AI queries are no longer logged or sold.</li>
                </ul>
            </div>

            <p>We recommend <strong>Brave Browser & Search</strong>, no ads, no tracking, no search logs and super easy to use.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Download from <a href="https://brave.com/download" target="_blank">Brave.com</a></li>
                <li><input type="checkbox">Import your bookmarks (optional, but easy).</li>
                <li><input type="checkbox">Go to Settings > Shields and ensure "Block Fingerprinting" and "Block Cookies" are turned on.</li>
                <li><input type="checkbox"><span style="display: inline;"><strong>Brave Search:</strong> In Settings > Search Engine, set the default to Brave Search.</span></li>
                <li><input type="checkbox"><span style="display: inline;"><a href="https://coveryourtracks.eff.org" target="_blank">Cover Your Tracks</a> - find out how well your browser now protects you from tracking</span></li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'browser')">Done</button>
            </div>
        `
    },

    "calendar": {
        id: "calendar",
        title: "Calendar",
        icon: "☁️",
        html: `
            <h2>Calendar</h2>
            <p><strong>What is it?</strong> Calendars such as Google, Outlook or your defaul provider, are often accessed via your account and synced across devices. By default, the provider has full access.</p>
            <p><strong>What about privacy?</strong> Your calendar is usually NOT encrypted, so your provider can see your schedule, any private meetings, birthdays, medical appointments or when and where you go on holiday. This can all be used to build an accurate profile of your personal life.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://proton.me/calendar" target="_blank" class="provider-link">Proton Calendar</a></li>
                <li><a href="https://tuta.com/calendar" target="_blank" class="provider-link">Tuta Calendar</a></li>
            </ul>

            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>No snooping on your personal life.</li>
                    <li>End-to-end encrypted enteries.</li>
                    <li>Secure sharing of meetings/appointments.</li>
                </ul>
            </div>

            <p>We really like <strong>Proton Calendar</strong>, it's slick, easy to use, they can't see your enteries and you can easily sync between devices.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Download <a href="https://proton.me/calendar/download" target="_blank">Proton Calendar</a> - it's as simple as that.</span></li>
              
                <li><input type="checkbox">If you want to import your current calendar from Google, go to Settings > Import from Google</li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'calendar')">Done</button>
            </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://proton.me/business/blog/appointment-scheduling" target="_blank">Secure appointment schedulling</a>
            </div>
        `
    },
    "cloud": {
        id: "cloud",
        title: "Cloud Storage",
        icon: "☁️",
        html: `
            <h2>Cloud Storage</h2>      
            <p><strong>What is it?</strong> Cloud storage (Google Drive, OneDrive, Dropbox) stores your files on remote servers. By default, providers can scan your files for content (to serve ads or for legal compliance) and hold the encryption keys.</p>
            <p><strong>What about privacy?</strong> Providers can scan your files for "illegal content" or keywords to train their AI. If their servers are breached, your unencrypted data is exposed. Legal requests can force them to hand over your files without your knowledge.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://proton.me/drive" target="_blank" class="provider-link">Proton Drive</a></li>
                <li><a href="https://tuta.com/drive" target="_blank" class="provider-link">Tuta Drive</a></li>
                <li><a href="https://nextcloud.com/" target="_blank" class="provider-link">Nextcloud</a></li>
            </ul>

            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>No scanning of personal photos or documents.</li>
                    <li>End-to-end encrypted transfers.</li>
                    <li>Secure sharing links that don't reveal your identity.</li>
                </ul>
            </div>

            <p>We recommend <strong>Proton Drive</strong>, it's slick, easy to use, they can't see your files and you can easily back up you phone photos.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Download <a href="https://proton.me/drive/download" target="_blank">Proton Drive</a> - it's as simple as that</li>
                <li><input type="checkbox">Add a passcode and/or 2FA in Settings for added security</li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'cloud')">Done</button>
            </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://www.privacyguides.org/en/cloud/" target="_blank">Cloud storage privacy guide</a>
            </div>
        `
    },

    "video": {
        id: "video",
        title: "Video Conferencing",
        icon: "☁️",
        html: `
            <h2>Video Conferencing</h2>
            <p><strong>What is it?</strong> We are all familiar with Zoom, Teams, Meets or WhatsApp video calls, they can be great to connect with family, friends or colleagues.</p>
            <p><strong>What about privacy?</strong> Although providers often do offer an encrypted option, these are sometimes not switched on as default, do not apply to group meetings or limit the apps functionality when they are switched on.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://proton.me/meet" target="_blank" class="provider-link">Proton Meet</a></li>
                <li><a href="https://talk.brave.com" target="_blank" class="provider-link">Brave Talk</a></li>
            </ul>
            
            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>No need to set up an account, just talk.</li>
                    <li>End-to-end encrypted by default.</li>
                    <li>No recording or tracking your calls.</li>
                </ul>
            </div>

            <p><strong>Brave Talk</strong> is easy to use, built into the Brave browser, super private and you can screenshare too.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Simply visit <a href="https://talk.brave.com" target="_blank">talk.brave.com</a></span></li>
                <li><input type="checkbox">Click the 'person +' icon to invite others via a link.</li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'video')">Done</button>
            </div>

        <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://proton.me/blog/meet-security-model" target="_blank">Secure Video Confrencing</a>
            </div>
        `
    },

"office": {
        id: "office",
        title: "Office Tools",
        icon: "☁️",
        html: `
            <h2>Office Tools</h2>
            <p><strong>What is it?</strong> Simply put, Microsoft Word and Excel (Office or 365) and Google Docs and Sheets. We've all used them to create and store important documents from letters and contracts to financial records or medical data.</p>
            <p><strong>What about privacy?</strong> These are private documents, or so you thought, both Microsoft and Google can access their content, especially if you have 'Editor' or AI features enabled. This information can then be used to train their AI models.</p>

            <h3>Privacy Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://fileverse.io" target="_blank" class="provider-link">Fileverse</a></li>
                <li><a href="https://onlyoffice.com" target="_blank" class="provider-link">ONLYOFFICE</a></li>
                <li><a href="https://proton.me/drive/docs" target="_blank" class="provider-link">Proton Docs & Sheets</a></li>
            </ul>

            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>No dependency on Big Tech.</li>
                    <li>End-to-end encrypted documents.</li>
                    <li>No account needed, no linked identity.</li>
                </ul>
            </div>

            <p>For compatability and familiarity we recommend <strong>ONLYOFFICE</strong>.</p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Download <a href="https://www.onlyoffice.com/download-desktop" target="_blank">ONLYOFFICE</a></li>
                <li><input type="checkbox">If you prefer Microsoft or Google, check your settings for 'Editor' or AI features.</li>
                <li><input type="checkbox">Move sensitive files to a local drive, disable OneDrive or use an encrypted cloud service.</li>
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'office')">Done</button>
            </div>
        `
    },

    "ai": {
        id: "ai",
        title: "AI",
        icon: "🤖",
        html: `
            <h2>Artificial Intelligence</h2>
            <p>Modern AI features (e.g. Copilot, Gemini, OpenAI, Claude) are constantly listening, reading and using your data to train their models, scraped from your personal emails, photos, private messages, documents and all your conversations/chat logs. Many of these 'Smart' features are ON as default, hidden deep in Settings, with new capabilities enabled whenever you update your software, without your explicit consent.</p>

            <p><strong>How to limit AI's reach</strong></p>
            <ul class="checklist-interactive">
                <li><input type="checkbox">Check Settings: Go to every app and device Settings. Look for menus or options similar to "Help Improve" "Personalise" "AI Features" or "Smart Features" - Turn them OFF!</a></li>
                <li><input type="checkbox">Disable Cloud Processing: Turn off any "Send to Cloud" options for voice assistants and keyboards.</li>
                <li><input type="checkbox">Local AI: Install a local model on your device (e.g. Llama3.2:1B). None of your data is leaked.</li>
                <li><input type="checkbox">Private AI: Use Brave's AI - Leo - (its built in to their browser) which is designed to not store your chat history for training.</li>
            </ul>

            <h3>Providers:</h3>
            <ul class="providers-list">
                <li><a href="https://brave.com/leo/" target="_blank" class="provider-link">Brave Leo AI</a></li>
                <li><a href="https://venice.ai/chat" target="_blank" class="provider-link">Venice AI</a></li>
                <li><a href="https://www.trymaple.ai/" target="_blank" class="provider-link">Maple AI</a></li>
            </ul>
            
            <div class="benefit-combined">
                <strong>✅ Benefits</strong>
                <ul>
                    <li>Your private conversations, documents and photos remain private.</li>
                    <li>You can personalise a locally stored AI model on your own device.</li>
                </ul>
            </div>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'ai')">Done</button>
            </div>

            <div class="further-reading" style="border-top: 3px solid var(--primary-color); padding-top: 1.5rem;">
                <h3 class="providers-heading">Further reading</h3>
                <a href="https://brave.com/leo" target="_blank">Brave Leo AI Privacy</a>
            </div>
        `
    },
};
const platformData = {
    "google": {
        id: "google",
        title: "Google",
        icon: "🔍",
        html: `
            <h2>Google</h2>
            <p>Google is the largest online data collector. They track your location, your search history, YouTube views, Android phone usage, they read your emails, your text messages, your private documents, your calendar, your photos, what apps you install and a whole lot more, in order to build a comprehensive digital profile, so they can target you with ads.</p>

            <p><strong>How to limit Google's reach</strong></p>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Check Your Data: Visit <a href="https://takeout.google.com/" target="_blank">Google Takeout</a> to download and review what they know about you.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Remove Content: Use <a href="https://support.google.com/websearch/answer/9673730" target="_blank">Google's Removal Tool</a> to remove personal info from search results.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Check out the alternative brilliant apps at <a href="https://privacypack.org" target="_blank">privacypack.org</a></span></li>
                <li><input type="checkbox"><span style="display: inline;">Give this comprehensive article a read <a href="https://tuta.com/blog/degoogle-list" target="_blank">How to De-Google List</a></span></li>
                </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'google')">Done</button>
            </div>
        `
    },
    "microsoft": {
        id: "microsoft",
        title: "Microsoft",
        icon: "💻",
        html: `
            <h2>Microsoft</h2>
            <p>Windows 10/11, Edge browser, Hotmail/Outlook and OneDrive all collect extensive data, including typing patterns, conversations, document and photo contents, location, file metadata, browser metadata and browsing habits. Microsoft (by default) also hold your BitLocker encryption keys on on their servers, giving them (or law enforcement) access without your say.</p>

            <p><strong>How to limit Microsoft's reach</strong></p>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Limit data collection: Go to Settings > Privacy & Security. Turn off "Activity History", "Diagnostic data", and "Tailored Experiences".</span></li>
                <li><input type="checkbox"><span style="display: inline;">Follow this tutorial on how to access Bitlocker <a href="https://support.microsoft.com/en-us/windows/find-your-bitlocker-recovery-key-6b71ad27-0b89-ea08-f143-056f5ab347d6" target="_blank">here</a> to remove and secure access to your data.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Reduce bloat (2-8GB) and excess data telemetary on your Windows laptop by downloading and running <a href="https://privacy.sexy" target="_blank">privacy.sexy</a></span></li>
                <li><input type="checkbox"><span style="display: inline;">Move sensitive files to a local drive, disable OneDrive or use an encrypted cloud service.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Consider using Linux, an entirely different Operating System (this does require some technical know-how)</span></li>
                </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'microsoft')">Done</button>
            </div>
        `
    },
    "meta": {
        id: "meta",
        title: "Meta",
        icon: "👥",
        html: `
            <h2>Meta</h2>
            <p>Meta can track you across the web and collect a tonne of metadata (who you talk to, when, where, for how long) from WhatsApp, Facebook and Messanger even if the content is encrypted. This metadata is used for advertising and profiling. They build "shadow profiles" of everyone you interact with, even if they don't have an account. Then they can use this data to micro-target ads and influence your online behaviour. </p>

            <p><strong>How to limit Meta's reach</strong></p>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Limit data collection on your phone by revoking Permissions to Contacts, Location, and Microphone in app settings.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Again in Settings, on Facebook and WhatsApp, check for privacy and security settings that are switched on by default.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Move to a privacy respecting messaging app, like Signal, that doesn't collect metadata or have access to your chats</span></li>
                <li><input type="checkbox"><span style="display: inline;">Keep an eye out for Copilot or Meta AI, especially default enabled 'smart features' in settings.</span></li>             
            </ul>

            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'meta')">Done</button>
            </div>
        `
    }
};   
const finalData = {
    "maintenance": {
        id: "maintenance",
        title: "Maintenance & Habits",
        icon: "🛠️",
        html: `
            <h2>Maintenance & Habits</h2>
            <p>Privacy is not a one-time setup. It requires regular checks to ensure settings haven't reverted and new threats are addressed. Equally, try not to be overwhelmed, build habits that stick and take your time to implement changes.</p>    

            <h3>Monthly Checklist</h3>
            <ul class="checklist-interactive">
                <li><input type="checkbox"><span style="display: inline;">Review Permissions: Check phone/desktop app permissions (Location, Camera, Mic). Revoke unused ones.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Check for Breaches: Run your emails through <a href="https://haveibeenpwned.com" target="_blank">Have I Been Pwned</a>. Change passwords immediately if breached.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Update Settings: After OS updates, re-check privacy toggles (AI, Diagnostics, Smart Features).</span></li>
                <li><input type="checkbox"><span style="display: inline;">Clean Up: Delete unused apps. They collect data even when not in use.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Clipboard: Clear your phone/desktop clipboard regularly.</span></li>
                <li><input type="checkbox"><span style="display: inline;">Recent Files: Search your phone for, and delete, old screenshots, downloads, and edits. These often contain personal data you forgot about.</span></li>
                <li><input type="checkbox"><span style="display: inline;"><a href="javascript:void(0);" onclick="openCalendarReminder()">Create a quarterly calendar reminder</a> to delete unused apps, review settings and permissions, send opt out emails, unsubscribe from pointless emails and check for data breaches.</span></li>
            </ul>    
    
            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'maintenance')">Done</button>
            </div>
        `
    },
    "nextlevel": {
        id: "nextlevel",
        title: "Next Level Privacy",
        icon: "🛠️",
        html: `
            <h2>Next Level Privacy</h2>
            <p>If you've made it this far you have taken some major steps to improving your online digital privacy. Why not go to the next level with some further measures and gain greater privacy and sovereignty.</p>    

            <ul class="checklist-interactive">
                <h3>Decentralized social media</h3>
                    <li><input type="checkbox"><span style="display: inline;"><strong>Nostr |</strong><a href="https://nostr.com/" target="_blank"> nostr.com</a></span></li>

                    A censorship-resistant social media protocol, that does not depend on a single company and their servers, so you can't be banned or have your posts removed. Nostr runs across multiple relays that you choose, so you can move your profile, data and earnings between client-apps. Check out any of these apps to get started:
                    <ul class="providers-list">
                        <li><a href="https://yakihonne.com/" target="_blank" class="provider-link">Yakihonne</a></li>
                        <li><a href="https://damus.io/android/" target="_blank" class="provider-link">Damus</a></li>
                        <li><a href="https://primal.net/home" target="_blank" class="provider-link">Primal</a></li>
                    </ul>
                    <strong>Important note:</strong> You will generate a private key when you first login, called an 'nsec', you must keep this safe and never give it to anyone. This is your profile, your data, your freedom.
                    <br><br>

                <h3>Use cryptographic currency</h3>    
                    <li><input type="checkbox"><span style="display: inline;"><strong>Bitcoin |</strong><a href="https://bitcoin.org/" target="_blank"> bitcoin.org</a></span></li>

                    Make fast, secure transactions (without any intermediaries) peer-to-peer - pure financial sovereignty. Note that all Bitcoin transactions are publicly visible, compromising anonymity. Here's three great Bitcoin/Lightning wallets to check out:
                    <ul class="providers-list">
                        <li><a href="https://www.walletofsatoshi.com/" target="_blank" class="provider-link">Wallet of Satoshi</a></li>
                        <li><a href="https://cakewallet.com/" target="_blank" class="provider-link">Cake</a></li>
                        <li><a href="https://unstoppable.money/" target="_blank" class="provider-link">Unstoppable</a></li>
                    </ul>

                    <li><input type="checkbox"><span style="display: inline;"><strong>Zcash |</strong><a href="https://z.cash/" target="_blank"> z.cash</a></span></li>
                    Zcash offers enhanced privacy features through its shielded transaction mechanism, allowing you to make private transactions without revealing addresses or amounts on the public blockchain. Here's three Zcash wallets to check out:
                    <ul class="providers-list">
                        <li><a href="https://zodl.com/" target="_blank" class="provider-link">Zodl</a></li>
                        <li><a href="https://brave.com/wallet/" target="_blank" class="provider-link">Brave</a></li>
                        <li><a href="https://unstoppable.money/" target="_blank" class="provider-link">Unstoppable</a></li>
                    </ul>

                    <li><input type="checkbox"><span style="display: inline;"><strong>Monero |</strong><a href="https://www.getmonero.org/" target="_blank"> getmonero.org</a></span></li>
                    Monero employs advanced ring signatures and stealth addresses to provide enhanced privacy features, enabling you to make private payments without revealing transaction details. Check out these Monero wallets:
                    <ul class="providers-list">
                        <li><a href="https://cakewallet.com/" target="_blank" class="provider-link">Cake</a></li>
                        <li><a href="https://unstoppable.money/" target="_blank" class="provider-link">Unstoppable</a></li>
                    </ul>
                    
                    <strong>Important note:</strong> For full sovereignty and greater privacy allways choose a Self-Custody wallet - not your keys, not your money. You will generate a private seed phrase, often 12-24 words, when you first open a wallet, you must keep these safe and never give them to anyone. This is your financial freedom, it's your responsibility. 
                    <br><br>

                <h3>Run a home server</h3>
                    <li><input type="checkbox"><span style="display: inline;">Run a Bitcoin node (or Zcash or Monero) - verify your own transactions and gain greater independence.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Run a Nostr node - secure the protocol for future generations and achieve greater data sovereignty.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Host your own cloud for emails, passwords, files and loads more. Stop depending on third parties.</span></li>
                    Here's three great options:
                    <ul class="providers-list">
                        <li><a href="https://umbrel.com/" target="_blank" class="provider-link">Umbrel</a></li>
                        <li><a href="https://start9.com/" target="_blank" class="provider-link">Start9</a></li>
                        <li><a href="https://raspberrytips.com/raspberry-pi-server-starting-guide/" target="_blank" class="provider-link">RaspberryPi</a></li>
                    </ul>

                <h3>Physical things to do</h3>
                    <li><input type="checkbox"><span style="display: inline;">Protect you pin/pattern - shield your screen from people and remember to clean it.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Cover your laptop webcam when not in use.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Use cash, it leaves no trail.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Use parcel lockers, collection points or a PO box, so not to reveal your home address.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Like using Uber? Don't use your home address, walk to the corner of the street.</span></li>
                    <li><input type="checkbox"><span style="display: inline;">Consider getting a Google Pixel phone and install <a href="https://grapheneos.org/" target="_blank"> GrapheneOS</a></span></li>
            </ul>    
    
            <div style="text-align: center; margin-top: 2rem; padding-top: 1.5rem;">
                <button class="done-btn" onclick="toggleSectionComplete(this, 'nextlevel')">Done</button>
            </div>
        `
    }
};


// --- MERGE ALL DATA OBJECTS ---
const fullGuideData = { ...networkData, ...identityData, ...platformData, ...finalData };

// --- RENDER LOGIC ---
function renderGuide() {
    const navContainer = document.getElementById('navButtons');
    const contentArea = document.getElementById('contentArea');
    
    // Clear existing content to prevent duplication
    contentArea.innerHTML = '';
    navContainer.innerHTML = '';
    
    const sections = Object.values(fullGuideData);

    // 1. Build Navigation Buttons
    sections.forEach((section, index) => {
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = section.title;
        btn.onclick = () => switchSection(section.id, btn);
        navContainer.appendChild(btn);
    });

    // 2. Build Content Sections with buttons embedded
    sections.forEach((section, index) => {
        // Create button
        const btn = document.createElement('button');
        btn.className = 'nav-btn';
        btn.textContent = section.title;
        btn.onclick = () => switchSection(section.id, btn);

        // Create section card
        const card = document.createElement('div');
        card.className = 'section-card';
        card.id = `section-${section.id}`;
        card.innerHTML = section.html;

        // Create a wrapper for button + content
        const wrapper = document.createElement('div');
        wrapper.style.marginBottom = '0.5rem';
        wrapper.appendChild(btn);
        wrapper.appendChild(card);

        contentArea.appendChild(wrapper);
    });
}

// Scroll to top on page load
setTimeout(() => {
    window.scrollTo(0, 0);
}, 100);

// Switches between sections and updates navigation
function switchSection(id, btnElement) {
    const section = document.getElementById(`section-${id}`);
    const isCurrentlyOpen = section.classList.contains('active');
    
    // If clicking the same button, toggle it closed
    if (isCurrentlyOpen) {
        section.classList.remove('active');
        return;
    }
    
    // Update Buttons
    document.querySelectorAll('.nav-btn').forEach(b => b.classList.remove('active'));
    btnElement.classList.add('active');

    // Update Content
    document.querySelectorAll('.section-card').forEach(c => c.classList.remove('active'));
    section.classList.add('active');

    // Scroll the button to the top with a small offset
    const offsetTop = btnElement.offsetTop - 70;
    window.scrollTo({ top: offsetTop, behavior: 'smooth' });
}

// Toggles the "Read More" technical details
function toggleTech(btn) {
    const content = btn.nextElementSibling;
    
    if (!content) {
        console.error('No content found after button');
        return;
    }
    
    // Toggle the open class
    content.classList.toggle('open');
    
    // Close all other open sections
    document.querySelectorAll('.tech-content').forEach(c => {
        if (c !== content && c.classList.contains('open')) {
            c.classList.remove('open');
        }
    });
}

// Switch to Cloud Storage section
function switchToCloud() {
    // Find the cloud button by looking through all nav buttons
    const allBtns = document.querySelectorAll('.nav-btn');
    let cloudBtn = null;
    
    allBtns.forEach(btn => {
        if (btn.textContent.trim() === 'Cloud Storage') {
            cloudBtn = btn;
        }
    });
    
    if (cloudBtn) {
        switchSection('cloud', cloudBtn);
 
   } else {
        console.error('Cloud Storage button not found. Available buttons:', Array.from(allBtns).map(b => b.textContent));
    }
}

// Open calendar reminder
function openCalendarReminder() {
    const reminderDate = new Date();
    reminderDate.setMonth(reminderDate.getMonth() + 3);
    
    const year = reminderDate.getFullYear();
    const month = String(reminderDate.getMonth() + 1).padStart(2, '0');
    const day = String(reminderDate.getDate()).padStart(2, '0');
    
    const title = "Privacy Maintenance Reminder";
    const description = "Delete unused apps, review app settings and permissions, send opt out emails, unsubscribe from pointless emails, change passwords, check Have I Been Pwned";
    
    const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(title)}&dates=${year}${month}${day}/${year}${month}${day}&details=${encodeURIComponent(description)}`;
    
    window.open(googleCalendarUrl, '_blank');
}

// Track completion state
const completionState = {};

function toggleSectionComplete(btn, sectionId) {
    const section = document.getElementById(`section-${sectionId}`);
    const checkboxes = section.querySelectorAll('input[type="checkbox"]');
    
    // Check if all checkboxes are already ticked
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    if (!allChecked) {
        // Tick all checkboxes
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        // Trigger change event to update progress bar
        checkboxes.forEach(cb => {
            cb.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
    
    // Toggle the done button
    btn.classList.toggle('completed');
    btn.textContent = btn.classList.contains('completed') ? 'Completed' : 'Done';
    
    // Update nav button color
    const navButtons = document.querySelectorAll('.nav-btn');
    let navBtn = Array.from(navButtons).find(nb => {
        const sectionCard = document.getElementById(`section-${sectionId}`);
        return sectionCard && sectionCard.parentElement.querySelector('.nav-btn') === nb;
    });
    
    if (navBtn) {
        if (btn.classList.contains('completed')) {
            navBtn.classList.add('completed');
        } else {
            navBtn.classList.remove('completed');
        }
    }
    
    updateProgressBar();
}

// Update progress bar
function updateProgressBar() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    const doneButtons = document.querySelectorAll('.done-btn');
    
    let checkedCount = 0;
    let completedSections = 0;
    
    checkboxes.forEach(cb => {
        if (cb.checked) checkedCount++;
    });
    
    doneButtons.forEach(btn => {
        if (btn.classList.contains('completed')) completedSections++;
    });
    
    // Calculate overall progress
    const totalItems = checkboxes.length + doneButtons.length;
    const completedItems = checkedCount + completedSections;
    const progressPercent = totalItems > 0 ? (completedItems / totalItems) * 100 : 0;
    
    // Update progress bar
    const progressFill = document.querySelector('.progress-fill');
    if (progressFill) {
        progressFill.style.width = progressPercent + '%';
    }
}

function completeQuickWins(btn, sectionId) {
    const quickWinsSection = document.getElementById(`section-${sectionId}`);
    const checkboxes = quickWinsSection.querySelectorAll('input[type="checkbox"]');
    
    // Check if all checkboxes are already ticked
    const allChecked = Array.from(checkboxes).every(cb => cb.checked);
    
    if (!allChecked) {
        // Tick all checkboxes
        checkboxes.forEach(cb => {
            cb.checked = true;
        });
        // Trigger change event to update progress bar
        checkboxes.forEach(cb => {
            cb.dispatchEvent(new Event('change', { bubbles: true }));
        });
    }
    
    // Toggle the done button
    btn.classList.toggle('completed');
    btn.textContent = btn.classList.contains('completed') ? 'Completed' : 'Done';
    
    // Update nav button color
    const navButtons = document.querySelectorAll('.nav-btn');
    let navBtn = Array.from(navButtons).find(nb => {
        const sectionCard = document.getElementById(`section-${sectionId}`);
        return sectionCard && sectionCard.parentElement.querySelector('.nav-btn') === nb;
    });
    
    if (navBtn) {
        if (btn.classList.contains('completed')) {
            navBtn.classList.add('completed');
        } else {
            navBtn.classList.remove('completed');
        }
    }
    
    updateProgressBar();
}

function toggleIntroSection(header) {
    const content = header.nextElementSibling;
    const arrow = header.querySelector('.intro-arrow');
    
    content.classList.toggle('closed');
    arrow.classList.toggle('closed');
}

// Monitor checkbox changes in Quick Wins section
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        const quickWinsSection = document.getElementById('section-quickwins');
        if (quickWinsSection && quickWinsSection.contains(e.target)) {
            const doneBtn = quickWinsSection.querySelector('.done-btn');
            const checkboxes = quickWinsSection.querySelectorAll('input[type="checkbox"]');
            const allChecked = Array.from(checkboxes).every(cb => cb.checked);
            
            // If not all checked and button is completed, revert it
            if (!allChecked && doneBtn.classList.contains('completed')) {
                doneBtn.classList.remove('completed');
                doneBtn.textContent = 'Done';
                
                // Revert nav button color
                const navButtons = document.querySelectorAll('.nav-btn');
                const navBtn = Array.from(navButtons).find(nb => {
                    return quickWinsSection.parentElement.querySelector('.nav-btn') === nb;
                });
                
                if (navBtn) {
                    navBtn.classList.remove('completed');
                }
            }
            
            updateProgressBar();
        }
    }
});

// Listen for checkbox changes
document.addEventListener('change', (e) => {
    if (e.target.type === 'checkbox') {
        updateProgressBar();
    }
});

// Initial progress calculation
document.addEventListener('DOMContentLoaded', () => {
    renderGuide();
    updateProgressBar();
});

// Initialize the guide when the page loads
/*document.addEventListener('DOMContentLoaded', renderGuide);*/

    function createCalendarReminder() {
    const today = new Date();
    const reminders = [];
    
// Create 4 reminders (today + next 3 quarters)
    for (let i = 0; i < 4; i++) {
        const reminderDate = new Date(today);
        reminderDate.setMonth(reminderDate.getMonth() + (i * 3));
        reminders.push(reminderDate);
    }
    
    const description = "Privacy Maintenance Checklist:\n- Delete unused apps\n- Review app settings and permissions\n- Send opt out emails\n- Unsubscribe from pointless emails\n- Change passwords\n- Check Have I Been Pwned (haveibeenpwned.com)";
    
    reminders.forEach((date, index) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const title = `Privacy Maintenance (${index + 1}/4)`;
        
        // Google Calendar link
        const googleCalendarUrl = `https://calendar.google.com/calendar/u/0/r/eventedit?text=${encodeURIComponent(title)}&dates=${year}${month}${day}/${year}${month}${day}&details=${encodeURIComponent(description)}`;
        
        // Open in new tab
        if (index === 0) {
            window.open(googleCalendarUrl, '_blank');
        }
    });
    
    alert('Calendar reminders opened! Create each one in your calendar app.');
}

  document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('privacy-popup');
    const closeBtn = document.getElementById('popup-close');
    const acceptBtn = document.getElementById('popup-accept');
    const popupId = 'privacy-popup-accepted';

    // Safety check: Ensure elements exist
    if (!popup || !closeBtn || !acceptBtn) {
        console.error('Popup elements not found. Check HTML structure.');
        return;
    }

    // Show popup if user hasn't accepted yet
    if (!localStorage.getItem(popupId)) {
        setTimeout(() => {
            popup.classList.add('active');
        }, 500);
    }

    // Close actions
    const closePopup = () => {
        popup.classList.remove('active');
        localStorage.setItem(popupId, 'true');
    };

    closeBtn.addEventListener('click', closePopup);
    acceptBtn.addEventListener('click', closePopup);

    // Close on outside click
    popup.addEventListener('click', (e) => {
        if (e.target === popup) {
            closePopup();
        }
    });
  });
