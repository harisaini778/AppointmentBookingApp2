const express = require('express');
const cors = require('cors');
const { sequelize } = require('./databse'); // Corrected path
const app = express();
//const router = require('./routes/route');

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const appointmentRouter = require('./routes/route'); // Corrected path
app.use('/appointment', appointmentRouter); // Make sure to add a slash before 'appointment'

const PORT = 8000;
app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
