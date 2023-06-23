import React from 'react'
import { FiArrowRight } from 'react-icons/fi'

const Express = () => {
  return (
    <div className=' bg-blue-200 h-[25%]'>
      <div className='lg:mt-[10%] w-screen mt-[20%]'>
                
                <h1 className='flex justify-center font-semibold font-sans text-7xl  mb-[20%]'>
                    EXPRESS <span className='m-[1%] font-light text-5xl '> SHIPPING</span>
                    <span className=' font-light text-2xl mt-[5%] text-gray-500  '>
                    Shipping within 24 hours for subscribed customers <a href='#'> <FiArrowRight className='hover:text-red-600'/></a>
                    </span>
                    
                </h1>
            </div>
            </div>
  )
}

export default Express