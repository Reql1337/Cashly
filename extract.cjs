const fs = require('fs');
const data = JSON.parse(fs.readFileSync('lighthouse.json', 'utf8'));
for (const key in data.categories) {
    console.log(`${data.categories[key].title}: ${Math.round(data.categories[key].score * 100)}`);
}
