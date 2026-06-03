# Spirit Gallery — VS Code theme

A single-theme VS Code color theme extension. "Spirit Gallery" is a dark theme
inspired by Aboriginal art featured at the Spirit Gallery Store, Argyle Centre,
The Rocks, Sydney.

## Layout

- `themes/spirit-color-theme.json` — the entire theme. `colors` = workbench/editor
  UI, `tokenColors` = syntax highlighting. This is the only file you edit to change
  how the theme looks.
- `package.json` — extension manifest; `contributes.themes` registers the theme.
- `CHANGELOG.md`, `LICENSE`, `.vscodeignore` — packaging metadata.

There is no build step and no source to compile — the JSON *is* the artifact.

## Color philosophy

- **Backgrounds are a warm charcoal family**, deliberately desaturated from the
  original brown. When editing background/chrome/border colors, treat them as one
  family and keep the channel spread small (only a faint warm tint) — don't
  reintroduce brown.
- **Accents carry the identity**: orange `#f0883e` / `#d9622e`, yellow `#e8c14a` /
  `#f0c040`, aqua `#5fd3c4` / `#4ec9b0`, silver/sand foregrounds. Preserve these
  when adjusting neutrals.
- After any edit, validate the JSON:
  `python3 -c "import json; json.load(open('themes/spirit-color-theme.json'))"`.

## Testing the theme

- F5 (uses `.vscode/launch.json`) opens an Extension Development Host; pick the
  theme via Cmd+K Cmd+T → "Spirit Gallery".
- Or package and install: `npx @vscode/vsce package` → install the `.vsix`.

## Committing — IMPORTANT: this repo is MAIASS-managed

It has `.env.maiass` and a MAIASS-maintained `CHANGELOG.md`. **Never run
`git commit` or hand-write a commit message here — commit through MAIASS** so the
changelog stays consistent.

- Commit + push current branch (no merge, no version bump):
  `nma -ac -m "<message>"` (alias for `maiass`; `-ac` auto-stages everything, so
  make sure the tree holds only intended changes).
- Message format: first line `fix:`/`feat:`/`docs:`/`chore:` summary; optional body
  of indented bullets with NO blank line before them; **never** a `Co-Authored-By`
  trailer (it corrupts the MAIASS changelog).
- Branch model: `develop` is the working branch, `main` is release.
- **Do NOT** run `nma -a` (full pipeline: merges to develop + bumps) or version
  releases (`maiass patch|minor|major`) — those are a human's job.

## Repo

`vsmash/vscode-spirit-gallery` (public). gh/git auth: `vsmash` account over SSH.
