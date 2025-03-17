"use strict"

import express from "express";
const router = express.Router();
import User from "../Models/User.mjs"
import { checkUser } from "../RouterControllers/userController.mjs";

export default router;

//Create a user
router.get("/api/user", async (req, res) => {
    //Must check if the user exists
    const recieved = req.body;
    //body must be all of the information about the user on creation... See user model 
    const user = new User(recieved)
    console.log("Recieved : ", user.toObject())
    if(checkUser(user)){
        res.json("User Already Exists")
        res.status(404)
    }else{
        res.json({})
        res.status(200)
    }

});



//Edit an Existing User