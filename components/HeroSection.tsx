'use client'

import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import { HiArrowDown } from 'react-icons/hi'
import { TypeAnimation } from 'react-type-animation'

const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left'>
        {/* Left: Image */}
        <div className='md:mt-2 md:w-1/2'>
          <Image
            src='/headshot.png'
            alt='Raymond Headshot'
            width={325}
            height={325}
            className='rounded-full shadow-2xl'
          />
        </div>

        {/* Right: Typing Effect Text */}
        <div className='md:mt-2 md:w-3/5'>
          <h1 className='text-4xl font-bold mt-6 md:mt-0 md:text-7xl'>
            <TypeAnimation
              sequence={[
                "Hi, I'm Ray!", // type this
                8000, // wait 2 seconds
                '', // clear text
                800,
                "Hi, I'm Ray!" // type again
              ]}
              speed={60}
              wrapper='span'
              repeat={Infinity}
            />
          </h1>

          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            <TypeAnimation
              sequence={[
                'I’m a Frontend Developer from Metro Manila, Philippines, passionate about turning ideas into engaging digital experiences. I build responsive, user-friendly websites using HTML, CSS, and JavaScript to deliver clean, scalable, and high-performance interfaces.',
                8000, // wait before restarting
                '',
                800 // small pause before typing again
              ]}
              wrapper='p'
              speed={60}
              repeat={Infinity}
              className='text-lg mt-4 mb-6 md:text-2xl font-normal'
            />
          </p>

          <a
            href='/raymondsabado-cv.pdf' // your PDF file in the public folder
            target='_blank' // opens in a new tab
            rel='noopener noreferrer' // security best practice
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
          >
            Download My Resume
          </a>
        </div>
      </div>

      {/* Scroll Down Arrow */}
      <div className='flex flex-row items-center text-center justify-center'>
        <Link
          to='about'
          activeClass='active'
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className='animate-bounce' />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
