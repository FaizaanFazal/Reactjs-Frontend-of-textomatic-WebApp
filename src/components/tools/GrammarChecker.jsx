import React, { useState } from "react";
import axios from 'axios';
import { axiosInstance } from '../../config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const GrammarChecker = () => {
  const [input, setInput] = useState("");
  const [file, setFile] = useState(null);
  const [filepath, setFilepath] = useState("");
  const [output, setOutput] = useState("");
  const [outputfile, setOutputfile] = useState("");
  let p='';

  const handleSubmit = () => {
    // Perform the grammar check on the input text and file
    setOutput(performGrammarCheck(input, file));
  };

   const Apply = async (e) => {
          console.log("file path is ",filepath)
          try {
            axiosInstance.post("/grammar?param1="+ filepath.replace(/\\/g, '/')+"&param2=file").then(
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
    setFile(e.target.files[0]);
    const formData = new FormData();
      formData.append("file", file);

      try {
        const res= await axiosInstance.post("/Datacleaning/upload",formData)
        p = res.data.toString(); // file url
        p=p.replace(/(\r\n|\n|\r)/gm, "");
        p=p.replace(/\\/g, '/');
        console.log("response was :",p);
        toast('File uploaded succesfully.Processing...');
        setFilepath(p)

      } catch (ex) {
        console.log(ex);
      }
      if(filepath){
            Apply();
      }
   };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const performGrammarCheck = (text, file) => {
    // This is where you would write the code to perform the grammar check on the text and file.
    // In this example, we'll just return the text unchanged.
    return text;
  };

  return (
    <div className="grammar-checker">
      <h1>Grammar Checker</h1>
      <textarea value={input} onChange={(e) => setInput(e.target.value)} />
      <input type="file" onChange={saveFile}/>
      <button onClick={handleSubmit}>Submit</button>
      <div className="output">
        <p>Output:</p>
        <p>{output}</p>
      </div>
    </div>
  );
};

export default GrammarChecker;