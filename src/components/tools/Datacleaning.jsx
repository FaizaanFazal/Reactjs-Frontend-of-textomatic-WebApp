import React, { useContext, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import { AuthContext } from "../../context/AuthContext"
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Datacleaning = () => {

    const [file, setFile] = useState();
    const [opts,setOpts]=useState([]);
    const [pathslist,setPathslist]=useState([])// to store resultant paths
    const [locallist,setLocallist]=useState(pathslist)// to render the above path list by using useEffect
    const [filepath, setFilepath] = useState("");
    const [fileName, setFileName] = useState("");
    let p='';
 

    //toast appearance
    // toast.success("Great Success !", {
    //   position: "top-right",
    //   autoClose: 5000,
    //   hideProgressBar: false,
    //   closeOnClick: true,
    //   pauseOnHover: true,
    //   draggable: true,
    //   progress: undefined,
    // });
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
        toast('File uploaded succesfully');
        setFilepath(p)

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
          
            setPathslist(prevList => [...prevList, {  [item]: p }])
          //  setPathslist({ ...pathslist, [item]: p });
          }
            )
            
           
           
          } catch (ex) {
            console.log(ex);
            setFilepath(ex)
          }
        })
       
      };
      
      const handleDownload = async (e) => {
        let downloadpath=e.target.value;
        axios({
          url: 'http://localhost:8081/server/download',
          method: 'GET',
          params: { downloadpath },
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
      useEffect(()=>{
          setLocallist(pathslist)
      },[pathslist])

  return (
    <>
    <div className='container text-black mb-5 text-center'>
    <br/>
    <br/>
    <br/>
    <ToastContainer />

    <h3 className='text-center mt-4 mb-5'>Data Cleaner</h3>
    <div className='bordergraylight text-center'>
    <div>
    <input type="file" onChange={saveFile} />
    <button disabled={!file} className="btn btn-outline-primary rounded-pill px-5" onClick={UploadNow}>Upload</button>   
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
      <div className='col-sm-4 col-md-3 '>
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

    <button disabled={opts.length === 0}  className="btn btn-outline-primary rounded-pill px-5"  onClick={Apply}>Apply</button>    
    
    

         <div className='row m-2'>
         
         { locallist.map((item) => {
              let k = Object.keys(item)[0];
              let value = item[k];
       
          if (k==="entropy") {
          return <div key={k} className="col-sm-4 col-md-3 py-5 text-center">
            <h3 className='text-center'>Result of {k}</h3>
            <div> {value}</div>
            </div>
        } 
        else {
          return <div key={k} className="col-sm-4 col-md-3 py-5 text-center">
          <h3 className='text-center'>Result of {k}</h3>
           <div>
           <button className='btn btn-success rounded-pill px-5' 
            onClick={(e)=>handleDownload(e)} 
            value={value}
            >{k} Result</button>
            </div> 
          </div>
        }
        })}
                 
         </div> 

    </div>
    </div>
    


    </>
  )
}
