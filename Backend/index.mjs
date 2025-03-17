"use strict"
import {MongoClient} from "mongodb"
import express from "express"
import cors from "cors"
import userRouter from "./Routes/user.mjs"
const app = express();
app.use(cors());
app.use(express.json());


/**
 * Routes
 */
app.get("/", (req,res) => {
    res.send("Invalid Endpoint")
  })

app.use("/User", userRouter)
export default app;