# Nutrition & Yoga Site — Setup

## 1. Open in VSCode
Unzip this folder, open it in VSCode.

## 2. Install dependencies
In the VSCode terminal (Ctrl+` / Cmd+`):
```
npm install
```

## 3. Run locally
```
npm run dev
```
Open http://localhost:4321 — edit files in `src/pages/` and it hot-reloads.

## 4. Edit content
- `src/pages/index.astro` — homepage
- `src/pages/about.astro` — about you
- `src/pages/services.astro` — services + prices
- `src/pages/contact.astro` — contact form (set up Formspree, see comment in file)
- `src/layouts/Layout.astro` — nav bar, footer, site-wide stuff
- `tailwind.config.mjs` — colors, fonts

## 5. Push to GitHub
```
git init
git add .
git commit -m "initial site"
```
Create a repo on GitHub, then:
```
git remote add origin <your-repo-url>
git branch -M main
git push -u origin main
```

## 6. Deploy on Vercel (free)
1. Go to vercel.com, sign in with GitHub
2. "Add New Project" → import your repo
3. Framework preset: Astro (auto-detected)
4. Deploy — you'll get a live `.vercel.app` URL in ~1 min

## 7. Connect your domain
1. Buy domain on Namecheap/Porkbun
2. In Vercel project → Settings → Domains → add your domain
3. Vercel gives you DNS records — add them in your domain registrar's DNS settings
4. Wait a few minutes to a few hours for propagation

## 8. Contact form (no backend needed)
- Sign up free at formspree.io
- Create a form, get your form ID
- Replace `YOUR_FORM_ID` in `src/pages/contact.astro`

Done — free hosting, free SSL, ~€10/year total cost (just the domain).
