import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

const LatestAppointment = () => {
    const [latestAppointment,setAppointment] = new useState([]);
    const callLatestAppointment = async () => {
        const getlatestAppointment = await fetch('/latestAppointment' , {
            method : 'GET',
            headers: {
                Accept : 'application/json',
                'Content-Type': 'application/json'
                
              },
              credentials:'include'
        })
        const data = await getlatestAppointment.json();
        setAppointment(data);
    }

    useEffect(()=> {
        callLatestAppointment();
    },[])

  return (
    <div className='appointmentPage'>
        <div className="todayAppointment">Today's Appointments</div>
        { latestAppointment?.map((appoint,key) => {
            return  <Card appointment = {appoint}/>
        })}
    </div>
  )
}

export default LatestAppointment