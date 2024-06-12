import {dataReview, dataAspectReview} from 'helpers/api_data_models'
import { parseCSV, parseExcel } from 'helpers/processdata/parser';

export function generateSeries(data: dataReview[]) {
    interface absaInnerCount {
        "Positif": number,
        "Negatif": number,
        "Netral": number
    }

    // Use a Map to store dynamic aspects with their sentiment counts
    const aspectSentimentCount: Map<string, absaInnerCount> = new Map();

    data.forEach((review: dataReview) => {
        review.review_aspect!.forEach((aspect: dataAspectReview) => {
            if (!aspectSentimentCount.has(aspect.aspect)) {
                aspectSentimentCount.set(aspect.aspect, { "Positif": 0, "Negatif": 0, "Netral": 0 });
            }
            const sentimentCount = aspectSentimentCount.get(aspect.aspect)!;
            switch (aspect.sentiment) {
                case 1:
                    sentimentCount["Positif"]++;
                    break;
                case -1:
                    sentimentCount["Negatif"]++;
                    break;
                case 0:
                    sentimentCount["Netral"]++;
                    break;
                default:
                    console.warn(`Unexpected sentiment: ${aspect.sentiment}`);
                    break;
            }
        });
    });

    // Build the series data dynamically
    const series = [
        { name: 'Positif', data: [] as number[] },
        { name: 'Negatif', data: [] as number[] },
        { name: 'Netral', data: [] as number[] }
    ];

    // Iterate over the aspects and populate the series data
    aspectSentimentCount.forEach((counts, aspect) => {
        series[0].data.push(counts["Positif"]);
        series[1].data.push(counts["Negatif"]);
        series[2].data.push(counts["Netral"]);
    });

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


export function countSentiment(data:dataReview[]) {

    let totalPositif = 0;
    let totalNegatif = 0;
    let totalNetral = 0;

    data.forEach((review  : dataReview)=> {
        review!.review_aspect!.forEach(aspect => {
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


export function countAspects(data: dataReview[], aspect_list: string[]): number[] {
    // Initialize aspect counts based on the provided fields
    const fields = aspect_list.map(aspect=>aspect.toLowerCase())
    const aspectCount: number[] = new Array(fields.length).fill(0);
    
    // Count occurrences of each aspect
    data.forEach((review: dataReview) => {
        review.review_aspect?.forEach((aspect: dataAspectReview) => {
            const index = fields.indexOf(aspect.aspect);
            if (index !== -1) {
                aspectCount[index]++;
            } else {
                // console.warn(`Unexpected aspect: ${aspect.aspect}`);
            }
        });
    });

    // Calculate the total count
    const totalAspectCount = aspectCount.reduce((acc, curr) => acc + curr, 0);

    // Return the counts with the total as the last element
    return [...aspectCount, totalAspectCount];
}

export function filterReviews(
    data: dataReview[],
    keywordSearch: string | null,
    keywordAspect: string | null,
    sentiment: number 
): dataReview[] {
    return data.filter(review => {
        let matchesKeyword = true;
        let matchesAspect = true;
        let matchesSentiment = true;

        // Filter by keyword search
        if (keywordSearch) {
            matchesKeyword = review.review_text.toLowerCase().includes(keywordSearch.toLowerCase());
        }

        // Helper function to check aspects
        const checkAspects = (aspects: dataAspectReview[]) => {
            return aspects.some(aspect => {
                let aspectMatch = true;
                let sentimentMatch = true;

                if (keywordAspect) {
                    aspectMatch = aspect.aspect.toLowerCase() === keywordAspect.toLowerCase();
                }

                if (sentiment) {
                    sentimentMatch = aspect.sentiment === sentiment
                }

                return aspectMatch && sentimentMatch;
            });
        };

        // Filter by aspect and sentiment
        if (keywordAspect || sentiment) {
            if (review!.real_review_aspect!.length > 0) {
                matchesAspect = checkAspects(review!.real_review_aspect!);
            } else {
                matchesAspect = checkAspects(review!.review_aspect!);
            }

            if (review!.real_review_aspect!.length > 0) {
                matchesSentiment = checkAspects(review!.real_review_aspect!);
            } else {
                matchesSentiment = checkAspects(review!.review_aspect!);
            }
        }

        return matchesKeyword && matchesAspect && matchesSentiment;
    });
}


export async function processFile(file:File)  {
        switch (file.type) {
        case ('text/csv'):  
            return await parseCSV(file)
        case ('application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'):            
            return await parseExcel(file)        
        default:
            throw TypeError("Tipe File Tidak Sesuai")
    }
}

export function hashWord(text:string, seed=0){
    let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
    for(let i = 0, ch; i < text.length; i++) {
        ch = text.charCodeAt(i);
        h1 = Math.imul(h1 ^ ch, 2654435761);
        h2 = Math.imul(h2 ^ ch, 1597334677);
    }
    h1  = Math.imul(h1 ^ (h1 >>> 16), 2246822507);
    h1 ^= Math.imul(h2 ^ (h2 >>> 13), 3266489909);
    h2  = Math.imul(h2 ^ (h2 >>> 16), 2246822507);
    h2 ^= Math.imul(h1 ^ (h1 >>> 13), 3266489909);
  
    return 4294967296 * (2097151 & h2) + (h1 >>> 0);
}

export function getSentimentRatio(data: dataReview[]): number {
    let positiveCount = 0;
    let negativeCount = 0;

    data.forEach(review => {
        const aspects = review?.real_review_aspect!.length > 0 ? review.real_review_aspect : review.review_aspect;
        
        aspects!.forEach(aspect => {
            if (aspect.sentiment === 1) {
                positiveCount++;
            } else if (aspect.sentiment === -1) {
                negativeCount++;
            }
        });
    });

    const ratio = negativeCount === 0 ? positiveCount : positiveCount / negativeCount;

    return ratio;
}

export function calculateNPS(data: dataReview[]): number {
    let promoterCount = 0;
    let detractorCount = 0;
    let totalReviews = 0;

    data.forEach(review => {
        const aspects = review!.real_review_aspect!.length > 0 ? review?.real_review_aspect! : review.review_aspect;

        aspects?.forEach(aspect => {
            totalReviews++;
            const sentiment = aspect.sentiment;

            if (sentiment === 1) {
                promoterCount++;
            } else if (sentiment === -1) {
                detractorCount++;
            }
            // Neutral sentiments are considered passive and not counted in NPS
        });
    });

    if (totalReviews === 0) {
        return 0;
    }

    const promoterPercentage = (promoterCount / totalReviews) * 100;
    const detractorPercentage = (detractorCount / totalReviews) * 100;

    const nps = promoterPercentage - detractorPercentage;
    return Math.round(nps); // NPS is typically rounded to the nearest whole number
}