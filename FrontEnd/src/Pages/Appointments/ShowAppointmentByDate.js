import React, {useState , useEffect} from 'react'
import {  useParams } from 'react-router-dom/cjs/react-router-dom.min'
import Card from '../Card/Card';

const ShowAppointmentByDate = () => {
    const {date} = useParams();
    const [appointment, setAppointment] = new useState([]);
    const getAppointmentByDate = async() => {

        const appointment = await fetch('/appointmentByDate', {
            method : 'POST',
            headers: { 
                Accept : 'application/json',
                'Content-Type': 'application/json'
              },
              credentials:'include',
              body : JSON.stringify({
                date
              })
            })
        const currentAppointment = await appointment.json();
        setAppointment(currentAppointment);
        console.log(currentAppointment);
    }

    useEffect(()=> {
        getAppointmentByDate();
    },[])
  return (
    <div className="appointmentPage">
       { appointment?.map((appoint,key) => {
            return <Card appointment = {appoint}/>
        })}
        
    </div>
  )
}

export default ShowAppointmentByDate