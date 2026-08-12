# Pilot Light Apps website

A free static website designed for GitHub Pages. It starts with Wallpaper Pilot and can expand to include any number of future apps.

## Current public configuration

- Website: `https://pilotlightapps.com/`
- Contact: `support@pilotlightapps.com`
- Download: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/latest/download/Wallpaper-Pilot.exe`
- Donate: `https://buymeacoffee.com/capto50z`
- Wallpaper Pilot status: `Available`
- Screenshot: `assets/wallpaper-pilot-screenshot.png`

The download address uses GitHub's `releases/latest/download` format. Keep the
release asset named `Wallpaper-Pilot.exe` so the website automatically points
to the newest non-prerelease version.

## Add another app later

Open `apps.js`. Copy the Wallpaper Pilot object, paste it after the existing object with a comma between them, and change its information. The site automatically creates another app card.

## GitHub Pages configuration

The repository publishes from the `main` branch and `/ (root)` folder.
The custom domain is `pilotlightapps.com`; keep the `CNAME` file in the repository root.

## Preview on your computer

Double-click `index.html`. The site can also be previewed with a local web server, but one is not required for basic review.
