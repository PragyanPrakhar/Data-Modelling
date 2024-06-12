import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    description:{
        type: 'string',
        required: true,
    },
    name:{
        type: 'string',
        required: true,
    },
    productImages:{
        type: 'string'
    },
    price:{
        type: 'number',
        default:0,
    },
    stock:{
        default:0,
        type: 'number',
    },
    category:{
        type:mongoose.schema.Types.ObjectId,
        ref:"Category",
        required: true,
    },
    owner:{
        type:mongoose.schema.Types.ObjectId,
    }

},{timestamps:true})

export const Product=mongoose.model("Product",productSchema);