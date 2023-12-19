import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    link:{
        type:String,
    }
} , {timestamps:true})

export const url = mongoose.model("url" , urlSchema);
