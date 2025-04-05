// app/components/DateRangeButton.jsx
"use client"; // Since this is a client-side component

import { CalendarIcon } from "lucide-react";
import { useState } from "react";
 // Updated import path for Heroicons v2

export default function DateRangeButton() {
  // State for start and end dates
  const [startDate, setStartDate] = useState(new Date(2024, 0, 1)); // January 1, 2024
  const [endDate, setEndDate] = useState(new Date(2024, 6, 31)); // July 31, 2024
  const [isPickerOpen, setIsPickerOpen] = useState(false); // State to toggle date picker visibility

  // Function to format the date range as "Month - Month Year"
  const formatDateRange = (start, end) => {
    const options = { month: "long" };
    const startMonth = start.toLocaleString("en-US", options);
    const endMonth = end.toLocaleString("en-US", options);
    const year = start.getFullYear();
    return `${startMonth} - ${endMonth} ${year}`;
  };

  // Toggle the date picker visibility
  const handleButtonClick = () => {
    setIsPickerOpen(!isPickerOpen);
  };

  // Handle date selection from inputs
  const handleStartDateChange = (e) => {
    const newStartDate = new Date(e.target.value);
    if (newStartDate <= endDate) {
      setStartDate(newStartDate);
    } else {
      alert("Start date must be before or equal to end date");
    }
  };

  const handleEndDateChange = (e) => {
    const newEndDate = new Date(e.target.value);
    if (newEndDate >= startDate) {
      setEndDate(newEndDate);
    } else {
      alert("End date must be after or equal to start date");
    }
  };

  return (
    <div className="relative">
      {/* Button displaying the date range and icon */}
      <button
        onClick={handleButtonClick}
        className="flex items-center justify-center bg-[#F1F1F2] rounded-md shadow-sm px-3 lg:px-4 py-2 text-black font-normal text-[12px] lg:text-[14px] hover:bg-gray-200 transition-colors"
      >
        <span>{formatDateRange(startDate, endDate)}</span>
        <CalendarIcon className="ml-2 h-5 w-5" />
      </button>

      {/* Date picker dropdown (appears when button is clicked) */}
      {isPickerOpen && (
        <div className="absolute mt-2 p-4 bg-white rounded-md shadow-lg z-10">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Start Date:
              <input
                type="date"
                value={startDate.toISOString().split("T")[0]}
                onChange={handleStartDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
            <label className="text-sm font-medium text-gray-700">
              End Date:
              <input
                type="date"
                value={endDate.toISOString().split("T")[0]}
                onChange={handleEndDateChange}
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
              />
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
