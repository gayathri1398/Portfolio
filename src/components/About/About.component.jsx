import React from 'react'

 const About = () => {
    return (
        <div>
        <h1 className="h-12 text-2xl italic font-semibold bg-port-300 pl-4 pt-2 md:text-3xl md:pt-4 md:h-16 lg:h-20 lg:text-5xl">About</h1>
        <div className='w-full flex flex-col justify-center m-auto py-8 px-4 md:flex-row items-center text-center lg:px-60 '>
            <div className='h-auto md:w-full'>
                <img src="https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8aHVtYW4lMjBmYWNlfGVufDB8fDB8fA"
                 alt="aboutpic" 
                 className='w-full ' />
            </div>
            <div className='rounded-md p-2 bg-white shadow-md lg:p-8'>
                <p className='font-semibold'>Hey!I'm Gayathri completed B.Tech Information Technology.
                I am very passionate in building up websites and thus it brought me up with upskilling myself with Full Stack Web Development.
                I had been working as an intern at Shape AI for the past 4 months.The projects I worked with inspired me
                 to know more about and further continued in building many other projects.I could use my creative side to design and logical side to
                 code resulting with amazing websites.
                </p>
            </div>
        </div>

        </div>
    )
}

export default About;