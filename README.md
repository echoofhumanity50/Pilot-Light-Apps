# Pilot Light Apps website

A free static website designed for GitHub Pages. App cards are data-driven so the site can expand without changing the page structure.

## Current public configuration

- Website: `https://pilotlightapps.com/`
- Contact: `support@pilotlightapps.com`
- Wallpaper Pilot 1.0.1: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/v1.0.1/Wallpaper-Pilot.exe`
- Display / Audio Switcher 0.9.0 testing build: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/display-audio-switcher-v0.9.0-testing/DisplayAudioSwitcher-Windows.zip`
- Donate: `https://buymeacoffee.com/capto50z`
- Wallpaper Pilot status: `Available`
- Display / Audio Switcher status: `Testing — not final`
- Screenshot: `assets/wallpaper-pilot-screenshot.png`
- Switcher artwork: `assets/display-audio-switcher-icon.png`

The website uses version-specific GitHub release URLs. This prevents a release
for one app from silently changing another app's Download button. When an app is
updated, publish its new release first, verify the uploaded asset, and then change
only that app's URL in `apps.js`.

## Add another app later

Open `apps.js`. Copy the Wallpaper Pilot object, paste it after the existing object with a comma between them, and change its information. The site automatically creates another app card.

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
