// const fs = require('fs');
// const path = require('path');

// const originalPath = path.join(__dirname, 'artists-2.json');
// if (!fs.existsSync(originalPath)) {
//   console.error('Não encontrou artists-2.json na raiz do projeto.');
//   process.exit(1);
// }
// const originalData = JSON.parse(fs.readFileSync(originalPath, 'utf-8'));

// const imagesDir = path.join(__dirname, 'images-api');
// if (!fs.existsSync(imagesDir)) {
//   console.error('Não encontrou a pasta images-api/.');
//   process.exit(1);
// }
// const imageFiles = fs.readdirSync(imagesDir);

// function slugify(name) {
//   return name
//     .toLowerCase()
//     .normalize('NFD')     
//     .replace(/\p{Diacritic}/gu, '')
//     .replace(/[^\w]+/g, '-')
//     .replace(/^-+|-+$/g, '');
// }

// const updatedArtists = originalData.artists.map((artist) => {
//   const slug = slugify(artist.name);

//   const match = imageFiles.find(f => f.toLowerCase().includes(slug));
//   if (match) {
//     artist.urlImg = `/images-api/${match}`;
//   } else {
//     artist.urlImg = '/images-api/default-artist.png';
//     console.warn(`⚠️  Sem imagem local para: ${artist.name}`);
//   }
//   return artist;
// });

// const newJson = { artists: updatedArtists };
// fs.writeFileSync(
//   path.join(__dirname, 'artists-2-local.json'),
//   JSON.stringify(newJson, null, 2),
//   'utf-8'
// );
// console.log('✅ Novo arquivo gerado: artists-2-local.json');
