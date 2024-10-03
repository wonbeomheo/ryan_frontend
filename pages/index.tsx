import About from '@/components/About';
import Experience from '@/components/Experience';
import Hero from '@/components/Hero';
import MobileNav from '@/components/MobileNav';
import Nav from '@/components/Nav';
import Project from '@/components/Project';
import React, { useState } from 'react'

const HomePage = () => {

  const [nav, setNav] = useState(false)
  const openNav = () => setNav(true);
  const closeNav = () => setNav(false);

  return (
  <div className="overflow-x-hidden">
    <div>
      <MobileNav nav={nav} closeNav={closeNav}/>
      <Nav openNav={openNav} />
      <Hero />
      <div className='relative z-[30]'>
        <About />
        <Experience />
        <Project />
      </div>
    </div>
  </div>
  );
};

export default HomePage