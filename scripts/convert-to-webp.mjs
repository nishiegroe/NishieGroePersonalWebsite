// scripts/convert-to-webp.mjs
import imagemin from 'imagemin';
import imageminWebp from 'imagemin-webp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetDirs = [
  join(__dirname, '../src/assets'),
  join(__dirname, '../public'),
];

async function convertToWebp() {
  for (const dir of assetDirs) {
    const files = [
      join(dir, '*.jpg'),
      join(dir, '*.jpeg'),
      join(dir, '*.png'),
    ];
    const converted = await imagemin(files, {
      destination: dir,
      plugins: [
        imageminWebp({ quality: 80 }),
      ],
    });
    console.log(`Converted ${converted.length} images to WebP in ${dir}`);
  }
}

convertToWebp();
