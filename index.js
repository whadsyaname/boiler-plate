const express = require('express');
const app = express();
const port = 5000;

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://minjun:1234@boilerplate.lk950.mongodb.net/?retryWrites=true&w=majority', {    
}).then(() => console.log('MongoDB Connected...'))
  .catch(err => console.log(err))




app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`exemple app listening on port ${port}`));