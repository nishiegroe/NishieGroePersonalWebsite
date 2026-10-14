import { createRequire } from 'module'
import { pathToFileURL } from 'url'
const require = createRequire('E:/Github/Veridian/package.json')
const { chromium } = require('playwright')
const [html, pdf, png] = process.argv.slice(2)
const b = await chromium.launch({ channel: 'msedge' })
const p = await b.newPage()
await p.goto(pathToFileURL(html).href, { waitUntil: 'load' })
await p.pdf({ path: pdf, format: 'Letter', printBackground: true })
await p.setViewportSize({ width: 816, height: 1056 })
await p.emulateMedia({ media: 'print' })
await p.screenshot({ path: png, fullPage: true })
await b.close()
