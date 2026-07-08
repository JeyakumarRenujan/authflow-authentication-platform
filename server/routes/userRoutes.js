import express from "express";


import {

getProfile,
updateProfile,
changePassword,
deleteAccount

}

from "../controllers/userController.js";


import protect 
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



export default router;