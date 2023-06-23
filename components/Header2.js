import React from 'react'
import { FiFacebook, FiHelpCircle, FiInstagram, FiPhone, FiSearch, FiSmartphone, FiTwitter } from 'react-icons/fi'

export const Header2 = () => {
    return (
        <div className='h-[16%] w-[100%] bg-blue-200 mx-auto w-screen'>
            <div>
                <img src='logo.png' className='h-[2.5%] w[2.5%] p-[3%] mr-[2%]' />
            </div>

            <div className="flex justify-center items-center mt-[-7%] ml-[52%]">{/**search bar */}
                <input
                    type="text"
                    placeholder="Search"
                    className="w-64 px-12 py-2 border border-gray-300 rounded-lg "
                />

                <div className='hover:text-red-600 text-4xl'>
                    <FiSearch />
                </div>
                <div className='flex lg:ml-[45%] ml-[70%]  font-sans font-semibold lg:text-md text-sm-2 container mx-auto'> {/**header */}

                    <div className='mt-[1%] hover:text-red-600 ml-[5%]'>
                        <FiSmartphone />
                    </div>
                    <a href='#' className="text-black hover:text-red-600 mx-[2%]">
                        Download the app
                    </a>
                    <div className='mt-[10%] ml-[-45%]  hover:text-red-600'>
                        <FiHelpCircle />
                    </div>
                    <a href='#' className='text-black hover:text-red-600 mt-[9%] ml-[1%] mb-[4%]'>
                        Help
                    </a>

                    <div className='flex  mt-[17%] p-[6%] ml-[-16%] text-2xl'>{/**contacts */}
                        <a href='#' className='text-gray-500 hover:text-red-600 p-[4%]'>
                            <FiPhone />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-red-600 p-[4%]'>
                            <FiInstagram />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-red-600 p-[4%]'>
                            <FiFacebook />
                        </a>
                        <a href='#' className='text-gray-500 hover:text-red-600 p-[4%]'>
                            <FiTwitter />
                        </a>
                    </div>



                </div>


            </div>

        </div>
    )
}
