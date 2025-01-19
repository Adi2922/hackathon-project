import React, { useState } from 'react';


const PDFUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = (event) => {
    event.preventDefault();
    if (file) {
      alert(`File "${file.name}" uploaded successfully!`);
    } else {
      alert("Please select a file to upload.");
    }
  };

  return (
    <div className="pdf-upload-container">
      <h2>Upload Your PDF</h2>
      <form onSubmit={handleUpload} className="pdf-upload-form">
        <input
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="pdf-upload-input"
        />
        <button type="submit" className="upload-button">
          Upload
        </button>
      </form>
      {file && <p>Selected File: {file.name}</p>}
    </div>
  );
};

export default PDFUpload;
