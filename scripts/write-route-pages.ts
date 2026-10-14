// Runs after `vite build`. Writes dist/<route>/index.html for every page in pageMeta, each with
// its own <title>, description, canonical URL and social tags, plus a sitemap listing them all.
// Every page then exists as a real file, so direct links and refreshes work even without the
// host's SPA rewrite, and link previews show the right title for each page.
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { pageMeta } from '../src/data/content'

const ORIGIN = 'https://nishiegroe.com'
// fileURLToPath rather than import.meta.dirname: CI builds on Node 18, which lacks it.
const dist = fileURLToPath(new URL('../dist', import.meta.url))
const template = readFileSync(join(dist, 'index.html'), 'utf8')

const escapeAttr = (s: string) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

const setTag = (html: string, pattern: RegExp, replacement: string) => {
    if (!pattern.test(html)) throw new Error(`Pattern not found in dist/index.html: ${pattern}`)
    return html.replace(pattern, replacement)
}

for (const [route, meta] of Object.entries(pageMeta)) {
    const url = `${ORIGIN}${route === '/' ? '/' : route}`
    const title = escapeAttr(meta.title)
    const description = escapeAttr(meta.description)
    let html = template
    html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`)
    html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${description}$2`)
    html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${url}$2`)
    html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`)
    html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${title}$2`)
    html = setTag(html, /(<meta name="twitter:title" content=")[^"]*(")/, `$1${title}$2`)

    const dir = route === '/' ? dist : join(dist, route)
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
}

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.keys(pageMeta)
    .map((route) => `  <url><loc>${ORIGIN}${route}</loc></url>`)
    .join('\n')}
</urlset>
`
writeFileSync(join(dist, 'sitemap.xml'), sitemap)
console.log(`Wrote ${Object.keys(pageMeta).length} page files and sitemap.xml`)
