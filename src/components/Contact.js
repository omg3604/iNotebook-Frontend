import React from 'react';
import userContext from '../context/user/userContext';
import { useContext, useEffect, useRef, useState } from 'react';
import './Contact.css';


const Contact = () => {

  // For maintaining the user data on the navbar upon reload also.
  const Ucontext = useContext(userContext);
  const { getUserDetails } = Ucontext;
  useEffect(() => {
    getUserDetails(localStorage.getItem('token'));
  }, [])

  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5">
      <h2 className="mb-3 text-center">Contact Us!</h2>
      <hr className='my-5'></hr>

      <form onSubmit={onSubmit} className=''>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" placeholder='Enter Name' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" placeholder='Enter Email' required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" placeholder='Enter your feedback......' required />
        </div>
        <button className="btncss py-2 px-4" type="submit">
          {formStatus}
        </button>
      </form>
      <hr className='my-5 py-5'></hr>
    </div>
  )
}

export default Contact;
