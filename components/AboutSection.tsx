import React from 'react'
import Image from 'next/image'

const skills = [
  { skill: 'HTML' },
  { skill: 'CSS' },
  { skill: 'SCSS' },
  { skill: 'SaSS' },
  { skill: 'Tailwind CSS' },
  { skill: 'Bootstrap' },
  { skill: 'Foundation' },
  { skill: 'JavaScript' },
  { skill: 'TypeScript' },
  { skill: 'ReactJs' },
  { skill: 'Next.js' },
  { skill: 'Laravel' },
  { skill: 'MySQL' },
  { skill: 'Git' },
  { skill: 'GitHub' },
  { skill: 'Wordpress' },
  { skill: 'Shopify' }
]

const AboutSection = () => {
  return (
    <section id='about'>
      <div className='my-12 pb-12 md:pt-16 md:pb-48'>
        <h1 className='text-center font-bold text-4xl'>
          About Me
          <hr className='w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded'></hr>
        </h1>

        <div className='flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left'>
          <div className='md:w-1/2 '>
            <h1 className='text-center text-2xl font-bold mb-6 md:text-left'>
              Get to know me!
            </h1>
            <p>
              Hi, I’m Raymond, an experienced Frontend Developer passionate
              about crafting responsive and user-friendly web experiences. I
              specialize in HTML, CSS, and JavaScript, and I’m proficient in
              modern frameworks like ReactJS, enabling me to build dynamic,
              scalable, and high-performance interfaces that elevate user
              experience.
            </p>
            <br />
            <p>
              I earned my Bachelor’s degree in Information Technology from the
              University of the East in 2010 and have been continuously growing
              in the tech industry ever since.
            </p>
            <br />
            <p>
              Beyond coding, I enjoy exploring my hobbies—reading, playing
              sports, and video gaming. I’m always eager to learn new things and
              take on challenges that inspire creativity and growth.
            </p>
            <br />
            <p>
              I believe growth{' '}
              <span className='font-bold text-teal-500'>never stops</span> and
              that&#39;s what I strive to do, I have a passion for technology
              and a desire to always push the limits of what is possible. I am
              excited to see where my career takes me and am always open to new
              opportunities. 🙂
            </p>
          </div>
          <div className='text-center md:w-1/2 md:text-left'>
            <h1 className='text-2xl font-bold mb-6'>My Tech Stack</h1>
            <div className='flex flex-wrap flex-row justify-center z-10 md:justify-start'>
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className='bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold'
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <Image
              src='/hero-image.png'
              alt=''
              width={325}
              height={325}
              className='hidden md:block md:relative md:bottom-4 md:left-32 md:z-0'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
