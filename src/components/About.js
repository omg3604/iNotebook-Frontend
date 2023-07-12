import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './About.css'

export class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <h2 className='text-center m-2'>About Us</h2>
        <div className='container my-5'>
          <p className=' text-center'>We are a team of passionate engineers and designers who believe that everyone should have access to affordable, high-quality Web services. We started this company with the goal of making it easier for people to note and mark their day to dya important tasks, and we are committed to providing our customers with the best possible experience.</p>
          <p className='text-center'>
            Our mission is to make note making more accessible, easier and affordable for everyone. We do this by offering a variety of services, including:
          </p>
          <div className='d-flex justify-content-center'>
            <ul >
              <li>A free online platform for users where they can login anytime to perform save, delete, edit or other operations on their notes.</li>
              <li>A User friendly UI that allows users to store thier notes using microphone by transcribing them to text.</li>
              <li>A team of customer service representatives who are available 24/7 to help user with any questions or concerns</li>
            </ul>
          </div>

          <p className='text-center'>
            We believe that everyone deserves access to Secure web services in this IT World, and we are committed to making that happen. If you are looking for a convenient and free way to see a organise your daily life and never miss any deadline, we encourage you to visit our website.</p>
        </div>


        <h2 className='text-center m-2'>Features</h2>
        <div className='container my-5 pb-3 d-flex flex-row flex-wrap justify-content-center'>
          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4" style={{ width: "32rem" }}>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-sharp fa-solid fa-plus fa-2xl"></i>
            </div>
            <div className="card-body text-end" style={{ backgroundColor: "white" }}>
              <h3 className=''>Add Note</h3>
              <p className="card-text">Add, delete or edit your note from anywhere and anytime</p>
            </div>
          </div>
          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className="card-body text-start" style={{ backgroundColor: "white" }}>
              <h3 className=''>Auto Transcription</h3>
              <p className="card-text">Instead of manually typing, Add a note using the microphone.</p>
            </div>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/transcription.jpg')} /> */}
              <i className="fa-solid fa-microphone fa-2xl"></i>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-file-shield fa-2xl"></i>
            </div>
            <div className="card-body text-end" style={{ backgroundColor: "white" }}>
              <h3 className=''>Secure Storage</h3>
              <p className="card-text">No Unauthorised access to your data.</p>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className="card-body text-start" style={{ backgroundColor: "white" }}>
              <h3 className=''>Cloud Stoarge</h3>
              <p className="card-text">Access from anywhere, any device with internet connection</p>
            </div>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-cloud-arrow-up fa-2xl"></i>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-share fa-2xl"></i>
            </div>
            <div className="card-body text-end" style={{ backgroundColor: "white" }}>
              <h3 className=''>Share with Peers</h3>
              <p className="card-text">Share your notes with your peers in 2-way manner.</p>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className="card-body text-start" style={{ backgroundColor: "white" }}>
              <h3 className=''>Mark Deadlines</h3>
              <p className="card-text">Achieve your important tasks by adding deadlines</p>
            </div>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-clock fa-2xl"></i>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-star fa-2xl"></i>
            </div>
            <div className="card-body text-end" style={{ backgroundColor: "white" }}>
              <h3 className=''>Categorise Your Notes</h3>
              <p className="card-text">Add tags to your notes for better undestanding and easy access</p>
            </div>
          </div>

          <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-4 " style={{ width: "32rem" }}  >
            <div className="card-body text-start" style={{ backgroundColor: "white" }}>
              <h3 className=''>Easy Use</h3>
              <p className="card-text">Less complex and User friendly UI for better User experience.</p>
            </div>
            <div className='card-header d-flex justify-content-between align-items-center rounded' style={{ 'backgroundColor': '#A5D7E8', "height": "4rem" }}>
              {/* <img src={require('../images/mic.jpg')} /> */}
              <i className="fa-solid fa-rocket fa-2xl"></i>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default About