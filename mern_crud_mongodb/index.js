//const express = require('express');
import express from 'express';
import route from './route/routes.js';

import cors from 'cors'  //for security purpose use differnt port data access
import bodyParser from 'body-parser';

//initialize
const app = express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))  //remove url space by charcher
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



app.use('/users',route)

