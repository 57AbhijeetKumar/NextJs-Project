import { taskModel } from "@/Models/task";
import { getErrorResponse } from "@/helper/getErrorResponse";
import { NextResponse } from "next/server";

const GET = async(request,{params}) => {
    const {taskId} = params;
    try {
        const task = await taskModel.findById(taskId);
        return NextResponse.json(task,{
            status:200
        })
    } catch (error) {
        console.log(error);
        return getErrorResponse("Failed to fetch Data",400,false)
    }
}

const POST = async(request,{params}) => {
    
}

const PUT = async(request,{params}) => {
    const {taskId} = params;
    try {
        const {title,content,status} = await request.json();
        let taskDetails = await taskModel.findById(taskId);
        taskDetails.title=title,
        taskDetails.content=content,
        taskDetails.status=status
        const updatedTask = await taskDetails.save();
        return NextResponse.json(updatedTask,{
            status:200
        })
    } catch (error) {
        console.log(error);
        return getErrorResponse("Task Updation Failed",400,false);
    }
}

const DELETE = async(request,{params}) => {
    const {taskId} = params;
    try {
        await taskModel.deleteOne({
            _id:taskId
        })
        return NextResponse.json({
            msg:"Task deleted SuccessFully",
            status:200
        })
    } catch (error) {
        console.log(error);
        return getErrorResponse("failed to delete task",400,false)
    }
}

export {GET,POST,PUT,DELETE}