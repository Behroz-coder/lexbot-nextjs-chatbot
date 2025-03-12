// pages/index.js
"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { FiChevronDown, FiPlus, FiArrowLeft } from "react-icons/fi"; // Added FiArrowLeft for mobile back button
import { HiOutlineMail, HiOutlineTicket } from "react-icons/hi";
import { BsPin, BsDownload, BsPaperclip, BsEmojiSmile } from "react-icons/bs";
import { BiMessageSquare } from "react-icons/bi";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { RiFlashlightLine } from "react-icons/ri";
import YourInbox from "./YourInbox";
import AllTickets from "./AllTicketsInbox";

export default function InboxPage() {
 const [activeTab, setActiveTab] = useState("inbox");
  return (
    <div className="flex flex-col h-screen">
      <div className="flex h-full">
        {/* Left sidebar - hidden on mobile */}
        <div className="w-[290px] hidden lg:flex bg-[#F3F5F6] px-2 border-r border-gray-200 flex-col">
          <div className="px-4 py-3 text-xl text-black font-medium ">Inbox</div>
          <div className="overflow-y-auto flex-1">
            <div className="p-2">
              {/* Replace your existing Your Inbox and All Tickets divs with these */}
              <div
                className={`${
                  activeTab === "inbox"
                    ? "bg-[#2472FC] text-white"
                    : "hover:bg-gray-100 text-[#404040]"
                } rounded-lg flex items-center py-2 px-4 mb-1 cursor-pointer`}
                onClick={() => setActiveTab("inbox")}
              >
                <HiOutlineMail size={25} className="mr-2" />
                <span className="text-[16px] leading-6 font-normal">
                  Your Inbox
                </span>
                <span
                  className={`ml-auto ${
                    activeTab === "inbox" ? "text-[#FDFDFD]" : "text-[#404040]"
                  } flex items-center justify-center text-[16px] font-normal`}
                >
                  12
                </span>
              </div>

              <div
                className={`${
                  activeTab === "tickets"
                    ? "bg-[#2472FC] text-[#FDFDFD]"
                    : "hover:bg-gray-100 text-[#404040]"
                } rounded-lg flex items-center py-2 px-4 mb-1 cursor-pointer`}
                onClick={() => setActiveTab("tickets")}
              >
                <HiOutlineTicket size={25} className="mr-2" />
                <span className="text-[16px] leading-6 font-normal">
                  All Tickets
                </span>
                <span
                  className={`ml-auto ${
                    activeTab === "tickets" ? "text-white" : "text-gray-500"
                  } text-sm`}
                >
                  2,456
                </span>
              </div>

              <div className="mt-6">
                <div className="flex items-center justify-between px-4 mb-2">
                  <span className="text-[16px] leading-[160%] font-normal text-black">
                    PLATFORMS
                  </span>
                  <FiChevronDown size={20} className="text-black" />
                </div>

                <div className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                  <HiOutlineMail size={25} className="mr-2 text-gray-500" />
                  <span className="text-[16px] leading-6 font-normal">
                    Emails
                  </span>
                </div>
                <div className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                  <BiMessageSquare size={25} className="mr-2 text-gray-500" />
                  <span className="text-[16px] leading-6 font-normal">
                    Chats
                  </span>
                </div>
                <div className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                  <FaInstagram size={25} className="mr-2 text-gray-500" />
                  <span className="text-[16px] leading-6 font-normal">
                    Instagram
                  </span>
                </div>
                <div className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                  <FaWhatsapp size={25} className="mr-2 text-gray-500" />
                  <span className="text-[16px] leading-6 font-normal">
                    Whatsapp
                  </span>
                </div>
                <div className="flex items-center py-2 px-4 hover:bg-gray-100 rounded">
                  <FaFacebook size={25} className="mr-2 text-gray-500" />
                  <span className="text-[16px] leading-6 font-normal">
                    Facebook
                  </span>
                </div>
              </div>

              <div className="mt-6">
                <div className="px-4 mb-2">
                  <span className="text-sm font-normal text-black">TEAMS</span>
                </div>
                <button className="w-full border border-[#A3A3A3] rounded-lg py-2 px-4 flex items-center justify-center hover:bg-gray-50">
                  <FiPlus className="mr-2 text-[#252525]" />
                  <span className="text-[#252525] text-[16px] leading-6 font-normal">
                    Team members
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Conditionally render entire view based on tab */}
        {activeTab === "inbox" ? <YourInbox /> : <AllTickets />}
      </div>
    </div>
  );
}
