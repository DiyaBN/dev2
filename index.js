var con= require('./database');
const express = require('express');
const app=express();
const cors=require('cors');
const dotenv= require('dotenv');
const mongoose= require('mongoose');
dotenv.config();

mongoose.connect(
    process.env.DB_CONNECT
)
.then(() => {
    console.log("Connected to MongoDB Atlas");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

// app.use(express.static(__dirname + '/public'));
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.set('view engine', 'ejs');
app.use(express.json());
app.use(cors());

// app.get("/leads", function(req,res){
//     res.sendFile(__dirname + '/index.html');
// });
  
const leadRoutes = require("./routes/product");

app.use("/api/leads",leadRoutes);

app.listen(3000, () =>{
    console.log("Server Running")
});
