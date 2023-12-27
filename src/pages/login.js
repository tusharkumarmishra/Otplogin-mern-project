import React, { useState } from 'react';
import { NavLink,useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import{ sendOtpFunction}from "../services/Apis";
import Spinner from 'react-bootstrap/Spinner';
import '../styles/mix.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [spiner,setSpiner] = useState(false);

  const navigate =useNavigate();

  // sendotp code is here

  const sendOtp =async(e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email!")
    }else if(!email.includes("@")){
        toast.error("Enter Valid Email!")
    }else{
      setSpiner(true)
      const data ={
        email:email
      }
      const response = await sendOtpFunction(data);
      // console.log(response);
      setSpiner(false)
       if (response.status===200){

        navigate("/user/otp",{state:email})
       }else{
        toast.error(response.response.data.error);
       }
  }}
  

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In </h1>
            <p>Hi, we are glad you are back. Please login</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}> Login
            {
                            spiner ? <span> <Spinner animation="border" /></span>:""
                        }
            </button>
             
            <p> Don't have an account <NavLink to="/register"> Sign Up</NavLink> </p>
             
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  );
};

export default Login;
