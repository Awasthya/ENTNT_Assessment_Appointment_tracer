import React,{useState} from 'react'
import './AddClientPopUp.css'
const AddClientPopUp = (props) => {
    const [user, setUser] = useState({clientId : "", contactNumber : "", firstName : "", lastName: ""});
    let name,value;
    const SubmitClientDetail = async(e) => {
            e.preventDefault();
            const { clientId, contactNumber, firstName, lastName } = user;
            try{
            const res = await fetch("/storeClient", {
                method: "POST",
                headers: {
                    Accept : 'application/json',
                    'Content-Type': 'application/json'
                  },
                body: JSON.stringify({
                    clientId, contactNumber, firstName, lastName
                })

            });
            const data = await res.json();
            console.log(data);
            if(res.status !== 201)
                throw data.message;
            
            if (!data) {
                window.alert("data is not stored");
            } else {
                window.alert('Client Added!');
                window.location.reload();
            }
        }catch(err) {
            
            window.alert(err);
        }
        }
    const handleInput = (e) => {
        name = e.target.name;
        value = e.target.value;
        const numericValue = e.target.value.replace(/\D/g, '');
        console.log(value);
        if(name === 'contactNumber'){
            if (/^\d{0,10}$/.test(numericValue)) {
                setUser({ ...user, [name]: value });
            }
        }else if(name === 'clientId' ) {
            if (/^\d{0,4}$/.test(numericValue)) {
                setUser({ ...user, [name]: value });
            }
        }else{
            setUser({ ...user, [name]: value });
        }
    }
  return props.trigger ? (
    <div className="popup">
        <div className="popup-inner">
            <button className="close-btn" onClick={() => props.settrigger(false)}>close</button>
            <div className="data">
                <div className="clientDetail">
                    <label>Client Id: </label>
                    <input type = 'text' name = "clientId" value={user.clientId} onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        } }}
                        onChange={handleInput} className='inputClientDetail'/>
                </div>
                <div className="clientDetail">
                    <label>Contact Number: </label>
                    <input type = 'text' name="contactNumber" onKeyPress={(event) => {
                        if (!/[0-9]/.test(event.key)) {
                        event.preventDefault();
                        }
                    }} value={user.contactNumber} onChange={handleInput} className='inputClientDetail'/>
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
            <input  value = "Submit" onClick={SubmitClientDetail} className='SubmitDetail' />
        </div>
    </div>
  ) : ""
}

export default AddClientPopUp