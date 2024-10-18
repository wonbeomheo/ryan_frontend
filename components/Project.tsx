import { DocumentTextIcon, GlobeAltIcon, PresentationChartLineIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
    <div id="project" className='bg-[#1a0000] pt-[8rem] pb-[5rem]'>
        <p className="heading">
            my <span className='text-[#ac0000]'>projects</span>
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
            <div>
                <div className="bg-[#ac0000] hover:scale-110 transform transition-all duration-300
                uppercase font-semibold text-center p-[2rem]">
                    <GlobeAltIcon className='w-[6rem] h-[6rem] mx-auto text-slate-200' />
                    <h1 className="text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]">
                        Personal Page
                    </h1>
                    <p className="text-[15px] text-slate-300 font-normal"></p>
                </div>
            </div>
            <div>
                <div className="bg-[#ff3939] hover:scale-110 transform transition-all duration-300
                uppercase font-semibold text-center p-[2rem]">
                    <PresentationChartLineIcon className='w-[6rem] h-[6rem] mx-auto text-slate-200' />
                    <h1 className="text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]">
                        stock ai
                    </h1>
                    <p className="text-[15px] text-slate-300 font-normal"></p>
                </div>
            </div>
            <Link href='https://ryanheo.hashnode.dev/' target="_blank">
                <div className="bg-[#ffa000] hover:scale-110 transform transition-all duration-300
                uppercase font-semibold text-center p-[2rem]">
                    <DocumentTextIcon className='w-[6rem] h-[6rem] mx-auto text-slate-200' />
                    <h1 className="text-[20px] md:text-[25px] mt-[1.5rem] mb-[1.5rem]">
                        Blog
                    </h1>
                    <p className="text-[15px] text-slate-300 font-normal"></p>
                </div>
            </Link>
        </div>
    </div>
  )
}

export default Project