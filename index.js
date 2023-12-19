import express  from "express";
import mongoose from "mongoose";
import "dotenv/config";
const app = express();

app.listen(process.env.PORT , ()=>{
    console.log(`app running on port ${process.env.PORT}`)
}) 