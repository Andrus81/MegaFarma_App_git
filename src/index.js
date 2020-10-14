'use strict'

const express = require('express');
const app = express();


//Settings 
app.set('port', process.env.PORT||3000);


//Routes
app.get('/home', (req, res)=>{
    res.send('respuesta de la pagina principal');
});

//Server is listening
app.listen(app.get('port'), ()=>{
   console.log('El servidor esta Activado en el puerto ', app.get('port'));
});