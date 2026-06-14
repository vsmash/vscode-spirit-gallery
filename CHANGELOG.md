## 1.0.7
15 June 2026

- Documented the Rainforest theme in README with showcase and store images
	- Added Spirit Gallery Rainforest palette table and showcase screenshot
	- Optimized gallery store photo (2.2MB PNG -> 375KB JPEG)
	- Updated introduction, installation, and activation for both theme variants
- Introduced Spirit Gallery Rainforest color theme
	Defined dark theme colors for editor and UI components
	Set colors for status bar, activity bar, and terminal

## 1.0.5
4 June 2026

- Replaced retired shields.io marketplace badges with vsmarketplacebadges.dev
- Pinned README screenshot to the main branch
- Rebuilt README as a marketplace page
	- Added screenshot, install badges, and install instructions
	- Corrected palette hexes to match desaturated backgrounds
- Added a spirit showcase image.
- Launched the theme showcase project
	- Implemented Gallery class for managing artwork
	- Added async stream method for yielding active artwork
	- Defined Artwork interface for type safety
	- Improved readability with constants and template strings
	- Included initial README documentation for project overview
	- Added .gitkeep to images directory for version control
- Set publisher to velvary for marketplace
- Introduced theme icon and updated vscodeignore
	- Added 128x128 icon.png (Spirit Gallery logo on dark background)
	- Wired icon field into package.json
	- Excluded maiass/claude/local files from the published vsix
- Updated CLAUDE.md for command consistency
	Clarified message format and branch model instructions
- Added brief for AI contributors in CLAUDE.md
	Documented theme layout, color philosophy, and testing
	Noted that the repository is MAIASS-managed with commit rules
- Updated project configuration and documentation
	Expanded .gitignore to include CLAUDE and MAIASS environment files
	Enhanced package description for clarity
- Added repository field to package.json

## [1.0.0]

### Added
- Initial release of the Spirit Gallery dark theme — warm backgrounds with
  orange, yellow, aqua and silver accents inspired by Aboriginal art.

### Changed
- Desaturated the background/chrome family so it reads as a warm charcoal
  rather than brown, while keeping the orange/yellow/aqua accent palette.
