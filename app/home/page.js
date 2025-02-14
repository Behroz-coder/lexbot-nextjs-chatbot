"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "../components/Sidebar";
import MainNav from "../components/MainNav";
import Header from "../components/Header";
import SocialConnections from "../components/SocialConnections";
import ChatbotSettings from "../chatbot-settings/page"; // Correct component path

function Home() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL parameters
  const [activeTab, setActiveTab] = useState(
    () => searchParams.get("tab") || "social"
  );
  const [activeMenuItem, setActiveMenuItem] = useState(
    () => searchParams.get("menu") || "Interface"
  );

  // Sync state with URL
  useEffect(() => {
    const params = new URLSearchParams();
    if (activeTab) params.set("tab", activeTab);
    if (activeMenuItem) params.set("menu", activeMenuItem);

    const newUrl = `?${params.toString()}`;
    if (window.location.search !== newUrl) {
      router.replace(newUrl, { scroll: false });
    }
  }, [activeTab, activeMenuItem]);

  // Handle initial page load
  useEffect(() => {
    const tab = searchParams.get("tab");
    const menu = searchParams.get("menu");
    if (tab) setActiveTab(tab);
    if (menu) setActiveMenuItem(menu);
  }, []);

  return (
    <div className="flex h-screen bg-white">
      <Sidebar
        activeMenuItem={activeMenuItem}
        setActiveMenuItem={setActiveMenuItem}
      />

      <main className="flex-1 flex flex-col overflow-hidden">
        <MainNav
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />

        {activeMenuItem === "Interface" && (
          <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />

            <div className="overflow-y-auto flex-1">
              {activeTab === "social" && <SocialConnections />}
              {activeTab === "web" && <ChatbotSettings />}
            </div>
          </>
        )}

        {/* Add other menu items similarly */}
      </main>
    </div>
  );
}

export default Home;
