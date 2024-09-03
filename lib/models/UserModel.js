import mongoose from "mongoose";

const Schema = new mongoose.Schema({
        name:{
            type:String,
            requireed:true,
        },

        email:{
            type:String,
            requireed:true,
        },
        password:{
            type:String,
            requireed:true,
        }
    }
);

const UserModel = mongoose.models.user || mongoose.model('user', Schema);

export default UserModel;