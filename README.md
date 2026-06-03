# Spirit Gallery — VS Code Theme

A dark theme inspired by Aboriginal art, as featured at the Spirit Gallery Store
in the Argyle Centre, The Rocks, Sydney. Warm charcoal backgrounds with
**orange**, **gold**, **aqua**, and **silver** accents.

[![Marketplace](https://img.shields.io/visual-studio-marketplace/v/velvary.spirit-theme?label=VS%20Marketplace&color=d9622e)](https://marketplace.visualstudio.com/items?itemName=velvary.spirit-theme)
[![Installs](https://img.shields.io/visual-studio-marketplace/i/velvary.spirit-theme?color=e8c14a)](https://marketplace.visualstudio.com/items?itemName=velvary.spirit-theme)
[![Open VSX](https://img.shields.io/open-vsx/v/velvary/spirit-theme?label=Open%20VSX&color=5fd3c4)](https://open-vsx.org/extension/velvary/spirit-theme)

![Spirit Gallery theme](https://raw.githubusercontent.com/vsmash/vscode-spirit-gallery/main/images/spirit-showcase.png)

## Install

**In VS Code:** open Quick Open (`Cmd/Ctrl+P`), paste and run:

```
ext install velvary.spirit-theme
```

Or search **"Spirit Gallery"** in the Extensions panel. Then activate it with
`Cmd/Ctrl+K Cmd/Ctrl+T` → **Spirit Gallery**.

Also available on [Open VSX](https://open-vsx.org/extension/velvary/spirit-theme)
for VSCodium, Cursor, Windsurf and Gitpod.

## Palette

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

## Contributing / local development

Open this folder in VS Code and press `F5` to launch an Extension Development
Host, then pick the theme there. To build a `.vsix`:

```bash
npx @vscode/vsce package
```

## License

MIT
