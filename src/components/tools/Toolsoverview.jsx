import React from 'react'
import { Link } from "react-router-dom"


export default function Toolsoverview() {
  return (
    <div className='m-2'>
    <div className='toolscont'>
   
   <h1 className='text-center p-1'> Tools</h1>
  
    <div className='toolsbox  row justify-content-center'>
        <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-dark mb-3" >
             <div class="card-header"><i class="fas fa-book-reader fa-4x mx-4"></i></div>
                <div class="card-body">
                 <h5 class="card-title">Dark card title</h5></div></div>
    </div>
    </Link>

    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-dark mb-3" >
             <div class="card-header"><i class="fas fa-book-reader fa-4x mx-4"></i></div>
                <div class="card-body">
                 <h5 class="card-title">Dark card title</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-dark mb-3" >
             <div class="card-header"><i class="fas fa-book-reader fa-4x mx-4"></i></div>
                <div class="card-body">
                 <h5 class="card-title">Dark card title</h5></div></div>
    </div>
    </Link>
    <Link to='/' className='col-md-6 '>
    <div className='contentbox'>
        <div class="card text-white bg-dark mb-3" >
             <div class="card-header"><i class="fas fa-book-reader fa-4x mx-4"></i></div>
                <div class="card-body">
                 <h5 class="card-title">Dark card title</h5></div></div>
    </div>
    </Link>
   
    </div>
    </div>
    <h3 className='container-fluid mt-2 explaniationbox text-center'>
        What are These Tools?
    </h3>
    <div className='container'>

    <div className=' row mx-auto bordergraylight'>
        <div className='col-sm-8'> text headings paragraphs etc</div>
        <div className='col-sm-4 order-sm-1'> img</div>
    </div>

    {/* copy  the above div after filling it and change content*/}

    </div>


    </div>

  )
}
