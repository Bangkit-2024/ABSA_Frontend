const fs = require('fs');

function countData(filePath) {

    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));


    const aspectSentimentCount = {
        "Rasa": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Menu": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Tempat": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Harga": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Pelayanan": { "Positif": 0, "Negatif": 0, "Netral": 0 }
    };


    data.forEach(review => {
        review.review_aspect.forEach(aspect => {
            switch (aspect.sentiment) {
                case 1:
                    aspectSentimentCount[aspect.aspect]["Positif"]++;
                    break;
                case -1:
                    aspectSentimentCount[aspect.aspect]["Negatif"]++;
                    break;
                case 0:
                    aspectSentimentCount[aspect.aspect]["Netral"]++;
                    break;
                default:
                    break;
            }
        });
    });


    const series = [{
        name: 'Positif',
        data: [
            aspectSentimentCount["Rasa"]["Positif"],
            aspectSentimentCount["Menu"]["Positif"],
            aspectSentimentCount["Tempat"]["Positif"],
            aspectSentimentCount["Harga"]["Positif"],
            aspectSentimentCount["Pelayanan"]["Positif"]
        ]
    }, {
        name: 'Negatif',
        data: [
            aspectSentimentCount["Rasa"]["Negatif"],
            aspectSentimentCount["Menu"]["Negatif"],
            aspectSentimentCount["Tempat"]["Negatif"],
            aspectSentimentCount["Harga"]["Negatif"],
            aspectSentimentCount["Pelayanan"]["Negatif"]
        ]
    }, {
        name: 'Netral',
        data: [
            aspectSentimentCount["Rasa"]["Netral"],
            aspectSentimentCount["Menu"]["Netral"],
            aspectSentimentCount["Tempat"]["Netral"],
            aspectSentimentCount["Harga"]["Netral"],
            aspectSentimentCount["Pelayanan"]["Netral"]
        ]
    }];

    return series;
}

const filePath = './response.json';


const series = countData(filePath);

console.log(series); 
