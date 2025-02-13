'use client';
import React, { useState } from 'react'

import sideBG from "../../public/login_side_image.png";
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
    <div className="flex flex-col lg:flex-row   h-screen">
    {/* Left Section */}
    <div className="lg:w-1/2 flex items-start justify-start ml-0 lg:ml-12  bg-white">
      <div className="lg:max-w-[34rem] w-full p-6 lg:p-8">
        <div className="text-left mb-4">
          <Image src={logo} alt="logo image" className="w-16" />
        </div>
        <div className="text-left mt-20 lg:mt-60 xl:mt-44 mb-8">
          <h1 className="text-4xl font-bold">OTP</h1>
          <p className="text-gray-600 mt-4">We have sent a 6-digit confirmation code to macdonald@gmail.com</p>
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
                className="h-12 w-12 rounded-md border border-gray-300 text-center text-xl focus:border-blue-500 focus:outline-none"
              />
            ))}
          </div>
          <p className="text-gray-600 text-sm my-8">
            Didn't receive a code? <span className="cursor-pointer font-bold text-gray-800">Resend Code</span>
          </p>
          <button
            onClick={handleVerify}
            className="w-full rounded-md bg-[#2472FC] py-2 px-4 text-white hover:bg-blue-700"
          >
            Verify
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