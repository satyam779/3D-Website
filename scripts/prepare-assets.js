const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const srcDir = path.join(rootDir, 'Robot');
const destSeqDir = path.join(rootDir, 'public/images/robot/sequence');
const destBaseDir = path.join(rootDir, 'public/images/robot');

fs.mkdirSync(destSeqDir, { recursive: true });
fs.mkdirSync(destBaseDir, { recursive: true });

const totalTargetFrames = 120;
const totalSourceFrames = 250;

for (let i = 1; i <= totalTargetFrames; i++) {
  const srcIdx = Math.round(1 + ((i - 1) / (totalTargetFrames - 1)) * (totalSourceFrames - 1));
  const srcFile = path.join(srcDir, 'ezgif-frame-' + String(srcIdx).padStart(3, '0') + '.jpg');
  const destWebpFile = path.join(destSeqDir, 'frame_' + String(i).padStart(4, '0') + '.webp');
  const destJpgFile = path.join(destSeqDir, 'frame_' + String(i).padStart(4, '0') + '.jpg');
  
  if (fs.existsSync(srcFile)) {
    fs.copyFileSync(srcFile, destWebpFile);
    fs.copyFileSync(srcFile, destJpgFile);
  }
}

// Copy feature detail images
const heroSrc = path.join(srcDir, 'ezgif-frame-250.jpg');
const detailsSrc = path.join(srcDir, 'ezgif-frame-150.jpg');
const sensorSrc = path.join(srcDir, 'ezgif-frame-100.jpg');
const pcbSrc = path.join(srcDir, 'ezgif-frame-050.jpg');

fs.copyFileSync(heroSrc, path.join(destBaseDir, 'hero-robot.png'));
fs.copyFileSync(detailsSrc, path.join(destBaseDir, 'robot-details.png'));
fs.copyFileSync(sensorSrc, path.join(destBaseDir, 'sensor-detail.png'));
fs.copyFileSync(pcbSrc, path.join(destBaseDir, 'pcb-detail.png'));

console.log('Successfully prepared 120 sequence frames and 4 detail images!');
