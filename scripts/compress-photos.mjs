import { fileURLToPath } from 'url'
import { dirname, resolve } from 'path'
import fs from 'fs'
import sharp from 'sharp'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const srcDir = resolve(__dirname, '../src/assets')

const tasks = [
    {
        in: 'IMG_2444.jpg',
        outs: [
            { name: 'IMG_2444-240.webp', width: 240 },
            { name: 'IMG_2444-960.webp', width: 960 },
        ],
    },
    {
        in: 'IMG_2521.jpg',
        outs: [
            { name: 'IMG_2521-640.webp', width: 640 },
            { name: 'IMG_2521-960.webp', width: 960 },
        ],
    },
]

async function ensureWebp(inputFile, outputFile, width) {
    const inPath = resolve(srcDir, inputFile)
    const outPath = resolve(srcDir, outputFile)
    try {
        const inStat = await fs.promises.stat(inPath)
        // Skip if output exists and is newer than input
        try {
            const outStat = await fs.promises.stat(outPath)
            if (outStat.mtimeMs >= inStat.mtimeMs) {
                console.log(`Skipping up-to-date ${outputFile}`)
                return
            }
        } catch {}

        await sharp(inPath)
            .resize({ width, withoutEnlargement: true })
            .webp({ quality: 80 })
            .toFile(outPath)

        const bytes = (await fs.promises.stat(outPath)).size
        console.log(`Wrote ${outputFile} (${(bytes / 1024).toFixed(1)} kB)`)
    } catch (err) {
        console.error(
            `Error processing ${inputFile} -> ${outputFile}:`,
            err.message
        )
        process.exitCode = 1
    }
}

async function run() {
    for (const t of tasks) {
        for (const o of t.outs) {
             
            await ensureWebp(t.in, o.name, o.width)
        }
    }
}

run()
