"use client";
import React from "react";

export default function PublishHeader({ activeTab, setActiveTab }) {
    return (
      <header className="border-b px-4 py-4">
       
          <div className="flex items-center justify-start space-x-1 sm:space-x-4 overflow-x-auto whitespace-nowrap">
            <button
              className={`px-4 py-2 border border-gray-300 rounded-lg ${
                activeTab === "web"
                  ? "bg-[#252525] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("web")}
            >
              Web Integration
            </button>
            <button
              className={`px-4 py-2 border border-gray-300 rounded-lg ${
                activeTab === "share"
                  ? "bg-[#252525] text-white"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveTab("share")}
            >
              Share Separate Interface
            </button>
            <button className={`px-4 py-2 border border-gray-300 rounded-lg `}>
              Connect with Instagram
            </button>
            <button className={`px-4 py-2 border border-gray-300 rounded-lg `}>
              Connect with Facebook
            </button>
          </div>
    
      </header>
    );
}
