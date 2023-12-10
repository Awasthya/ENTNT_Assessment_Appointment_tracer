import React,{useEffect, useState} from 'react'
import './AddClientPopUp.css'
const DeleteAppointment = (props) => {
    const id = props.id;
    const clientName = props.clientName;
   
    const DeleteClientDetail = async(e) => {
        const data = await  fetch(`/deleteAppointment/${id}`,{
            method: "DELETE",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });
        if(data.modifiedCount !== 0)
            window.location.reload();
        
        }

  return props.trigger ? (
    <div className="popup">
        <div className="deletepopup">
            <div className="editButton">
                <button  className="delete" onClick={() => props.settrigger(false)}> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="none" stroke="red" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cancel" viewBox="0 0 24 24">
                        <circle cx="12" cy="12" r="11"></circle>
                        <line x1="8" y1="8" x2="16" y2="16"></line>
                        <line x1="8" y1="16" x2="16" y2="8"></line>
                    </svg>
                </button>
            </div>
            <div className="warning">
                Are You Sure! You Want To Delete Appointment With {clientName}
            </div>
            <div className="Confirmation">
                <button className="sure" onClick = {DeleteClientDetail}>Sure</button>
                <button className="No" onClick={() => props.settrigger(false)}>Cancel</button>
            </div>
        </div>
    </div>
  ) : ""
}

export default DeleteAppointment