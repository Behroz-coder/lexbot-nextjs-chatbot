'use client';
import React, { useState } from 'react'

import sideBG from "../../public/side_login.png";
import logo from "../../public/Lexbot.svg";

import Link from "next/link";
import Image from "next/image";
function page() {
    const [otp, setOtp] = useState(['', '', '', '', '', '']);

const handleChange = (index, value) => {
  if (!/^[0-9]*$/.test(value)) return;
  const newOtp = [...otp];
  newOtp[index] = value;
  setOtp(newOtp);

  if (value && index < 5 && typeof document !== "undefined") {
    const nextInput = document.getElementById(`otp-${index + 1}`);
    if (nextInput) {
      nextInput.focus();
    }
  }
};


  
    const handleVerify = () => {
      alert(`Verifying OTP: ${otp.join('')}`);
    };
  
  return (
    <div className="flex flex-col relative lg:justify-between lg:flex-row h-screen">
      <div className="hidden lg:block absolute top-8 left-40 ">
            <Image
              src={logo}
              alt="logo image"
             
              className="w-[85px] h-[28px]"
            />
          </div>
    {/* Left Section */}
    <div className="lg:w-[60%] flex items-start justify-start pl-0 lg:pl-32  bg-white">
      <div className="lg:max-w-[34rem] w-full p-6 lg:p-8">
      <div className="text-left mb-3 lg:hidden block lg:mb-0 lg:mt-[70px]">
              <Image src={logo} alt="logo image" className="w-16" />
            </div>
        <div className="text-left mt-20 mb-8">
          <h1 className="text-[24px] lg:text-[48px] font-bold">OTP</h1>
          <p className="text-gray-600 text-[12px] lg:text-[16px] font-normal mt-4">We have sent a 6-digit confirmation code to macdonald@gmail.com</p>
        </div>
        <div className="flex justify-between">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength={1}
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                className="h-12 w-12 rounded-md border border-gray-300 text-center text-xl focus:border-black focus:outline-none"
              />
            ))}
          </div>
          <p className="text-gray-600 text-[12px] lg:text-[16px] font-normal my-8">
            Didn't receive a code? <span className="cursor-pointer  font-medium text-[12px] lg:text-[16px] text-black">Resend Code</span>
          </p>
          <button
            onClick={handleVerify}
            className="w-full rounded-lg text-[12px] lg:text-[16px] font-medium bg-[#2472FC] py-2 px-4 text-white hover:bg-blue-700"
          >
            Verify
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