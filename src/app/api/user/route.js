import { userModel } from "@/Models/user";
import { getErrorResponse } from "@/helper/getErrorResponse";
import { NextResponse } from "next/server";
import bycrypt from "bcryptjs";
import { createDb } from "@/helper/db";

createDb();
const GET = async(request) => {
    try {
        const data = await userModel.find();
    return NextResponse.json(data,{
        status:200
    })
    } catch (error) {
        console.log(error)
        return getErrorResponse("failed to fetch data",400,false)
    }
    
}

const POST = async(request) => {
    const {name,email,password,about} = await request.json();
    try {
        const user = await userModel({name,email,password,about});
        user.password =await bycrypt.hash(user.password,parseInt(process.env.BCRYPT_PASSWORD))
        const userData = await user.save();
        return NextResponse.json(userData,{
            status:200
        })
    } catch (error) {
        console.log(error);
        return getErrorResponse("Failed to insert Data",400,false);
    }
}

const PUT = async(request) => {
    
}

const DELETE = async(request) => {
    
}

export {GET,POST,PUT,DELETE}