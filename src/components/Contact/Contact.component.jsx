import React from 'react'
import {GoMarkGithub} from 'react-icons/go';
import {TiSocialLinkedinCircular} from 'react-icons/ti';

const Contact = () => {
    return (
        <div>
             <div>
               <h1 className="h-12 text-2xl italic font-semibold bg-port-300 pl-4 pt-2 md:text-3xl md:pt-4 md:h-16 lg:h-20 lg:text-5xl">Contact</h1>
            </div>
            <div className="ml-4 font-semibold flex flex-col gap-3 lg:text-2xl lg:gap-6 lg:ml-12 py-8">
                <div className="flex items-center gap-3">
                <GoMarkGithub className="w-12 h-8 lg:w-12 h-12"/>
                <a href="https://github.com/gayathri1398">github.com/gayathri1398<br /></a>
                </div>
                <div className="flex items-center gap-3">
                <TiSocialLinkedinCircular className="w-12 h-8 lg:w-12 h-12"/>
                 <a href="https://www.linkedin.com/in/gayathri-v-68a7641b9/"> linkedin.com/in/gayathri-v-68a7641b9</a>
                 </div>
            </div>
        </div>
    )
}

export default Contact;
