import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";



// @desc Register User
// @route POST /api/auth/register

export const registerUser = async(req,res)=>{

    try{


        const {
            name,
            email,
            password
        } = req.body;



        const userExists =
        await User.findOne({
            email
        });



        if(userExists){

            return res
            .status(400)
            .json({

                success:false,

                message:
                "User already exists"

            });

        }



        const user =
        await User.create({

            name,
            email,
            password

        });



        const token =
        generateToken(
            user._id
        );



        res.status(201)
        .json({

            success:true,

            token,

            user:{

                id:user._id,

                name:user.name,

                email:user.email,

                role:user.role

            }

        });


    }


    catch(error){


        res.status(500)
        .json({

            success:false,

            message:error.message

        });


    }


};




// @desc Login User
// @route POST /api/auth/login


export const loginUser = async(req,res)=>{


    try{


        const {
            email,
            password
        } = req.body;




        const user =
        await User.findOne({
            email

        }).select(
            "+password"
        );



        if(!user){

            return res
            .status(401)
            .json({

                success:false,

                message:
                "Invalid credentials"

            });

        }




        const isMatch =
        await user.comparePassword(
            password
        );




        if(!isMatch){


            return res
            .status(401)
            .json({

                success:false,

                message:
                "Invalid credentials"

            });


        }




        const token =
        generateToken(
            user._id
        );




        res.json({

            success:true,

            token,


            user:{

                id:user._id,

                name:user.name,

                email:user.email,

                role:user.role

            }


        });



    }


    catch(error){


        res.status(500)
        .json({

            success:false,

            message:error.message

        });

    }


};





// @desc Current logged user
// @route GET /api/auth/me


export const getMe = async(req,res)=>{


    res.json({

        success:true,

        user:req.user

    });


};





// @desc Logout

export const logoutUser=(req,res)=>{


    res.json({

        success:true,

        message:
        "Logout successful"

    });


};