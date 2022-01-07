import React from 'react';
import Slider from 'react-slick';



// pages
import ProjectCard from '../ProjectCard';


const project=[
    {
        image:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title:"Zomato Clone"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc95sKK5m3zocU5EXL4xYa239jk3dnyG4v6hGd3yuGDvjw6HLZYAup2bnGEwTGEfb4J2w&usqp=CAU",
        title:"BookMyShow Clone"
    },
    {
        image:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title:"spotify Clone"
    },
    {
        image:"https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        title:"amazon Clone"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc95sKK5m3zocU5EXL4xYa239jk3dnyG4v6hGd3yuGDvjw6HLZYAup2bnGEwTGEfb4J2w&usqp=CAU",
        title:"Book management"
    },
]

const Project = (props) => {
    var settings={
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div>
        <h1 className="h-12 text-2xl italic font-semibold bg-port-300 pl-4 pt-2 md:text-3xl md:pt-4 md:h-16 lg:h-20 lg:text-5xl">Projects</h1>
     
      <div className='border-2 border-black px-12'>
      <Slider {...settings} >
        {project.map((proj)=> <ProjectCard {...proj} /> )}
      
       
        </Slider>
      </div>
        </div>
     
    )
}

export default Project;

