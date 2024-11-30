import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
    title:{type:String,required:true},
    type:{type:String , required:true , default:"income"},
    amount:{type:Number,required:true},
    category:{type:String,required:true},
    description:{type:String , required:true},
},{timestamps:true})

const transactionModel = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema)
export default transactionModel;