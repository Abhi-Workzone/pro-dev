const fs = require('fs');
const path = require('path');

// Create directories if they don't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
const optimizedDir = path.join(__dirname, '..', 'public', 'images', 'optimized');

if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}
if (!fs.existsSync(optimizedDir)) {
  fs.mkdirSync(optimizedDir, { recursive: true });
}

// Image URLs from content.ts
const imageUrls = [
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75',  // image-1.jpg
  'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=75',  // image-2.jpg
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=75',  // image-3.jpg
  'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=600&q=75',  // image-4.jpg
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=600&q=75',  // image-5.jpg
  'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=75',  // image-6.jpg (Hero)
  'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=600&q=75',  // image-7.jpg (Hero)
  'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=75',  // image-8.jpg (Hero)
];

const https = require('https');
const { execSync } = require('child_process');

async function downloadImages() {
  console.log('🚀 Starting image download process...');  
  for (let i = 0; i < imageUrls.length; i++) {
    const url = imageUrls[i];
    const filename = `image-${i + 1}.jpg`;
    const filepath = path.join(imagesDir, filename);
    
    console.log(`📥 Downloading image ${i + 1}/${imageUrls.length}: ${filename}`);
    
    try {
      // Download image using curl
      const response = await fetch(url);
      const buffer = await response.arrayBuffer();
      fs.writeFileSync(filepath, Buffer.from(buffer));
      
      console.log(`✅ Downloaded: ${filename}`);
      
      // Optimize with sharp (if available)
      try {
        execSync(`npx sharp ${filepath} --quality=75 --output ${path.join(optimizedDir, filename)}`, { stdio: 'inherit' });
        console.log(`🎨 Optimized: ${filename}`);
      } catch (error) {
        console.log(`⚠️  Sharp optimization failed for ${filename}:`, error.message);
        // Copy original if optimization fails
        fs.copyFileSync(filepath, path.join(optimizedDir, filename));
      }
      
    } catch (error) {
      console.error(`❌ Failed to download ${filename}:`, error.message);
    }
    
    // Add delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log('🎉 Image download process completed!');
}

downloadImages().catch(console.error);
