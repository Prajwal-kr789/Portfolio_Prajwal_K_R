import AOS from 'aos';
import "aos/dist/aos.css"
import { useEffect } from 'react';

const Intro = () =>{

    useEffect(()=>{
        AOS.init({duration:2000})
    })

    return(
        <div className="flex justify-around items-center mt-28 ">
            <div className="max-w-2xl space-y-7">
                <p className="text-white font-bold text-4xl" data-aos="fade-in" data-aos-delay="500">Hi I'am Prajwal KR.</p>
            <p class="mb-4 text-4xl font-extrabold leading-none  text-gray-900 md:text-2xl lg:text-3xl dark:text-[#1ba1e5]"  data-aos="fade-right">Frontend Developer</p>
            <p class="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white flex "  data-aos="fade-up">Passionate Frontend Web developer, I am deeply committed to crafting engaging and user-friendly Digital experiences. I thrive on turning creative concepts into Dynamic and Responsive websites that captivate and delight users.</p>
            <a href="https://drive.google.com/file/d/16vgR9vai9TgWzexb5paNtT1A4Lx2tLGE/view?usp=drive_link" target="blank"  download><button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium mt-3 rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-[#08aae6] dark:hover:bg-[#08abe6c5] focus:outline-none dark:focus:ring-blue-800" data-aos="zoom-in" data-aos-delay="500">Download CV</button></a>
            </div>
            {/* https://drive.usercontent.google.com/u/0/uc?id=16vgR9vai9TgWzexb5paNtT1A4Lx2tLGE&export=download download link */}
            <div>
                <img src="https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg" className="rounded-full" alt="" data-aos="fade-left" data-aos-delay="300"/>
            </div>


        </div>
    )
}

export default Intro;