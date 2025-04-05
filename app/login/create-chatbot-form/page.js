import React from 'react'
import chatrightside from "../../../public/onboard_side.png"
import logo from "../../../public/Lexbot.svg";
import Link from 'next/link';
import Image from 'next/image';

function Page() {
  return (
    <div>
      <div className="flex flex-col relative   lg:flex-row  h-screen">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] ">
     
            {/* Step indicators for mobile */}
            <div className="flex items-center w-full justify-between px-4  pt-6 lg:hidden space-x-4 mb-8">
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center border border-gray-800 w-8 h-8 rounded-full ring-4 ring-white text-gray-700">
                  1
                </span>
              </div>
              <div className="w-full border-t-2 border-gray-400 border-dashed"></div>
              {/* Corrected Link: changed "to" to "href" */}
              <Link href="/login/training-form">
                <div className="flex items-center space-x-2">
                  <span className="flex items-center justify-center w-8 h-8 border border-gray-400 rounded-full ring-4 ring-white text-gray-700">
                    2
                  </span>
                </div>
              </Link>
            </div>
            <h3 className="font-medium text-black mr-auto lg:hidden block px-4 my-4 text-[16px]">
              Let’s create your first AI chatbot!
            </h3>
            <div className="w-full lg:hidden block px-4 mb-10">
              <div className="mb-6">
                <label
                  htmlFor="chatbotName"
                  className="block text-[12px] font-medium text-black"
                >
                  Name of Chatbot
                </label>
                <input
                  type="text"
                  id="chatbotName"
                  placeholder="Please enter the name of chatbot"
                  className="mt-1 block w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg shadow-sm"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="basicInstructions"
                  className="block text-[12px] font-medium text-black"
                >
                  Basic Instructions
                </label>
                <input
                  id="basicInstructions"
                  placeholder="Write the most basic instructions for the AI. His Role, Behaviour, etc."
                  className="mt-1 block w-full lg:w-[90%] p-2 border border-gray-300 rounded-lg shadow-sm"
                />
              </div>
              <Link href="/login/training-form">
                <button className="w-full bg-[#2472FC] text-[12px]  text-white font-medium py-2.5 px-2 rounded-lg hover:bg-blue-600">
                  Create Chatbot
                </button>
              </Link>
            </div>

            {/* Vertical timeline for larger screens */}
        
          <div className='w-full pt-32  flex flex-col lg:items-center lg:mt-1 pl-0 lg:pl-12 2xl:pl-80 bg-white'>
          <div className="hidden lg:block absolute top-8 left-16  2xl:left-[330px] ">
            <Image
              src={logo}
              alt="logo image"
             
              className="w-[85px] h-[28px]"
            />
          </div>

            <div className="hidden lg:block relative mx-auto  text-gray-500 w-full max-w-xl border-l-2 border-dashed border-gray-300 h-full px-4">
              <div className="flex items-center space-x-8 mb-10">
                <span className="absolute flex items-center border border-gray-800 justify-center w-8 h-8 rounded-full -top-8 -left-4 ring-4 ring-white text-gray-700">
                  1
                </span>
                <h3 className="font-medium text-[20px] text-black absolute -top-8 ">
                  Let’s create your first AI chatbot!
                </h3>
              </div>

              {/* Form container for desktop */}
              <div className="w-full pl-8 mb-10">
                <div className="mb-6">
                  <label
                    htmlFor="chatbotName"
                    className="block text-[16px] font-medium text-black"
                  >
                    Name of Chatbot
                  </label>
                  <input
                    type="text"
                    id="chatbotName"
                    placeholder="Please enter the name of chatbot"
                    className="mt-1 block w-full lg:w-[90%] p-2 placeholder:text-sm border border-gray-300 rounded-lg shadow-sm"
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="basicInstructions"
                    className="block text-[16px] font-medium text-black"
                  >
                    Basic Instructions
                  </label>
                  <input
                    id="basicInstructions"
                    placeholder="Write the most basic instructions for the AI. His Role, Behaviour, etc."
                    className="mt-1 block w-full lg:w-[90%] p-2 border placeholder:text-sm border-gray-300 rounded-lg shadow-sm"
                  />
                </div>
                <Link href="/login/training-form">
                  <button className="w-full lg:w-auto lg:px-3 bg-[#2472FC] text-[16px] font-medium text-white  p-2 rounded-lg hover:bg-blue-600">
                    Create Chatbot
                  </button>
                </Link>
              </div>
              {/* Corrected Link: changed "to" to "href" */}
              <Link href="/login/training-form">
                <div className="flex items-center space-x-8">
                  <span className="absolute flex items-center justify-center border border-gray-400 w-8 h-8 rounded-full -bottom-8 -left-4 ring-4 ring-white text-gray-700">
                    2
                  </span>
                  <h3 className="font-medium text-[20px] absolute leading-tight -bottom-7 ">
                    Training
                  </h3>
                </div>
              </Link>
            </div>
            </div>
        </div>

      {/* Right Section */}
      <div className="lg:w-[60%] 2xl:w-[45%] relative mr-0 hidden lg:block ">
        <Image
            src={chatrightside}
            alt="AI Powered Customer Support"
       
            className="h-full  w-full object-fill"
          />
        </div>
      </div>
    </div>
  )
}

export default Page
