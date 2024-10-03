import { Bars3Icon } from '@heroicons/react/20/solid'
import React from 'react'

interface Props {
  openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className="fixed z-[100000] w-[100%] top-0 h-[12vh] shadow-md bg-[#100000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h1 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          RYAN
          <span className="text-[#ac0000]">HEO</span>
        </h1>
        <div className="nav-link">Home</div>
        <div className="nav-link">About</div>
        <div className="nav-link">Experience</div>
        <div className="nav-link">Project</div>
        <div className="nav-link">Blog</div>
        <div className="nav-link">Contact</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-white'/>
        </div>
      </div>
    </div>
  )
}

export default Nav