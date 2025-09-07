/* Compresses src/assets/Profile Pic.jpg into 128px and 256px WebP variants for Avatar.
   Usage: npm run compress:profile
*/
import sharp from 'sharp'
import { promises as fs } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const projectRoot = path.resolve(__dirname, '..')
const inputPath = path.join(projectRoot, 'src', 'assets', 'Profile Pic.jpg')
const out128 = path.join(projectRoot, 'src', 'assets', 'profile-pic-128.webp')
const out256 = path.join(projectRoot, 'src', 'assets', 'profile-pic-256.webp')

async function buildVariant(width, height, outPath) {
    const input = await fs.readFile(inputPath)
    const buffer = await sharp(input)
        .resize({ width, height, fit: 'cover', position: 'attention' })
        .webp({ quality: 80 })
        .toBuffer()
    await fs.writeFile(outPath, buffer)
    return (await fs.stat(outPath)).size
}

async function main() {
    try {
        const s128 = await buildVariant(128, 128, out128)
        const s256 = await buildVariant(256, 256, out256)
        console.log(
            `Wrote profile-pic-128.webp: ${(s128 / 1024).toFixed(1)} KB`
        )
        console.log(
            `Wrote profile-pic-256.webp: ${(s256 / 1024).toFixed(1)} KB`
        )
    } catch (e) {
        console.error('Profile picture compression failed:', e)
        process.exit(1)
    }
}

main()
