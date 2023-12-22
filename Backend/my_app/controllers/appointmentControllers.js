//const {Appointment} = require('./models');

exports.getAllAppointments = async(req,res) => {
    try{
        const appointments = await Appointment.findAll();
        res.json(appointments);
    } catch (error) {
        console.log(error) 
            res.status(500).json({message:"Server error"})
        }
    };

exports.createAppointments = async(req,res) => {
    const {date,clientName,service} = req.body;
    try{
        const appointment = await Appointment.create({date,clientName,service});
        res.json(appointment);
    }catch(error){
     console.log(error)
    }
};