const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

function processFile(file_masuk) {
    const ext = path.extname(file_masuk).toLowerCase();
    
    if (ext !== '.csv' && ext !== '.xlsx') {
        throw new Error('File harus berformat .csv atau .xlsx');
    }
    
    let rows;
    if (ext === '.csv') {
        const fileContent = fs.readFileSync(file_masuk, 'utf8');
        rows = fileContent.split('\n').map(row => row.trim());
    } else if (ext === '.xlsx') {
        const workbook = xlsx.readFile(file_masuk);
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        rows = xlsx.utils.sheet_to_csv(worksheet).split('\n').map(row => row.trim());
    }
    
    const header = rows[0].split(',');
    if (header.some(h => h.trim() === '')) {
        throw new Error('Data pada baris pertama (header) tidak boleh kosong.');
    }
    
    const data = [];
    for (let i = 1; i < rows.length; i++) {
        const row = rows[i].split(',').map(col => col.trim());
        
        if (row.length === 1 && row[0] === '') {
            console.log(`Data pada baris ke-${i + 1} kosong`);
            continue;
        }
        
        if (row.length !== header.length) {
            console.log(`Jumlah indeks pada baris ke-${i + 1} tidak sesuai dengan jumlah indeks pada header.`);
            continue;
        }
        
        let rowHasEmptyColumn = false;
        for (let j = 0; j < row.length; j++) {
            if (row[j] === '') {
                console.log(`Data pada kolom ke-${j + 1} pada baris ke-${i + 1} kosong`);
                rowHasEmptyColumn = true;
            }
        }
        
        if (!rowHasEmptyColumn) {
            const rowData = {};
            for (let j = 0; j < header.length; j++) {
                rowData[header[j]] = row[j];
            }
            data.push(rowData);
        }
    }
    
    return data;
}

function analyzeData(data) {
    const aspectCounts = {};
    const sentimentCounts = {};

    data.forEach(row => {
        console.log('Processing row:', row); // Print each row to debug
        Object.entries(row).forEach(([key, value]) => {
            if (!aspectCounts[key]) {
                aspectCounts[key] = 0;
            }
            aspectCounts[key]++;
            
            if (!sentimentCounts[key]) {
                sentimentCounts[key] = { positive: 0, negative: 0, neutral: 0 };
            }
            
            const sentiment = value.toLowerCase().trim();
            if (sentiment === 'positive') {
                sentimentCounts[key].positive++;
            } else if (sentiment === 'negative') {
                sentimentCounts[key].negative++;
            } else if (sentiment === 'neutral') {
                sentimentCounts[key].neutral++;
            }
        });
    });

    return { aspectCounts, sentimentCounts };
}

try {
    const data = processFile('./dataset_rasa_makanan_1000.csv');
    const analysisResult = analyzeData(data);
    console.log(analysisResult);
} catch (error) {
    console.error(error.message);
}
