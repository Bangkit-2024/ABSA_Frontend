const fs = require('fs');

function countSentiments(filePath) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    let totalPositif = 0;
    let totalNegatif = 0;
    let totalNetral = 0;

    data.forEach(review => {
        review.review_aspect.forEach(aspect => {
            switch (aspect.sentiment) {
                case 1:
                    totalPositif++;
                    break;
                case -1:
                    totalNegatif++;
                    break;
                case 0:
                    totalNetral++;
                    break;
                default:
                    console.warn(`Unexpected sentiment value: ${aspect.sentiment}`);
                    break;
            }
        });
    });

    return [totalPositif, totalNegatif, totalNetral];
}

const filePath = './response.json';

const sentimentCounts = countSentiments(filePath);

console.log(sentimentCounts);
