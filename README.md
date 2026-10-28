# 📻 Radio Directory - Global Stream Database for yoRadio

An interactive web application to browse, filter, add radio stream links, and export customized playlist files tailored specifically for yoRadio devices and DIY audio projects.

🌐 **Web Directory & Playlist Generator:** [https://daradicilevente.github.io/radio-directory/index.html](https://daradicilevente.github.io/radio-directory/index.html)

---

## ✨ Key Features

- **🔍 Advanced Filtering & Search:**
  - **Text Search:** Instantly find stations by name, ID, or country.
  - **Geographic Location:** Hierarchical filtering by **Continent** and **Country**.
  - **Audio Formats:** Quick selection by codec/protocol (`MP3`, `AAC / AAC+`, `HLS / M3U8`, `OGG / Opus`, `FLAC`).
  - **Music Genres:** Multi-select checkboxes (Pop, Rock, Dance, News, Retro, Electronic, Jazz, Classical, Folk, Sport, and more).
  - **Status Filter:** Option to display active, verified stations only.
- **▶ Stream Testing & Quick Copy:**
  - Direct **Play (▶)** button to launch and test any station stream in a new browser tab.
  - One-click copying of stream links directly to your clipboard.
- **💾 Tailored Playlist Export:**
  - Export your exact **filtered and sorted selection** into a `playlist.csv` file ready for hardware players.
- **🌐 Multilingual Interface:** Easily switch languages (English, Romanian, etc.) for smooth navigation.

---

## ⚡ 100% yoRadio Compatibility

This project is built from the ground up to integrate seamlessly with the **[yoRadio](https://github.com/eav1980/yoRadio)** ecosystem (the popular ESP32 / ESP32-S3 internet radio project).

When you click the **📥 Download playlist.csv** button, the app generates a CSV containing **only your current filtered selection** formatted precisely for yoRadio (`Station_Name\tStream_URL\t0`). Simply upload the exported file to your radio's SD card or load it directly through the yoRadio web control panel!

---

## 🌍 Let's Build the Largest Radio Database Together!

Music brings the DIY maker community together! Our goal is to maintain a comprehensive, reliable, and clean catalog of radio streams suitable for microcontroller-powered receivers worldwide.

Found a functional radio stream that is missing from the directory? **We welcome your contributions!**

### 🛠️ How to Add a New Station:

1. Open the web interface and click **[➕ Add Radio Station](https://daradicilevente.github.io/radio-directory/add.html)**.
2. Fill in the station details (Name, Stream URL, Country, Continent, Genres, Format).
3. Submit your changes via a GitHub **Pull Request (PR)**.

> ⏳ **Verification & Approval Notice:**  
> To ensure high playlist reliability and avoid duplicate or broken streams, every submitted Pull Request is manually reviewed. Once the stream link is verified by `@DaradiciLevente`, it will be merged into `channels.json` and immediately available in the public directory!

---

## 💻 Tech Stack

- **Frontend:** Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Database:** Light & flexible JSON (`channels.json`)
- **Localization:** i18n JSON translation files in `/locales`
- **Hosting:** GitHub Pages

---

<p align="center">
  <i>Developed with passion for makers and online radio lovers.</i><br>
  <b>Maintained by <a href="https://github.com/DaradiciLevente">@DaradiciLevente</a></b>
</p>
