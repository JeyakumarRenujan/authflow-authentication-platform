import User from "../models/User.js";



// @desc Get User Profile
// @route GET /api/users/profile

export const getProfile = async(req,res)=>{

    try{

        const user =
        await User.findById(
            req.user._id
        );


        res.json({

            success:true,

            user

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





// @desc Update Profile
// @route PUT /api/users/profile


export const updateProfile = async(req,res)=>{

    try{


        const user =
        await User.findById(
            req.user._id
        );



        if(!user){

            return res.status(404)
            .json({

                success:false,

                message:"User not found"

            });

        }



        user.name =
        req.body.name || user.name;


        user.email =
        req.body.email || user.email;



        const updatedUser =
        await user.save();



        res.json({

            success:true,

            user:{

                id:updatedUser._id,

                name:updatedUser.name,

                email:updatedUser.email,

                role:updatedUser.role

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






// @desc Change Password
// @route PUT /api/users/change-password



export const changePassword = async(req,res)=>{


    try{


        const {

            oldPassword,
            newPassword

        } = req.body;



        const user =
        await User.findById(
            req.user._id

        ).select("+password");



        const isMatch =
        await user.comparePassword(
            oldPassword
        );



        if(!isMatch){


            return res.status(400)
            .json({

                success:false,

                message:
                "Old password incorrect"

            });

        }



        user.password =
        newPassword;



        await user.save();



        res.json({

            success:true,

            message:
            "Password changed successfully"

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






// @desc Delete Account
// @route DELETE /api/users/delete


export const deleteAccount = async(req,res)=>{


    try{


        await User.findByIdAndDelete(
            req.user._id
        );



        res.json({

            success:true,

            message:
            "Account deleted successfully"

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


// @desc Admin get all users
// @route GET /api/users


export const getAllUsers = async(req,res)=>{


    try{


        const users =
        await User.find();



        res.json({

            success:true,

            count:users.length,

            users

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






// @desc Admin delete any user
// @route DELETE /api/users/:id



export const deleteUser = async(req,res)=>{


    try{


        const user =
        await User.findById(
            req.params.id
        );



        if(!user){


            return res.status(404)
            .json({

                success:false,

                message:
                "User not found"

            });


        }



        await user.deleteOne();



        res.json({

            success:true,

            message:
            "User removed"

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