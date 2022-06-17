const express = require('express');
const app = express();

//* Settings
app.set('port', process.env.PORT || 5000); //To take designed port by the cloud service

//* Middleware
app.use(express.json()); //To convert data recieved into json

//* Routes

app.use('/', require('./routes/dogs'));

//* Starting the server
app.listen(app.get('port'), ()=>{
    console.log(`Server on port ${app.get('port')}`);
});