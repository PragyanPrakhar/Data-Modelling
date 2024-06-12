import mongoose from "mongoose";

const hospitalSchema=new mongoose.Schema({
    name:{
        type:"string",
        required:true,
    },
    addressLine1:{
        type:"string",
        addres:required
    },
    addressLine2:{
        type:String,
        address:required
    },
    City:{
        type:"string",
        required:true,
    },
    pincode:{
        type:String,
        requiredtru
    }
},{timestamps:true});

export const Hospital = mongoose.model("Hospital",hospitalSchema)``