import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    status:{
        type:String,
        enum:["pending","completed"],
        require:true,
        default:"pending"
    }
})

const taskModel = mongoose.models.task || new mongoose.model("task",taskSchema);

export {taskModel}