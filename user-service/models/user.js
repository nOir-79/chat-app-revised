const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    activeStatus:{
        type:Boolean,
        default:false
    },
    group:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Group'
    }],
    friend:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }]
})

userSchema.pre('save',async function(next){
    if(this.isModified('password'))
    {
        this.password = await bcrypt.hash(this.password, 10)
    }
    next()
})

module.exports = mongoose.model('User',userSchema)