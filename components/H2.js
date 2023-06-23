import React from 'react'

const H2 = () => {
    return (
        <div className='flex-none'>
            <div>
                <a href="#" >
                    <img src='h2.png' className="w-80 h-auto"/></a>
            </div>
            <a href="#" className='font-bold font-serif text-lg text-gray-500 hover:text-red-600 text-center'>
                <h1>
                    Upto 30% off
                </h1>
                <span className='font-light text-lg font-sans flex justify-center'>
                    On selected items.
                </span>
            </a>
        </div>
    )
}

export default H2