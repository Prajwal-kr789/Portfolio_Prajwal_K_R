import { useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';


const Body = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    },[])


    
    return(
        <>
        
        <div className="flex flex-col justify-center items-center h-screen  mt-36 space-y-11">
                <h1 className="text-white md:text-4xl lg-5xl font-bold" data-aos="fade-in"data-aos-delay="700">About me</h1>
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="aspect-w-1  md:w-6/12 lg:w-3/12 border-y-transparent border-y-0 shadow-md shadow-blue-800  border-2 border-x-blue-400 rounded-full mt-10" alt="" data-aos="fade-down"data-aos-delay="200" />
                <h2 className="text-[#1ba1e5] md:text-3xl lg-4xl font-bold " data-aos="fade-down"data-aos-delay="200">Frontend Developer</h2>
                <p className="text-white text-center max-w-3xl" data-aos="fade-in"data-aos-delay="700">As a passionate frontend developer, I thrive on crafting engaging and intuitive user experiences. With a keen eye for design and a dedication to clean, efficient code, I strive to bring creativity and functionality to every project. Let's collaborate to bring your vision to life!!!...</p>

            <div className="flex flex-row justify-between items-center">

            
                <div data-aos="fade-right"data-aos-delay="400">
            <h2 className="text-white md:text-3xl lg-4xl font-bold hover:cursor-pointer first-letter:text-[#1ba1e5]" >Skills</h2>
            <ul className="mt-4" >
                <li className="text-white md-lg lg-xl" data-aos="fade-left"  data-aos-delay="500">⚪  Leadership</li>
                <li className="text-white md-lg lg-xl" data-aos="fade-left" data-aos-delay="600">⚪  Communication</li>
            </ul>
            </div>
            
            <div className="ml-20"data-aos="fade-left"data-aos-delay="400">
            <h2 className="text-white md:text-3xl lg-4xl font-bold hover:cursor-pointer first-letter:text-[#1ba1e5]" >Technical Skills</h2>
            <ul className="mt-4">
                <li className="text-white md-lg lg-xl" data-aos="fade-left" data-aos-delay="500">⚪  HTML, CSS, JAVASCRIPT</li>
                <li className="text-white md-lg lg-xl" data-aos="fade-left" data-aos-delay="600">⚪  REACT, TAILWIND CSS</li>
            </ul>
            </div>
            </div> 
        </div>

       

        </>
    )
}

export default Body;