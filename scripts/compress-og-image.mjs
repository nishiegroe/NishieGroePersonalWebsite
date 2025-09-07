/* Compresses public/og-image.jpg to a web-friendly 1200x630 JPEG (~85 quality).
   Usage: node scripts/compress-og-image.mjs
*/
import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const inputPath = path.join(projectRoot, 'public', 'og-image.jpg')
const outputPath = path.join(projectRoot, 'public', 'og-image.compressed.jpg')

async function main() {
    try {
        const input = await fs.readFile(inputPath)
        const pipeline = sharp(input)
            .resize({
                width: 1200,
                height: 630,
                fit: 'cover',
                position: 'attention',
            })
            .jpeg({ quality: 85, mozjpeg: true, chromaSubsampling: '4:2:0' })

        const buffer = await pipeline.toBuffer()
        await fs.writeFile(outputPath, buffer)

        const orig = (await fs.stat(inputPath)).size
        const comp = (await fs.stat(outputPath)).size
        console.log(
            `Compressed OG image: ${(orig / 1024).toFixed(1)} KB -> ${(
                comp / 1024
            ).toFixed(1)} KB`
        )
    } catch (e) {
        console.error('Compression failed:', e)
        process.exit(1)
    }
}

main()
