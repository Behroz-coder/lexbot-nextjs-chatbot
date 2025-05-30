"use client"
import React,{useEffect} from 'react'
import chatrightside from "../../../public/onboard_side.png";
import logo from "../../../public/Lexbot.svg";
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter, usePathname } from 'next/navigation';

function layout({ children }) {
    const router = useRouter();
    const pathname = usePathname(); 
  
    useEffect(() => {

      if (pathname === "/login/training" || pathname === "/login/training/") {
        router.push("/login/training/url");
      }
    }, [pathname, router]);
  
    const getLinkClass = (path) => {
      const segments = pathname.split("/");
      const currentPath = segments[segments.length - 1] || "url";
      const isActive = currentPath === path || (currentPath === "" && path === "url");
      return isActive
        ? "text-blue-500 border-b-2 border-blue-500 font-medium"
        : "text-gray-600 hover:text-blue-500";
    };
  
  return (
    <div>

<div className="flex flex-col relative  lg:flex-row h-screen">
<div className="hidden lg:block absolute top-8 left-16 2xl:left-[330px] ">
            <Image
              src={logo}
              alt="logo image"
             
              className="w-[85px] h-[28px]"
            />
          </div>
        {/* Left Section */}
        <div className="w-full lg:w-[60%] flex flex-col lg:items-start lg:mt-1 pl-0 lg:pl-12 2xl:pl-80 bg-white">
      
          <div className="flex flex-col items-center justify-center p-4">
            {/* Mobile Step Indicators */}
            <div className="flex items-center w-full justify-between px-4 pt-6 lg:hidden space-x-4 mb-8">
              <Link href="/login/create-chatbot-form">
           
                  <div className="flex items-center space-x-2">
                    <span className="flex items-center cursor-pointer justify-center border border-gray-400 w-8 h-8 rounded-full ring-4 ring-white text-gray-700">
                      1
                    </span>
                  </div>
               
              </Link>
              <div className="w-full border-t-2 border-gray-400 border-dashed"></div>
              <div className="flex items-center space-x-2">
                <span className="flex items-center justify-center w-8 h-8 border border-gray-800 rounded-full ring-4 ring-white text-gray-700">
                  2
                </span>
              </div>
            </div>
            <h3 className="font-medium text-black mr-auto lg:hidden block px-4 my-4 text-[16px]">
              Training
            </h3>
            {/* Desktop Section */}
            <div className="w-full lg:max-w-xl p-4 lg:p-0 mx-auto lg:pt-20">
              <div className="items-center hidden lg:flex mb-6">
                <div className="flex flex-col items-center mr-4">
                  <Link href="/login/create-chatbot-form">
                   
                      <div className="w-8 h-8 relative flex items-center justify-center border border-gray-400 rounded-full text-gray-500">
                        1
                        <span className="font-medium text-[20px] text-gray-400 absolute left-12 whitespace-nowrap w-full ">
                          Let’s create your first AI chatbot!
                        </span>
                      </div>
                
                  </Link>
                  <div className="w-px h-8 bg-gray-400"></div>
                  <div className="relative w-8 h-8 flex items-center justify-center border border-gray-900 rounded-full text-black font-semibold">
                    2
                    <span className="font-medium text-[20px] text-black absolute left-12 ">
                      Training
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:pl-12">
                <div className="border-b mb-4">
                  <nav className="flex space-x-3.5 lg:space-x-4 text-[12px] font-medium lg:text-base">
                    <Link href="url">
                      <p className={getLinkClass("url")}>Website URL</p>
                    </Link>
                    <Link href="raw-text">
                      <p className={getLinkClass("raw-text")}>Raw Text</p>
                    </Link>
                    <Link href="documents">
                      <p className={getLinkClass("documents")}>Documents</p>
                    </Link>
                    <Link href="notion">
                      <p className={getLinkClass("notion")}>Notion</p>
                    </Link>
                    <Link href="question-and-answer">
                      <p className={getLinkClass("question-and-answer")}>Q&amp;A</p>
                    </Link>
                  </nav>
                </div>
           
                <main>{children}</main>
              </div>
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

export default layout