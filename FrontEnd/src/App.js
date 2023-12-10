
import './App.css';
import { BrowserRouter as Router ,Route , Switch } from "react-router-dom";
import Home from './Pages/HomePage/Home.js'
import Navbar from './Navbar/Navbar'
import Appointment from './Pages/Appointments/Appointment.js';
import ClientDetail from './Pages/ClientDetail/ClientDetail.js';
import ShowAppointmentByDate from './Pages/Appointments/ShowAppointmentByDate.js';
function App() {
  return (
    <div className="">

      <Navbar/>
        <Switch> 
            <Route exact path='/' component={Home} />
            <Route exact path='/appointment' component={Appointment} />
            <Route exact path='/clientDetail/:id' component={ClientDetail} />
            <Route exact path='/Showappointment/:date' component={ShowAppointmentByDate} />
        </Switch>
    </div>
  );
}

export default App;
