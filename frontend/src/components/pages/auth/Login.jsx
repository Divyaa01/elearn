import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="auth-page">
            <div className="auth-form">
                <h2>Login</h2>
                <form>
                    <label htmlFor="email">Email</label>
                    <input type ="email" required></input>
                    
                    <label htmlFor="password">Password</label>
                    <input type ="password" required></input>

                    <button className="common-btn">Login</button>
                </form>
                <p>Dont Have an account <Link to = "/register">Register Here</Link></p>
            </div>
    </div> 
  )
}

export default Login