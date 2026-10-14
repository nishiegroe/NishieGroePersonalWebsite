# Resume source

`resume.html` is the source for `src/assets/Resume Oct 2026.pdf` (US Letter, two pages).
It recreates the earlier Reactive Resume layout, so edits no longer need that tool.

To re-render after editing:

```bash
node resume/render.mjs resume/resume.html "src/assets/Resume Oct 2026.pdf" resume/preview.png
```

`render.mjs` borrows Playwright from `E:/Github/Veridian` (this repo's copy is version-skewed
against the installed browsers) and prints with the system Microsoft Edge (`channel: 'msedge'`).
Render the HTML from this folder so `photo.jpg` resolves.
