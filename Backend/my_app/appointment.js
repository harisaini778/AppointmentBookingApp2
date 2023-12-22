const express = require('express');

const router = express.Router();

const appointmentController = require('./controllers/appointmentControllers');

router.get('/', appointmentController.getAllAppointment);
router.post('/',appointmentController.createAppointments);


module.exports = router; 