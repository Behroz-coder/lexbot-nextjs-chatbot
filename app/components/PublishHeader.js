"use client";
import React, { useEffect } from "react";

export default function PublishHeader({ activeTab, setActiveTab }) {
 
  useEffect(() => {

    if (activeTab !== "web" && activeTab !== "share") {
      setActiveTab("web"); 
    }
  }, [activeTab, setActiveTab]); 

  return (
    <header className="border-b px-6 py-4">
      <div className="flex items-center scrollbar-hidden justify-start space-x-1 sm:space-x-4 overflow-x-auto whitespace-nowrap">
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg ${
            activeTab === "web" ? "bg-[#252525] text-white" : "text-[#252525]"
          }`}
          onClick={() => setActiveTab("web")}
        >
          Web Integration
        </button>
        <button
          className={`px-4 py-2 border border-gray-300 rounded-lg ${
            activeTab === "share" ? "bg-[#252525] text-white" : "text-[#252525]"
          }`}
          onClick={() => setActiveTab("share")}
        >
          Share Separate Interface
        </button>
        <button
          className={`px-4 py-2 border text-[#252525] border-gray-300 rounded-lg `}
        >
          Connect with Instagram
        </button>
        <button
          className={`px-4 py-2 border text-[#252525] border-gray-300 rounded-lg `}
        >
          Connect with Facebook
        </button>
      </div>
    </header>
  );
}
