import React from 'react'
import { useNavigate } from 'react-router-dom';
import './home.css'
import Testimonials from '../../testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome, here</h1>
          <p>Some message</p>
          <button onClick={() => {navigate("/courses")}} className='common-btn'>Get Started</button>

        </div>
        <Testimonials></Testimonials>
      </div>


    </div>
  )
}

export default Home;