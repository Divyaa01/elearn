import React from 'react'
import "./header.css"
import {Link} from "react-router-dom"
import { MdOutlineManageAccounts } from "react-icons/md";

const Header = () => {
  return (
    <header>
        <div className="logo">E-Learn</div>

        <div className="link">
        <Link to = {'/'}>Home</Link>
        <Link to = {'/courses'}>Courses</Link>
        <Link to = {'/about'}>About</Link>
        <Link to = {'/account'}><MdOutlineManageAccounts /></Link>
       </div>
    </header>
  )
};

export default Header;