# 🌸 The Blossom

A calm, intentional, all-in-one personal-growth app — your living map of self across the
**Physical · Mental · Social · Emotional** aspects, powered by the **COSMOS** goal/habit method.

It is one self-contained file (`index.html`) that runs **fully offline** in any modern browser
on **Windows and Android** — no install, no account, no internet. Your data lives on the device.

---

The Blossom is also an **installable PWA** (`manifest.webmanifest` + `sw.js` + `icon.svg`). Installing it
gives a real app icon, its own window, full offline use, and **background alarm notifications** on
supporting phones.

### Two versions
- **`index.html`** — the full **PWA** version (installable, background alarms). Needs the sibling files
  `manifest.webmanifest`, `sw.js`, `icon.svg` next to it, and to be served over HTTPS for install.
- **`blossom-simple.html`** — a **single self-contained file** with the PWA links removed. Just
  double-click it (Windows) or open it in Chrome (Android). No install, no other files, no background.

### Personalizing the installed app's name & icon
The name/icon shown after you **install** come from the static files:
- **Name:** edit `name` / `short_name` in `manifest.webmanifest`.
- **Icon:** replace `icon.svg` with your own image (keep the filename).
Do this **before** installing. (Inside the app, you can also change the display name live in **Settings →
App name** — that updates the header & browser-tab title instantly.)

### Make it yours (Settings)
Custom theme colours (background, boxes, text, accents…), multiple ambient particle effects at once
(flowers, snow, cherry blossom, rain, stars, fireflies, techy, bubbles + your own custom emoji), an
**Edit labels** mode to rename any section heading/emoji, editable petal colours, and an editable quote.

## ▶️ How to run it

### Quick test (no install)
- **Windows:** double-click `index.html` — opens in your browser and works.
- **Android:** copy `index.html` to your phone and open it with Chrome.

> Note: opening the raw `index.html` file (a `file://` URL) works, but the **PWA features
> (install + background alarms) need the app served over HTTPS** — see below.

### Install as a real app (recommended) — host it once over HTTPS
The whole folder (`index.html`, `manifest.webmanifest`, `sw.js`, `icon.svg`) must be served together.
Two easy free options:

**A. Netlify Drop (no account, ~1 min)**
1. Go to **app.netlify.com/drop**.
2. Drag the whole **The Blossom** folder onto the page.
3. You get a URL like `https://your-name.netlify.app`. Open it on your phone.

**B. GitHub Pages**
1. Put the folder in a GitHub repo, enable **Settings → Pages** on the `main` branch.
2. Open the published `https://<you>.github.io/<repo>/` URL on your phone.

Then on the phone, in **Chrome → ⋮ menu → Install app / Add to Home screen**. On Windows, open the URL
in **Edge/Chrome → ⋮ → Apps → Install**.

> Background alarms use the browser's **Notification Triggers** (so an alarm can fire even when the app
> is closed) where supported (current Android Chrome). Where unsupported, alarms still ring while the app
> is open. Allow notifications when prompted.

> Tip: keep your data stable by always opening the app from the **same URL** (the browser ties saved data
> to the origin). Use **Settings → Export/Import save** to move data between devices.

---

## 🔄 Syncing between Windows & Android

Everything is stored locally per-device. To move data across:

1. On the device with the latest data: **⚙️ Settings → ⬇ Export save**. This downloads a
   `blossom-save-YYYY-MM-DD.json` file.
2. Transfer that file to the other device (Drive / cable / email).
3. On the other device: **⚙️ Settings → ⬆ Import save** and pick the file. Confirm to replace.

You can also **Export data as CSV** for a coach, journal, or spreadsheet.

*(Phase 4 will add optional automatic cloud sync — see Roadmap.)*

---

## 🧭 The three screens  (tab order: Calendar · **Home** · Blossom)

