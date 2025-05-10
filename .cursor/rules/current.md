# Website Skeleton Progress & Next Steps

## What Has Been Done

- `TopNav` and `MobileNav` components have been created.
  - TopNav: Transparent, with "NW persian rugs" on the left and all pages/sections on the right (desktop).
  - MobileNav: Transparent, with "NW persian rugs" on the left and a hamburger menu for navigation (mobile).
- Three main page sections (`Hero.vue`, `About.vue`, `Auctions.vue`) are implemented as individual components, each with a unique CSS id for smooth scrolling.
- Routing is set up for:
  - Home (main page with the three sections)
  - Privacy page (`Privacy.vue`)
  - Terms and Conditions page (`TermsAndConditions.vue`)
- All pages and sections are accessible via the top navigation, with smooth scrolling for section links.
- Vue Router is installed and configured.

## Next Steps

- Fix the UI so that `TopNav` is always rendered across the top of the screen (sticky/fixed, full width, above content).
- Add a listener or logic so that `MobileNav` is shown only on small screens (and `TopNav` is hidden on mobile).
- Update the desktop view to use the background images from `public/assets`:
  - Use `rug_hero_desktop_2560x1440.webp` for large screens
  - Use `rug_hero_tablet_1536x1024.webp` for tablets
  - Use `rug_hero_mobile_1080x1350.webp` for mobile
- Ensure the correct background image is displayed based on screen width using CSS media queries or Vue logic.
