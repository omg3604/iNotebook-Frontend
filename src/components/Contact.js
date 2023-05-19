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
      <form onSubmit={onSubmit} className=''>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btncss py-2 px-4" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  )
}

export default Contact;
