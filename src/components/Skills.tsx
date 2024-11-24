import React from 'react'

const Skill = () => {
  return (
    <div className='cantainer pt-32'>
      <div className='grid md:grid-cols-2 gap-20 items-center m-6'>
        <div data-aos="zoom-in-up">
          <h2 className='text-4xl md:tesxt-5xl'>Technologies I Work With</h2>
          <p className='text-gray-500 pt-2'>I have a solid foundation, in web development, specializing in HTML, CSS, and JavaScript. My and experience extends to using frameworks like React and Next.js to create dynamice and user-friendly applications. I'm also proficient in Tailwind  CSS for efficient and design . with a passion for learning,</p>

        </div>
        <div>
          <div className='grid grid-cols-2 text-center text-3xl sm:text-4xl'>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Typescript</h2>
              <h2 data-aos="zoom-in-up">React</h2>
              <h2 data-aos="zoom-in-up">Next.js</h2>
            </div>
            <div className='space-y-2'>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">Tailwind</h2>
              <h2 data-aos="zoom-in-up">CSS</h2>
              <h2 data-aos="zoom-in-up">Node.js</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skill
