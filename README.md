# ARB: Lever Action EPUB Reader

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

**ARB** is a dedicated EPUB reader for reading **"Lever Action"** on the web and mobile devices. It provides a seamless reading experience with features such as offline support via a Progressive Web App (PWA), customizable themes, bookmarking, and progress tracking. Users can also install the app on their phones for a native app-like experience.

You can try the live reader at: [https://read.reapersbounty.com](https://read.reapersbounty.com)

## Features

- **Responsive EPUB Reading:**  
  Enjoy a full-featured reading experience on both desktop and mobile devices.

- **Progressive Web App (PWA):**  
  Install the app on your phone for an app-like experience, complete with offline support via service worker caching.

- **EPUB Navigation:**  
  - Smooth page navigation via arrow keys, touch controls, and mobile overlay buttons.
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

## Installation

To run this project locally:

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/ExxtraV/ARB.git
   cd ARB
   ```

2.	**Open the Project:**
Open the index.html file in your browser. Alternatively, serve the files using a local HTTP server (e.g., using http-server):
```bash
npx http-server .
```

3.	**PWA Installation:**
When you visit the site in a supported browser (such as Chrome or Edge), you’ll be prompted to install the app on your mobile device, providing an app-like experience.

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
