import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-blue-600 flex justify-between h-12 items-center text-white'>
        <div>
          <h1 className='text-xl font-bold px-11'>Work-Manager</h1>
        </div>
        <div>
          <ul className='flex space-x-6'>
            <li><Link href={"/"}>Home</Link></li>
            <li><Link href="/addTask">Add Task</Link></li>
            <li><Link href="/showTask">Show Task</Link></li>
          </ul>
        </div>
        <div>
          <ul className='flex space-x-6 px-8'>
            <li><Link href="#">Login</Link></li>
            <li><Link href="#">Sign in</Link></li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar