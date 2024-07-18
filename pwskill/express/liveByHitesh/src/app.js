import express from 'express';
const app = express();
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.get('/instagram', (req, res) => {
    res.send('welcome to instagram')
  })


  app.get('/about', (req, res) => {
    res.send('welcome to About us')
  })
  
  
export default app;