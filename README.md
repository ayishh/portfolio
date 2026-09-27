# Editing your portfolio

This site uses React, Vite, and plain CSS. Start with the files below.

## Change the content

- `src/Section/Intro.jsx`: your name, introduction, interests, and hero buttons.
- `src/assets/profile.jpg`: your portrait. If you use a different filename, update the import in `Intro.jsx`. Update the image width, height, and alt text too.
- `src/data/project.js`: project titles, numbers, years, descriptions, videos, and tags. Copy an object to add a project. Give it a unique `title` and numeric `number`, plus a numeric `year`. Cards display from highest number to lowest (7 to 1), regardless of their order in this file.
- `src/data/skill.js`: language and framework cards. Copy an object to add a skill. Keep titles unique. `url` makes the card a link; `image` supplies its icon.
- `src/Section/Skills.jsx`: skill section headings. The number ranges are written by hand; update them if the lists change.
- `src/App.jsx`: header, navigation, section order, and footer. Links such as `#projects` must match the destination section's `id`.
- `index.html`: browser tab title and favicon. The current `/favicon.png` file is missing; use an existing image from `public` or add that file.

## Change the appearance

- `src/index.css`: shared colors, fonts, shadows, rounded corners, buttons, page width, and spacing. CSS variables under `:root` affect the whole site.
- `src/App.css`: current header, mobile menu, and footer.
- `src/Section/Intro.css`: hero columns, heading size, portrait, and mobile layout.
- `src/Section/Projects.css`: project columns, card spacing, video size, and tags.
- `src/Section/Skills.css`: skill group headings and spacing.
- `src/components/ChromaGrid.css`: skill cards, icons, and grid columns.

Rules inside `@media (max-width: ...)` apply below that screen width. `gap` sets space between items. `padding` sets space inside an element. `margin` sets space outside it. `clamp` gives a minimum, flexible, and maximum size.

Keep focus outlines for keyboard users. The reduced-motion rules in `index.css` stop CSS motion when requested by the device; they do not stop videos.

## Change project videos

1. Put the video in `src/assets`.
2. Import it in `src/data/project.js`.
3. Set the project's `video` to that imported variable. Use `undefined` for no video.
4. Optionally set `poster` to an image URL or imported image to show before playback.

`src/Section/Projects.jsx` controls playback. Hover or keyboard focus starts the video; leaving pauses and resets it. Videos are muted, loop, and have no visible controls. Add the `controls` attribute to the video tag if you want player buttons. Touchscreens do not have hover, so consider controls if you need reliable touch playback.

Placeholder names come from the project title before the colon. Projects with the `Blockchain` tag show a diamond symbol, so reordering cards does not change their previews.

## Current and older components

The visible page uses `Intro`, `Projects`, `SkillsSection`, and `ChromaGrid`. `ChromaGrid` is now the Soft UI skill grid.

These older components are kept but are not rendered by the current page:

- `PillNav.jsx` and `PillNav.css`: old animated navigation. Edit `App.jsx` and `App.css` for the current navigation.
- `SplitText.jsx`: optional animated text. `SplitText.css` is not imported and has no style rules.
- `DarkModeToggle.jsx` and its CSS: optional theme button. The current page has no dark color palette.
- `ProgrammingLanguage.jsx`: old skill grid. Its imported `ProgrammingLanguage.css` is missing, so restore that stylesheet before using the component.

`src/context/ThemeContext.jsx` still saves the theme choice and adds a `dark` class to the HTML element. To enable dark mode, add dark color variables and render the toggle inside `ThemeProvider`. `src/main.jsx` sets up React and these providers.

The `borderColor` and `gradient` fields in the skill data are left over from the old design. The current grid ignores them.

## Commands and settings

`package.json` and `.prettierrc` are JSON files, so they cannot contain comments.

- `npm install`: install packages for local work.
- `npm run dev`: start the local preview server.
- `npm run build`: create the production site in `dist`.
- `npm run preview`: preview the most recent production build.
- `npm run format`: format source files with Prettier.
- `npm run format:check`: check source formatting without changing files.
- `npm run deploy`: build and publish `dist` using the `gh-pages` package. This publishes the site; it is not a local preview.

`package.json` defines these commands and dependencies. `package-lock.json` records exact package versions; let npm update it.

`.prettierrc` uses semicolons, double quotes, two-space indentation, and an 80-character line target. `.prettierignore` excludes generated files from formatting. `.gitignore` excludes local and generated files from Git.

`vite.config.js` sets the public base path. Use `/` for a domain root or `/portfolio/` if deployed at that subpath. The `homepage` field in `package.json` does not set Vite's base path.

`.github/workflows/deploy.yml` builds and publishes on pushes to `main`. It is a separate publishing route from `npm run deploy`.

## Files you normally do not edit

`node_modules` contains installed packages. `dist` contains generated build files. Edit `src` and rebuild instead. Images and videos in `public` and `src/assets` are media files, so they cannot contain code comments.

After an edit, preview the page at desktop and phone widths, then run `npm run build`. Save source files as UTF-8. Existing character entities and Unicode escapes keep icons safe from encoding problems.
