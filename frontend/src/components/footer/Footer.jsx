import React from 'react'
import './footer.css'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024. All rights resevered.
                <br/>
                Made with ❤️ <a href = "">by us</a>
               
            </p>

            <div className="social-links">
                <a href=''><FaSquareInstagram /></a>
                <a href=''><FaTwitter/></a>
                
            </div>
        </div>
    </footer>
  )
}

export default footer 