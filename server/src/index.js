const express = require('express'); 
const server = express(); 
const cors = require('cors'); 

server.use(cors())
server.use(express.json());

const Routes = require('./routes/routes'); 
server.use('/portal', Routes);

server.listen(3333, () => {
    console.log('API ONLINE');
});