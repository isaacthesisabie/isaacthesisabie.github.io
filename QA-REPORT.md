# QA Report — Portfolio V3

## Verified offline
- JSON/YAML structure and content reference integrity.
- All required assets included locally (CSS, JS, SVG).
- JavaScript syntax via `node --check`.
- Design CSS defines a max-width 1168px container, icon dimensions, desktop 3-column grids, mobile breakpoints and constrained portrait frame.
- JS includes handlers for filtering, gallery controls, navbar scrollspy, mobile menu and theme toggle.

## Not verifiable in this environment
- Full Jekyll build, because RubyGems access is blocked and Jekyll is not preinstalled.
- Automated screenshot rendering: local file and localhost navigation are blocked by this environment's browser security policy.
- Pages CMS live edits and real GitHub Pages deployment (requires access to an actual GitHub repository and CMS login).

Run final live checklist in `PANDUAN-LENGKAP.md` once deployed. Do not assume success based on static checks alone.
