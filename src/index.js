// require('dotenv').config({ path: "./env" })
import dotenv from "dotenv"
import { app } from "./app.js";
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})

connectDB()
    .then(() => {
        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is running on port:${process.env.PORT}`);
        })
        app.on("error", (error) => {
            console.log("error", error);
            throw error
        })
    })
    .catch((err) => {
        console.log("MongoDB connection failed !!", err);
    })

app.get('/', (req, res) => {
    res.send("server chalu chhe");
})