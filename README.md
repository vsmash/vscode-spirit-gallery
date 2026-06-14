# Spirit Gallery — VS Code Theme

A pair of dark themes inspired by Aboriginal art, as featured at the Spirit
Gallery Store in the Argyle Centre, The Rocks, Sydney:

- **Spirit Gallery** — warm charcoal backgrounds with **orange**, **gold**, **aqua** and **silver** accents.
- **Spirit Gallery Rainforest** — deep green backgrounds dominated by **green**, highlighted with **aqua**, **lime** and **yellow**.

[![VS Marketplace](https://vsmarketplacebadges.dev/version-short/velvary.spirit-theme.svg?label=VS%20Marketplace&color=d9622e)](https://marketplace.visualstudio.com/items?itemName=velvary.spirit-theme)
[![Installs](https://vsmarketplacebadges.dev/installs-short/velvary.spirit-theme.svg?label=installs&color=e8c14a)](https://marketplace.visualstudio.com/items?itemName=velvary.spirit-theme)
[![Open VSX](https://img.shields.io/open-vsx/v/velvary/spirit-theme?label=Open%20VSX&color=5fd3c4)](https://open-vsx.org/extension/velvary/spirit-theme)

### Spirit Gallery

![Spirit Gallery theme](https://raw.githubusercontent.com/vsmash/vscode-spirit-gallery/main/images/spirit-showcase.png)

### Spirit Gallery Rainforest

![Spirit Gallery Rainforest theme](https://raw.githubusercontent.com/vsmash/vscode-spirit-gallery/main/images/spirit-rainforest-showcase.png)

## Install

**In VS Code:** open Quick Open (`Cmd/Ctrl+P`), paste and run:

```
ext install velvary.spirit-theme
```

Or search **"Spirit Gallery"** in the Extensions panel. Then pick a variant with
`Cmd/Ctrl+K Cmd/Ctrl+T` → **Spirit Gallery** or **Spirit Gallery Rainforest**.

Also available on [Open VSX](https://open-vsx.org/extension/velvary/spirit-theme)
for VSCodium, Cursor, Windsurf and Gitpod.

## Palettes

### Spirit Gallery

| Role | Colour | Hex |
|------|--------|-----|
| Background (editor) | warm charcoal | `#1c1a17` |
| Background (chrome) | near-black | `#161412` |
| Foreground | silver | `#d6cfc4` |
| Keywords / tags / cursor | orange | `#f0883e` |
| Burnt orange (accent) | rust | `#d9622e` |
| Strings / attributes | gold | `#e3b44a` / `#e8c14a` |
| Types / classes | bright yellow | `#f0c040` |
| Functions / escapes / links | aqua | `#5fd3c4` |
| Properties | soft aqua | `#9fd9c9` |
| Error | gallery red | `#e0533d` |

### Spirit Gallery Rainforest

| Role | Colour | Hex |
|------|--------|-----|
| Background (editor) | deep green | `#121a15` |
| Background (chrome) | near-black green | `#0e1410` |
| Foreground | pale sage | `#c6d2c2` |
| Keywords / tags / cursor | green | `#57c98a` |
| Functions / escapes / links | aqua | `#4fd6c0` |
| Strings | lime | `#9bd35a` |
| Types / attributes / active | bright lime | `#cfe05a` |
| Numbers / constants / decorators | yellow | `#e3d24a` |
| Properties | soft aqua | `#8fdccb` |
| Error | warm red | `#e0664d` |

## The gallery

These themes take their colours from the Aboriginal art at the
[Spirit Gallery](https://www.spiritgallery.com.au/) in the Argyle Centre,
The Rocks, Sydney.

![Spirit Gallery, The Rocks, Sydney](https://raw.githubusercontent.com/vsmash/vscode-spirit-gallery/main/images/spirit-store.jpg)

## Contributing / local development

Open this folder in VS Code and press `F5` to launch an Extension Development
Host, then pick a theme there. To build a `.vsix`:

```bash
npx @vscode/vsce package
```

## License

MIT
