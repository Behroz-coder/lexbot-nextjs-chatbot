import React from 'react'
import sideBG from "../../public/side_login.png";
import logo from "../../public/Lexbot.svg";
import Image from 'next/image';
function page() {
  return (
       <div className="flex flex-col relative lg:justify-between lg:flex-row h-screen">
        <div className="hidden lg:block absolute top-8 left-32 ">
            <Image
              src={logo}
              alt="logo image"
             
              className="w-[85px] h-[28px]"
            />
          </div>

       {/* Left Section */}
       <div className="lg:w-[60%]  flex items-start justify-start ml-0 lg:pl-[100px]  bg-white">
         <div className="lg:max-w-[34rem] w-full p-6 lg:p-8">
         <div className="text-left mb-3 lg:hidden block lg:mb-0 lg:mt-[70px]">
              <Image src={logo} alt="logo image" className="w-16" />
            </div>
           <div className="text-left mt-8 lg:mt-60 xl:mt-44 mb-8">
             <h1 className="text-[24px] lg:text-[48px] font-bold">Forget Password?</h1>
             <p className="text-gray-600 text-[12px] lg:text-[16px] font-normal mt-4 ">Please enter the email you used in registering and a password reset link will be sent to you</p>
           </div>
           <div className="mb-4">
                <label
                  className="block text-black font-medium text-[12px] lg:text-[16px]  mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Please enter your email"
                  className="w-full px-4 py-2 placeholder:text-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-black"
                />
              </div>
       
             <button
           
               className="w-full rounded-lg bg-[#2472FC] py-2 px-4 mt-2 text-white hover:bg-blue-700"
             >
              Proceed
             </button>
    
         </div>
       </div>
   
       {/* Right Section */}
       <div className="lg:w-[60%] 2xl:w-[45%] relative mr-0 hidden lg:block min-h-screen ">
          <Image
            src={sideBG}
            alt="AI Powered Customer Support"
       
            className="h-full  w-full object-fill"
          />
        </div>
     </div>
  )
}

export default page