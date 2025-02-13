import Link from 'next/link';
import React from 'react'
import { RiNotionFill } from 'react-icons/ri';
function page() {
  return (
    <div>
    <div className="mb-4">
      <button className="flex items-center gap-2 w-full lg:w-auto justify-center lg:justify-start  px-4 py-2 text-white bg-black rounded-md hover:bg-gray-800">
        <RiNotionFill size={20} />
        Connect with Notion
      </button>
    </div>
    <Link href="/login/training-form/question-and-answer">
      <button className="w-full lg:w-[15%] py-2 px-4 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600">
        Next
      </button>
    </Link>
  </div>
  )
}

export default page