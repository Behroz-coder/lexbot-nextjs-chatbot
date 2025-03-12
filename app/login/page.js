'use client'
import React, { useState } from "react";
import googleLogo from "../../public/_Google Logo Icon.png";
import sideBG from "../../public/login_side_image.png";
import logo from "../../public/Lexbot.svg";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
  return (
    <div>
      <div className="flex flex-col lg:justify-evenly  lg:flex-row h-screen">
        {/* Left Section */}

        <div className="lg:w-1/2 flex flex-col items-start justify-center ml-0 lg:ml-12 bg-white">
          <div className="hidden lg:block ">
            <Image
              src={logo}
              alt="logo image"
              width={85}
              height={28}
              className="w-[85px] h-[28px]"
            />
          </div>
          <div className="lg:max-w-lg w-full p-6 lg:p-3">
            <div className="lg:hidden block ">
              <Image
                src={logo}
                alt="logo image"
                width={85}
                height={28}
                className="w-[85px] h-[28px]"
              />
            </div>
            <div className="text-left mt-12 md:mt-20 mb-8">
              <h1 className="text-4xl font-bold">Welcome back!</h1>
              <p className="text-gray-600 mt-2">
                Don't have an account?{" "}
                <Link href="/signup" className="text-blue-500">
                  Sign up now
                </Link>
              </p>
            </div>
            <form>
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
                  className="w-full px-4 py-3 placeholder:text-gray-600 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-black font-medium text-sm mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    placeholder="Please enter your password"
                    className="w-full px-4 placeholder:text-gray-600 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 text-gray-600 hover:text-black flex items-center justify-center"
                    style={{ top: "50%", transform: "translateY(-50%)" }}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>
              <Link href="/login/onboarding-start">
                <button
                  type="submit"
                  className="w-full bg-[#2472FC] text-white py-3 px-4 text-sm font-normal rounded-lg hover:bg-blue-600"
                >
                  Log In
                </button>
              </Link>
            </form>
            <div className="flex items-center justify-center mt-6">
              <span className="border-b w-full border-gray-400"></span>
              <span className="px-3 text-black">or</span>
              <span className="border-b w-full border-gray-400"></span>
            </div>
            <button className="w-full mt-6 border border-gray-400 flex items-center justify-center py-3 px-4 rounded-lg hover:bg-gray-100">
              <span className="mr-2">
                <Image
                  src={googleLogo}
                  alt="Google logo"
                  width={20}
                  height={20}
                  className="w-5 h-5"
                />
              </span>
              Continue with Google
            </button>
          </div>
        </div>

        {/* Right Section */}

        <div className="lg:w-1/2 hidden lg:flex lg:items-center lg:justify-end min-h-screen bg-custom-gradient">
          <Image
            src={sideBG}
            alt="AI Powered Customer Support"
            width={800}
            height={800}
            className="xl:h-full h-auto w-full xl:w-auto object-contain"
          />
          {/* <p className="absolute top-10 right-0 text-black text-xl font-semibold pr-64">
            AI-Powered Customer Support
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Login;
