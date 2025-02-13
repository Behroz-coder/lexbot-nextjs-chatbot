import React from 'react'
import sideBG from "../../public/login_side_image.png";
import logo from "../../public/Lexbot.svg";
import Image from 'next/image';
function page() {
  return (
       <div className="flex flex-col lg:flex-row   h-screen">
       {/* Left Section */}
       <div className="lg:w-1/2 flex items-start justify-start ml-0 lg:ml-12  bg-white">
         <div className="lg:max-w-[34rem] w-full p-6 lg:p-8">
           <div className="text-left mb-4">
             <Image src={logo} alt="logo image" className="w-16" />
           </div>
           <div className="text-left mt-20 lg:mt-60 xl:mt-44 mb-8">
             <h1 className="text-4xl font-bold">Forget Password?</h1>
             <p className="text-gray-600 mt-4 ">Please enter the email you used in registering and a password reset link will be sent to you</p>
           </div>
           <div className="mb-4">
                <label
                  className="block text-black font-medium text-sm mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                  className="w-full px-4 py-2 placeholder:text-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
       
             <button
           
               className="w-full rounded-md bg-[#2472FC] py-2 px-4 mt-2 text-white hover:bg-blue-700"
             >
              proceed
             </button>
    
         </div>
       </div>
   
       {/* Right Section */}
       <div className="lg:w-1/2 hidden lg:flex lg:items-center lg:justify-end min-h-screen bg-custom-gradient ">
         <Image
           src={sideBG}
           alt="AI Powered Customer Support"
           className="xl:h-full h-auto w-full xl:w-auto object-cover"
         />
         {/* <p className="absolute top-10 right-0 text-black text-xl font-semibold  pr-64 ">
           AI-Powered Customer Support
         </p> */}
       </div>
     </div>
  )
}

export default page