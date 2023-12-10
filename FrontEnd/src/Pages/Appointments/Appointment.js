import React, { useState } from 'react'
import Card from '../Card/Card';
import './Appointment.css'
const Appointment = () => {
    const [buttonPopUp,setbuttonPopUp] = useState(false)
    const [appointment,setAppointment] = new useState([]);
    const callAppointment = async () => {
        try {
          const response = await fetch('/fetchAppointment', {
            method: 'GET',
            headers: {
              Accept : 'application/json',
              'Content-Type': 'application/json'
              
            },
            credentials:'include'
          });
          
          const data = await response.json();
          setAppointment(data);
          if (response.status !== 201) {
                const error = new Error(response.error);
                throw error;
          }
        //   console.log(data);
        } catch (err) {
                window.alert(err);
          }
      }

      useState(()=> {
        callAppointment();
      },[])
  return (
    <div className="appointmentPage">
       { appointment?.map((appoint,key) => {
            return <Card appointment = {appoint}/>
        })}
        
    </div>
  )
}

export default Appointment