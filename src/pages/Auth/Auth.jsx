import React from 'react'
import './Auth.css'
import Logo from '../../img/logo.png'

const Auth = () => {
  return (
    <div className='Auth'>
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
            <h1>Social app</h1>
            <h6>Explore the ideas throughout the word</h6>
        </div>
      </div>
      <SignUp/>
      {/* <LogIn/> */}
    </div>
  )
}

function LogIn(){
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Log In</h3>
                <div><input type="text" placeholder='Username' className='infoInput' name='username' /></div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Don't have an account? Sign Up</span><button type='submit' className="info-button button">Log In</button>
                </div>
            </form>
        </div>
    )
}

function SignUp(){
    return(
        <div className="a-right">
            <form className='infoForm authForm'>
                <h3>Sigh Up</h3>
                <div>
                    <input type="text" placeholder='First name' className='infoInput' name='firstName' />
                    <input type="text" placeholder='Last name' className='infoInput' name='lastName' />
                </div>
                <div><input type="text" placeholder='Username' className='infoInput' name='username' /></div>
                <div>
                    <input type="password" placeholder='Password' className='infoInput' name='password' />
                    <input type="password" placeholder='Confirm password' className='infoInput' name='confirmPassword' />
                </div>
                <div>
                    <span style={{fontSize:'12px'}}>Already have an account? Login</span>
                </div>
                <button type='submit' className="info-button button">Sign Up</button>
            </form>
        </div>
    )
}

export default Auth
