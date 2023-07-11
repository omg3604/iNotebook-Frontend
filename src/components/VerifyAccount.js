import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner';
import './VerifyAccount.css';

const VerifyAccount = (props) => {
    const userid = localStorage.getItem('userid');
    let usermail = localStorage.getItem('usermail') || "aufhaksbfkjabdkf@gmail.com";
    let funct = localStorage.getItem('function') || "login";
    let len = usermail.length;
    usermail = usermail.substring(10, len);

    const [userOTP, setuserOTP] = useState("");

    const context = useContext(UserContext);
    const { userLoad, setuserLoad } = context;

    let navigate = useNavigate();

    const onOTPchange = (e) => {
        setuserOTP(e.target.value);
    }

    // When user submits the otp
    const onOTPsubmit = async (e) => {
        e.preventDefault();
        // console.log("verifying");
        // console.log(userid);
        // console.log(userOTP);
        setuserLoad(true);

        // calling the otp verification endpoint
        const response = await fetch(`https://odd-mite-shoe.cyclic.app/api/auth/verifyOTP`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ userId: userid, otp: userOTP }), // body data type must match "Content-Type" header
        });

        const json = await response.json();
        //console.log(json);
        // if the otp is verified.
        if (json.status == "VERIFIED") {
            // we ask user to login now.
            if (funct === "login") {
                props.showAlert("success", json.message + "You can now login to your accuount.");
                navigate("/Login");
                localStorage.removeItem('userid');
                localStorage.removeItem('usermail');
                localStorage.removeItem('function');
            }
            else {
                props.showAlert("success", json.message);
                navigate("/ResetPassword");
                localStorage.removeItem('userid');
                localStorage.removeItem('function');
            }
        }
        // if otp is not verified
        else {
            props.showAlert("warning", json.message);
        }
        setuserLoad(false);
    };

    if (userLoad) {
        return <Spinner />;
    }

    return (
        <div className='d-flex justify-content-center my-4'>
            <div className="card" style={{ width: "20rem" }}>
                <div style={{ backgroundColor: "#19376D" }} className='p-3'>
                    <h5 className="card-title text-light text-center"><strong>OTP Verification</strong></h5>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <div>
                        <p className="info text-center">An otp has been sent to <strong>********{usermail}</strong></p>
                        <h6 className="card-subtitle m-2 text-muted text-center">Please enter OTP to verify your email account.</h6>

                        <form onSubmit={onOTPsubmit} className='d-flex flex-column align-items-center'>
                            <div className="form-group py-3 d-flex align-items-center">
                                <i className="fa fa-key mx-2" aria-hidden="true"></i>
                                <input type="number" className="form-control" id="otp" placeholder="" onChange={onOTPchange} />
                            </div>
                            <button type="submit" className="btn btn-sm otpsubmitbtn">Verify OTP</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VerifyAccount;