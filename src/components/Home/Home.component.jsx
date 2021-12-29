import React from "react";
import profile from '../../images/profile.jpg'

const Home=()=>{
    return(
    <>
       <div className="relative" >
       <div className="absolute bg-black opacity-75 w-full h-full z-1 md:h-screen "/>
      <div className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1543270317-5040b5726070?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBnaXJsJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          alt="profilepic"
          className="w-screen h-2/3 object-cover md:h-screen" />
          <div className="mx-1/2 absolute w-48 h-48 rounded-full md:w-60 md:h-60 md:left-24 lg:w-96 lg:h-96 top-32 lg:left-40">
              <img src={profile}
               alt="profilepic"
               className="w-full h-full rounded-full object-cover m-auto" />
          </div>
      </div>
      <div className="absolute z-10 font-bold bottom-12 px-2 md:bottom-32 lg:px-8 lg:right-40">
          <h1 className="text-2xl text-white leading-loose md:text-3xl lg:text-5xl"><span className="text-2xl">Hello! </span><br/>I'm Gayathri<br/>Full Stack Web Developer</h1>
      </div>
      </div>

    </>
    )
};
export default Home;