import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-blue-500 h-36 mt-5'>
      <div className='flex p-5 justify-around'>
        <div className='text-center'>
          <h1>Footer Heading</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.Officiis animi eveniet possimus. Hic quasi nam architecto consectetur iste debitis.</p>
        </div>
        <div className='text-center'>
          <h1>Important Links</h1>
          <ul>
            <li><Link href="">Facebook</Link></li>
            <li><Link href="">Linkdin</Link></li>
            <li><Link href="">github</Link></li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer