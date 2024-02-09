import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

const Contact = () =>{

    useEffect(()=>{
        AOS.init({duration:1000})
    })

    return(
        <div className='h-screen mt-44 space-y-12 '>        
            <h2 className='text-white md:text-3xl lg:text-4xl font-bold text-center ' data-aos="fade-in" data-aos-delay="600">Contact me</h2>

            <div className='flex flex-row justify-around items-center ml-36'>

                <div className='w-5/12 space-y-12 ' data-aos="fade-right">
                    <h2 className='text-white md:text-3xl lg:text-4xl font-bold '>Contact Info</h2>
                    <div className='flex flex-row space-x-3'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mail text-[#1ba1e5]"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                        <a href='mailto:prajwal07kr@gmail.com' className='text-white'>prajwal07kr@gmail.com</a>
                    </div>

                    <div className='flex flex-row space-x-3'>
                    <svg class="w-6 h-6   text-[#1ba1e5]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                        <path fill-rule="evenodd" d="M12.5 8.8v1.7a3.7 3.7 0 0 1 3.3-1.7c3.5 0 4.2 2.2 4.2 5v5.7h-3.2v-5c0-1.3-.2-2.8-2.1-2.8-1.9 0-2.2 1.3-2.2 2.6v5.2H9.3V8.8h3.2ZM7.2 6.1a1.6 1.6 0 0 1-2 1.6 1.6 1.6 0 0 1-1-2.2A1.6 1.6 0 0 1 6.6 5c.3.3.5.7.5 1.1Z" clip-rule="evenodd"/>
                        <path d="M7.2 8.8H4v10.7h3.2V8.8Z"/>
                    </svg><a href="https://www.linkedin.com/in/prajwal-kr-49732727b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><p className='text-white'>Prajwal KR</p></a>
    
                    </div >
                    
                    <div className='flex flex-row space-x-3'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-phone-call text-[#1ba1e5]"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/><path d="M14.05 2a9 9 0 0 1 8 7.94"/><path d="M14.05 6A5 5 0 0 1 18 10"/></svg>
                    <p className='text-white'>+91-7899274216</p>
                    </div>
                </div>

                <div className='w-5/12 space-y-12'>                    

            <form class="max-w-sm mx-auto " data-aos="fade-left"> 
                <h2 className='text-white font-bold text-2xl'>Feedback??</h2>
                <div class="mb-5 mt-5">
                    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name : </label>
                    <input type="email" id="email" class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your name..." required/>
                </div>
                <div class="mb-5">
                    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Email : </label>
                    <input type="password" id="password" class="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Email..." required/>
                </div>
                <div class="mb-5">
                    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message : </label>
                    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border h-20 outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="Enter your Message..." required/>
                </div>

                <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
            </form>

                </div>
            </div>
        </div>
    )
}
export default Contact;