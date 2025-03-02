// components/Layout.js
"use client";
import Link from "next/link";
import Sidebar from "./Sidebar";
import Image from "next/image";
import logo from "../../public/lexLogo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import AnalyticsNav from "./AnalyticsNav";

export default function LayoutAnalytics({ children, activeMenuItem, setActiveMenuItem }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="flex h-screen bg-white">
      {/* Sidebar remains always visible */}
      <Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />
      <main className="flex-1 flex flex-col overflow-hidden">
        <AnalyticsNav
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
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
