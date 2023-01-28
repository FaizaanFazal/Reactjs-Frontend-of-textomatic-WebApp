import React from 'react'
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faChartBar } from '@fortawesome/free-solid-svg-icons';
import { faBroom } from '@fortawesome/free-solid-svg-icons';

export default function Toolsoverview() {
  return (
    <div className='m-2'>
    <div className='toolscont'>
   
   <h1 className='text-center p-1'> Tools</h1>
  
    <div className='toolsbox  row justify-content-center bg-Lilac'>
        <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-blue mb-3" >
             <div class="card-header bg-white"><FontAwesomeIcon icon={faPen} /></div>
                <div class="card-body">
                 <h5 class="card-title" >Grammarly</h5></div></div>
    </div>
    </Link>

    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-green mb-3" >
             <div class="card-header bg-white"><FontAwesomeIcon icon={faSearch}  /></div>
                <div class="card-body">
                 <h5 class="card-title">Corpus Explorer</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-orange mb-3" >
             <div class="card-header bg-white"><FontAwesomeIcon icon={faChartBar}  /></div>
                <div class="card-body">
                 <h5 class="card-title">Text Analytics Tool</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-purple mb-3" >
             <div class="card-header bg-white"><FontAwesomeIcon icon={faBroom} /></div>
                <div class="card-body">
                 <h5 class="card-title">Data Scrubber</h5></div></div>
    </div>
    </Link>
   
    </div>
    </div>
    <h3 className='container-fluid mt-2 explaniationbox text-center'>
        What are These Tools?
    </h3>
    <div className='container'>
  

    <div className=' row mx-auto bordergraylight bg-blue'>
        <div className='col-sm-8'>
            <h3>Grammarly</h3>
            <p>A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. Some grammar checker tools also provide suggestions for improving sentence structure and readability.</p>
        </div>
      
    </div>

    <div className=' row mx-auto bordergraylight bg-green'>
        <div className='col-sm-8'>
            <h3>Corpus Explorer</h3>
            <p>A corpus is a collection of text data that can be used for linguistic research and analysis. Corpus availability refers to the availability of such a collection of text data for a specific language or domain. It can be used for natural language processing, text mining, and other forms of text analysis.</p>
        </div>
       
    </div>

    <div className=' row mx-auto bordergraylight bg-orange'>
        <div className='col-sm-8'>
            <h3>Text Analytics Tool</h3>
            <p>An analyzer is a tool or software that is used to process and analyze large amounts of data. This can include text data, numerical data, or other types of data. An analyzer can be used to extract insights, patterns, and trends from the data, and can help identify areas for improvement or optimization.</p>
        </div>
       
    </div>

    <div className=' row mx-auto bordergraylight bg-purple'>
        <div className='col-sm-8'>
            <h3>Data Scrubber</h3>
            <p> A data cleaner is a tool that is used to clean, format, and organize data. This can include removing duplicates, correcting errors, and standardizing formatting. A data cleaner can help ensure that data is accurate and consistent, and can make it easier to work with and analyze the data.</p>
        </div>
       
    </div>

    {/* copy  the above div after filling it and change content*/}

    </div>


    </div>

  )
}
