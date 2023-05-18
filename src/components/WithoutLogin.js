import React from 'react'
import { Link } from 'react-router-dom'
import './WithoutLogin.css'

const WithoutLogin = () => {
  return (
    <div>
      <div className='firstSec py-5'>
        <div className="jumbotron jumbotron-fluid mb-4 p-5">
          <div className="container d-flex flex-column justify-content-center align-items-center ">
            <h1 className="display-4 my-3 text-center">Welcome to the iNoteBook</h1>
            <h3 className="display-7 text-center" >Ultimate Note Making Application</h3>
            <p className="lead my-3 text-center">Create and organize your notes with ease</p>
            <div className="container d-flex justify-content-center my-4"><Link to="/Login" className="btn btn-primary btn-lg btncss" >Get Started</Link></div>
          </div>
        </div>
      </div>

      <div id="carouselExampleIndicators" className="carousel slide features" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="col-md-4 rotate d-block w-50">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fa-solid fa-rocket fa-3x"></i>
                <h3>Easy to Use</h3>
                <p>Our note-making platform is designed to be user-friendly and intuitive.</p>
              </div>
            </div>          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block w-50">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fas fa-folder fa-3x"></i>
                <h3>Organize Your Notes</h3>
                <p>Create folders and tags to keep your notes organized and easy to find.</p>
              </div>
            </div>          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block w-50">
              <div className="feature-box d-flex flex-column align-items-center">
                <i className="fas fa-globe fa-3x"></i>
                <h3>Access Anywhere</h3>
                <p>Access your notes from anywhere with an internet connection.</p>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="col-md-4 rotate d-block w-50">
              <div className="feature-box d-flex flex-column align-items-center">
                <i class="fas fa-share fa-3x"></i>
                <h3>Share with Anyone</h3>
                <p>Share your notes with anywhere and from anywhere on the Application</p>
              </div>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* <section className="mb-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fa-solid fa-rocket fa-3x"></i>
                <h3>Easy to Use</h3>
                <p>Our note-making platform is designed to be user-friendly and intuitive.</p>
              </div>
            </div>
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fas fa-folder fa-3x"></i>
                <h3>Organize Your Notes</h3>
                <p>Create folders and tags to keep your notes organized and easy to find.</p>
              </div>
            </div>
            <div className="col-md-4 rotate">
              <div className="feature-box">
                <i className="fas fa-globe fa-3x"></i>
                <h3>Access Anywhere</h3>
                <p>Access your notes from anywhere with an internet connection.</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <div className='my-5'>
        <hr></hr>
      </div>
    </div>
  )
}

export default WithoutLogin;