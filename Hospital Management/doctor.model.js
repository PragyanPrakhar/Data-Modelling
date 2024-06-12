import mongoose from "mongoose";

const doctorSchema=new mongoose.Schema({
    name:{
        type:"string",
        required:true,
    },
    salary:{
        type:String,
    },
    qualifications:{
        type:String,
        required:true,
    },
    experienceInYears:{
        type:Number,
        default:0,
    },
    worksInHospitals:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"org"
    }]
    
},{timestamps:true});

export const Doctor = mongoose.model("Doctor",doctorSchema)