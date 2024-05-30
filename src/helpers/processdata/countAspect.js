const fs = require('fs');

function countAspects(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const aspectCount = [
        // Rasa
        0,
        // Menu
        0,
        // Tempat
        0,
        // Harga
        0,
        // Pelayanan
        0
    ];

    data.forEach(review => {
        review.review_aspect.forEach(aspect => {
            switch (aspect.aspect) {
                case 'Rasa':
                    aspectCount[0]++;
                    break;
                case 'Menu':
                    aspectCount[1]++;
                    break;
                case 'Tempat':
                    aspectCount[2]++;
                    break;
                case 'Harga':
                    aspectCount[3]++;
                    break;
                case 'Pelayanan':
                    aspectCount[4]++;
                    break;
                default:
                    console.warn(`Unexpected aspect: ${aspect.aspect}`);
            }
        });
    });

    const totalAspectCount = {
        "Total": aspectCount.reduce((acc, curr) => acc + curr, 0)
    };

    return [...aspectCount, totalAspectCount["Total"]];
}

const filePath = './response.json';

const aspectCounts = countAspects(filePath);

console.log(aspectCounts);
