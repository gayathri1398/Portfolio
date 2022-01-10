import React from 'react';
import Slider from 'react-slick';



// components
import ProjectCard from '../ProjectCard';
import { PrevArrow,NextArrow } from '../Carousel';


const project=[
    {
        image:"https://zomatoimagecontainer.s3.ap-south-1.amazonaws.com/924d6db7dee0bb80abc31170174d0df6_o2_featured_v2.webp",
        title:"Zomato Clone",
        description:"This is a project done with MERN stack.The frontend is build up using React and tailwindcss.The data is stored up in mongoDB and the backend is constructed using nodejs and express.The images are loaded in the amazon cloud using s3 bucket",
        link:"https://github.com/gayathri1398/zomato_clone"
      },
    {
        image:"https://image.tmdb.org/t/p/original/o76ZDm8PS9791XiuieNB93UZcRV.jpg",
        title:"BookMyShow Clone",
        description:"The BookMyShow Project is focussed on the frontend.It is build up using React and tailwindcss.The TMDB Api is used to feed the movie details and posters.",
        link:"https://github.com/gayathri1398/book-my-show"
      },
    {
        image:"https://newjams-images.scdn.co/image/ab676477000033ad/dt/v3/discover-weekly/n52FmCeu82Fu05AG7Bd-Yljm-W4umQlo1FV4u9rYzBQGv9qaBL1sGBLqjWZhjLwSNRE_6gd6BNA7XcQfpl-eTH74DFpAe2z74QinXZin0ro=/NDE6MzI6NjBUODEtMTAtMg==",
        title:"Spotify Clone",
        description:"The Spotify Clone contains the login page and the single page application.It is build using React. The Spotify web api is used to feed the data.",
        link:"https://github.com/gayathri1398/spotify_clone"
    },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNwCV7EfiSdTbZeEDasH39etgsyIf3wY8ASw&usqp=CAU",
        title:"Amazon Clone(Working)",
        description:"The Amazon Clone is build using react and tailwind css.Redux plays the major role in state management.Currently,Its on work",
        link:"https://github.com/gayathri1398/Amazon-clone"
      },
    {
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRtb0EUbB73Gkz_Xy4sY-8sM3YxHdACFVUlg&usqp=CAU",
        title:"Book management",
        description:"This project is build to learn the concepts of Rest Api.Api calls has been written to add,delete and update books,author. ",
        link:"https://github.com/gayathri1398/bookapi"
    },
]

const Project = (props) => {
    var settings={
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        prevArrow:<PrevArrow/>,
        nextArrow:<NextArrow/>,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: false
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
     
      <div className='px-12 py-8'>
      <Slider {...settings} >
        {project.map((proj)=> <ProjectCard {...proj} /> )}
        </Slider>
      </div>
        </div>
     
    )
}

export default Project;

