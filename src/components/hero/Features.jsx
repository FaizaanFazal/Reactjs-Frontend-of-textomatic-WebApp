import React from 'react'
import { Link } from "react-router-dom"

export default function Features() {
  return (
    <section class="section-2 container-fluid p-0">
        <div class="cover">
          <div class="overlay"></div>
          <div class="content text-center">
            <h1>Some Features That Made Us Unique</h1>
            <p>Tools</p>
          </div>
        </div>
        <div class="container-fluid text-center">
          <div
            class="numbers d-flex flex-md-row flex-wrap justify-content-center"
          >
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>CORPUS CLEANER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>DATA SETS</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>FORMATTER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>GRAMMAR CHECK</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>SPELL CHECK</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
            <div class="rect">
              <i class="fas fa-book-reader fa-4x mx-4"></i>
            
              <h6>ANALYZER</h6>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </div>
          </div>
        </div>

        <div class="purchase text-center" id='purchaseplan'>
          <h1>Purchase Whatever You Want</h1>
          <p>PLANS</p>
          <div class="cards">
            <div class="d-flex flex-row justify-content-center flex-wrap">
              <div class="card">
                <div class="card-body">
                  <div class="title">
                    <h5 class="card-title">Free</h5>
                  </div>
                  <p class="card-text">Start with the basic</p>
                  <div class="pricing">
                    <h1>$0</h1>
                    <Link
                      to="#"
                      class="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="title">
                    <h5 class="card-title">Premium</h5>
                  </div>
                  <p class="card-text">Yearly (save 60%) Monthly</p>
                  <div class="pricing">
                    <h1>$9.99</h1>
                    <Link
                      to="#"
                      class="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
              <div class="card">
                <div class="card-body">
                  <div class="title">
                    <h5 class="card-title">Premium for teams</h5>
                  </div>
                  <p class="card-text">Get textomatic for your entire team</p>
                  <div class="pricing">
                    <h1>$9.99</h1>
                    <Link
                      to="#"
                      class="btn btn-dark px-5 py-2 primary-btn mb-5 bg-warning text-black-50"
                      >Purchase Now</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
