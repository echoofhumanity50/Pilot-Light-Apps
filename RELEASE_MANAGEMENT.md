# Pilot Light Apps release management

This repository hosts the public website and the downloadable assets for every
Pilot Light Apps product. App development stays in each app's own project; this
repository receives only verified release candidates and finished releases.

## Release layout

- Use one GitHub Release per app version.
- Use app-specific tags so releases remain understandable as the catalog grows.
- Existing Wallpaper Pilot tags `v1.0.0` and `v1.0.1` remain unchanged.
- Future stable tag example: `wallpaper-pilot-v1.1.0`.
- Display / Audio Switcher stable tag: `display-audio-switcher-v1.0.0`.
- Testing tag example: `display-audio-switcher-v0.9.0-testing`.
- Mark testing builds as GitHub prereleases and label them **Testing — not final**
  everywhere on the website.
- Use a version-specific asset URL in `apps.js`; do not use a repository-wide
  `releases/latest/download/...` link on a multi-app website.
- Keep each app's dedicated page URL stable for marketing and analytics. New apps
  receive a compact home-directory card and their own HTML page.

## Required release assets

Each public release should include:

1. The complete runnable EXE, installer, or portable ZIP.
2. A separate SHA-256 text file for the uploaded asset.
3. Release notes with the version, supported platform, installation steps,
   known limitations, signing status, and the same SHA-256 value.

Keep asset names stable within an app line. Use a new tag and version-specific
URL when the bytes change so an old checksum never describes a newer file.

## Testing-to-stable process

1. Verify the candidate locally without performing unintended device changes.
2. Publish it as a GitHub prerelease.
3. Add the website card with a prominent testing warning.
4. Download the asset through the public website on a separate Windows computer.
5. Extract or install it exactly as a new user would.
6. Test first launch, required device behavior, tray behavior, public links,
   startup behavior, exit, and any uninstall or cleanup path.
7. Record failures and rebuild under a new testing version when the bytes change.
8. After the separate-computer test passes, publish the stable version and change
   the website status to **Available**.

## Website publishing checklist

- Preserve a known-good H: backup before editing.
- Start from the current GitHub `main` branch.
- Verify there are no unexpected local or remote changes.
- Test the site locally at desktop and mobile widths.
- Check every app card, image, Download button, release-details link, Donate link,
  Contact link, and Privacy link.
- Push one reviewed commit to `main` and wait for GitHub Pages to finish.
- Verify `https://pilotlightapps.com/` rather than assuming a successful push is
  the same as a successful public deployment.
- Synchronize the verified public source back to `H:\Tools\pilot-light-apps`.

## Analytics

- Cloudflare Web Analytics measures aggregate website traffic and referrers.
- Because the GitHub Pages records are DNS-only, the Cloudflare beacon must be
  present on every public HTML page unless the site is deliberately proxied later.
- GitHub records a separate download count for each release asset.
- A GitHub download count is not a unique-person or successful-install count.
- Website visitors, Download-button selections, GitHub asset downloads, and
  completed installations must be reported as different measurements.
- Record each app's asset baseline in `ANALYTICS_BASELINE.md` before marketing.
