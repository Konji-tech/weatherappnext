import React from 'react'
import { FaCloudSun } from "react-icons/fa";


export default function Navbar() {
   

    return (
        //sticky the navbar remains top
        <nav className='shadow-sm sticky top-0 left-0 z-50 bg-white'> 
        <div className='h-[80px] w-full flex justify-between items-center max-w-7xl px-3 mx-auto'>
        <div className=' flex items-center justify-center gap-2'>
            <h2 className='text-3xl font-girly '>Weather</h2>
            <FaCloudSun className='text-3xl mt-1 text-pastelPink'/>
        </div>
        </div>
        
        
        </nav>
    )
}

