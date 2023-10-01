
//qWwxiognwrFERDK3
/*const express=require('express');
const mongooose=require('mongoose');
const router=require("./routes/book-routes");
const cors=require('cors')
const app=express();

app.use(express.json());
app.use("/books",router);
app.use(cors());

mongooose.connect("mongodb+srv://Aditi:Aditi2002@cluster0.yg9hv8x.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log("connected to database"))
.then(()=>{
    app.listen(5000,)
}).catch((err)=>console.log(err));*/
const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb://abinash185:abinash185@ac-m1t6ht5-shard-00-00.4l3c9gx.mongodb.net:27017,ac-m1t6ht5-shard-00-01.4l3c9gx.mongodb.net:27017,ac-m1t6ht5-shard-00-02.4l3c9gx.mongodb.net:27017/?ssl=true&replicaSet=atlas-vng6wl-shard-0&authSource=admin&retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

