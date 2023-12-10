
const express = require('express') 
const User = require('../Model/UserSchema');
const router = express.Router();

const mongodb = require('mongodb')

router.get('/',(req,res) => {
    res.send('hello');
});

router.post('/storeClient',async (req,res)=>{
    const {clientId, contactNumber, firstName, lastName, AppointmentDate, AppointmentTimeStamp, Reason } = req.body;
    console.log(req.body);
    if(!clientId || !contactNumber || !firstName || !lastName )
        return res.status(422).json({ message: "Fill all required fields" });
        const userExist = await User.findOne({ clientId: clientId });

        if (userExist) {
            if(  !AppointmentDate  || !AppointmentTimeStamp)
                return res.status(422).json({ message: "Fill all required fields" });
            const addAppointment = await userExist.addAppointmentInExistUser( AppointmentDate, AppointmentTimeStamp, Reason);
            
            return res.status(422).json({ message: "Appointment Add Into Existing User" });
        }

    const user = new User({clientId, contactNumber, firstName, lastName});
    //console.log(user)
    
    user.save().then(()=> {
        return  res.status(201).json({message : "Appointment Approved "})
    }).catch(err=> {
        return  res.status(201).json({message : "Appointment Rejected "}) 
      })
})

router.get('/fetchAppointment',async (req,res)=> {
        const appointment = await User.find().collation({ locale: 'en', strength: 2 }).sort({ firstName: 1 });
        return res.status(201).json(appointment);
})
router.post('/FetchInfoById',async(req,res) => {
    try {
                //req.params
                
            const id  = req.body.id;
            const userdata = await User.findOne({ _id: id });
            return res.status(200).json(userdata);
        } catch (e) {
        res.status(422).json(e); 
    }

})
router.patch('/updateAppointment/:id',async(req,res)=>{
    const {id} = req.params;

    const updatedAppointment = await User.findByIdAndUpdate(
        id,
        req.body,
        { new: true } // Set { new: true } to return the updated document
      );
      return res.status(201).json({message : "Appointment Updated"});
      
})
router.patch('/updateAppointmentById/:id' , async(req,res)=>{
    
    try{
    const clientId  = req.body.clientId;
    const userdata = await User.findOne({ _id: clientId });
    
    const updateAppointment = await User.updateOne({
        _id : clientId
    }, {
        $set: {
            "Appointment.$[personal]":req.body
        }
    }, {
        arrayFilters: [
        {
        "personal._id" : req.params.id
        }
    ]}) 


    return res.status(201).json({
        status : 'success',
    });
} catch (e) {
    console.log(e)
    return res.status(422).json(e); 
}

})
router.delete('/deleteOneAppointment/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const result = await User.updateOne(
        { "Appointment._id": new mongodb.ObjectId(req.params.id) },
        {
            $pull: { 'Appointment': {
                "_id": req.params.id}            
            }
        }
    )
    console.log(result);
    return res.status(201).json({message : "Appointment Deleted"});
    
})
//
// const result = await User.deleteOne({_id : id});
router.delete('/deleteAppointment/:id',async(req,res)=>{
    const {id} = req.params;
    console.log(id);
    const result = await User.deleteOne({_id : id});
    console.log(result);
    return res.status(201).json({message : "Appointment Deleted"});
    
})

router.get('/latestAppointment',async (req,res) => {
    
    const currentDate = new Date().toISOString().split('T')[0];
    const latestAppointment = await User.find({
        'Appointment.AppointmentDate': currentDate,
    });
      
      return res.status(201).json(latestAppointment);

})
router.get('/fetchAppointmentDates',async (req,res)=> {

    const clients = await User.find();
    const AppointmentDate = {}
    clients.map((client)=>{
        client?.Appointment.map((appointment)=>{
            var date = JSON.stringify(appointment.AppointmentDate)
            AppointmentDate[date.substr(1,10)] = "true";
        })
    })
    return res.status(201).json(AppointmentDate);
})

router.post('/appointmentByDate',async(req,res)=> {
    const {date} = req.body
    
    const clients = await User.find();
    const totalAppointment = [];

    clients.map((client) => {
            client?.Appointment.map((appoint)=> {
                var Appointmentdate = JSON.stringify(appoint.AppointmentDate)

                if(Appointmentdate.substr(1,10)== date){
                    totalAppointment.push(client);
                }
            })
    })
    console.log(totalAppointment);
    
    return res.status(201).json(totalAppointment);

})
module.exports = router;