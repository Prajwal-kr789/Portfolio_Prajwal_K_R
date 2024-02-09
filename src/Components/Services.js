import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Services =() =>{

    useEffect(()=>{
        AOS.init({duration:5000})
    })

    return(
        <div className="mt-20">

        <h2 className="text-white md:text-4xl lg-text-5xl font-bold text-center" data-aos="fade-in" data-aos-delay="900">Services</h2>
            <div className=" flex lg:justify-around flex-row md:flex-col  lg:flex-row  mt-28">
                
                
                <div data-aos="fade-right" data-aos-delay="800" className="space-y-2  lg:w-6/12 lg:h-full  text-center p-6  shadow-md md:mt-10 md:ml-28 md:w-8/12 shadow-slate-500  border border-solid border-2 border-[#1ba1e5] rounded-lg cursor-pointer hover:bg-[#192a37] transform hover:scale-110 transition duration-500 ease-in">
                    <h2 className="text-[#1ba1e5]  md:text-lg lg:text-xl font-bold" data-aos="fade-in" data-aos-delay="1000">Web Design</h2>
                    <p className="text-white md:text-md lg:text-md" data-aos="fade-in" data-aos-delay="1200">Creating captivating and intuitive interfaces, blending aesthetics with functionality to deliver seamless digital experiences that resonate with users and elevate brands in the online landscape.</p>
                </div>

                <div data-aos="fade-right" data-aos-delay="400" className="space-y-2  lg:w-6/12 lg:h-full  text-center p-6 shadow-md md:mt-10 md:ml-28 md:w-8/12 shadow-slate-500  border border-solid border-2 border-[#1ba1e5] rounded-lg cursor-pointer hover:bg-[#192a37] transform hover:scale-110 transition duration-500 ease-in">
                    <h2 className="text-[#1ba1e5]  md:text-lg lg:text-xl font-bold" data-aos="fade-in" data-aos-delay="800">Web Development</h2>
                    <p className="text-white md:text-md lg:text-md" data-aos="fade-in" data-aos-delay="1000">Implementing robust and scalable solutions using  technologies to bring concepts to life, driving digital innovation and creating impactful online experiences.</p>
                </div>
                
                <div data-aos="fade-left" data-aos-delay="400" className="space-y-2  lg:w-6/12 lg:h-3/6  text-center p-6 shadow-md md:mt-10 md:ml-28 md:w-8/12 shadow-slate-500  border border-solid border-2 border-[#1ba1e5] rounded-lg cursor-pointer hover:bg-[#192a37] transform hover:scale-110 transition duration-500 ease-in">
                    <h2 className="text-[#1ba1e5]  md:text-lg lg:text-xl font-bold" data-aos="fade-in" data-aos-delay="800">Problem Solving</h2>
                    <p className="text-white md:text-md lg:text-md" data-aos="fade-in" data-aos-delay="1000">Analyzing challenges systematically, applying creativity and logic to devise effective solutions, and constantly iterating for optimal outcomes and continuous improvement.</p>
                </div>
                
                <div data-aos="fade-left" data-aos-delay="800" className="space-y-2  lg:w-6/12 lg:h-full  mr-10 text-center p-6 shadow-md md:mt-10 md:ml-28 md:w-8/12 shadow-slate-500  border border-solid border-2 border-[#1ba1e5] rounded-lg cursor-pointer hover:bg-[#192a37] transform hover:scale-110 transition duration-500 ease-in">
                    <h2 className="text-[#1ba1e5]  md:text-lg lg:text-xl font-bold" data-aos="fade-in" data-aos-delay="1000">Responsive interface</h2>
                    <p className="text-white md:text-md lg:text-md" data-aos="fade-in" data-aos-delay="1200">Focusing on intuitive and aesthetically pleasing interfaces to optimize usability, engage users effectively, and enhance digital interactions for maximum impact and satisfaction.</p>
                </div>
                
                
 
                
            </div>
        </div>
    )
}

export default Services;