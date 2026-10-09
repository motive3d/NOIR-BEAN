# Verification report — 10 October 2026

## Build and data

- Clean `npm ci --no-audit --no-fund` succeeded in a fresh project copy using the supplied lockfile.
- `npm test`: all four tests passed. These verify the exact 20 menu entries, unique IDs, supplied prices, category counts (5/5/4/3/3), local image paths, translations, bilingual search behavior, EGP formatting, and deployment configuration.
- `npm run build`: successful Vite 6.4.4 production build; 1,590 modules transformed, all imports resolved. No unresolved asset warnings in the final build.
- Final generated CSS uses `/noir-and-bean/assets/` for bundled fonts. Photographs use Vite's configured base URL. The preview was served beneath `/noir-and-bean/`, not at `/`.
- The workflow uses official checkout, setup-node, configure-pages, upload-pages-artifact and deploy-pages actions; installs, tests and builds before deploying. Workflow structure was reviewed against GitHub's documentation. An actual GitHub-hosted run requires the user's upload and Pages activation.

## Browser testing

Automated tests ran against the final production build in installed desktop Google Chrome through Playwright. Both English and Arabic were checked at 320, 390, 768 and 1440 pixel viewport widths.

- No horizontal document overflow at all eight language/width combinations.
- All 20 menu cards appear by default; correct category counts and combined search/filter results.
- No-result state, clear search and reset-all behavior work.
- English and Arabic search work, including Arabic letter normalization.
- Language changes the document `lang` and `dir`, page text and title; Arabic selection survives a reload.
- Carousel previous/next buttons and LTR/RTL arrow-key navigation work.
- Mobile navigation opens, closes with Escape, and closes after selecting a section link.
- Every rendered image decoded successfully; no missing image responses.
- No page JavaScript errors or failed HTTP responses during the browser suite.
- Standard GSAP entrance/reveal animation and reduced-motion rendering were checked.
- Desktop and mobile screenshots in both languages were captured and visually reviewed.

## Photography and maps

- All 22 generated photographs were visually reviewed together. Each menu photograph matches its intended product; no unrelated product-photo substitutions.
- Photography is bundled as optimized WebP. Fonts are locally bundled WOFF2 with licenses.
- The exact Google Maps directions URL was opened in the in-app browser. Google Maps resolved its destination to **All Seasons Park** in New Cairo and presented routes to it. No claim is made of a verified café business listing.

## Practical limits

- This is an intentionally fictional showcase: demonstration prices, concept imagery, and no real business operations.
- GitHub account deployment was not performed. The source archive and workflow are ready for the user's browser-only upload.
- Tests ran in desktop Chromium with mobile emulation, not on physical iOS/Android devices or in Safari/Firefox.
- No Lighthouse score or formal accessibility certification is claimed. Semantic structure, keyboard interactions, focus styles, text alternatives and reduced-motion support are implemented; interactive behaviors were exercised in the browser.
- The project contains source files, not an offline double-click application. GitHub Actions performs the required build.

Reference: https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages
