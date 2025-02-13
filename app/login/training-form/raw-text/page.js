import Link from 'next/link'
import React from 'react'

function page() {
  return (
    <div>
    <div className="mb-4">
      <label className="block text-black mb-2">Raw Text</label>
      <textarea
        placeholder="Enter raw text here..."
        className="w-full h-32 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      ></textarea>
    </div>
    <Link href="/login/training-form/documents">
      <button className="w-full lg:w-[15%] py-2 px-4 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600">
        Next
      </button>
    </Link>
  </div>
  )
}

export default page