import express from "express";


import {

getProfile,
updateProfile,
changePassword,
deleteAccount,
getAllUsers,
deleteUser

}

from "../controllers/userController.js";


import protect, {admin}
from "../middleware/authMiddleware.js";



const router =
express.Router();



router.get(
    "/profile",
    protect,
    getProfile
);



router.put(
    "/profile",
    protect,
    updateProfile
);



router.put(
    "/change-password",
    protect,
    changePassword
);



router.delete(
    "/delete",
    protect,
    deleteAccount
);


// Admin routes


router.get(
    "/",
    protect,
    admin,
    getAllUsers
);



router.delete(
    "/:id",
    protect,
    admin,
    deleteUser
);



export default router;