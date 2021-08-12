// import react from "react";

const Home=()=>{
    return(
    <>
       <div className="relative" >
       <div className="absolute bg-black opacity-75 w-full h-full z-1 md:h-screen "/>
      <div className="w-full h-full">
          <img src="https://images.unsplash.com/photo-1543270317-5040b5726070?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDJ8fGElMjBnaXJsJTIwd2l0aCUyMGxhcHRvcHxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" 
          alt="profilepic"
          className="w-screen h-2/3 object-cover md:h-screen" />
      </div>
      <div className="absolute z-10 text-center font-bold bottom-20 px-2 md:bottom-32 lg:px-8 right-0">
          <h1 className="text-3xl text-white leading-loose md:text-5xl">Never wanna stay Idle <br/>Updating myself till I find my Best!</h1>
      </div>
      </div>

    </>
    )
};
export default Home;