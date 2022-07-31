import React from 'react';

import { AiFillGithub,AiFillLinkedin,AiFillYoutube } from 'react-icons/ai';
import {GoLocation} from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const sidebar = () => {


  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
        <img 
        src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cGVyc29ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
       alt="Picture of the author" 
       className=" w-32 h-32 mx-auto rounded-full"
       />

        <h3 className="my-4 text-xl font-medum tracking-wider font-f">
          Mohsen
          <span className="text-green-400 bold">Yavari</span> </h3>
        <p className="px-2 py-1 my-3 bg-gray-200 rounded-full">Web Developer</p>
        <a className="px-2 py-1 my-3 bg-gray-200 rounded-full flex items-start justify-center" 
        href=''
         download="name">
          <GiTie className="w-6 h-6" />
         Danlowd rusumeh
         </a>


        {/* social icon */}
        <div className="flex justify-around w-9/12 text-green-500 md:w-full mx-auto">
          <a href="">
            <AiFillYoutube className="h-8 w-8 cursor-pointer" />
          </a>
          <a href="">
            <AiFillGithub className="h-8 w-8 cursor-pointer" />
          </a>
          <a href="">
            <AiFillLinkedin className="h-8 w-8 cursor-pointer" />
          </a>
        </div>

        {/* adddress  */}
        <div className="my-5 py-4 bg-gray-200"
        style={{marginLeft:"-1rem",marginRight:"-1rem"}}
        >
            <div className="flex items-center justify-center space-x-2 ">
              <GoLocation />
                <span className="">Tehran-iran</span>
            </div>
            <p className="my-2">mohsenyavari713@gmail.com</p>
            <p className="my-2">+0123456789</p>
        </div>

        {/* email button */}
        <button 
        className="bg-gradient-to-r from-green-400 to-blue-400 w-8/12 rounded-full py-2 px-5 text-white my-2 focus:outline-none"
        onClick={()=>window.open('mailto:mohsenyavari713@gmail.com')}
        >
          Email
        </button>
        <button 
        onClick={changeTheme}
        className="bg-gradient-to-r from--400 to-blue-400  w-8/12 rounded-full py-2 px-5 text-white my-2 ">
          Toggle theme
          </button>
    </div>
  
  )
}

export default sidebar