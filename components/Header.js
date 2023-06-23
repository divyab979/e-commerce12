import React from 'react'
import { FiFacebook, FiHeart, FiHelpCircle, FiInstagram, FiLogIn, FiPhone, FiSearch, FiShoppingCart, FiSmartphone, FiTwitter } from 'react-icons/fi'

const Header = () => {
  return (
    <> 
    <div className='h[5%] w-[100%] bg-white text-center '>
      <div className="overflow-hidden bg-blue-200 h-[5%]">
        <div className="flex lg:ml-[80%] ml-[30%] mt-5 font-sans font-semibold lg:text-xl text-sm-2">
          <div className='p-2'>
            <FiSmartphone/>
          </div>
          <a href='#' className=" hover:text-red-600 text-black font-sans p-1 ">
           Download the App
          </a>
          <div className='p-2'>
            <FiHelpCircle/>
          </div>
          <a className=" hover:text-red-600 text-black font-sans p-1 ">
            Help
          </a>
        </div>

        <div> {/**contacts */}
        <div className="fixed right-0 flex justify-right p-4">
      <a href="#" className="mx-2 text-gray-500 hover:text-red-600">
        <FiFacebook size={24} />
      </a>
      <a href="#" className="mx-2 text-gray-500 hover:text-red-600">
        <FiTwitter size={24} />
      </a>
      <a href="#" className="mx-2 text-gray-500 hover:text-red-600">
        <FiInstagram size={24} />
      </a>
      <a href='#' className='mx-2 text-gray-500 hover:text-red-600'>
        <FiPhone size={24}/>
      </a>
    
    </div>


        
      </div>
      <div className="flex justify-center items-center mt-10">
          <div className='flex ' >
            <input type="text" placeholder="Search" className="border border-gray-300 rounded-full px-4 py-2 w-[100%]" /> 
            <div className='hover:text-red-500 text-4xl'>
            <FiSearch/>
            </div>
          </div>
        </div>
    </div>
      <div className='fixed'>
        <img src='logo.png' className='h-[2.5%] w[2.5%] ' />
      </div>
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

    </div>



    </>




  )

}

export default Header