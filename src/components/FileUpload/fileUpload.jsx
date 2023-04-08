import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import './fileUpload.css'

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (e) => {
    setFile(e.target.files[0]);
    handleDrop(e)
  }

  return (
    <div>
      <label htmlFor="file-upload">Choose a file:</label>
      <input id="file-upload" type="file" onChange={handleFileUpload} />
      {/* {file && <p>Selected file: {file.name}</p>} */}
    </div>
  );
}

function handleDrop(e) {
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
      for (let i = 0; i < json.length; i += chunkSize) {
        const chunk = json.slice(i, i + chunkSize);
        const payload = { data: chunk };
        // отправляем payload на сервер
        console.log(payload)
        const formData = new FormData();
        
      }
    };
    reader.readAsBinaryString(file);
    }
    else{
        alert('Неправильный тип файла, поддерживается только .xlsx')
    }
  }

export default FileUpload;