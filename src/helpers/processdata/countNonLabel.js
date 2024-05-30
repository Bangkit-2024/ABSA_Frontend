const response = require('./response.json');

const nonLabelledReviews = [];

response.forEach(review => {
    if (review.review_aspect.length === 0) {
        nonLabelledReviews.push(review);
    }
});


const output = {
    nonlabelledReview: nonLabelledReviews.length,
    nonLabelledReviewid: nonLabelledReviews.map(review => review.company_id)
};


console.log(output);