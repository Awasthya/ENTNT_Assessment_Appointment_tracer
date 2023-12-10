import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdateOneAppointment = (props) => {

    const [appointment,setAppointment] = new useState({AppointmentDate : "", AppointmentTimeStamp:"", Reason : ""});
    const client = props.client;
    const addAppointment = async(e)  => {
        e.preventDefault();
        const {AppointmentDate, AppointmentTimeStamp, Reason } = appointment;
        const {clientId, contactNumber, firstName, lastName} = client;
        console.log({clientId, contactNumber, firstName, lastName, AppointmentDate, AppointmentTimeStamp, Reason});
        const appointmentId = appointment._id;
           const res = await fetch(`/storeClient`, {
                method : 'POST',
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    clientId, contactNumber, firstName, lastName, AppointmentDate, AppointmentTimeStamp, Reason
                })
           });
           const data = await res.json();
           window.alert(data.message);
           window.location.reload();
    }
    let name,value;
    const handleInputArr = (e) => {
        name = e.target.name;
        value = e.target.value;
        setAppointment((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }
    useEffect(()=> {
    },[])
  return props.trigger ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="update-close-btn" onClick={() => props.settrigger(false)}>close</button>
            <div className="data">
            <div className="clientDetail">
                    <label style = {{width : '130%'}}>Appointment Date: </label>
                    <input type = 'date' name="AppointmentDate" value={appointment.AppointmentDate?.substr(0,10) } onChange={handleInputArr} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>Appointent Time: </label>
                    <input type = 'time' name="AppointmentTimeStamp" value={appointment?.AppointmentTimeStamp} onChange={handleInputArr} className='inputClientDetail'/>
                </div>
                <div className="reason">
                    <label className='ReasonLabel'>Reason: </label>
                    <textarea type = 'text' name="Reason" value={appointment?.Reason} onChange={handleInputArr} className='reasonTextArea' cols={20} rows={10}> </textarea> 
                </div>
            </div>
            <input  value = "Submit" onClick = {addAppointment} className='SubmitDetail update-SubmitDetail' />
            
            </div>
    </div>
  ) : ""
}

export default UpdateOneAppointment