import {dataReview, dataAspectReview} from 'helpers/api_data_models'

export function generateSeries(data : dataReview[]) {
    interface absaInnerCount {
        "Positif":number,
        "Negatif":number,
        "Netral":number
    }
    interface absaCount {
        "Rasa": absaInnerCount,
        "Menu": absaInnerCount,
        "Tempat": absaInnerCount,
        "Harga": absaInnerCount,
        "Pelayanan": absaInnerCount
        [key: string]: absaInnerCount;
    }

    const aspectSentimentCount : absaCount = {
        "Rasa": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Menu": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Tempat": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Harga": { "Positif": 0, "Negatif": 0, "Netral": 0 },
        "Pelayanan": { "Positif": 0, "Negatif": 0, "Netral": 0 }
    };

    data.forEach((review : dataReview) => {
        review.review_aspect!.forEach((aspect : dataAspectReview) => {
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


export function generateWordCloud(data:dataReview[]){
    interface Word {
        text: string;
        value: number;
    }

    const wordList: Word[] = [];

    data.forEach(review => {
        const words = review.review_text.toLowerCase().match(/\b\w+\b/g);
        if (words) {
            words.forEach(word => {
                wordList.push({
                    text: word,
                    value: word.length
                });
            });
        }
    });

    return wordList;    
}

