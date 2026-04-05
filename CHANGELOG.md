# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added
- **Settings Page**: Built a robust, premium `Settings.jsx` page with navigation, Account linking UI, push notification toggles, and biometric security options.

### Changed
- **Documentation**: Professionalized `README.md` with full feature overview, tech stack documentation, and set up instructions. Integrated branding via the new animated logo.
- **Global Layout**: Refined `main-content` padding to a consistent 16px (`var(--size-4)`) for a more balanced mobile viewport.
- **Onboarding**: Removed disruptive bounding animations on step transitions to deliver a smoother, native-app feel. Rebalanced vertical layout and controls positioning.
- **Home Screen**: Tightened massive hero text and reduced vertical gaps between the dash and the bottom insight card.
- **Insights**: Refined editorial card proportions and reduced vertical spacing between icons and text. Restructured all insight cards to use a compact, side-by-side flex layout, eliminating bloated empty space and improving text alignment.
- **Profile**: Compacted header layout, replaced the generic text avatar with a crisp `User` icon, and fixed the CSS flex container so "Intervention" labels no longer overlap icons. Changed "Safety Preferences" to correctly navigate to the new `/settings` route.
- **Progress**: Tightened level card margins and narrative block padding.
- **Alerts**: Balanced intervention list item spacing and refined the layout of the pre-purchase modal demo.
- **Status Bar**: Improved simulated iOS status bar layout with better alignment and weighting.
