// components/Layout.js
"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function LayoutSetting({
  children,
  activeMenuItem,
  setActiveMenuItem,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar remains always visible */}
      <Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <nav className="border-b">
          {/* Mobile Header */}
          <div className="lg:hidden  bg-[#DBDBDB]/10 ">
            <div className=" flex items-center justify-between px-4 py-4 mb-4 ">
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
            </div>{" "}
            <h1 className="text-[20px] px-6 pb-2 leading-8 font-medium text-black mb-6 border-b border-gray-200">
              Settings
            </h1>
          </div>
        </nav>
        <h1 className="text-[20px] px-6 py-5 hidden lg:block leading-8 font-medium text-black mb-6 border-b border-gray-200">
          Settings
        </h1>
        {/* Render Sidebar only on mobile */}
        <div className="lg:hidden">
          {isMobileMenuOpen && (
            <Sidebar
              isMobileOpen={isMobileMenuOpen}
              closeMobileSidebar={() => setIsMobileMenuOpen(false)}
            />
          )}
        </div>{" "}
        {/* Render the page content here */}
        {children}
      </main>
    </div>
  );
}
