import React , { useState , useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner';
import './VerifyAccount.css';

const VerifyAccount = (props) => {
    const userid = localStorage.getItem('userid');
    let usermail = localStorage.getItem('usermail') || "aufhaksbfkjabdkf@gmail.com";
    let len = usermail.length;
    usermail = usermail.substring(10 , len);

    const [userOTP, setuserOTP] = useState("");

    const context = useContext(UserContext);
    const { userLoad, setuserLoad } = context;

    let navigate = useNavigate();

    const onOTPchange = (e) =>{
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
            body: JSON.stringify({ userId : userid , otp : userOTP }), // body data type must match "Content-Type" header
        });

        const json = await response.json();
        //console.log(json);
        // if the otp is verified.
        if(json.status == "VERIFIED"){
            props.showAlert("success" , json.message);
            // we ask user to login now.
            navigate("/Login");
            localStorage.removeItem('userid');
            localStorage.removeItem('usermail');
        }
        // if otp is not verified
        else{
            props.showAlert("warning" , json.message);
        }
        setuserLoad(false);
    };

    if (userLoad) {
        return <Spinner />;
    }

    return (
        <div>
            <div className="card container my-5 p-3" style={{ width: "20rem" }}>
                    <div className="card-body d-flex flex-column align-items-center">

                        <h5 className="card-title"><strong>OTP Verification</strong></h5>
                        <hr className=''></hr>
                        <p className="info text-center">An otp has been sent to <strong>********{usermail}</strong></p>
                        <h6 className="card-subtitle m-2 text-muted">Please enter OTP to verify first and then log into your account.</h6>

                        <form onSubmit={onOTPsubmit} className='d-flex flex-column align-items-center'>
                            <div className="form-group py-3">
                                <input type="number" className="form-control" id="otp" placeholder="" onChange={onOTPchange}/>
                            </div>
                            <button type="submit" className="btn btn-sm otpsubmitbtn">Verify</button>
                        </form>

                    </div>
                </div>
        </div>
    )
}

export default VerifyAccount;