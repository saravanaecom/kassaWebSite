# Kassapos Website — Editing Guide

This is the source code for the Kassapos website (built with Next.js/React).
It is **not** a drag-and-drop website builder — text and links are stored
inside code files. To make changes you (or your developer) need:

- [Visual Studio Code](https://code.visualstudio.com/) (free) or any text editor
- [Node.js](https://nodejs.org/) installed (to preview changes before publishing)
- Basic comfort opening folders/files and editing text inside `" "` quotes

If you don't have a developer, any freelance Next.js/React developer can pick
this up quickly using this guide.

---

## 1. First-time setup (only needed once)

1. Unzip this project anywhere on your computer.
2. Open the folder in VS Code.
3. Open a terminal in VS Code (`Terminal → New Terminal`) and run:
   ```
   npm install
   ```
   (downloads required libraries — takes a few minutes, only needed once or after pulling updates)
4. To preview the site on your own computer before publishing:
   ```
   npm run dev
   ```
   Then open `http://localhost:3000` in your browser.

---

## 2. Example: Changing the YouTube video

Open **`src/components/home/SeeInActionSection.tsx`**, line 11:

```ts
const YOUTUBE_ID = "NrlQ7Z1sK-0";
```

Replace `NrlQ7Z1sK-0` with your new video's ID — that's the part of the
YouTube URL after `watch?v=`. For example, if your new video link is
`https://www.youtube.com/watch?v=ABC123xyz`, the ID is `ABC123xyz`.

There is a **second, separate** video on the Supermarket product page:
**`src/app/products/supermarket/page.tsx`**, line 19 — same `YOUTUBE_ID` pattern,
needs to be updated separately if you want that one changed too.

Customer testimonial videos (if any) are in
**`src/components/home/VideoTestimonialsSection.tsx`** — each testimonial has
its own `videoId` field instead of one shared constant.

---

## 3. Other common edits

| What you want to change | File | What to look for |
|---|---|---|
| WhatsApp number | *(see note below — appears in 15+ files)* | the number `918754031480` |
| Phone number shown in header | `src/components/layout/Navbar.tsx` | `8754031480` (appears 3 times: desktop, mobile header, mobile menu) |
| Office address / branch info | `src/lib/constants.ts` | the `OFFICES` array (~line 18) |
| Company email | `src/lib/constants.ts` | `SITE.email` near the top |
| Social media links (YouTube/Facebook/Instagram/LinkedIn) | `src/components/layout/Footer.tsx` | the `SOCIAL_LINKS` array (~line 68) — **these are currently placeholder links and need your real profile URLs** |
| Hero homepage headline/slides | `src/components/home/HeroSection.tsx` | the `SLIDES` array (~line 21) |
| Site title / description (shows in Google search results) | `src/app/layout.tsx` | the `metadata` object (~line 31) |
| Hero/banner images | `public/images/` folder | replace the image file directly (keep the same filename, or update the matching `src="..."` path in the code) |

---

## 4. Important things to know before editing

- **The WhatsApp number `918754031480` is hardcoded in 15+ files**, not stored
  in one place. The easiest way to change it everywhere: in VS Code, press
  `Ctrl+Shift+H` (Find & Replace across all files), search for
  `918754031480`, and replace with your new number in the same format
  (country code + number, no `+`, no spaces, e.g. `91XXXXXXXXXX`).
- **Two different email domains are currently used**: `kassapos.in` (most
  pages) and `kassapos.com` (header + contact page). Decide which one is
  correct and standardize it.
- The Google Map on the Contact page is a pinned location, not generated from
  the address text — to move the pin, go to Google Maps, search your
  address, click **Share → Embed a map**, and paste the new embed code into
  `src/app/contact/page.tsx`.

---

## 5. Publishing changes live

This site is deployed on **Vercel**. After editing:
1. Save your changes.
2. If using Git: commit and push to the connected repository — Vercel
   redeploys automatically within ~1-2 minutes.
3. If you don't use Git: ask your developer to redeploy the updated folder
   to Vercel (or wherever the site is hosted).

---

*If anything here doesn't match what you find in the code, the project may
have been updated since this guide was written — ask your developer to
confirm the current file/line, the structure described above will still be
close.*