| | Screen | What's there |
|---|---|---|
| 📅 | **Calendar** (left) | **Week / Month / Day** views (defaults to Week). Pick a day to see its **interactive agenda** (check off habits, tasks, goals inline) plus a real **timeline** where events show as blocks sized to their start→end duration. Recurring habits/goals appear as coloured dots automatically. Routine Templates. |
| 🏠 | **Home** (centre) | Live date + clock, an **editable quote**, the **Growth** levels strip, a unified **Today** agenda (habits + tasks + goal tasks), Notes, Habits, Goals, **Trackers**, **Journal**, **Daily Records**, and **Alarms & Timers**. |
| 🌸 | **The Blossom** (right) | A lush cosmos-flower that **starts with 4 petals and grows one per Aspect you add** (petals widen/narrow to stay pretty). Each petal levels up from its skills (add your own **skills** too). Any aspect can hold **Maps & Groups** — collections of pages you click into (Physical ships with a **Body** map of muscle groups). A live **tracker graph** of every tracker. |

### Leveling (Do It Now style)
Doing tasks, checking in habits, progressing goals and logging entries earns **XP**. XP raises a
**skill's level**, which raises its **aspect's level**, which makes that petal of the flower bloom
larger. Your "main" categories (aspects) grow from the "sub" categories (skills) beneath them.

### Trackers
Default **Mood / Energy / Focus**, plus add your own (Sleep, Pain, Steps…) each with its own scale
(out of 5, 10, 100…). Every save is a dated **record**, charted over time on the Trackers history
screen and the Blossom mood graph.

### The COSMOS Card
Every habit & goal is built through a 6-step wizard — **C**larify, **O**rient, **S**tack,
**M**otivate, **O**bserve, **S**tudy — with auto streak tracking and an A/B/C/Re-root grade.

### Notes — one comfy document (Notion × Google Docs)
Pages are a single flowing **rich document** you just type into, with a formatting bar: **bold/italic/
underline**, H1/H2, bullet & numbered lists, **checklists**, **🎨 text colour & highlight**, quotes,
**▾ toggles** (collapsible dropdowns), dividers, **images**, inline **sub-pages** you can nest as deep
as you like (Food → Ice Cream → Mint Choc Chip → …), and **🔗 links to any existing page**. The same
editor powers Notes, Maps/Groups, every Skill panel, and Journal entries.

### COSMOS goals & habits
The 6-step wizard now lets a goal/habit belong to **multiple aspects at once**, and pick **specific
skills** within each selected aspect — XP is split across them so the right petals grow.

### Alarms & Timers
Real **alarms** (repeat on chosen weekdays) that ring with a sound + pop-up notification, plus
countdown **timers** — both from Home → Alarms & Timers.

### Daily Records
A date-navigable history page (from Home) showing everything that happened that day: tracker readings,
habits completed, tasks, events, journal entries, and pages created.

### Cozy touches
Soft warm theme + gentle ambient **particles** (falling flowers 🌸 or whizzing stars ✨ — switch or turn
off in Settings).

---

## 🛠 Tech notes (for future you / a developer)

- **One file, zero dependencies.** Vanilla JS, hand-rolled SVG, CSS design-system with the brand
  palette (forest green `#1B4332`, blush `#F4A4B0`, gold `#D4AC60`, near-black `#0D1B12`).
- **Storage:** `localStorage` key `blossom_data_v1`, a single JSON document. The data model mirrors
  the spec (notes tree, habits, goals, events, pulses, body, people, journal, reviews).
- **Architecture:** a tiny screen router (`nav` stack) + `render()`, with event delegation on
  `document` via `data-act` attributes. Add a screen by adding to the `SCREENS` map.
- **Local preview server** (only needed if you want to serve over http instead of double-clicking):
  `.claude/serve.ps1` — a dependency-free PowerShell static server on port 5599.

---

## 🌱 Roadmap (your phases)

- **Phase 1 — Foundation (done):** Home, Schedule, COSMOS cards, nested notes, streaks, themes, save/import.
- **Phase 2 — Blossom core (mostly done):** flower scores, body map, aspect skill panels, mood graph.
- **Phase 3 — Depth:** richer Nutrition (barcode/photo), Relationship tracker prompts, Learning +
  spaced repetition, voice notes, monthly review.
- **Phase 4 — Sync & polish:** optional Supabase cloud sync, Android home-screen widget,
  Google Fit / Health Connect, web companion, AI insight feed.

---

*Help your future blossom like this cosmos.* 🌸
