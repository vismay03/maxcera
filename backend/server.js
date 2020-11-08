
const cors = require('cors');
const mongoose = require('mongoose');
const express = require('express');
const uri = process.env.ATLAS_URI || "mongodb://Maxcera:Maxcer%40@cluster0-shard-00-00.y1fcd.mongodb.net:27017,cluster0-shard-00-01.y1fcd.mongodb.net:27017,cluster0-shard-00-02.y1fcd.mongodb.net:27017/Maxcera?ssl=false&replicaSet=atlas-p1snsz-shard-0&authSource=admin&retryWrites=true&w=majority";
const app = express();
const productRoute = require('./routes/productRoute');
const path = require('path');
const loginRoute = require('./routes/loginRoute');


require('dotenv').config({  path: "env" } )

app.use(cors());
app.use(express.json());

mongoose.connect(uri,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})
.then(()=>{
  console.log("conected to mongodb");
}).catch(error => {
  console.log("mongo error",error);
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



app.listen(process.env.PORT || 4000, ()=>{
  console.log('MongoDB Connected… running on 4000');
})