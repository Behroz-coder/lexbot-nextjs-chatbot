"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";

import TeamAnalyticsPage from "../analytics/teamAnalytics";
import CustomerAnalytics from "../analytics/customerAnalytics";
import DateRangeButton from "./DateRangeButton";

export default function AnalyticsNav({ activeMenuItem, setActiveMenuItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();
  const menuItems = ["Team Analytics", "Customer Analytics"];

  useEffect(() => {
    // Check localStorage for saved tab
    const savedTab =
      typeof window !== "undefined"
        ? localStorage.getItem("activeAnalyticsTab")
        : null;

    if (savedTab) {
      // Agar localStorage mein tab save hai to use set karen
      setActiveMenuItem(savedTab);
    } else {
      // Agar nahi hai to default "Team Analytics" set karen
      setActiveMenuItem("Team Analytics");
      // Aur localStorage mein bhi save karen
      if (typeof window !== "undefined") {
        localStorage.setItem("activeAnalyticsTab", "Team Analytics");
      }
    }
  }, [setActiveMenuItem]);

  const handleMenuClick = (item) => {
    // Tab change karen
    setActiveMenuItem(item);
    // Aur new tab ko localStorage mein save karen
    if (typeof window !== "undefined") {
      localStorage.setItem("activeAnalyticsTab", item);
    }
  };

  return (
    <>
      <nav className="border-b">
        {/* Mobile Header */}
        <div className="lg:hidden bg-[#DBDBDB]/10">
          <div className="flex items-center justify-between   px-4 py-4 mb-8">
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
          <div className="flex items-center justify-center border-gray-400 pb-2 border-b-[.5px] lg:justify-start px-2 space-x-1 sm:space-x-4 overflow-x-auto whitespace-nowrap">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
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
        <div className="hidden lg:flex justify-between px-4 py-3 bg-[#DBDBDB]/10">
          <div className="flex items-center space-x-6">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => handleMenuClick(item)}
                className={`px-4 py-2 border text-[16px] font-normal border-gray-300  rounded-lg  ${
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
            <DateRangeButton />
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

      {/* Conditional Rendering */}
      {activeMenuItem === "Team Analytics" && <TeamAnalyticsPage />}
      {activeMenuItem === "Customer Analytics" && <CustomerAnalytics />}
    </>
  );
}
