import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    const [showNav , setShowNav] = useState(false);
    const showNavbar = () => {
        setShowNav(!showNav);
    }
  return (
    <>
    <div className="Navbar">
        <div className="logo">
            Entnt
        </div>
            <div  onClick={showNavbar} className = {showNav? "disable" :"expandNavbarIcon"}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" color='red' width="40" height="30" viewBox="0 0 50 50">
                <path d="M 0 9 L 0 11 L 50 11 L 50 9 Z M 0 24 L 0 26 L 50 26 L 50 24 Z M 0 39 L 0 41 L 50 41 L 50 39 Z"></path>
                </svg>
            </div>
            <div onClick={showNavbar} className = {showNav ? "expandNavbarIcon" :  "disable" }>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="30"  viewBox="0 0 30 30">
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
                </svg>
            </div>
            
            <NavLink to="/" className={showNav ? "home bgcolor"  : "home showConent"}>
                <div >Home</div>
            </NavLink>
            <NavLink to="/appointment" className={showNav ? "appointment bgcolor" : "appointment showConent"} >
                <div >Appointment</div>
            </NavLink>
       
    </div>
    <div className="line"></div>
    </>
  )
}

export default Navbar