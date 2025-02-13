'use client'
import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

import logo from "../../public/Lexbot.svg";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
function page() {
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  return (
    <div className="relative  flex lg:items-center justify-center min-h-screen bg-white lg:bg-gradient-to-r from-[#8711C1]/30 to-[#2472FC]/40">
  
  <div className="absolute top-8 left-8 lg:left-12">
        <Image src={logo} alt="Logo" width={80} height={80} />
      </div>
  
   <div className="w-full max-w-md rounded-2xl bg-white p-8 mt-20 lg:mt-0 shadow-xl">
        <h2 className="mb-6 text-left lg:text-center text-2xl font-semibold">Reset your password</h2>
        
        {/* Password Input */}
        <div className="mb-4 relative">
          <label className="block text-sm font-medium text-black">Password</label>
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Please enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-md border px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        {/* Confirm Password Input */}
        <div className="mb-6 relative">
          <label className="block text-sm font-medium text-black">Retype Password</label>
          <div className="relative">
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Please enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-md border px-4 py-2 pr-10 focus:border-blue-500 focus:outline-none"
            />
            <button
              type="button"
              className="absolute right-3 top-3 text-gray-500"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>
        </div>
        
        {/* Submit Button */}
        <button
          className="w-full rounded-md bg-[#2472FC]  py-2 text-white hover:bg-blue-700 transition"
        >
          Proceed to Dashboard
        </button>
      </div>
  </div>
  )
}

export default page