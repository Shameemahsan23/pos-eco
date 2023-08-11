const express = required('express'); 
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
// require('colors');

dotenv.config();

// Connect with MongoDb
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("Connected to MongoDB");
}).catch((err) => {
    console.log(err.message);
});

const app = express();

//middleware 
app.use(cors());
app.use(bodyParser.json());
app.use (bodyParser.urlencoded({ extended: false }));
app.use(morgan("dev"));

//route
app.get('/', (req, res) => {
 res.send("Hello Pos");
});

// create Port 
const PORT = process.env.PORT || 5000;

//listen 
app.listen(PORT, () => {
    console.log(`Server at running on the port:http://localhost500 ${PORT}`);
});

