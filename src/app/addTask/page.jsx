"use client";
import React, { useState } from 'react'

const metadata = {
  title: "Add Task : Work manager"
}
const AddTask = () => {
  console.log("This is add Task Component");
  const [task,setTask] = useState({
    title:"",
    content:"",
    status:"none"
  })

  const formData = (event) => {
    event.preventDefault();
    console.log(task);
  }
  return (
    <div className='grid grid-cols-12 justify-center'>
      <div className=' col-span-6 col-start-4 px-4 py-2  shadow-lg shadow-white-400 text-white'>
        <h1 className='text-3xl text-center'>Add Task</h1>
        <form action="" onSubmit={formData}>
          <div className='mt-4'>
            <label htmlFor="title" className='block text-sm font-medium mb-2'>Title</label>
            <input type="text" id='taskTitle' name='taskTitle' onChange={(event)=>{setTask({...task,title:event.target.value})}} value={task.title} className='w-full p-3 rounded-lg bg-gray-500 focus:ring-gray-400 border border-gray-800'/>
          </div>

          <div className='mt-4'>
            <label htmlFor="taskContent" className='block text-sm font-medium mb-2'>Content</label>
            <textarea id='taskContent' name='taskContent' onChange={(event)=>{setTask({...task,content:event.target.value})}} value={task.content} className='w-full p-3 rounded-lg bg-gray-500 focus:ring-gray-400 border border-gray-800' rows={5}/>
          </div>

          <div>
            <label htmlFor="taskStatus" className='block text-sm font-medium mb-2'>Status</label>
            <select id="taskStatus" name='taskStatus' onChange={(event)=>{setTask({...task,status:event.target.value})}} value={task.status} className='w-full p-3 rounded-lg bg-gray-500 focus:ring-gray-400 border border-gray-800 text-center'>
              <option value="none" disabled>---Select Status---</option>
              <option value="Pending">Pending</option>
              <option value="Completed">Completed</option>
            </select>
          </div>
          <div>
            <div className='mt-4 flex justify-center'>
              <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Task</button>
              <button className='bg-red-600 ms-3 py-2 px-3 rounded-lg hover:bg-red-800'>Clear</button>
            </div>
          </div>
          {
            JSON.stringify(task)
          }
        </form>
      </div>
    </div>
  )
}

export default AddTask