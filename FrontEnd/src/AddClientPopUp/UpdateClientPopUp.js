import React,{useEffect, useState} from 'react'
import './AddClientPopUp.css'
const UpdateClientPopUp = (props) => {
    const appointment = props.appoint;
    const [user, setUser] = useState({clientId : "", ContactNumber : "", firstName : "", lastName: ""});
    const [appointmentArr,setAppointmentArr] = new useState({AppointmentDate : "", AppointmentTimeStamp:"", Reason : ""});
    let name,value;
    const UpdateClientDetail = async(e) => {
        e.preventDefault();
        const { clientId, ContactNumber, firstName, lastName } = user;
        const {AppointmentDate, AppointmentTimeStamp, Reason } = appointmentArr;
           const res = await fetch(`/updateAppointment/${props.appoint._id}`, {
                method : 'PATCH',
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    clientId, ContactNumber, firstName, lastName, Appointment : {AppointmentDate, AppointmentTimeStamp, Reason} 
                })
           });
           const data = await res.json();
           window.alert(data.message);
           window.location.reload();
    }
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }
    const handleInputArr = (e) => {
        name = e.target.name;
        value = e.target.value;
        
        setAppointmentArr((prevUser) => ({
            ...prevUser,
            [name]: value,
          }));
    }
    useEffect(()=> {
        setUser(props.appoint)
        setAppointmentArr(props.appoint.Appointment[0]);
    },[])
  return props.trigger ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="update-close-btn" onClick={() => props.settrigger(false)}>close</button>
            <div className="data">
                <div className="clientDetail">
                    <label>Client Id: </label>
                    <input type = 'text' name = "" value={user.clientId} onChange={handleInput} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>Contact Number: </label>
                    <input type = 'text' name="contactNumber" value={user.contactNumber} onChange={handleInput} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>First Name : </label>
                    <input type = 'text' name="firstName" value={user.firstName} onChange={handleInput} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>last Name : </label>
                    <input type = 'text' name="lastName" value={user.lastName}  onChange={handleInput} className='inputClientDetail'/>
                </div>
            </div>
            <input  value = "Submit" onClick={UpdateClientDetail} className='SubmitDetail update-SubmitDetail' />
        </div>
    </div>
  ) : ""
}

export default UpdateClientPopUp