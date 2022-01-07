import React from 'react'




const ProjectCard = (props) => {
    return (
        <div className='m-2 border shadow-md rounded-b-md '>
            <div className='w-full h-40 md:h-52 lg:h-60'>
                <img src={props.image}
                alt={props.title}
                 className='w-full h-full object-cover' />
            </div>
          
            <h1 className='font-bold text-center'>{props.title}</h1>
            <div className='relative mt-8'>
                <p className='text-center'>This is a project with MERN stack.The frontend is build up using React and tailwindcss.The data is stored up in mongoDB and the backend is constructed using nodejs and express.The images are loaded in the amazon cloud using s3 buckst</p>
           {/* <button className='absolute bottom-1 right-1 border border-black rounded-sm' >Click Me</button> */}
           </div>
        </div>
    )
}

export default ProjectCard
