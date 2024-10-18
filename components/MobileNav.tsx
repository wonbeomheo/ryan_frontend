import { XMarkIcon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react'

interface Props {
    nav: boolean,
    closeNav: () => void
}

const MobileNav = ({nav, closeNav}: Props) => {

    const navAnimation = nav ? 'translate-x-0' : 'translate-x-[100%]';

  return (
    <div 
        className={`fixed transform transition-all duration-300 top-0 left-0 right-0 buttom-0 z-[1000000] bg-[#100000] ${navAnimation}`}
    >
        <div className="w-[100vw] h-[100vh] flex flex-col items-center justify-center">
            <Link className="nav-link-mobile" href='#home' onClick={closeNav}>Home</Link>
            <Link className="nav-link-mobile" href='#about' onClick={closeNav}>About</Link>
            <Link className="nav-link-mobile" href='#experience' onClick={closeNav}>Experience</Link>
            <Link className="nav-link-mobile" href='#project' onClick={closeNav}>Project</Link>
            <Link className="nav-link-mobile" href='https://ryanheo.hashnode.dev/' target='_blank' onClick={closeNav}>Blog</Link>
            <Link className="nav-link-mobile" href='#contact' onClick={closeNav}>Contact</Link>
        </div>
        <div 
            onClick={closeNav}
            className='absolute cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-white'>
            <XMarkIcon />
        </div>
    </div>
  );
}

export default MobileNav