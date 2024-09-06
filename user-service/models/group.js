const mongoose = require('mongoose')

const groupSchema = new mongoose.Schema({
    groupname:{
        type:String,
        required:true,
        unique:true
    },
    member:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }],
    createdAt:{
        type:Date,
        default:Date.now()
    },
    
})