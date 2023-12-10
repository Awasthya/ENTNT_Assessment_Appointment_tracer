import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom';
import './Card.css'
import UpdateClientPopUp from '../../AddClientPopUp/UpdateClientPopUp';
import DeleteAppointment from '../../AddClientPopUp/DeleteAppointment';
const Card = (props) => {
  const appointment = props.appointment;
  const [buttonPopUp,setbuttonPopUp] = useState(false);
  const [deletePopUp,setdeletePopUp] = useState(false);
  const[SeeMore, setSeeMore] = useState(false);
  const SeeMoreAppointment = () => {
    setSeeMore(!SeeMore);
  }
  return (
  
  <>

   
    <div className="cards" >
    <div className="editButton">
          <div className="extraSpace"></div>
              <button className='Update' onClick={() => setbuttonPopUp(true)} > 
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16 ">
                  <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                  </svg>
              </button>
                <button  className="delete" onClick={() => setdeletePopUp(true)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="cancel" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11"></circle>
                        <line x1="8" y1="8" x2="16" y2="16"></line>
                        <line x1="8" y1="16" x2="16" y2="8"></line>
                    </svg>
                </button>
      </div>
      <NavLink to={`/clientDetail/${appointment._id}`} className='link'>
        <div className="row">
          <div className="clientId"><span className='heading '>Client Id :</span> {appointment.clientId}</div>
          <div className="Appointmentdate"><span className='heading'> Apppointment Date :</span> {appointment?.Appointment[0]?.AppointmentDate?.substr(0,10)}</div>
        </div>
        <div className="row">
          <div className="clientName"><span className='heading '>Client Name: </span> {appointment.firstName + ' ' + appointment.lastName}</div>
          <div className="time"> <span className='heading '> Apppointment Time : </span>{appointment?.Appointment[0]?.AppointmentTimeStamp}</div>
        </div>
        <div className="row">
          <div className="ContactNo"><span className='heading '>Contact No: </span> {appointment.contactNumber}</div>
          <div className="time"> <span className='heading '> No. Of Apppointments : </span>{appointment.Appointment.length}</div>
        </div>
        <div className="row">
            <p> <span className='heading '> Reason : </span>{appointment?.Appointment[0]?.Reason}</p>
        </div>
        <div className="showMoreAssignment">
          
        </div>
    </NavLink>
        </div>
    <UpdateClientPopUp trigger = {buttonPopUp} appoint = {appointment} settrigger= {setbuttonPopUp}/>
    <DeleteAppointment trigger = {deletePopUp} id = {appointment._id} clientName = {appointment.firstName + " " +  appointment.lastName } settrigger= {setdeletePopUp}/>
  </>
  )
}

export default Card