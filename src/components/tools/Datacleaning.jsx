import React, { useContext, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios';
import { axiosInstance } from '../../config';

export const Datacleaning = () => {

    const [file, setFile] = useState();
    const [opts,setOpts]=useState([]);
    const [pathslist,setPathslist]=useState({})
    const [filepath, setFilepath] = useState("");
    const [fileName, setFileName] = useState("");
    let p='';
 
    //upload file
    const UploadNow=async()=>{
      const formData = new FormData();
      formData.append("file", file);
      formData.append("fileName", fileName);
      try {
        const res= await axiosInstance.post("/Datacleaning/upload",formData)
        p = res.data.toString();
        p=p.replace(/(\r\n|\n|\r)/gm, "");
        p=p.replace(/\\/g, '/');
        console.log("response was :",p);
        
        setFilepath(p)
        console.log(filepath);
      
      } catch (ex) {
        console.log(ex);
      }
    }
    const saveFile = async(e) => {
       setFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
       
      
      };
      const handleCheckboxChange=(e)=>{
            if(e.target.checked){
              setOpts([...opts, e.target.value]);
            
            }
            else{
              setOpts(opts.filter((item) => item !== e.target.value));
             
            }
            console.log(opts)
      }
      //upload to serveer
      const Apply = async (e) => {
      
       opts.forEach((item) => {
          console.log(item)
          console.log("file path is ",filepath)
        
          try {
          
            axiosInstance.post("/Datacleaning/upload/"+item+"?param1="+ filepath.replace(/\\/g, '/')).then(
              res=>{ p = res.data.toString();
                console.log("aya"+res.data)
               p=p.replace(/(\r\n|\n|\r)/gm, "");
          
            setPathslist({ ...pathslist, [item]: p });
          }
            )
            
           
           
          } catch (ex) {
            console.log(ex);
            setFilepath(ex)
          }
        })
       
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
    <button className="btn btn-outline-primary rounded-pill px-5" onClick={UploadNow}>Upload</button>   
    </div>
    <div className='row m-2'>
      <div className='col-sm-4 col-md-3'>
      <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" value="binary"
                        onChange={(e)=>handleCheckboxChange(e)} />
                   </div>
                  </div>
                  <label  className="form-control" aria-label="Text input with checkbox"> Apply Binary</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                        value="entropy"
                        onChange={(e)=>handleCheckboxChange(e)} />
                   </div>
                  </div>
                  <label  className="form-control" aria-label="Text input with checkbox">Entropy</label>
               
            </div>
      </div>

      <div className='col-sm-4 col-md-3'>
      <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" 
                          value="tfc"
                          onChange={(e)=>handleCheckboxChange(e)}
                        />
                   </div>
                  </div>
                  <label  className="form-control" aria-label="Text input with checkbox"> TFC</label>
               
            </div>
      </div>

      <div className='col-sm-4 col-md-3'>
      <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input" 
                          value="LTC"
                          onChange={(e)=>handleCheckboxChange(e)}
                        />
                   </div>
                  </div>
                  <label  className="form-control" aria-label="Text input with checkbox">LTC</label>
               
            </div>
      </div>
      <div className='col-sm-4 col-md-3'>
      <div className="input-group mb-3">
                  <div className="input-group-prepend">
                    <div className="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"
                        value="tfidf"
                        onChange={(e)=>handleCheckboxChange(e)} />
                   </div>
                  </div>
                  <label  className="form-control" aria-label="Text input with checkbox">TFIDF</label>
               
            </div>
      </div>
    </div>

    <button className="btn btn-outline-primary rounded-pill px-5" onClick={Apply}>Apply</button>    
    
    <div>{filepath}</div>
          {filepath ? 
            <button onClick={handleDownload}>Download</button>         
          :<div></div>}

         <div className='row m-2'>
         { pathslist? Object.entries(pathslist).map(([key, value]) => {
                    return <div className='col-sm-4 col-md-3' key={key}> {key}: {value}</div>
                }):<div></div>  
            }
                 
         </div> 

    </div>
    </div>
    


    </>
  )
}
