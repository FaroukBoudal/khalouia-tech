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

The form sends each request straight to **Telegram** (bot `@KhalouiaTechBot`).
Messages appear instantly in the owner's chat — no email or server involved.

Configuration lives near the bottom of `index.html`:

```js
const TELEGRAM_BOT_TOKEN = '...';
const TELEGRAM_CHAT_ID = '...';
```

To change the recipient, message the bot from the new Telegram account, open
`https://api.telegram.org/bot<TOKEN>/getUpdates`, and copy the new `chat.id`.

**Security note:** the bot token is visible in the page source because GitHub Pages is
static. If abuse becomes a problem, regenerate the token with @BotFather or move the
call behind a small Cloudflare Worker proxy.

## Custom domain

Add a `CNAME` file containing only your domain (e.g. `khalouiatech.dz`), then point a DNS
`CNAME` record for `www` to `<username>.github.io` and `A` records for the apex to GitHub
Pages IPs. Enable **Enforce HTTPS** in Settings → Pages.
