import React from 'react';
import userContext from '../context/user/userContext';
import { useContext, useEffect, useRef, useState} from 'react';


const Contact = () => {

  // For maintaining the user data on the navbar upon reload also.
  const Ucontext = useContext(userContext);
  const { getUserDetails } = Ucontext;
  useEffect(() => {
    getUserDetails(localStorage.getItem('token'));
  }, [])

  return (
    <div>
      this is Contact page.
    </div>
  )
}

export default Contact;
