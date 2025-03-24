"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";
import Playground from "../Playground/page";
import Functions from "../Functions/page";
import Settings from "../Settings/page";
import Responses from "../responses/page";
export default function MainNav({ activeMenuItem, setActiveMenuItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuItems = [
    "Playground",
    "Responses",
    "Interface",
    "Functions",
    "Publish",
    "Settings",
  ];

  return (
    <>
      <nav className="border-b">
        {/* Mobile Header */}
        <div className="lg:hidden  bg-[#DBDBDB]/10 ">
          <div className=" flex items-center justify-between px-4 py-4 mb-8 ">
            <Link href="/" className="flex items-center space-x-2">
              <Image src={logo} alt="logo image" width={30} height={30} />
              <span className="font-semibold text-xl">Lexbot</span>
            </Link>
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
          <div className="flex items-center justify-start px-6 space-x-5 sm:space-x-4 overflow-x-auto scrollbar-hidden whitespace-nowrap">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenuItem(item)}
                className={`px-0 font-normal text-[12px] leading-[160%]  py-2 flex-shrink-0 ${
                  activeMenuItem === item
                    ? "text-blue-500 border-b-[3px] px-0 border-blue-500"
                    : "text-gray-600"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between px-6 py-2 bg-[#DBDBDB]/10 ">
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveMenuItem(item)}
                className={`px-0 font-normal text-[16px] leading-[160%] py-1 ${
                  activeMenuItem === item
                    ? "text-blue-500 border-b-[3px] border-blue-500"
                    : "text-black "
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="hidden mr-4 lg:block h-10 w-10 bg-slate-300 rounded-full"></div>
        </div>
      </nav>
      {/* Render Sidebar only on mobile */}
      <div className="lg:hidden">
        {isMobileMenuOpen && (
          <Sidebar
            isMobileOpen={isMobileMenuOpen}
            closeMobileSidebar={() => setIsMobileMenuOpen(false)}
          />
        )}
      </div>{" "}
      {activeMenuItem === "Playground" && <Playground />}
      {activeMenuItem === "Functions" && <Functions />}
      {activeMenuItem === "Settings" && <Settings />}
      {activeMenuItem === "Responses" && <Responses />}
    </>
  );
}
