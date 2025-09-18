// scripts/optimize-images.mjs
import imagemin from 'imagemin';
import imageminMozjpeg from 'imagemin-mozjpeg';
import imageminPngquant from 'imagemin-pngquant';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const assetDirs = [
  join(__dirname, '../src/assets'),
  join(__dirname, '../public'),
];

async function optimizeImages() {
  for (const dir of assetDirs) {
    const files = [
      join(dir, '*.jpg'),
      join(dir, '*.jpeg'),
      join(dir, '*.png'),
    ];
    const optimized = await imagemin(files, {
      destination: dir,
      plugins: [
        imageminMozjpeg({ quality: 78 }),
        imageminPngquant({ quality: [0.7, 0.85] }),
      ],
    });
    console.log(`Optimized ${optimized.length} images in ${dir}`);
  }
}

optimizeImages();
