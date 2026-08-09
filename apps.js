/*
  ADDING A NEW APP
  ----------------
  1. Copy the entire object below, including the opening and closing braces.
  2. Paste the copy after the existing object, separated by a comma.
  3. Change the text, features, image, and links.
  4. Put the new app image inside the assets folder.
*/
window.PILOT_LIGHT_APPS = [
  {
    name: "Wallpaper Pilot",
    status: "Available",
    platform: "Windows desktop",
    tagline: "A smarter way to rotate the wallpaper collection you already own.",
    description: "Wallpaper Pilot gives you control over automatic wallpaper changes while keeping everything local on your computer.",
    features: [
      "Automatic wallpaper rotation",
      "Custom change intervals",
      "Folder and subfolder support",
      "1080p, 2K and 4K preferences",
      "Favorites and disliked images",
      "History, previews and quick apply",
      "Minimize to the system tray",
      "Persistent anti-repeat shuffle",
      "Optional GitHub update notifications",
      "Two-choice uninstall and optional start with Windows"
    ],
    image: "assets/wallpaper-pilot-screenshot.png",
    downloadUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/latest/download/Wallpaper-Pilot.exe",
    downloadNotice: {
      title: "Why Windows may show a warning",
      text: "Wallpaper Pilot is a new, independently published app and is not yet digitally signed. Windows may show an unknown publisher or reputation warning. This means the app is not yet widely recognized; it is not a notification that malware was detected. Download only from this official page.",
      detailsLabel: "View release details and SHA-256 fingerprint",
      detailsUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/latest"
    },
    learnMoreUrl: "#"
  }
];
