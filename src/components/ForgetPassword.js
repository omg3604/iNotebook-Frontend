import React from 'react';
import { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner';
import './ForgetPassword.css'

function ForgetPassword(props) {

    const [usermail, Setusermail] = useState("");
    const [validmail, setvalidmail] = useState(true);

    let navigate = useNavigate();

    const context = useContext(UserContext);
    const { userLoad, setuserLoad } = context;

    const onemailSubmit = async (e) =>{
        e.preventDefault();
        setuserLoad(true);
        // API Call
        const response = await fetch(`https://odd-mite-shoe.cyclic.app/api/auth/forgetpassword`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email : usermail }), // body data type must match "Content-Type" header
        });
        console.log("submmited email");
        const json = await response.json();
        if (json.status === "PENDING") {
            const userId = json.data.userId;
            localStorage.setItem('userid' , userId);
            localStorage.setItem('usermail' , usermail);
            localStorage.setItem('function' , "reset");
            console.log(json);
            console.log(userId);
            navigate("/VerifyAccount");
            props.showAlert("success", "An otp has been sent to the given email.");
        }
        else {
            //console.log(json);
            props.showAlert("warning", json.message);
        }

        setuserLoad(false);
    }

    const onemailChange = (e) => {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (e.target.value.match(validRegex)) {
            setvalidmail(true);
        }
        else {
            setvalidmail(false);
        }
        Setusermail(e.target.value);
    }

    if(userLoad){
        return (
            <Spinner/>
        )
    }

  return (
    <div className='d-flex justify-content-center my-4'>
            <div className="card rounded" style={{ width: "25rem" }}>
                <div style={{ backgroundColor: "#19376D" }} className='p-3 rounded'>
                    <h5 className="card-title text-light text-center"><strong>Enter Registered Email</strong></h5>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <p className="info text-center"></p>
                    <h6 className="card-subtitle m-2 text-center">Please enter a valid email registered with your account. </h6>
                    <h6 className="card-subtitle m-2 text-muted text-center">An OTP will be sent to the registered email for verification.</h6>

                    <form onSubmit={onemailSubmit} className='d-flex flex-column align-items-center'>
                        <div className="form-group pt-3 mb-3">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                            <label htmlFor='otp' className='text-muted'> Enter Email</label>
                            <input type="text" className="form-control" style={{ width: "20rem" }} id="otp" name="otp" placeholder="" onChange={onemailChange} required />
                        </div>
                        <button type="submit" className="btn btn-sm OTPSubmitbtn">Send OTP</button>
                    </form>
                    {!validmail && <p className='p-2 rounded mt-2' style={{ backgroundColor: "#FA9884" }}>Please Enter a valid email.</p>}
                </div>
            </div>
        </div>
  )
}

export default ForgetPassword