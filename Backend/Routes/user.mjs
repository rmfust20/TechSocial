"use strict"

import express from "express";
const router = express.Router();
import User from "../Models/User.mjs"
import { checkUser, addUser } from "../RouterControllers/userController.mjs";

export default router;

//Create a user
router.post("/create", async (req, res) => {
    //Must check if the user exists
    const recieved = req.body;
    //body must be all of the information about the user on creation... See user model 
    const user = new User(recieved)
    console.log("Recieved : ", user.toObject())
    if(checkUser(user)){
        res.json("User Already Exists")
        res.status(404)
    }else{
        addUser(user)
        res.json("User Added")
        res.status(200)
    }
});



//Edit an Existing User