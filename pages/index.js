import Slideshow from '@/components/Slideshow'
import React from 'react'
import { Header2 } from '@/components/Header2'
import Hot from '@/components/Hot'
import Express from '@/components/Express'
import H1 from '@/components/H1'
import H2 from '@/components/H2'
import H3 from '@/components/H3'
import H4 from '@/components/H4'
import H5 from '@/components/H5'
import H6 from '@/components/H6'
import H7 from '@/components/H7'
import H8 from '@/components/H8'


const home = () => {
  return (
    <div className='h-screen w-screen bg-white text-black  '> {/**main container */}
      <Header2 />
      <Slideshow />
      <Hot />
      <div className="flex overflow-x-auto">
        <div className="flex-none w-screen lg:w-[calc(100vw - 2%)] flex">
          <H1 />
          <H2 />
          <H3 />
          <H4 />
          <H5 />
          <H6/>
          <H7 />
          <H8 />
        </div>
      </div>


      <Express />

    </div>
  )
}

export default home
