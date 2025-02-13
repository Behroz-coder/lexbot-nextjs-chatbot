import React from 'react'
import wave from "../../../public/twemoji_waving-hand.png";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from 'next/image';
import Link from 'next/link';
function page() {
  return (
    <>
         <div className="flex items-center justify-center min-h-screen bg-white lg:bg-gradient-to-r from-[#8711C180] to-[#2472FCCC]">
        <div className="bg-white lg:rounded-3xl lg:shadow-lg w-full max-w-2xl p-2 mx-4 lg:mx-0 lg:p-12">
          <div className="text-center">
            <div className="flex items-center gap-2 justify-center">
              <h2 className="text-xl font-medium">Hey Macdonald </h2>
              <Image src={wave} alt="wave hand emoji" className="animate-wave" />
            </div>

            <p className="text-2xl font-medium text-gray-500 mt-2">
              Let’s get started!
            </p>
          </div>

          <div className="mt-6">
            <label
              htmlFor="organizationName"
              className="block text-sm font-semibold text-gray-900"
            >
              Name of your organization
            </label>

            <input
              type="text"
              id="organizationName"
              placeholder="Please enter here"
              className="mt-1 block w-full border py-3 px-8 rounded-lg border-gray-400 shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-500 sm:text-sm"
            />
          </div>

          <div className="mt-6">
            <p className="text-sm font-medium text-gray-900 mb-2">Team Size</p>

            <div className="space-y-3">
              <label className="flex items-center space-x-3 border px-4 border-gray-400 py-3 rounded-lg">
                <input
                  type="radio"
                  name="teamSize"
                  value="1-5"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />

                <span className="text-gray-700 text-sm">1 - 5</span>
              </label>

              <label className="flex items-center space-x-3 border px-4 border-gray-400 py-3 rounded-lg">
                <input
                  type="radio"
                  name="teamSize"
                  value="5-20"
                  defaultChecked
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />

                <span className="text-gray-700 text-sm">5 - 20</span>
              </label>

              <label className="flex items-center space-x-3 border px-4 border-gray-400 py-3 rounded-lg">
                <input
                  type="radio"
                  name="teamSize"
                  value="20-100"
                  className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
                />

                <span className="text-gray-700 text-sm">20 - 100</span>
              </label>
            </div>
          </div>

          <div className="mt-8 text-center">
            <div className="group">
              <Link href="/login/onboarding-demo">
                <button
                  type="button"
                  className="w-[100%] lg:w-[30%] flex items-center gap-2 justify-center mx-auto bg-[#EDEDED] text-gray-500 hover:text-white py-3 px-4 rounded-lg shadow-xl border border-gray-300 hover:bg-blue-700 transition"
                >
                  Create
                  <span className="inline-block ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2">
                    <FaArrowRightLong />
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default page