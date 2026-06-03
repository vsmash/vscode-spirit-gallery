# Spirit Gallery — VS Code Theme

A dark theme inspired by Aboriginal art: warm ochre/charcoal backgrounds with
**orange**, **yellow/gold**, **aqua**, and **silver** accents.

## Palette

| Role | Colour | Hex |
|------|--------|-----|
| Background (editor) | warm charcoal | `#1c1611` |
| Background (chrome) | deep ochre-black | `#16110d` |
| Foreground | silver | `#d6cfc4` |
| Keywords / tags / cursor | orange | `#f0883e` |
| Burnt orange (accent) | rust | `#d9622e` |
| Strings / attributes | gold | `#e3b44a` / `#e8c14a` |
| Types / classes | bright yellow | `#f0c040` |
| Functions / escapes / links | aqua | `#5fd3c4` |
| Properties | soft aqua | `#9fd9c9` |
| Error | gallery red | `#e0533d` |

## Install (local development)

1. Copy this folder into your VS Code extensions directory:
   - macOS/Linux: `~/.vscode/extensions/spirit-theme`
   - Windows: `%USERPROFILE%\.vscode\extensions\spirit-theme`
2. Restart VS Code.
3. `Cmd/Ctrl+K Cmd/Ctrl+T` → select **Spirit Gallery**.

## Test without installing

Open this folder in VS Code and press `F5` to launch an Extension Development
Host, then pick the theme there.

## Package as `.vsix`

```bash
npm install -g @vscode/vsce
vsce package
```

## License

MIT
