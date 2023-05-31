const express = require('express');
// const connectDB = require('./config/db');
const server = express();


const PORT = process.env.PORT || 5001;

server.listen(PORT, () => console.log(`Server started at port ${PORT}`));

//Init middleware
server.use(express.json());


server.use(express.static('public'));

//Define Routes
server.get('/',(req, res)=>res.send('Api Running'));
server.use('/api/send-sms',require('./routes/api'));