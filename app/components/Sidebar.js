"use client";
import { useState } from "react";
import { PanelRightOpen, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // naya: current route lene ke liye import
import logo from "../../public/lexLogo.svg";
import message_icon from "../../public/message_icon.svg";
import chat_icon from "../../public/chat-icon.svg";
import analytics_icon from "../../public/hugeicons_analytics-up.svg";
import leads_icon from "../../public/la_user-check.svg";

export default function Sidebar({ isMobileOpen, closeMobileSidebar }) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const pathname = usePathname(); // naya: current pathname

  const navItems = [
    { id: "inbox", label: "Inbox", icon: message_icon, href: "/inbox" },
    { id: "chatbots", label: "Chatbots", icon: chat_icon, href: "/chatbots" },
    {
      id: "analytics",
      label: "Analytics",
      icon: analytics_icon,
      href: "/analytics",
    },
    { id: "leads", label: "Leads", icon: leads_icon, href: "/leads" },
  ];

  // Sidebar ke classes
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
      <div className="p-4 border-b flex items-center">
        <Image
          src={logo}
          alt="logo image"
          className="w-auto"
          width={30}
          height={30}
        />
        {!isCollapsed && <span className="ml-2 font-semibold">Lexbot</span>}
      </div>

      {/* Search */}
      {!isCollapsed && (
        <div className="p-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-black text-lg h-4 w-4" />
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
              // Mobile sidebar close karne ke liye
              if (typeof window !== "undefined" && window.innerWidth < 1024) {
                closeMobileSidebar();
              }
            }}
            className={`
              flex items-center px-3 py-2 rounded-lg mb-1 transition-colors
              ${
                pathname === item.href ? "bg-[#EAECF0]" : "hover:bg-[#EAECF0]"
              }  // naya: active link check based on current pathname
            `}
          >
            <Image alt={item.icon} src={item.icon} />
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
            <button className="w-full py-2 px-4 border rounded-lg lg:bg-[#fff]">
              Settings
            </button>
          </>
        )}
      </div>
    </aside>
  );
}
