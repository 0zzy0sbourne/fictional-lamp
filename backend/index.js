const express = require('express'); 
const app = express(); 

app.get('/', (_, res) => {
    res.send("<h1></h1>"); 
}); 


app.listen(3000, ()=> {
    console.log('port is up'); 
}); 