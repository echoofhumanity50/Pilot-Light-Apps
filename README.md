# Pilot Light Apps website

A free static website designed for GitHub Pages. It starts with Wallpaper Pilot and can expand to include any number of future apps.

## What to edit before publishing

### 1. Add your Buy Me a Coffee link
Open `site-config.js` and replace:

```js
https://www.buymeacoffee.com/YOURNAME
```

### 2. Add the Wallpaper Pilot download link
Open `apps.js` and replace:

```text
https://github.com/YOURNAME/WallpaperPilot/releases/latest
```

### 3. Change the app status
In `apps.js`, change:

```js
status: "Coming soon"
```

to:

```js
status: "Available"
```

### 4. Replace the sample app preview
Put your real screenshot in the `assets` folder. Then change this line in `apps.js`:

```js
image: "assets/wallpaper-pilot-preview.svg"
```

For example:

```js
image: "assets/wallpaper-pilot-screenshot.png"
```

## Add another app later

Open `apps.js`. Copy the Wallpaper Pilot object, paste it after the existing object with a comma between them, and change its information. The site automatically creates another app card.

## Publish with GitHub Pages

1. Create a public GitHub repository named `pilot-light-apps`.
2. Upload every file and folder from this package.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**.
6. Choose the `main` branch and `/ (root)` folder.
7. Save. GitHub will display the public website address after deployment.

## Preview on your computer

Double-click `index.html`. The site can also be previewed with a local web server, but one is not required for basic review.
