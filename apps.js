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
    statusTone: "stable",
    platform: "Windows desktop",
    version: "1.0.1",
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
    imageAlt: "Wallpaper Pilot application window",
    downloadLabel: "Download Wallpaper Pilot",
    downloadUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/v1.0.1/Wallpaper-Pilot.exe",
    downloadNotice: {
      title: "Why Windows may show a warning",
      text: "Wallpaper Pilot is a new, independently published app and is not yet digitally signed. Windows may show an unknown publisher or reputation warning. This means the app is not yet widely recognized; it is not a notification that malware was detected. Download only from this official page.",
      detailsLabel: "View release details and SHA-256 fingerprint",
      detailsUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/tag/v1.0.1"
    },
    learnMoreUrl: "#"
  },
  {
    name: "Display / Audio Switcher",
    status: "Testing — not final",
    statusTone: "testing",
    platform: "Windows desktop",
    version: "0.9.0 testing build",
    tagline: "Switch saved display and sound setups from one window or the system tray.",
    description: "Display / Audio Switcher detects Windows displays and playback devices, then lets you save practical profiles for combinations such as PC, TV, or dual-screen use.",
    features: [
      "Detects attached displays and playback outputs",
      "Named PC, TV and dual-screen profiles",
      "PC-only, second-screen, duplicate and extend modes",
      "Switch from the settings window or system tray",
      "Optional start with Windows",
      "Automatic Voicemeeter launch when selected",
      "No Windows switch-result notifications",
      "Portable ZIP with the required runtime included"
    ],
    image: "assets/display-audio-switcher-icon.png",
    imageAlt: "Display and Audio Switcher monitor, switch, and speaker icon",
    downloadLabel: "Download testing build",
    downloadUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/download/display-audio-switcher-v0.9.0-testing/DisplayAudioSwitcher-Windows.zip",
    downloadNotice: {
      tone: "testing",
      title: "Testing build — separate-computer validation is still pending",
      text: "This is not the completed release. It passed 18 automated checks and the main-computer switching test, but the full website download and physical-device test on a second Windows computer has not yet been completed. Extract the entire ZIP and keep its folder together. The app is unsigned, so Windows may also show an unknown-publisher or reputation warning.",
      detailsLabel: "Read testing notes and verify the ZIP checksum",
      detailsUrl: "https://github.com/echoofhumanity50/Pilot-Light-Apps/releases/tag/display-audio-switcher-v0.9.0-testing"
    },
    learnMoreUrl: "#"
  }
];
