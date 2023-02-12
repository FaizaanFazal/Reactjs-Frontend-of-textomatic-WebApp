import React, { useState ,useEffect} from "react";
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GrammarChecker = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [filepath, setFilepath] = useState("");
  const [output, setOutput] = useState("");
  const [outputfile, setOutputfile] = useState("");// to store resultant path

  const [localpath,setLocalpath]=useState(outputfile)// to render the above path list by using useEffect
  let p='';

  const handleSubmit = () => {
    // Perform the grammar check on the input text and file
    setOutput(performGrammarCheck(input, file));
  };

   const Apply = async (e) => {
    toast.info('Processing Please Wait...');
    let para="";
      if(file){
        para="file";
      }
      else{
        para="text"
      }
          console.log("Applying on ",filepath)
          try {
            axiosInstance.post("/grammar?param1="+ filepath.replace(/\\/g, '/')+"&param2="+para).then(
              res=>{ p = res.data.toString();
              console.log("aya"+res.data)
              p=p.replace(/(\r\n|\n|\r)/gm, "");
              setOutputfile(p);
          })         
          } catch (ex) {
            console.log(ex);
          }
              
      };

  const saveFile = async(e) => {
    console.log(e)
      setFile(e.target.files[0]);
      setFileName(e.target.files[0].name);
      
   };

  
  const handleDownload = async (value) => {
    let downloadpath=value;
    axios({
      url: 'http://localhost:8081/server/download',
      method: 'GET',
      params: { downloadpath },
      responseType: 'blob',
    }).then(response => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      console.log("response data is: ",response.data)
      console.log("response is: ",response)
      let name= "Corrected.txt"
      link.setAttribute('download', name);
      document.body.appendChild(link);
      link.click();
    });

  };

  const performGrammarCheck = (text, file) => {
    return text;
  };
const UploadNow= async()=>{
  
  console.log("uploading")
  const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      await axiosInstance.post("/Datacleaning/upload",formData).then(res=>{
        p = res.data.toString(); // file url
        p=p.replace(/(\r\n|\n|\r)/gm, "");
        p=p.replace(/\\/g, '/');
        console.log("response was :",p);
        toast.success('File uploaded succesfully.');
        setFilepath(p)
      })
    } catch (ex) {
      console.log(ex);
    }
    
}
  useEffect(()=>{
 
    setLocalpath(outputfile)

},[outputfile])

  return (
  <div className='container text-black mb-5 text-center'> 
    <br/>
    <ToastContainer />
  
      <h2 className='text-center mt-4 mb-5'>Grammar Checker</h2>
    <div className="row">
      <div className="col-md-6">
  
            <div class="form-outline">
              <textarea class="form-control" id="textarea" rows="7"
              value={input} 
              onChange={(e) => setInput(e.target.value)}
              placeholder="Write Text"
              ></textarea>
           
            </div>
     
      </div>
      <div className="col-md-6 hide">
          
          <div class="form-outline output position-relative">
              <textarea disabled class="form-control" id="textarea" rows="7"
              value="Output here"
              onChange={(e) => setInput(e.target.value)}
              text=""
              ></textarea>
              <button className="pos-rt btn rounded m-0 p-2 ">C</button>
           
            </div>
          </div>
      
    </div>
    
    <br/>
     <h5 className="text-center m-3">Or</h5>

      <div class="custom-file">
        <input type="file"  id="customFile" onChange={(e)=>saveFile(e)}/>
        <button disabled={!file} className="btn btn-outline-primary rounded-pill px-5" onClick={UploadNow}>Upload</button>   
   
        {/* <label class="custom-file-label" for="customFile">Choose file in txt format</label> */}
      </div>
      <button disabled={!file || !input} onClick={Apply} className="btn rounded-pill px-5 bg-gradient-purple">Apply</button>

        {/* download */}
      <div className='row m-2'>
        { outputfile ? <div className="col-sm-12 py-5 text-center">
            <h3 className='text-center'>Download Suggested correction file </h3>
            <button className='btn btn-success rounded-pill px-5' 
            onClick={(e)=>handleDownload(e.target.value)} 
            value={outputfile}
            > Result</button>
            </div>:<div></div>
        }
      </div>
      <br/>
     
    
  </div>
  );
};

export default GrammarChecker;