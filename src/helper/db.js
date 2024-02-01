import mongoose from "mongoose";
const { getErrorResponse } = require("./getErrorResponse");

const URL = process.env.MONGODB_URL
const createDb = async() => {
    try {
        await mongoose.connect(URL);
        console.log("Database Connection Successfull");
    } catch (error) {
        console.log(error);
        console.log("Database Connection Failed");
    }
}

export {createDb}