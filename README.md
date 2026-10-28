# 📻 Radio Directory - Global Stream Database for yoRadio

A modern, fast, and open-source web directory built to collect, filter, and manage online radio streams from around the globe. This platform is tailored specifically for DIY audio enthusiasts and ESP32-based internet radios.

🌐 **Live Demo:** [https://daradicilevente.github.io/radio-directory/index.html](https://daradicilevente.github.io/radio-directory/index.html)

---

## ✨ Key Features

- **🔍 Advanced Filtering & Search:**
  - **Text Search:** Instantly find stations by name, ID, or country.
  - **Geographic Location:** Hierarchical filtering by **Continent** and **Country**.
  - **Audio Formats:** Quick selection by codec/protocol (`MP3`, `AAC / AAC+`, `HLS / M3U8`, `OGG / Opus`, `FLAC`).
  - **Music Genres:** Multi-select checkboxes (Pop, Rock, Dance, News, Retro, Electronic, Jazz, Classical, Folk, Sport, and more).
  - **Status Filter:** Option to display active, verified stations only.
- **▶ Quick Play & Copy:**
  - Dedicated **Play (▶)** button to open and test the stream directly in a new browser tab.
  - One-click stream URL copying to clipboard.
- **💾 100% yoRadio Compatible Playlist Export:**
  - Generates and downloads a custom `playlist.csv` file ready for your hardware player.
- **🌐 Multilingual Support:** Adaptable interface supporting multiple languages (English, Romanian, etc.).

---

## ⚡ 100% yoRadio Compatibility

This project is built from the ground up to integrate seamlessly with the **[yoRadio](https://github.com/eav1980/yoRadio)** ecosystem (the popular ESP32 / ESP32-S3 internet radio project).

When you click the **📥 Download playlist.csv** button, the app exports your **currently filtered and sorted list** in the exact tab-separated format required by yoRadio (`Station_Name\tStream_URL\t0`). Just save the file onto your radio's SD card or upload it via the yoRadio web interface!

---

## 🌍 Let's Build the Largest Radio Database Together!

Music brings DIY communities together! Our mission is to build a rich, reliable, and clean directory of radio streams ideal for microcontroller-based radios worldwide.

Found a working radio stream that isn't in our database yet? **We would love your contribution!**

### 🛠️ How to Add a New Station:

1. Open the web interface and click **[➕ Add Radio Station](https://daradicilevente.github.io/radio-directory/add.html)**.
2. Fill in the station details (Name, Stream URL, Country, Continent, Genres, Format).
3. Submit your changes via a GitHub **Pull Request (PR)**.

> ⏳ **Validation Notice:**  
> To maintain database quality and prevent broken links or duplicates, every submitted Pull Request undergoes a quick review. Once the stream playback is verified by `@DaradiciLevente`, it will be merged into `channels.json` and become live for everyone!

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
