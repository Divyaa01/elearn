import React from 'react'
import './auth.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="auth-page">
            <div className="auth-form">
                <h2>Login</h2>
                <form>
                    <label htmlFor="name">Name</label>
                    <input type ="text" required></input>

                    <label htmlFor="email">Email</label>
                    <input type ="email" required></input>
                    
                    <label htmlFor="password">Password</label>
                    <input type ="password" required></input>

                    <button className="common-btn">Register</button>
                </form>
                <p>Have an account <Link to = "/login">Login Here</Link></p>
            </div>
    </div> 
  )
}

export default Register