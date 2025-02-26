"use client";
import React, { useEffect } from "react";

// components/InterfaceHeader.js
export default function AnalyticsHeader({ children, activeMenuItem, setActiveMenuItem }) {
  useEffect(() => {
    // Agar activeMenuItem "team" ya "custom" nahi hai, to default "team" set karo
    if (activeMenuItem !== "team" && activeMenuItem !== "custom") {
      setActiveMenuItem("team");
    }
  }, [activeMenuItem, setActiveMenuItem]);

  return (
    <header className="border-b px-6 py-4">
      <div className="flex justify-between items-center overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border border-gray-300 rounded-lg ${
              activeMenuItem === "team"
                ? "bg-[#252525] text-white"
                : "text-[#252525]"
            }`}
            // naya: "team" literal pass kar rahe hain instead of undefined "item"
            onClick={() => setActiveMenuItem("team")}
          >
            Team Analytics
          </button>
          <button
            className={`px-4 py-2 border border-gray-300 rounded-lg ${
              activeMenuItem === "customer"
                ? "bg-[#252525] text-white"
                : "text-[#252525]"
            }`}
            // naya: "customer" literal pass kar rahe hain instead of undefined "item"
            onClick={() => setActiveMenuItem("customer")}
          >
            Customer Analytics
          </button>
        </div>
      </div>
    </header>
  );
}
