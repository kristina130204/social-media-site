import React, { useState } from 'react';
import './Auth.css';
import { useDispatch, useSelector } from "react-redux";
import { logIn, signUp } from '../../actions/AuthAction';

const Auth = () => {
    const [isSignUp, setSignUp] = useState(true);
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.authReducer.loading);
    const [data, setData] = useState({firstName: "", lastName: "", username: "", password: "", confirmPassword: ""});
    const [confirmPass, setConfirmPass] = useState(true);

    const handleChange = (e) => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isSignUp){
            data.password === data.confirmPassword ? dispatch(signUp(data)) :  setConfirmPass(false);
        } else{
            dispatch(logIn(data));
        }
    }

    const resetForm = () => {
        setConfirmPass(true);
        setData({firstName: "", lastName: "", username: "", password: "", confirmPassword: ""});
    }

  return (
    <div className='Auth'>
      <div className="a-left">
        <div className="Webname">
            <h1>Social app</h1>
            <h6>Explore the ideas throughout the word</h6>
        </div>
      </div>
      <div className="a-right">
            <form className='infoForm authForm' onSubmit={handleSubmit}>
                <h3>{ isSignUp ? "Sign Up" : "Log In" }</h3>
                    { isSignUp && 
                    <div>
                        <input type="text" placeholder='First name' className='infoInput' name='firstName' value={data.firstName} onChange={handleChange} />
                        <input type="text" placeholder='Last name' className='infoInput' name='lastName' value={data.lastName} onChange={handleChange} />
                    </div>
                    }
                <div><input type="text" placeholder='Username' className='infoInput' name='username' value={data.username} onChange={handleChange} /></div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' value={data.password} onChange={handleChange} />
                    { isSignUp && 
                    <input type="password" placeholder='Confirm password' className='infoInput' name='confirmPassword' value={data.confirmPassword} onChange={handleChange} />
                    }
                </div>
                { confirmPass ? "" : <span style={{color: "red", fontSize: "14px"}}>* Confirm password and password are not the same.</span> }
                <div>
                    <span style={{fontSize:'12px', cursor:'pointer'}} onClick={() => {setSignUp(!isSignUp); resetForm()}} >{ isSignUp ? "Already have an account? Login" : "Don't have an account? Sign Up" }</span>
                </div>
                <button type='submit' className="info-button button" disabled={ loading }>{ loading ? "Loading..." : isSignUp ? "Sign Up" : "Log In" }</button>
            </form>
        </div>
    </div>
  )
}

export default Auth
