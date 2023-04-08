import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './fileUpload.css'
import apiManager from '@Helpers/apiManager';
import reorganize from '@Helpers/reorganizeJson';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    handleDrop(e)
  }

  return (
    <div>
      {/* <label htmlFor="file-upload">Choose a file:</label> */}
      <input id="file-upload" type="file" onChange={handleFileUpload} />
      {/* {file && <p>Selected file: {file.name}</p>} */}
    </div>
  );
}

function handleDrop(e) {
    const mistakes = []
    e.preventDefault();
    const file = e.target.files[0];
    if (file.name.toLowerCase().endsWith('.xlsx')) 
    {
    const reader = new FileReader();
    reader.onload = (event) => {
      const data = event.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const worksheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      // отправляем json по 10 строк
      const chunkSize = 10;
      
        //console.log(json)

        
      for (let i = 0; i < json.length; i += chunkSize) {

        const final_json = { 
        "arr" : [], 
        "adminId" : 1,
        "final" : false,
        "ex" : false
        }
        
        const chunk = json.slice(i, i + chunkSize);
        const payload = { data: chunk };

        final_json["arr"].push(...reorganize(payload))
        if (i+chunkSize >= json.length)
            final_json["final"] = true
        console.log(final_json)
        apiManager.admin_fill(final_json)
      }

      
    };
    reader.readAsBinaryString(file);
    }
    else{
        alert('Неправильный тип файла, поддерживается только .xlsx')
    }
  }

export default FileUpload;