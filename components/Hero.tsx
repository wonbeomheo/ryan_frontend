import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className="mt-[12vh] h-[88vh] bg-[url('/images/background.svg')] bg-cover bg-center">
        <div className="w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                HI, I'M <span className='text-[#ffc000]'>RYAN!</span>
            </h1>
            <p className='text-[12px] md:text-[15px] text-gray-400'>
              Before I’m a web developer, I’m a dad to a fun-loving 6-year-old and a proud husband to my lovely wife. 
              My family is the driving force that helps me work more productively and gives me a strong sense of responsibility.
            </p>
            <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
              <button className='px-[2rem] hover:bg-[#ff3939] transition-all duration-200 py-[1rem] text-[1rem] font-bold uppercase 
              bg-[#ac0000] text-black flex items-center space-x-2 rounded-lg'>
                <p>Download CV</p>
                <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
              </button>
            </div>
          </div>
          <div className='w-[500px] h-[500px] hidden relative xl:flex items-center rounded-full'>
            <Image src="/images/pic.png" alt='Developer family' layout='fill' className='object-cover rounded-full'/>
          </div>
        </div>
    </div>
  )
}

export default Hero