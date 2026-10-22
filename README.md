# Isaac Shabri — Portfolio V3

Modern dark-gradients portfolio website for GitHub Pages/Jekyll, with Git-backed Pages CMS.

**Start here:** [PANDUAN-LENGKAP.md](PANDUAN-LENGKAP.md) (tutorial in Indonesian).

## Features

- Hero photo loaded from `_data/profile.yml` with CMS image upload; professional SVG placeholder before uploading.
- Editable headline, introduction, stats, expertise, projects, categories, experience, certifications, services, contact.
- Dynamic category filter, published project cards, project detail pages, screenshot gallery.
- Sticky responsive navbar with active section indicator, light/dark theme toggle.
- Mobile-friendly layout and no third-party runtime libraries.

## Deploy

1. Create public repository `YOUR-GITHUB-USERNAME.github.io`.
2. Upload all files/folders **from inside** this project to the root of the repository.
3. In Settings > Pages, set Deploy from a branch, `main`, `/(root)`.
4. Wait for Actions to complete and open `https://YOUR-GITHUB-USERNAME.github.io/`.
5. Sign in at https://app.pagescms.org/, grant repository access, and edit your profile.

**The sample projects, timeline and certificates are demo content. Replace with genuine material before sharing.**

Do not add `.nojekyll`, because Jekyll must process the project collections. Build hasn't been run in the authoring environment because RubyGems download is unavailable; Github Pages deployment is the canonical build test.
