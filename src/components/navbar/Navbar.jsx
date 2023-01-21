import React from 'react'
import { useContext } from "react"
import { Link } from "react-router-dom"
import thinker from "../../assets/thinker-28741_1280.png"
import { AuthContext } from "../../context/AuthContext"

export default function Navbar() {

  const {user} =useContext(AuthContext);
  const logout=()=>{
    window.localStorage.clear();
    window.location.reload();
  }

  return (
    <header>
      <div className="container-fluid p-0">
        <nav className="navbar navbar-expand-lg">
          <Link className="navbar-brand" to="index.html"> TEXTOMATIC</Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-align-right text-light"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item active">
                <Link className="nav-link" to="/"
                  >HOME
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/userDashboard">TOOLS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="#purchaseplan">PLANS</Link>
              </li>
              <li className="nav-item dropdown">
                <div className="dropdown">
                  <Link to="#testimonials" className="nav-link">TESTIMONIALS</Link>
                </div>
              </li>
              
             { //conditional redenring here
               !user ? <li className="nav-item dropdown">
                <span className="dropdown">
                  <Link to="/userLogin" className="nav-link">  <button className="btn btn-light px-3 py-0 primary-btn">
                    LOGIN
                  </button></Link>
                </span>
              </li>:
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="userSignup" className="nav-link">  <button className="btn btn-light px-3 primary-btn">
                  {user.details.username}
                </button></Link>
              </div>
            </li>
           }
            {  !user ?  <li className="nav-item dropdown">
                <span className="dropdown">
                  <Link to="userSignup" className="nav-link">  <button className="btn btn-light px-3 py-0 primary-btn">
                    SIGNUP
                  </button></Link>
                </span>
              </li> :  
              
            <li className="nav-item dropdown">
              <div className="dropdown">
                <Link to="userSignup" className="nav-link">  <button  onClick={logout} className="btn btn-light px-3 primary-btn" > Logout</button>
                 </Link>
              </div>
            </li>
          
            }
            </ul>
          </div>
        </nav>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col-md-7 col-sm-12 text-white">
            <h1>Your thoughts in words</h1>
            <p>
              Say exactly what you mean through clear, compelling and authentic
              writing.
            </p>
            <button className="btn btn-light px-5 py-2 primary-btn bg-warning">
              Add to Chrome it's free
            </button>
          </div>
          <div className="col-md-5 col-sm-12 h-25">
            <img src={thinker} alt="Book" />
          </div>
        </div>
      </div>
    </header>
  )
}
