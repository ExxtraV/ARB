# ARB: Lever Action EPUB Reader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**ARB** is a dedicated EPUB reader for reading **"Lever Action"** on the web and mobile devices. It provides a seamless reading experience with features such as offline support via a Progressive Web App (PWA), themes, bookmarking, and progress tracking. Users can also install the app on their phones for a native app-like experience.

You can try the live reader at: [https://read.reapersbounty.com](https://read.reapersbounty.com)

### Feel free to [Download LeverAction.epub](https://github.com/ExxtraV/ARB/raw/main/LeverAction.epub) here!

## Features

- **Responsive EPUB Reading:**  
  Enjoy a full-featured reading experience on both desktop and mobile devices.

- **Progressive Web App (PWA):**  
  Install the app on your phone for an app-like experience, complete with offline support via service worker caching.

- **EPUB Navigation:**  
  - Smooth page navigation via arrow keys and mobile overlay buttons.
  - Toggle between one-page (centered) mode and a two-page spread on desktop.

- **Bookmarking & Progress Tracking:**  
  - Easily add bookmarks at your current location.
  - Manage bookmarks with a built-in bookmark manager.
  - Your progress is automatically saved, so you can pick up where you left off.

- **Customization Options:**  
  - Toggle between dark and light themes.
  - Adjust text size to suit your preferences.
  - Fullscreen mode for distraction-free reading.

## Demo

Try the Lever Action EPUB Reader live at:  
[https://read.reapersbounty.com](https://read.reapersbounty.com)

**PWA Installation:**
When you visit the site in a supported browser (such as Chrome or Edge) on your mobile device, you can install the app or add app to home screen.

Project Structure

```
ARB/
├── icons/                  # Contains custom icons (e.g., 192x192, 512x512)
├── index.html              # Main HTML file
├── manifest.json           # Web App Manifest for PWA installation
├── service-worker.js       # Service Worker for offline caching
└── README.md               # This file
```

Customization
	•	Icons:
To use your own custom icons, replace the files in the icons/ folder and update the paths in manifest.json.
	•	EPUB File:
The reader is set up by default for the “Lever Action” EPUB file. To change the EPUB file, update the reference in the JavaScript code.
	•	Service Worker & Caching:
Customize the service worker (service-worker.js) to adjust your caching strategy as needed.

Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests with improvements, bug fixes, or new features.

License

This project is licensed under the MIT License.

Contact

For questions, suggestions, or further assistance, please open an issue on this repository or contact ExxtraV.

<hr>

### AI-Generated Code Disclaimer

This project was largely developed using ChatGPT, an AI language model. Most of the code was generated and troubleshooted by ChatGPT with minimal manual modifications. While I have reviewed the general functionality, I do not fully understand all aspects of the code.

If you notice any issues or have suggestions for improvement, feel free to open an issue or submit a pull request. Your contributions and explanations are greatly appreciated!
