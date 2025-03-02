//app/components/AnalyticsNav.js
"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // naya: router import
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";

import TeamAnalyticsPage from "../analytics/teamAnalytics";
import CustomerAnalytics from "../analytics/customerAnalytics";
import DateRangeButton from "./DateRangeButton";

export default function AnalyticsNav({ activeMenuItem, setActiveMenuItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter(); // naya: router instance
  const menuItems = ["Team Analytics", "Customer Analytics"];

  // naya: function jo menu click handle karega aur team ke liye route push karega
  const handleMenuClick = (item) => {
    setActiveMenuItem(item);
  };

  return (
    <>
      <nav className="border-b">
        {/* Mobile Header */}
        <div className="lg:hidden bg-[#DBDBDB]/10">
          <div className="flex items-center justify-between px-4 py-4 mb-8">
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
          <div className="flex items-center justify-center lg:justify-start px-2 space-x-1 sm:space-x-4 overflow-x-auto whitespace-nowrap">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)} // naya: use handleMenuClick
                className={`px-4 py-2 border border-gray-300  rounded-lg ${
                  activeMenuItem === item
                    ? "bg-[#252525] text-white"
                    : "text-[#252525]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between px-4 py-2 bg-[#DBDBDB]/10">
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)} // naya: use handleMenuClick
                className={`px-4 py-2 border border-gray-300  rounded-lg  ${
                  activeMenuItem === item
                    ? "bg-[#252525] text-white"
                    : "text-[#252525]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="">
            <DateRangeButton/>
          </div>
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
      </div>

      {/* Conditional Rendering: yahan ab bhi AnalyticsPage render ho raha hai */}
      {activeMenuItem === "Team Analytics" && <TeamAnalyticsPage />}
      {activeMenuItem === "Customer Analytics" && <CustomerAnalytics />}
    </>
  );
}
