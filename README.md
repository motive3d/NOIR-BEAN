# NOIR & BEAN

A complete, bilingual specialty coffee house portfolio concept for All Seasons Park, Madinaty, Cairo. This is a fictional brand, not an operating business. Images and prices are illustrative.

## Publish using Chrome only

You do not need a local terminal, npm, Git, VS Code, GitHub Desktop, or a Codex–GitHub connection. GitHub Actions installs and builds everything online.

1. Download **noir-and-bean-complete.zip**.
2. In Windows File Explorer, right-click it and choose **Extract All**.
3. Open **https://github.com** in Google Chrome and sign in.
4. Under **motive3d**, create a **public** repository named **noir-and-bean**, if it does not already exist. For a new empty repository, adding a README during creation makes the upload controls easy to find; the included README can replace it.
5. Open the repository's **Code** tab.
6. Choose **Add file → Upload files**.
7. Open the extracted folder. Drag its **contents**, including the `src`, `public`, `tests`, and `.github` folders, into GitHub's upload area. Keep `package.json`, `package-lock.json`, `index.html`, and `vite.config.js` directly at the repository root. Do not upload the enclosing extracted folder or the ZIP itself. Do not flatten nested folders.
8. Confirm `.github/workflows/deploy.yml` is included. In Windows, **View → Show → Hidden items** can help. If the upload omits the workflow, follow the browser-only workaround below.
9. Click **Commit changes**, committing to **main**. If an existing repository uses another default branch, ensure these files are committed to `main` before deployment.
10. Open **Settings → Pages**.
11. Under **Build and deployment → Source**, choose **GitHub Actions**.
12. Open **Actions → Deploy NOIR & BEAN to GitHub Pages**. If the initial run failed before Pages was enabled, choose **Re-run all jobs**; alternatively use **Run workflow → main → Run workflow**. Wait for both the build and deployment jobs to turn green.
13. Visit **https://motive3d.github.io/noir-and-bean/**.

### Browser-only folder/workflow workaround

GitHub must receive actual extracted files, not an archive. Chrome's folder drag-and-drop generally preserves nested paths. If the file picker only uploads individual files, use drag-and-drop from File Explorer instead.

If `.github` is missing, choose **Add file → Create new file** at the repository root. Enter **`.github/workflows/deploy.yml`** as the complete filename; the slashes create the nested folders. Open the supplied **DEPLOY-WORKFLOW.txt** in Windows Notepad, copy its complete contents into GitHub's editor, then commit to **main**. This is an identical convenience copy of the included workflow. The `.txt` copy itself does not run as a workflow.

If Chrome still cannot preserve a nested folder, use **Create new file** to create a temporary `src/.keep`, `src/components/.keep`, `src/sections/.keep`, `src/data/.keep`, `src/i18n/.keep`, `src/styles/.keep`, `public/assets/.keep`, or `tests/.keep` as needed. Open that folder on GitHub, choose **Add file → Upload files**, and upload the corresponding files from the extracted folder into that directory. Repeat only for affected folders; the `.keep` files are harmless. Images and fonts must be uploaded as files, not pasted into the text editor.

If GitHub does not show the workflow under Actions, first verify its exact filename and path. If you see a 404 after a successful deployment, confirm the repository is `motive3d/noir-and-bean`, Pages uses GitHub Actions, and the link includes `/noir-and-bean/`. Refresh after the deployment completes. No custom domain or secret is needed.

## Included experience

- Cinematic hero; café story; four-item signature carousel; complete 20-item menu; gallery; Visit Us; footer.
- English by default and natural Arabic, with document language/direction switching and localStorage persistence. If storage is unavailable, switching still works for the current visit.
- Exactly 20 products across the five requested categories, with unique IDs, descriptions, individual photographs, and unchanged demo prices in EGP. Arabic prices use Arabic digits and `جنيه`.
- Combined bilingual search and category filters, result count, empty state, and reset.
- Featured carousel with buttons, slide selectors, arrow-key navigation, and horizontal touch swipes. In Arabic, directions mirror. Vertical page scrolling is retained. No autoplay.
- Responsive navigation, keyboard focus styles, lazy-loaded images, image error fallback, and reduced-motion support.
- GSAP/ScrollTrigger entrance and reveal animations; restrained image and button interactions.
- All photography and fonts bundled locally, with no runtime CDN dependency. Photos are optimized WebP; fonts are subset WOFF2 files.
- Single scrolling page; no backend, orders, cart, payments, invented contact details, or social links.

## Edit the project in GitHub's browser editor

| Change | File |
|---|---|
| Product names, descriptions, categories, prices, images, featured selection | `src/data/menu.js` |
| English and Arabic page text | `src/i18n/translations.js` |
| Colors, typography, spacing, responsive layout, reduced motion | `src/styles/main.css` |
| Header and mobile navigation | `src/components/Header.jsx` |
| Featured carousel | `src/sections/Favorites.jsx` |
| Search/filter menu | `src/sections/Menu.jsx` |
| Story, gallery, Visit Us, directions URL | `src/App.jsx` |
| Local photos, fonts, favicon and font licenses | `public/assets/` |
| Search/social metadata | `index.html` |
| Project URL base | `vite.config.js` |
| Automated deployment | `.github/workflows/deploy.yml` |

Open a text file on GitHub, choose the pencil icon, edit and commit to `main`. GitHub Actions redeploys automatically. Replace image files by uploading to `public/assets/`, preserving filenames or updating the relevant `image` property. Maintain both languages together. The data tests intentionally enforce the commissioned 20 prices; if you deliberately change the menu, update the expectations in `tests/menu.test.js` too.

The Vite base is **`/noir-and-bean/`**. Photo URLs use `import.meta.env.BASE_URL`; Vite rewrites font and favicon references for the same subpath. If renaming the repository, update the base plus canonical Open Graph URLs in `index.html`.

## Location and disclosure

The Directions button opens Google Maps in a new tab with `noopener noreferrer` and the destination **All Seasons Park, Madinaty, Cairo, Egypt**:

https://www.google.com/maps/dir/?api=1&destination=All%20Seasons%20Park%2C%20Madinaty%2C%20Cairo%2C%20Egypt

This exact link was opened in Google Maps and resolved to **All Seasons Park** in New Cairo. It does not point to a verified NOIR & BEAN business listing. No storefront number, hours, phone number, awards or customer reviews are invented. The abstract Visit Us illustration is decorative, not a geographic map.

## Assets and implementation

Built with React 19, Vite 6, JavaScript, modern CSS, GSAP/ScrollTrigger, and Lucide icons. The lockfile pins the installed dependency graph. Node 22 is configured in GitHub Actions. `resolve.preserveSymlinks` avoids a Windows sandbox realpath limitation without affecting the standard deployment structure.

All 22 photographs were generated specifically for this concept with the built-in ImageGen tool, reviewed visually, resized and converted to WebP. Full prompt records are in **IMAGE-PROMPTS.md**. They must not be represented as real venue photographs. Typeface families are Outfit, Cormorant Garamond, and Noto Sans Arabic from the Google Fonts repository. Their SIL Open Font License notices are bundled beside the font files. No third-party business photographs are used.

## Verification and limits

See **VERIFICATION.md** for the actual checks performed. `npm ci`, `npm test` and `npm run build` are executed automatically in the workflow; you do not need to execute them locally.

This source project needs a build, so double-clicking `index.html` on Windows is not a preview method. Publish it through GitHub Actions. Deployment to your GitHub account remains your browser-only step; no claim is made that the intended URL is already live. Browser tests use desktop Chromium and emulated mobile widths; physical iOS/Safari testing was not performed.

GitHub reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
