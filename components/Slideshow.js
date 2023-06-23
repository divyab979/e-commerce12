import React from 'react'
import { FiArrowRight, FiHeart, FiLogIn, FiShoppingCart } from 'react-icons/fi'

const Image = () => {
  return (
    <div>
      <div className='flex lg:ml-[40%] ml-[30%] mt-5 font-sans font-bold lg:text-2xl text-sm-2 '>


        <a href="https://classroom.google.com" className='p-4 text-gray-500 hover:text-red-600'>Home</a>
        <a href="https://portal.a3m.io/Tasks" className='p-4   text-gray-500 hover:text-red-600'>Women</a>
        <a href="https://www.youtube.com" className='p-4  text-gray-500 hover:text-red-600'>Men</a>
        <a href="https://www.netflix.com/browse" className='p-4  text-gray-500 hover:text-red-600'>Kids</a>


        <div class="flex ml-[-15%] lg:ml-[45%] mt-12">
          <a href="#" className="text-gray-500 hover:text-red-600 p-4  ">
            <FiHeart />
          </a>
          <a href="#" className="text-gray-500  hover:text-red-600 p-4 ">
            <FiShoppingCart />
          </a>
          <a href="#" className="text-gray-500  hover:text-red-600 p-4  ">
            <FiLogIn />
          </a>
        </div>

      </div>

      <div class="flex justify-center items-center mt-10 overflow-hidden">{/**circular tabs */}
        <div class="grid grid-cols-6 gap-4">

          <a href="#" className=" text-white flex justify-center items-center rounded-full w-48 h-48">
            <img src="n1.png" class="rounded-full w-42 h-42" />
          </a>
          <a href="#" className=" text-white flex justify-center items-center rounded-full w-48 h-48">
            <img src="n2.png" class="rounded-full w-42 h-42" />
          </a>
          <a href="#" className=" text-white flex justify-center items-center rounded-full w-48 h-48">
            <img src="n3.png" class="rounded-full w-42 h-42" />
          </a>
          <a href="#" className=" text-white flex justify-center items-center rounded-full w-48 h-48">
            <img src="n4.png" class="rounded-full w-42 h-42" />
          </a>
          <a href="#" className=" text-white flex justify-center items-center rounded-full w-48 h-48">
            <img src="n5.png" class="rounded-full w-42 h-42" />
          </a>
          <a href='#' className='flex justify-center items-center rounded-full text-gray-500 hover:text-red-600'>
            <FiArrowRight size={70} />
          </a>

          <div className="flex overflow-x-auto w-screen"> {/**cards */}
            <div className="flex-none w-[calc(100vw - 2%)] mt-20 mr-[2%]">
              <div className="flex">
                <div className="p-4">
                  <a href="#">
                    <img src="p1.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <img src="p2.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <img src="p3.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <img src="p4.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <img src="p5.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
                <div className="p-4">
                  <a href="#">
                    <img src="p6.png" className="h-62 w-auto max-w-full" />
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>


      </div>
    </div>


  )
}

export default Image