import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios';
import { axiosInstance } from '../../config';

export const Datacleaning = () => {

    const [file, setFile] = useState();
    const [result, setResult] = useState(null);
    const [fileName, setFileName] = useState("");
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
          console.log("response ayaa g ",res.data.output);
          setResult(res.data.output)
        } catch (ex) {
          console.log(ex);
          setResult(ex)
        }
      };

  return (
    <>
    <div className='text-center'>

        <h3>datacleaning tool</h3>
        <input type="file" onChange={saveFile} />
          <button onClick={uploadFile}>Upload</button>
          <div>Output</div>
          {result ? <div>{result}</div>:<div>result:</div>}
    </div>


    </>
  )
}
