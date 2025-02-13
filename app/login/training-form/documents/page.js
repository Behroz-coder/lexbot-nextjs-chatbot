import Link from 'next/link'
import React from 'react'
import documentIcon from "../../../../public/Vector@2x.png";
import Image from 'next/image';
function page() {
  return (
    <div>
    <div className="mb-4">
      <label className="block text-black mb-2">Document</label>
      <div className="w-full h-40 flex flex-col items-center justify-center border-2  rounded-lg text-gray-400">
        <input type="file" multiple className="hidden" id="file-upload" />
        <label htmlFor="file-upload" className="cursor-pointer">
          <div className="flex flex-col items-center">
            <Image src={documentIcon} alt="Document Icon" className="w-8" />

            <span className="text-sm mt-2">
              Click here to import PDFs, Docx, Txt, Csvs
            </span>
          </div>
        </label>
      </div>
    </div>
    <Link href="/login/training-form/notion">
      <button className="w-full lg:w-[15%] py-2 px-4 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600">
        Next
      </button>
    </Link>
  </div>
  )
}

export default page