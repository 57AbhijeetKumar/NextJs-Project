import { createDb } from "@/helper/db";
import { NextResponse } from "next/server";

const { taskModel } = require("@/Models/task");
const { getErrorResponse } = require("@/helper/getErrorResponse");

createDb();

const GET = async(request) => {
    try {
        const taskData = await taskModel.find();
        return NextResponse.json(taskData,{
            status:200
        })
    } catch (error) {
        console.log(error)
        return getErrorResponse("Failed to fetch Data",400,false)
    }
}

const POST = async(request) => {
    try {
        const {title,content,status} = await request.json();
        const task = await taskModel({title,content,status});
        const taskData =await task.save();
        return NextResponse.json(taskData,{
            status:200
        });
    } catch (error) {
        console.log(error);
        return getErrorResponse("Data not Posted",400,false);
    }
}

const PUT = async(request) => {

}

const DELETE = async(request) => {

}

export {GET,POST,PUT,DELETE}