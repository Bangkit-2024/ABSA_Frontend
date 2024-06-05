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
            data.push(row);
        }
    }
    
    const contoh_output = {
        header: header,
        data: data
    };
    
    return contoh_output;
}

try {
    const result = processFile('./dataset_rasa_makanan_1000.csv');
    console.log(result);
} catch (error) {
    console.error(error.message);
}
