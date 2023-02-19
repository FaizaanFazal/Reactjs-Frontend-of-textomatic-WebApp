import React, { useState } from 'react';
import axios from 'axios';



const UploadCorpus = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (file) {
      const formData = new FormData();
      formData.append('file', file);

      axios
        .post('/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        })
        .then((res) => {
          setMessage(`File uploaded: ${res.data.filename}`);
        })
        .catch((err) => {
          console.error(err);
          setMessage('Upload failed. Please try again.');
        });
    }
  };

  return (
    <div className="upload-corpus-container">
      <h2>Upload Corpus</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="file">Choose a file:</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>
        <button type="submit">Upload</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default UploadCorpus;
