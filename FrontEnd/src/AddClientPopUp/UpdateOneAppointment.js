import React,{useState, useEffect} from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min';

const UpdateOneAppointment = (props) => {

    const [appointmentArr,setAppointmentArr] = new useState({AppointmentDate : "", AppointmentTimeStamp:"", Reason : ""});

    const {id} = useParams();
    const clientId = id;
    console.log(clientId);
    const UpdateAppointment = async(e)  => {
        e.preventDefault();
        const {AppointmentDate, AppointmentTimeStamp, Reason } = appointmentArr;
        const appointmentId = appointmentArr._id;
           const res = await fetch(`/updateAppointmentById/${props.appoint._id}`, {
                method : 'PATCH',
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    clientId, appointmentId, AppointmentDate, AppointmentTimeStamp, Reason
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
        
        setAppointmentArr((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }
    useEffect(()=> {
        setAppointmentArr(props.appoint)
    },[])
  return props.trigger ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="update-close-btn" onClick={() => props.settrigger(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cancel" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11"></circle>
                        <line x1="8" y1="8" x2="16" y2="16"></line>
                        <line x1="8" y1="16" x2="16" y2="8"></line>
                    </svg>
                </button>
            <div className="data">
            <div className="clientDetail">
                    <label >Appointment Date: </label>
                    <input type = 'date' name="AppointmentDate" value={appointmentArr.AppointmentDate?.substr(0,10) } onChange={handleInputArr} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>Appointent Time: </label>
                    <input type = 'time' name="AppointmentTimeStamp" value={appointmentArr?.AppointmentTimeStamp} onChange={handleInputArr} className='inputClientDetail'/>
                </div>
                <div className="reason">
                    <label className='ReasonLabel'>Reason: </label>
                    <textarea type = 'text' name="Reason" value={appointmentArr?.Reason} onChange={handleInputArr} className='reasonTextArea' cols={20} rows={10}> </textarea> 
                </div>
            </div>
            <input  value = "Submit" onClick = {UpdateAppointment} className='SubmitDetail update-SubmitDetail' />
        </div>
    </div>
  ) : ""
}

export default UpdateOneAppointment