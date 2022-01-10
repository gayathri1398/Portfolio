import React from 'react'




const ProjectCard = (props) => {
    return (
        <div className='m-2 border shadow-md rounded-b-md '>
            <div className='w-full h-40 md:h-52 lg:h-60'>
                <img src={props.image}
                alt={props.title}
                 className='w-full h-full object-cover' />
            </div>
            
          <div className='h-60'>
          <h1 className='font-bold text-md text-gray-700 text-center mt-2'>{props.title}</h1>
            <div className='mt-8 '>
                <p className='text-center'>{props.description}</p>
              <a href={props.link} className='font-bold text-md text-gray-800 underline'>Github Link</a>
           </div>
          </div>
           
        </div>
    )
}

export default ProjectCard
