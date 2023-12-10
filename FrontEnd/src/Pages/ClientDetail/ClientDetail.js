import React , {useState, useEffect}from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import ClientProfileImage from '../../Images/ClientProfileImage.webp'
import './ClientDetail.css'
import Card from '../Card/Card'
import AppointmentCard from './AppointmentCard'
import AddAppointment from './../../AddClientPopUp/AddAppointment'
const ClientDetail = () => {
  
  const [buttonPopUp,setbuttonPopUp] = useState(false)
  const [user, setUser] = new useState({});
  const [Appointments, setappointment] = new useState([]);

  const {id} = useParams();

  
  const ShowProfile = async (clientId) => {
    try{
      console.log(clientId)
    const res = await fetch('/FetchInfoById', {
      method : 'POST',
      headers: { 
        Accept : 'application/json',
        'Content-Type': 'application/json'
      },
      credentials:'include',
      body : JSON.stringify({
        id : clientId
      })
    });
    const data = await res.json();
    console.log(data);
    setUser(data);
    setappointment(data?.Appointment);
    if (res.status !== 200) {
      const error = new Error(res.error);
      throw error;
    }
    
  } catch (err) {
    console.log(err);
  }
}
  useEffect(() => {
    ShowProfile(id);
  }, []);
  return (
    <div className='detail'>
      <div className="profile">
          <img src={ClientProfileImage} />
      </div>
      <div className="content">
          <div className="clientId"><span className='heading '>Client Id :</span> {user.clientId}</div>
         
          <div className="clientName"><span className='heading '>Client Name: </span> {user.firstName + ' ' + user.lastName}</div>
         
          <div className="ContactNo"><span className='heading '>Contact No: </span> {user.contactNumber}</div>
          <div className="time"> <span className='heading '> No. Of Apppointments : </span>{user.Appointment?.length}</div>

        </div>
            <div className="addAppointment">
              
           <input onClick={() => setbuttonPopUp(true)} value = "Add New Appointment" className='AddClientButton' />
            </div>
          <div className="appointmentTag">
              {
                Appointments.map((appoint) =>{
                  return <AppointmentCard appointment = {appoint} />
                })
              }

          </div>
              <AddAppointment trigger={buttonPopUp} client={user} settrigger = {setbuttonPopUp}/>
    </div>
  )
}

export default ClientDetail