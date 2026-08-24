# Pilot Light Apps website

A free static website designed for GitHub Pages. App cards are data-driven so the site can expand without changing the page structure.

## Current public configuration

- Website: `https://pilotlightapps.com/`
- Contact: `support@pilotlightapps.com`
- Wallpaper Pilot 1.0.1: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/v1.0.1/Wallpaper-Pilot.exe`
- Wallpaper Pilot on itch.io: `https://echoofhumanity50.itch.io/wallpaper-pilot`
- Display / Audio Switcher 1.0.0: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/display-audio-switcher-v1.0.0/DisplayAudioSwitcher-Windows.zip`
- Display / Audio Switcher on itch.io: `https://echoofhumanity50.itch.io/display-audio-switcher`
- Donate: `https://buymeacoffee.com/capto50z`
- Wallpaper Pilot status: `Available`
- Display / Audio Switcher status: `Available`
- Screenshot: `assets/wallpaper-pilot-screenshot.png`
- Switcher screenshot: `assets/display-audio-switcher-screenshot.png`
- Dedicated pages: `wallpaper-pilot.html` and `display-audio-switcher.html`

The website uses version-specific GitHub release URLs. This prevents a release
for one app from silently changing another app's Download button. When an app is
updated, publish its new release first, verify the uploaded asset, and then change
only that app's URL in `apps.js`.

GitHub remains the canonical direct-download and checksum source. Each app's
itch.io page is a separate discovery and download option. Keep both links in the
same app object so the homepage and dedicated page stay synchronized.

## Add another app later

Open `apps.js`. Copy an existing app object, give it a unique slug and page URL,
and change its information. Copy one of the small dedicated HTML page shells and
set its `data-app-slug` to the same slug. The home directory and full app page
both render from the shared data, so future additions do not turn the homepage
into one long product page.

Follow `RELEASE_MANAGEMENT.md` for tag names, testing labels, checksums, public
verification, analytics baselines, and the final status change from testing to
available.

## GitHub Pages configuration

The repository publishes from the `main` branch and `/ (root)` folder.
The custom domain is `pilotlightapps.com`; keep the `CNAME` file in the repository root.

## Privacy-focused website analytics

The public site uses Cloudflare Web Analytics to understand aggregate traffic,
referrers, general device/browser information, and site performance. The website
privacy disclosure is in `privacy.html`. Wallpaper Pilot itself does not send
usage analytics to Pilot Light Apps.

The website's Cloudflare DNS records are DNS-only so GitHub Pages remains the
direct host. Keep the manual Cloudflare beacon on every public HTML page. If the
website is intentionally moved behind Cloudflare's proxy and automatic analytics
is enabled later, remove the manual beacon first so visits are not counted twice.

GitHub release-asset download counts are used as an approximate download measure.
See `ANALYTICS_BASELINE.md` for the starting count and its limitations.

## Preview on your computer

Double-click `index.html`. The site can also be previewed with a local web server, but one is not required for basic review.
