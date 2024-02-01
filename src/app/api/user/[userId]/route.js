import { userModel } from "@/Models/user";
import { getErrorResponse } from "@/helper/getErrorResponse";
import { NextResponse } from "next/server";

const GET = async(request,{params}) => {
    const {userId} = params;
    try {
        const user = await userModel.findById(userId);
        return NextResponse.json(user,{
            status:200
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse("Failed to fetch data");
    }
}

const POST = async(request,{params}) => {
    
}

const PUT = async(request,{params}) => {
    const {userId} = params;
    try {
        const {name,about} =await request.json();
        const user =await userModel.findById(userId);
        user.name=name,
        user.about=about
        const updateData = await user.save();
        return NextResponse.json(updateData,{
            status:200
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse("Failed to Update Data",400,false)
    }
}

const DELETE = async(request,{params}) => {
    const {userId} = params;
    try {
        await userModel.deleteOne({
            _id:userId
        })
        return getErrorResponse("User Deleted Successfull",200,true)
    } catch (error) {
        console.log(error)
        return getErrorResponse("Failed to delete User",400,false)
    }
}

export {GET,POST,PUT,DELETE}