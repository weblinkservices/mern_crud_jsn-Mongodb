//const express = require('express');
import express, { response } from 'express';

//initialize
const app = express();

//port
const PORT = 8000;
const URL = "mongodb://localhost:27017/employee"

import mongoose from 'mongoose';
mongoose.connect(URL, {
    useNewUrlParser: true, useUnifiedTopology: true, //new server monitering engin discovey use
}).then(() => {
    app.listen(PORT, () => { console.log(`Server is running successfully on Port ${PORT}`) })
}).catch(error => {
    console.log("ERROR", error.message);
})


const route = express.Router();
route.get('/',(request, response)=>{
    response.status(200).json("Hi from Database");
})
app.use('/users',route)

app.use('/',(request, response)=>{
    response.status(200).json("...");
})