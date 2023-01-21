import React from 'react'
import thinker from "../../assets/thinker-28741_1280.png"


export default function Homeheader() {
  return (
    <header className="header">
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
