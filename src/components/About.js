import PropTypes from 'prop-types'
import React, { Component } from 'react'

import './About.css'

export class About extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <div className='col-md-5 container'>
            <div className="d-flex flex-row justify-content-center align-items-center card notecard text-center my-3 ">
                <div className='card-header d-flex justify-content-between align-items-center rounded' style={{'backgroundColor':'#A5D7E8'}}>
                  <img src='../transcription.png' alt="transcription image"/>
                </div>
                <div className="card-body" style={{ backgroundColor: "white" }}>
                    <p className="card-text">description</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}

export default About