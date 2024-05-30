const fs = require('fs');

const rawData = fs.readFileSync('response.json');
const response = JSON.parse(rawData);

const aspectIds = [];

response.forEach(review => {
    if (review.review_aspect && review.review_aspect.length > 0) {
        review.review_aspect.forEach(aspect => {
            aspectIds.push(aspect.id);
        });
    }
});

console.log(aspectIds);
