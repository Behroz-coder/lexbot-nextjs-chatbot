'use client'
import Link from 'next/link'
import React,{ useState } from 'react'
import { MdDelete } from "react-icons/md";
function page() {
    const [websiteURL, setWebsiteURL] = useState("");
    const [importedWebsites, setImportedWebsites] = useState([
      "www.macthedesigner.com",
      "www.macthedesigner.com",
      "www.macthedesigner.com",
    ]);
  
    const handleAddWebsite = () => {
      if (websiteURL) {
        setImportedWebsites([...importedWebsites, websiteURL]);
        setWebsiteURL("");
      }
    };
  
    const handleDeleteWebsite = (index) => {
      const updatedWebsites = importedWebsites.filter((_, i) => i !== index);
      setImportedWebsites(updatedWebsites);
    };
  return (
    <div>
           <div>
      <div className="mb-4">
        <label className="block font-medium text-black mb-2">Website URL</label>
        <input
          type="text"
          placeholder="Please enter website URL"
          value={websiteURL}
          onChange={(e) => setWebsiteURL(e.target.value)}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black font-medium mb-2">
          Already Imported websites
        </label>
        <div className="space-y-2">
          {importedWebsites.map((site, index) => (
            <div
              key={index}
              className="flex justify-between text-gray-500 items-center p-2 border rounded-lg"
            >
              <span>{site}</span>
              <button
                onClick={() => handleDeleteWebsite(index)}
                className="text-red-500 hover:text-red-700"
              >
                <MdDelete />
              </button>
            </div>
          ))}
        </div>
      </div>
      <Link href="/login/training-form/raw-text">
        <button
          onClick={handleAddWebsite}
          className="w-full lg:w-auto py-2 px-4 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600"
        >
          Next
        </button>
      </Link>
    </div>
    </div>
  )
}

export default page