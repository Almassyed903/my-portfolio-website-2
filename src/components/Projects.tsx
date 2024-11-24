import React from 'react'
import Heading from './Heading'
import Card from './Card'

const data = [
    {
        id: 0,
        litle: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume built  with HTML and CSS , allowing users to showcase  their skills dynamically.",
        img: "/project-01.jpg",
        tags: [" HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 0,
        litle: "Simple Calculator Projects",
        desc: "A basic HTML CSSand TypeScript calculator for performing essential arithemetic operation.",
        img: "/project-02.jpg",
        tags: [" HTML", "Node", "CSS", "Typescript"],
    },
    {
        id: 0,
        litle: "Contact Form",
        desc: "A Learn how to build a stunning animated contact form with HTML, CSS, and JavaScript.",
        img: "/project-03.jpg",
        tags: [" HTML", "JavaScript", "CSS", "Typescript"],
    },
]

const Projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-10 xl:gap-0 xl:gap-y-10 ms:grid-cols-2 lg:grid-cols-3 place-items-center'>
        {data.map((el,key) => (<Card
        key={key}
        title={el.litle}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        />)) }
      </div>
    </div>
  )
}

export default Projects
