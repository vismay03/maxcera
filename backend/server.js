require('dotenv').config();
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const uri = process.env.ATLAS_URI;
const app = express();
const productRoute = require('./routes/productRoute');
const path = require('path');
const loginRoute = require('./routes/loginRoute');




app.use(cors());
app.use(express.json());

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})




const bodyParser = require('body-parser');
const loginModel = require('./models/productModel');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, '..', 'uploads')));

mongoose.connection.once('open', () => {
  console.log("MongoDB database connection established successful");
});

app.use(productRoute);
app.use(loginRoute);



app.listen(4000, ()=>{
    console.log('MongoDB Connected… running on 4000');
})