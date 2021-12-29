import React from 'react';

import MyDropdown from './Menu.component';

const Navsm=()=>{
   return(
   <>
     <div className="flex gap-0 items-center justify-around border-2 bg-port-300 h-12 md:h-16">
       <div>
          <h2 className="font-bold text-2xl italic md:text-3xl">Portfolio</h2>
          </div>
          <div className="flex h-8 gap-0 font-normal text-xl cursor-pointer md:text-2xl">
          <p>  <MyDropdown /> </p>
         
          </div>
    </div>


   </>
   )
};


 const Navlg=()=>{
    return(
    <>
    <div className="flex items-center gap-6 justify-around border-2 bg-port-300 h-20">
       <div>
          <h2 className="font-bold italic text-3xl">Portfolio</h2>
          </div>
          <div className="flex h-8 gap-20 font-semibold text-2xl cursor-pointer">
           <p>Home</p>
           <p>About</p>
           <p>Projects</p>
           <p>Skills</p>
           <p>Contact</p>
         
          </div>
    </div>
    </>
    )
 }


 const Navbar=()=>{
    return<>
      <nav>
        <div className="lg:hidden">{/*mobile devices */}  <Navsm/> </div>
       
        <div className="hidden lg:block">{/*large devices */}  <Navlg/> </div>
      </nav>
      </>
 }
export default Navbar;