const fs = require('fs');
const https = require('https');

// Download the logo first
const logoUrl = 'https://cdn-next.cybassets.com/media/W1siZiIsIjIxNzUyL2F0dGFjaGVkX3Bob3Rvcy8xNjU1ODYxMjA0X-WwjuimveWIl0xPR09fMzAwWDEwMC5wbmcucG5nIl1d.png?sha=d494239b8cbafce9';
const file = fs.createWriteStream('public/sponsor-logo-1.png');

https.get(logoUrl, (response) => {
  response.pipe(file);
  file.on('finish', () => {
    file.close();
    console.log('Logo downloaded successfully!');
    console.log('Note: You will need to manually add the purple background using an image editor.');
    console.log('Background color: rgb(91, 49, 94)');
    console.log('Canvas size: 640x480');
  });
}).on('error', (err) => {
  fs.unlink('public/sponsor-logo-1.png', () => {});
  console.error('Error downloading:', err.message);
});
