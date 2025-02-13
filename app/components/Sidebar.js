"use client";
import { useState } from "react";
import { PanelRightOpen, Search, Megaphone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";
export default function Sidebar({ isMobileOpen, closeMobileSidebar }) {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const navItems = [
    { id: "inbox", label: "Inbox", icon: "📥", href: "/inbox" },
    { id: "chatbots", label: "Chatbots", icon: "🤖", href: "/chatbots" },
    { id: "analytics", label: "Analytics", icon: "📊", href: "/analytics" },
    { id: "leads", label: "Leads", icon: "👥", href: "/leads" },
  ];

  // For mobile: use translate-x-full based on isMobileOpen.
  // For desktop (lg): always show (lg:static, lg:translate-x-0) and ensure z-index so it is visible.
  const sidebarClasses = `
    fixed inset-y-0 left-0 z-40 transition-transform duration-200 ease-in-out
    ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
    lg:static lg:translate-x-0 lg:z-40
    ${isCollapsed ? "w-16" : "w-64"}
    flex flex-col bg-[#DBDBDB] lg:bg-[#DBDBDB]/10 border-r
  `;

  return (
    <aside className={sidebarClasses}>
      {/* Collapse Toggle (desktop only) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:block absolute -right-3 top-10 bg-[#fff] border rounded-full p-1"
      >
        <PanelRightOpen
          className={`h-5 w-5 transition-transform duration-300 ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Header */}
      <div className="  p-4 border-b flex items-center ">
        <Image src={logo} alt="logo image" width={30} height={30} />
        {!isCollapsed && <span className="ml-2 font-semibold">Lexbot</span>}
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg  h-4 w-4" />
            <input
              type="search"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border outline-none bg-[#ebe8e8] lg:bg-[#fff] placeholder:text-black rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex-1 p-2">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={item.href}
            onClick={() => {
              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                closeMobileSidebar();
              }
            }}
            className={`
              flex items-center px-3 py-2 rounded-lg mb-1 transition-colors
              ${item.id === "chatbots" ? "bg-gray-100" : "hover:bg-gray-50"}
            `}
          >
            <span className="text-xl">{item.icon}</span>
            {!isCollapsed && <span className="ml-3">{item.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="p-4 border-t">
        {isCollapsed ? (
          <div className="h-10 w-10 rounded-full overflow-hidden">
            <Image
              src={logo}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <>
            <div className="flex items-center space-x-3 mb-4">
              <div className="h-10 w-10 rounded-full overflow-hidden">
                <Image
                  src={logo}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <p className="text-sm font-medium">Macdonald Anyanwu</p>
                <p className="text-xs text-gray-500">Pro</p>
              </div>
            </div>
            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full w-4/5 bg-blue-500 rounded-full" />
            </div>
            <p className="text-xs text-gray-500 mb-4">800/1000 Messages</p>
            <button className="w-full py-2 px-4 text-blue-500 bg-blue-100 rounded-lg mb-2">
              Get More Messages
            </button>
            <button className="w-full py-2 px-4 border rounded-lg lg:bg-[#fff] ">
              Settings
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
