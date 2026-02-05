import mongoose, { model } from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String, required:true, trim:true},
    email:{type:String, required:true, trim:true},
    password:{type:String, required:true, trim: true},
    passwordResetToken:{type:String, default:null},
    passwordExpiresAt:{ type:Date, default:null}
    
})

const User= mongoose.modsels.users || mongoose.model('users', userSchema)

export default User