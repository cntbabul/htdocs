const express = require('express');
const app= express ();
app.get('/', (req,resp) =>{

    resp.send('welcome to user page')
})

app.get('/users',(req,resp)=>{
    ResizeObserver.send('welcome to users page')
})

app.listen(5000)