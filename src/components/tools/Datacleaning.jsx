import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios';
import { axiosInstance } from '../../config';

export const Datacleaning = () => {

    const [file, setFile] = useState();
    const [filepath, setFilepath] = useState("");
    const [fileName, setFileName] = useState("");
    let p='';
    //keep file name and file on change
    const saveFile = (e) => {
        setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
      };

      //upload to serveer
      const uploadFile = async (e) => {
        const formData = new FormData();
        formData.append("file", file);
        formData.append("fileName", fileName);
        try {
          const res= await axiosInstance.post("/Datacleaning/upload",formData)
          p = res.data.toString();
          p=p.replace(/(\r\n|\n|\r)/gm, "");
          console.log("response ayaa g ",p);
          
          setFilepath(p)
        } catch (ex) {
          console.log(ex);
          setFilepath(ex)
        }
      };
      
      const handleDownload = async () => {
        axios({
          url: 'http://localhost:8081/server/download',
          method: 'GET',
          params: { filepath },
          responseType: 'blob',
        }).then(response => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement('a');
          link.href = url;
          link.setAttribute('download', 'file.txt');
          document.body.appendChild(link);
          link.click();
        });

      };

  return (
    <>
    <div className='container text-black mb-5 text-center'>
    <br/>
    <br/>
    <br/>

    <h3 className='text-center mt-4 mb-5'>Data Cleaner</h3>
    <div className='bordergraylight text-center'>
    <div>
    <input type="file" onChange={saveFile} />
    </div>
    <div className='row m-2'>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Apply Binary</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> Entropy</label>
               
            </div>
      </div>

      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox"> TFC-Term Frequency Collection</label>
               
            </div>
      </div>

      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox">LTC-Length Term Frequency</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div class="input-group mb-3">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" />
                   </div>
                  </div>
                  <label  class="form-control" aria-label="Text input with checkbox">TFIDF-Term Frequency Inverse Document</label>
               
            </div>
      </div>
    </div>
    <button onClick={uploadFile}>Apply</button>    
    
    <div>{filepath}</div>
          {filepath ? 
            <button onClick={handleDownload}>Download</button>
         
          :<div>result:</div>}
    </div>
    </div>
    


    </>
  )
}
