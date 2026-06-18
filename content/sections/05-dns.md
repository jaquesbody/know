---
title: "Domain Name Service (DNS)"
group: "core-privacy"
order: 5
type: "core-privacy"
providers:
  - name: "NextDNS"
    url: "https://nextdns.io"
  - name: "Quad9 DNS"
    url: "https://quad9.net"
  - name: "Cloudflare DNS"
    url: "https://www.cloudflare.com/en-gb/application-services/products/dns/"
benefits:
  - "Significantly faster browsing as ad-tracking requests are blocked before they load."
  - "Your ISP can no longer see the specific websites you visit."
  - "Bypasses ISP-level censorship."
further_reading:
  - label: "Untraceable Digital Dissident: NextDNS Guide"
    url: "https://untraceabledigitaldissident.com/set-up-nextdns-dns-privacy-guide/"
  - label: "Proton: DNS Privacy Explained"
    url: "https://proton.me/business/blog/dns-security-for-business"
---

**What is it?** DNS translates human-readable web addresses (e.g. www.google.com) into machine-readable IP addresses (e.g. 142.250.190.4). By default, your Internet Service Provider (ISP) handles this, allowing them to see every website you visit.

**What about privacy?** Without a privacy-focused DNS, your ISP and default DNS providers build a complete log of your browsing history. This data can be sold to advertisers, used to throttle your connection speeds, or handed over to authorities without a warrant in some jurisdictions. The default DNS providers are usually Google's 8.8.8.8 or Cloudflare's 1.1.1.1.

We recommend **NextDNS** — a privacy-focused, configurable DNS provider that blocks ads, trackers, and malware at the network level.

- [ ] Visit [NextDNS.io](https://nextdns.io) and create a free account.
- [ ] Set up a profile for each specific device (Mobile, Laptop, Router).
- [ ] On your mobile and laptop download the NextDNS app (Android/iOS/Windows/Mac) and log in.
- [ ] Follow the simple Setup Guide for the specific device and operating system.
- [ ] Set it up on your router for whole-home coverage — log in to your router and enter your NextDNS ID into the DNS settings (usually under WAN/Internet settings).
- [ ] On your preferred browser go to Settings > Network (or similar), enable "Use Secure DNS", select "Custom" and enter your NextDNS URL.
- [ ] Tip: Start with conservative blocklists. If a website breaks, add its domain to the Allowlist in your NextDNS dashboard (e.g. example.com, not the full URL).
- [ ] [IP Leak](https://ipleak.net) — after setting up your private DNS, test to see if it's leaking.