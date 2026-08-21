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
