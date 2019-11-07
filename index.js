'use strict';

const express = require('express');

const app = express();

app.get('/',(re,res) => {
   res.send('Hello from my Node server');

});

app.get('/demo',(req,res) =>{
    console.log()
   res.send('demo'); 
});

app.listen(3000,() =>{
    console.log('server app start?');
});

app.listen(3000);

