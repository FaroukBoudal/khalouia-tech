# Khalouia Tech — Static Website

Single-page static site for **Khalouia Tech** (programming, databases, IT support, digital media).

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The full site (hero, services, about, portfolio, contact) |
| `404.html` | Custom "page not found" page |
| `robots.txt` | Search-engine crawling rules |
| `.nojekyll` | Tells GitHub Pages to serve files as-is (no Jekyll build) |

## Local preview

Just double-click `index.html`, or serve the folder:

```powershell
npx serve .
```

## Deploy to GitHub Pages

1. Create a public repo named `khalouia-tech`.
2. Upload everything in this folder to the repo root.
3. Repo **Settings → Pages → Source: Deploy from a branch → Branch: `main` / root**.
4. The site goes live at `https://<username>.github.io/khalouia-tech/`.

## Languages (English / French / Arabic)

The site ships with a built-in language switcher (`EN` / `FR` / `ع`) in the header.
Arabic automatically switches the whole page to right-to-left layout and the Cairo font.

On a visitor's first visit, the language is chosen in this order:

1. A previously saved choice (`localStorage` key `kt-lang`)
2. `?lang=ar`, `?lang=fr` or `?lang=en` in the URL
3. The visitor's country, inferred from the browser timezone (Arabic-speaking countries → Arabic, French-speaking → French)
4. The browser's preferred language
5. English as the fallback

All translations live in `i18n.js`. To change wording, edit the `FR` / `AR` objects.
Each key is the exact English sentence shown on the page.

## Contact form

GitHub Pages is static, so the form cannot send email by itself. It currently opens the
visitor's email client with the message pre-filled (`mailto:`).

To get in-page submissions, create a free form endpoint and replace the `mailto:` line in
`handleFormSubmit()` in `index.html`:

- [Formspree](https://formspree.io) — `https://formspree.io/f/<your-id>`
- [Web3Forms](https://web3forms.com) — `https://api.web3forms.com/submit`

## Custom domain

Add a `CNAME` file containing only your domain (e.g. `khalouiatech.dz`), then point a DNS
`CNAME` record for `www` to `<username>.github.io` and `A` records for the apex to GitHub
Pages IPs. Enable **Enforce HTTPS** in Settings → Pages.
