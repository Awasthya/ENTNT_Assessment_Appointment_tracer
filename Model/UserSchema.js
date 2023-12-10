const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    clientId : {
        type : String,
        require : true
    },firstName : {
        type : String,
        require : true
    },
    lastName : {
        type : String,
        require : true
    },contactNumber : {
        type : String,
        reuqire : true
    },
    Appointment : [{
        AppointmentDate : {
            type : Date ,
            reuqire : true
        },
        AppointmentTimeStamp : {
            type : String,
            reuqire : true
        },
        
        Reason : {
            type : String,
            reuqire : true
        }
    }]

})
//addAppointmentInExistUser

userSchema.methods.addAppointmentInExistUser  = async function ( AppointmentDate, AppointmentTimeStamp, Reason) {
    try{
        this.Appointment = this.Appointment.concat({ AppointmentDate, AppointmentTimeStamp, Reason});
        await this.save();
        console.log('added');
        return this.Appointment;
    }catch(err) {
        console.log(err);
    }
}
const User = mongoose.model('USER',userSchema);
module.exports = User;