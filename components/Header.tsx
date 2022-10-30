import React from 'react'
import Link from 'next/link'

function Header() {
  return (
<header className='flex justify-between max-w-7xl mx-auto'>
    <div className='flex items-center space-x-5 '>
        <Link href="/">
            <img 
            className='w-44 object-contain cursor-pointer' 
            src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" 
            alt="" />
        </Link>
        <div className='hidden md:inline-flex items-center space-x-5'>
            <h3>about</h3>
            <h3>contact</h3>
            <h3 className='text-white bg-green-600 px-4 py-1 rounded-full'>follow</h3>
        </div>

    </div>

    <div className='flex items-center space-x-5 text-green-600' >
        <h3>Sign In</h3>
        <h3 className='border px-4 py1 rounded-full border-green-600'>Get Started</h3>
        <h3></h3>
    </div>
</header>  
);
}

export default Header