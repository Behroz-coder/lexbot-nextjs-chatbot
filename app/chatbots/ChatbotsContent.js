//HomeContent
"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Sidebar from "../components/Sidebar";
import MainNav from "../components/ChatBotMainNav";
import Header from "../components/InterfaceHeader";
import SocialConnections from "../components/SocialConnections";
import ChatbotSettings from "../chatbot-settings/page";
import PublishHeader from "../components/PublishHeader";
import ShareInterface from "../components/ShareInterface";
import WebIntegration from "../components/WebIntegration";
import SeparateInterface from "../components/SeparateInterface";
import LeadsPage from "../leads/page";
import InboxPage from "../inbox/page";
import AnalyticsPage from "../analytics/teamAnalytics";

import AnalyticsNav from "../components/AnalyticsNav";

export default function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Initialize state from URL parameters
  const [activeTab, setActiveTab] = useState(
    () => searchParams.get("tab") || "web"
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

  useEffect(() => {
    if (!searchParams.get("tab")) {
      setActiveTab("web");
    }
  }, [activeMenuItem, searchParams]);

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
              {activeTab === "separate" && <SeparateInterface />}
            </div>
          </>
        )}
        {activeMenuItem === "Publish" && (
          <>
            <PublishHeader activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className="overflow-y-auto flex-1">
              {activeTab === "web" && <WebIntegration />}
              {activeTab === "share" && <ShareInterface />}
              {activeTab === "instagram" && (
                <div>Instagram Connection Content</div>
              )}
              {activeTab === "facebook" && (
                <div>Facebook Connection Content</div>
              )}
            </div>
          </>
        )}
        {activeMenuItem === "leads" && (
          <div className="overflow-y-auto flex-1">
            <LeadsPage />
          </div>
        )}
        {activeMenuItem === "inbox" && (
          <div className="overflow-y-auto flex-1">
            <InboxPage />
          </div>
        )}
      </main>
  
    </div>
  );
}
