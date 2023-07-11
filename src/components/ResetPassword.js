import React, { useState, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import UserContext from '../context/user/userContext';
import Spinner from './Spinner';import './ResetPassword.css'

function ResetPassword(props) {

    const context = useContext(UserContext);
    const { userLoad, setuserLoad } = context;

    let navigate = useNavigate();

    const [Pass, setPass] = useState("");
    const [CPass, setCPass] = useState("");
    const [valid, setvalid] = useState(true);

    const usermail = localStorage.getItem('usermail');

    const onPassSubmit = async (e) => {
        e.preventDefault();
        setuserLoad(true);
        // console.log(usermail);
        const response = await fetch(`https://odd-mite-shoe.cyclic.app/api/auth/resetpassword`, {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: usermail, newpass: Pass }), // body data type must match "Content-Type" header
        });

        const json = await response.json();

        if(json.status == "SUCCESS"){
            props.showAlert("success" , json.message);
            navigate('/Login');
            localStorage.removeItem('usermail');
        }
        else{
            props.showAlert("warning" , json.message);
        }
        setuserLoad(false);
        setCPass("");
        setPass("");
    }

    const onPassChange = (e) => {
        setPass(e.target.value);
    }

    const onCPassChange = (e) => {
        setCPass(e.target.value);
        if (CPass !== Pass) {
            setvalid(false);
        }
        else {
            setvalid(true);
        }
    }
    
    if(userLoad){
        return (
            <Spinner/>
        )
    }

    return (

        <div className='d-flex justify-content-center my-4'>
            <div className="card rounded" style={{ width: "20rem" }}>
                <div style={{ backgroundColor: "#19376D" }} className='p-3 rounded'>
                    <h5 className="card-title text-light text-center"><strong>Reset Your Password</strong></h5>
                </div>
                <div className="card-body d-flex flex-column align-items-center">
                    <p className="info text-center"></p>
                    <h6>UserName : <strong>{usermail}</strong></h6>

                    <h6 className="card-subtitle m-2 text-muted text-center">Please enter a minimum of 5 charcaters long and valid password.</h6>

                    <form onSubmit={onPassSubmit} className='d-flex flex-column align-items-center'>
                        <div className="form-group pt-3 mb-2">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <label htmlFor='otp' className='text-muted'> Enter new Password</label>
                            <input type="password" className="form-control" id="otp" name="otp" placeholder="" onChange={onPassChange} required />
                        </div>
                        <div className="form-group pb-3">
                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                            <label htmlFor='cotp' className='text-muted'>Confirm new Password</label>
                            <input type="password" className="form-control" id="cotp" name="cotp" placeholder="" onChange={onCPassChange} required />
                        </div>

                        {/* {!valid && <p className='p-2 rounded' style={{ backgroundColor: "#FA9884" }}> Above Passwords do not match.</p>} */}


                        <button type="submit" className="btn btn-sm passSubmitbtn">Reset Password</button>
                    </form>

                </div>
            </div>
        </div>
    )
}

export default ResetPassword