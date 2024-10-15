import { ArrowDownTrayIcon } from '@heroicons/react/20/solid'
import Image from 'next/image'
import React from 'react'

const About = () => {
  return (
    <div id="about" className='bg-[#1a0000] pb-[3rem] pt-[8rem]'>
        <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
            <div>
                <h1 className='text-[20px] font-bold uppercase text-[#ac0000] mb-[1rem]'>
                    About ME
                </h1>
                <h2 className='text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white'>
                    Junior <span className='text-[#ffa000]'>web developer</span>
                </h2>
                <div className="mb-[3rem] flex items-center md:space-x-10">
                    <span className="w-[100px] hidden md:block h-[5px] bg-gray-400 rounded-sm"></span>
                    <p className="text-[19px] text-slate-300 w-[80%]">
                        Skilled junior web developer with two years of experience and permanent residency, now in Vancouver and ready to bring fresh talent to your team. Let’s build something great together!
                    </p>
                </div>
                <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6">
                    <button className='px-[2rem] hover:bg-[#ff3939] transition-all duration-200 py-[1rem] text-[1rem] font-bold uppercase 
                        bg-[#ac0000] text-black flex items-center space-x-2 rounded-lg'>
                        <p>Download CV</p>
                        <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                    </button>
                </div>
            </div>
            <div className='lg:w-[500px] mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[500px] w-[300px] h-[300px] relative'>
                <Image src="/images/work.jpg" alt="work picture" layout='fill' objectFit='contain' className='relative z-[11]
                w-[100%] h-[100%] object-contain' />
                <div className="absolute w-[100%] h-[100%] z-[10] bg-[#ac0000] top-[2rem] right-[-2rem]"></div>
            </div>
        </div>
    </div>
  )
}

export default About