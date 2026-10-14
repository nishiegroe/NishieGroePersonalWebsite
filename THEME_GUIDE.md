# Theme guide

All colors and fonts are CSS custom properties at the top of `src/styles/site.css`. The light
palette is on `:root`; the dark palette redefines the same tokens inside
`@media (prefers-color-scheme: dark)`. Components only ever use the tokens.

| Token | Use | Light | Dark |
| --- | --- | --- | --- |
| `--bg` | Page background | `#faf8f5` | `#18141c` |
| `--surface` | Cards and dialogs | `#ffffff` | `#221c27` |
| `--fg` | Body text and headings | `#2f2a35` | `#f3eef5` |
| `--muted` | Secondary text | `#5c5466` | `#c3b8ca` |
| `--accent` | Links, buttons, current page | `#93306d` | `#f2a7d0` |
| `--on-accent` | Text on accent buttons | `#ffffff` | `#18141c` |
| `--tint` | Light pink backgrounds only | `#f6e3ee` | `#3a2434` |
| `--line` | Borders and dividers | `#e6dde6` | `#3a3140` |

## Contrast rule

Every text color must reach **4.5:1** against the background it sits on, in both themes (WCAG AA).
The current pairs measure:

- `--fg` on `--bg`: 13.2:1 light, 15.9:1 dark
- `--muted` on `--bg`: 6.8:1 light, 9.5:1 dark
- `--accent` on `--bg`: 6.9:1 light, 9.7:1 dark
- `--on-accent` on `--accent`: 7.3:1 light, 9.7:1 dark

If you change a color, check the new pair before shipping (for example with
https://webaim.org/resources/contrastchecker/). Light pink (`--tint`) is for backgrounds; never use
it, or any pastel, as a text color.

## Fonts

- `--display`: Playfair Display, for headings
- `--body`: Poppins, for everything else

Both load from Google Fonts in `index.html`.
