//app/components/sidebar.js
"use client";
import { useState } from "react";
import { PanelRightOpen, Search } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation"; // naya: current route lene ke liye import
import logo from "../../public/lexLogo.svg";
import profile_logo from "../../public/profile_image_lexbot.png";
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
    ${isCollapsed ? "w-[70px]" : "w-[288px]"}
    flex flex-col bg-[#DBDBDB] lg:bg-[#F8F9FA] border-r border-[#DBDBDB]
  `;

  return (
    <aside className={sidebarClasses}>
      {/* Collapse Toggle (desktop only) */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="hidden lg:block absolute -right-3 top-10 bg-[#fff] border rounded-full p-1"
      >
        <PanelRightOpen
          className={`h-5 w-5 transition-transform duration-300  ${
            isCollapsed ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Header */}
      <div className="py-4 px-3 border-b flex items-center ">
        <Image src={logo} alt="logo image" width={28} height={28} />
        {!isCollapsed && (
          <span className="ml-2 font-bold text-[16px]">Lexbot</span>
        )}
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
            {!isCollapsed && (
              <span className="ml-3 text-[16px] font-medium ">
                {item.label}
              </span>
            )}
          </Link>
        ))}
      </nav>

      {/* Profile Section */}
      <div className="p-4  ">
        {isCollapsed ? (
  <div></div>
        ) : (
          <div className="bg-white rounded-xl p-3 border border-[#DBDBDB]">
            <div className="flex items-center space-x-3 mb-4  ">
              <div className=" rounded-full bg-white ">
                <Image
                  src={logo}
                  alt="Profile"
                  width={48}
                  height={48}
                  className="object-cover "
                />
              </div>
              <div>
                <p className="text-[16px] text-[#000000] font-medium">
                  Macdonald Anyanwu
                </p>
                <p className="text-[14px] font-medium text-[#008000]">
                  <span className="text-[#737373] text-[14px] font-medium leading-[160%]">
                    Current Plan:{" "}
                  </span>
                  Pro
                </p>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-[14px] font-medium leading-[160%] text-[#737373] mb-2">
                Messages Usage
              </p>
              <p className="text-[14px] font-medium leading-[160%] text-black">
                800 / 1000
              </p>
            </div>

            <div className="h-2 bg-gray-200 rounded-full mb-2">
              <div className="h-full w-4/5 bg-blue-500 rounded-full" />
            </div>

            <button className="w-full py-2 text-[14px] font-medium leading-[160%] mt-2 px-4 text-[#2472FC] bg-blue-100 rounded-lg mb-2">
              Get More Messages
            </button>
            <Link href="/Settingspage">
              <button className="w-full py-2 px-4 border rounded-lg lg:bg-[#fff]">
                Settings
              </button>
            </Link>
          </div>
        )}
      </div>
    </aside>
  );
}
