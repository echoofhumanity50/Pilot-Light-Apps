# Analytics baselines

Recorded before the Cloudflare Web Analytics beacon was published on the website
and before the Display / Audio Switcher testing build was linked publicly.

- Cloudflare site created: 2026-08-21
- Dashboard reading at setup: **0 visits / 0 page views**
- Site tag: `aff3e8f6812e48f08ca1f6ff199ee934`
- The first visits after publication include Pilot Light Apps release-verification
  traffic and must not be described as outside visitors.

## Wallpaper Pilot

- Recorded: 2026-08-21 10:06:13 Central time
- GitHub release: `v1.0.1`
- Release asset: `Wallpaper-Pilot.exe`
- GitHub download count: **5**

## Display / Audio Switcher testing build

- Recorded: 2026-08-21 before publication
- GitHub tag: `display-audio-switcher-v0.9.0-testing`
- Release asset: `DisplayAudioSwitcher-Windows.zip`
- GitHub download count before publication: **0**
- ZIP SHA-256: `76398A6595CAF830546D54640DEDBA001DB24C9A0C8E5F01D518A6D1A5A58557`

## Release-verification traffic

- Recorded: 2026-08-21 12:03 Central time
- The testing release was published as a GitHub prerelease, not Latest.
- GitHub reported the ZIP as 32,388,211 bytes with the same SHA-256 digest.
- Pilot Light Apps downloaded the public ZIP once for release verification.
- The downloaded file was 32,388,211 bytes, matched the recorded SHA-256, and
  opened as a valid ZIP with 1,370 entries.
- GitHub's asset API still reported a count of **0** immediately afterward; the
  count may update later or may not count that verification client.
- The live home and Privacy pages both contained the manual Cloudflare beacon.
- Cloudflare still showed **0 visits / 0 page views** immediately after
  publication. Analytics ingestion can lag, so later dashboard activity should
  be compared with the zero-at-setup baseline rather than backdated.

## How to interpret the count

GitHub's release-asset count is an approximate number of downloads, not a count
of unique people or successful installations. It may include our own tests,
repeat downloads, automated requests, or incomplete downloads. Downloads made
before this baseline cannot be separated by source.

For future Wallpaper Pilot reporting, subtract 5 from the current v1.0.1 asset
count to estimate downloads recorded after this baseline. The testing-build
baseline starts at zero; our own public verification download must be identified
separately from outside downloads.

Cloudflare Web Analytics and GitHub download counts measure different actions and
should not be treated as an exact conversion funnel. Version-specific website
links keep each app's GitHub asset count separate as the catalog expands.

## Stable switcher launch and catalog-page baseline

- Recorded: 2026-08-22 before the redesigned website was published.
- Cloudflare Web Analytics showed **0 visits / 0 page views** for the last 24
  hours. The site had been created about 20 hours earlier.
- Wallpaper Pilot `v1.0.1` asset count: **6** downloads.
- Display / Audio Switcher testing ZIP asset count: **3** downloads.
- New stable tag: `display-audio-switcher-v1.0.0`.
- Stable ZIP asset count immediately after publication and before verification:
  **0** downloads.
- Stable ZIP size: **32,874,724 bytes**.
- Stable ZIP SHA-256:
  `CA502F8EDD8263E0F447DC2E1FB1947554B23D3EA1FA7AEFBCD800F2E6D47766`.
- Pilot Light Apps then downloaded the stable public ZIP once for release
  verification. It matched the recorded size and SHA-256, opened successfully,
  contained 1,385 entries under one `DisplayAudioSwitcher` folder, and included
  the executable and download README.
- GitHub later reported the stable ZIP count as **1**, matching the identified
  Pilot Light Apps verification download. Outside downloads therefore begin
  above this count, subject to GitHub's normal counting limitations.
- The redesigned site gives each app a dedicated URL. Compare page views for
  `/wallpaper-pilot.html` and `/display-audio-switcher.html` with the separate
  GitHub asset counts; do not describe the difference as a precise conversion
  rate or unique-user count.

## August 24 search and distribution checkpoint

- Google Search Console showed **4 impressions, 1 click, 25% CTR, and an
  average position of 6.3**. Two impressions and the click were attributed to
  `https://pilotlightapps.com/`; two impressions were attributed to the old
  `http://www.pilotlightapps.com/` form, which redirects to the canonical site.
- The submitted sitemap was successful, was last read August 23, and reported
  **10 discovered pages**.
- Cloudflare Web Analytics still showed **0 visits / 0 page views** for the
  prior seven days. The live homepage contained the expected beacon and token
  with no browser-console error, so the disagreement with the Search Console
  click is recorded rather than resolved by assumption. Possible explanations
  include blocked analytics, low-volume reporting behavior, or ingestion delay.
- Wallpaper Pilot `v1.0.1` remained at **6** recorded asset downloads: one above
  the August 21 baseline, with source and uniqueness unknown.
- Display / Audio Switcher `v1.0.0` remained at **1** recorded ZIP download,
  matching the identified Pilot Light Apps verification download. No outside
  Switcher download is confirmed yet.
- Public discovery expanded on August 24 with a Pilot Light Apps profile post,
  a Developer-tagged r/windowsapps post for Display / Audio Switcher, and public
  itch.io pages for both apps:
  - `https://www.reddit.com/user/Visible-Current-3909/comments/1vx9c1r/display_audio_switcher_100_a_free_windows/`
  - `https://www.reddit.com/r/windowsapps/comments/1vx9ciu/display_audio_switcher_100_switch_a_windows/`
  - `https://echoofhumanity50.itch.io/wallpaper-pilot`
  - `https://echoofhumanity50.itch.io/display-audio-switcher`
- These publications happened after the download counts above were recorded.
  Check later activity against the existing **6** Wallpaper Pilot and **1**
  Switcher baselines rather than attributing earlier counts to these channels.
- Support-email routing was intentionally deferred while app and project inboxes
  are consolidated separately. No Gmail, Cloudflare Email Routing, or DNS change
  is part of this distribution checkpoint.
