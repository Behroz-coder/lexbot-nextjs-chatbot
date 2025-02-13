"use client"
import React, { useState } from 'react'
import Sidebar from '../components/Sidebar';
import MainNav from '../components/MainNav';
import Header from '../components/Header';
import SocialConnections from '../components/SocialConnections';
import ChatbotSettings from "../chatbot-settings/page";

function Home() {
      const [activeTab, setActiveTab] = useState("social");
      const [activeMenuItem, setActiveMenuItem] = useState("Interface");
  return (
    <div className="flex h-screen bg-white">
      <Sidebar />
      <main className="flex-1 flex flex-col overflow-hidden">
        <MainNav
          activeMenuItem={activeMenuItem}
          setActiveMenuItem={setActiveMenuItem}
        />
        {activeMenuItem === "Interface" && (
          <>
            <Header activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className=" overflow-y-auto">
              {activeTab === "social" && <SocialConnections />}
            </div>
            <div className=" overflow-y-auto">
              {activeTab === "web" && <ChatbotSettings />}
            </div>
          </>
        )}
      </main>
    </div>
  );
}

export default Home