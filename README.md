# Pilot Light Apps website

A free static website designed for GitHub Pages. It starts with Wallpaper Pilot and can expand to include any number of future apps.

## Current public configuration

- Website: `https://echoofhumanity50.github.io/Pilot-Light-Apps/`
- Download: `https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/latest/download/Wallpaper-Pilot.exe`
- Support: `https://buymeacoffee.com/capto50z`
- Wallpaper Pilot status: `Available`
- Screenshot: `assets/wallpaper-pilot-screenshot.png`

The download address uses GitHub's `releases/latest/download` format. Keep the
release asset named `Wallpaper-Pilot.exe` so the website automatically points
to the newest non-prerelease version.

## Add another app later

Open `apps.js`. Copy the Wallpaper Pilot object, paste it after the existing object with a comma between them, and change its information. The site automatically creates another app card.

## GitHub Pages configuration

The repository publishes from the `main` branch and `/ (root)` folder.

## Preview on your computer

Double-click `index.html`. The site can also be previewed with a local web server, but one is not required for basic review.
