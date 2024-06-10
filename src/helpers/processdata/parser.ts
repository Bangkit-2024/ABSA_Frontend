import readXlsxFile from 'read-excel-file'
import Papa from 'papaparse'

export const parseCSV =  (file:any)=> new Promise((resolve, reject) => {
    Papa.parse(file, {
        header: true,
        complete: (results) => {        
          const headers = results.meta.fields;
          const content = results.data.map((row:any) => Object.values(row)).slice(1,10);
          resolve({ header: headers, content: content })
        },
        error (err, file) {
            reject(err)
      }
    })
  })
    

export const parseExcel = (file:any)=> readXlsxFile(file,{sheet:1}).then((rows)=>{    
    const headers = rows[0];
    const content = rows.slice(1,10);
    return { header: headers, content: content };
})