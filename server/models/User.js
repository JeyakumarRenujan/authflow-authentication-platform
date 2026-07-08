import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
    {

        name: {
            type: String,
            required: [
                true,
                "Name is required"
            ],
            trim: true,
            maxlength: 50
        },


        email: {

            type: String,

            required: [
                true,
                "Email is required"
            ],

            unique: true,

            lowercase: true,

            trim: true,

            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                "Please enter valid email"
            ]
        },


        password: {

            type: String,

            required: [
                true,
                "Password required"
            ],

            minlength: 6,

            select:false
        },


        avatar: {

            type:String,

            default:"default-avatar.png"

        },


        role: {

            type:String,

            enum:[
                "user",
                "admin"
            ],

            default:"user"

        },


        isVerified: {

            type:Boolean,

            default:false

        }

    },

    {
        timestamps:true
    }

);



// hash password before save

userSchema.pre(
    "save",
    async function(){

        if(!this.isModified("password")){
            return;
        }


        const salt =
        await bcrypt.genSalt(10);


        this.password =
        await bcrypt.hash(
            this.password,
            salt
        );

    }
);



// compare passwords

userSchema.methods.comparePassword =
async function(password){

    return await bcrypt.compare(
        password,
        this.password
    );

};



const User =
mongoose.model(
    "User",
    userSchema
);


export default User;