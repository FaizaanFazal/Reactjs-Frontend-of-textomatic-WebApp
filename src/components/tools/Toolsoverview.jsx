import React from 'react'
import { Link } from "react-router-dom"
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faPen } from '@fortawesome/free-solid-svg-icons';
// import { faSearch } from '@fortawesome/free-solid-svg-icons';
// import { faChartBar } from '@fortawesome/free-solid-svg-icons';
// import { faBroom } from '@fortawesome/free-solid-svg-icons';

export default function Toolsoverview() {
  return (
    <div className='m-2'>
    <div className='container-fluid mb-2'>
    <div className='toolscont'>
   
   <h2 className='text-center text-black p-1'> Tools</h2>
  
    <div className='toolsbox  row justify-content-center'>
        <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i class="fab fa-google fa-4x mx-4"></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title  font-weight-bold" >Grammar Checker</h5></div></div>
    </div>
    </Link>

    <Link to='/analysistool' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i class="fab fa-google fa-4x mx-4"></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Text Analyzer</h5></div></div>
    </div>
    </Link>
    <Link to='/datacleaning' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i class="fab fa-google fa-4x mx-4"></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Corpus Cleaner</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div>
             <div class="card-header bgcolorgray text-black"> <i class="fab fa-cuttlefish fa-4x mx-4"></i></div>
                <div class="card-body bgcolorgray">
                 <h5 class="card-title font-weight-bold" >Corpus Hosting</h5></div></div>
    </div>
    </Link>
   
    </div>
    </div>
    </div>
    <div className='pushd'>
    <h3 className=' mt-2 explaniationbox text-center'>
        What are These Tools?
    </h3>

    <div className='container'>
  

    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Grammar Checker</h3>
            <p className="ml-3">A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. Some grammar checker tools also provide suggestions for improving sentence structure and readability.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
        <div className=' d-flex h-100 align-baseline justify-content-center '><i className="fab fa-google fa-10x mx-4 my-auto"></i></div> 
        
        </div>
     
    </div>

    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Grammar Checker</h3>
            <p className="ml-3">A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. Some grammar checker tools also provide suggestions for improving sentence structure and readability.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
        <div className=' d-flex h-100 align-baseline justify-content-center '><i className="fab fa-google fa-10x mx-4 my-auto"></i></div> 
        
        </div>
     
    </div>
    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Grammar Checker</h3>
            <p className="ml-3">A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. Some grammar checker tools also provide suggestions for improving sentence structure and readability.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
        <div className=' d-flex h-100 align-baseline justify-content-center '><i className="fab fa-google fa-10x mx-4 my-auto"></i></div> 
        
        </div>
     
    </div>
    <div className=' row mb-4 mx-auto bordergraylight bggray2'>
        <div className='col-sm-8 p-4'>
            <h3>Grammar Checker</h3>
            <p className="ml-3">A grammar checker tool is used to help identify and correct grammatical errors in written text. This can include issues such as punctuation errors, subject-verb agreement, and word choice. Some grammar checker tools also provide suggestions for improving sentence structure and readability.</p>
        </div>
        
        <div className='col-sm-4 text-center mx-auto'>
        <div className=' d-flex h-100 align-baseline justify-content-center '><i className="fab fa-google fa-10x mx-4 my-auto"></i></div> 
        
        </div>
     
    </div>

    {/* copy  the above div after filling it and change content*/}

    </div>


    </div>
    </div>

  )
}
