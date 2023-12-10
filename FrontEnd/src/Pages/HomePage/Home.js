import React, { useState } from 'react'
import './Home.css'
import AddClientPopUp from '../../AddClientPopUp/AddClientPopUp'
import Calender from './../../Calender/Calender'
import LatestAppointment from './LatestAppointment'
const Home = () => {
    const [buttonPopUp,setbuttonPopUp] = useState(false);
    
  return (
    <>
    <div className='homePage'>
        <div className="extraspace"></div>
        
        <div class="search">
            <input id="header-search" type="search" placeholder="Search..." />
            <button id="search-button">
                <svg id="search-icon" class="search-icon" viewBox="0 0 24 24">
                    <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
                    <path d="M0 0h24v24H0z" fill="none"/>
                </svg>
            </button>
        </div>
        <div className="addClient">
           <input onClick={() => setbuttonPopUp(true)} value = "Add New Client" className='AddClientButton' />
        </div>
        <AddClientPopUp trigger = {buttonPopUp} settrigger= {setbuttonPopUp}/>
    </div>
        <div className="additionalFeatures">
            <div className="calender">
                <Calender />
            </div>
            <div className="TodaysAppointment">
                <LatestAppointment />
            </div>
        </div>
    </>

  )
}

export default Home