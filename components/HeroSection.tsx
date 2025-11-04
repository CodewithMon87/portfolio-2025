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
                "Hi, I'm Raymond!", // type this
                2000, // wait 2 seconds
                '', // clear text
                500,
                "Hi, I'm Raymond!" // type again
              ]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
            />
          </h1>

          <p className='text-lg mt-4 mb-6 md:text-2xl'>
            I&apos;m a{' '}
            <TypeAnimation
              sequence={[
                "I'm a Frontend Developer based in Los Angeles, CA. Working towards creating software that makes life easier and more meaningful.",
                2000, // wait before restarting
                '',
                500 // small pause before typing again
              ]}
              wrapper='p'
              speed={50}
              repeat={Infinity}
              className='text-lg mt-4 mb-6 md:text-2xl font-normal'
            />
          </p>

          <Link
            to='projects'
            className='text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700'
            activeClass='active'
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
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
