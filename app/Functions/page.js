"use client";
import React from "react";
import Image from "next/image";
import calendly from "../../public/calendly.png";
import cal from "../../public/cal.png";
import zapier from "../../public/zapier.png";
import webhooks from "../../public/webhooks.png";
import api_logo from "../../public/api_logo.png";
import slack from "../../public/slack.png";
import make from "../../public/make.png";

const FunctionCard = ({ title, logo, description, onClick, bgColor }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-shadow">
      {/* Updated: Using dynamic bgColor and centering logo inside the container */}
      <div
        className={`flex items-center justify-center p-4 rounded-lg mb-3 ${bgColor}`}
      >
        {logo && (
          // Removed extra width/height classes to ensure centering
          <div className="relative flex items-center justify-center">
            <Image src={logo} alt={`${title} logo`} width={140} height={80} />
          </div>
        )}
      </div>
      <h3 className=" text-lg font-semibold my-2">{title}</h3>
      <p className="text-sm text-gray-500 mb-4 text-left min-h-[60px]">
        {description}
      </p>
      <button
        onClick={onClick}
        className="w-full bg-[#2472FC] text-white py-3 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
      >
        Set Up
      </button>
    </div>
  );
};

const Functions = () => {
  // Added bgColor property for each function to have a different background color for logo container
  const functions = [
    {
      title: "Calendly",
      logo: calendly,
      description:
        "Enable seamless scheduling directly through conversations by integrating with Calendly. Allow users to book appointments, meetings, or consultations without leaving the chat.",
      bgColor: "bg-[#EBF2FF]",
    },
    {
      title: "Cal.com",
      logo: cal,
      description:
        "Integrate with Cal.com open-source scheduling infrastructure to manage bookings and appointments within conversations. Leverage advanced scheduling features.",
      bgColor: "bg-[#EBF2FF]",
    },
    {
      title: "Make.com",
      logo: make,
      description:
        "Seamlessly integrate Lexbot with Make.com automation platform. Trigger customized workflows based on specific conversation events, user inputs, or AI responses.",
      bgColor: "bg-[#F5EBFF]",
    },
    {
      title: "Zapier",
      logo: zapier,
      description:
        "Connect Lexbot to Zapier extensive app ecosystem. Create automated workflows (Zaps) that activate based on conversation milestones, user requests, or AI decisions.",
      bgColor: "bg-[#FFF1EB]",
    },
    {
      title: "Webhooks",
      logo: webhooks,
      description:
        "Automatically send customized HTTP requests to any endpoint when specific conversation events occur. Configure webhook payloads with relevant conversation data.",
      bgColor: "bg-[#FAEFF2]",
    },
    {
      title: "API Calls",
      logo: api_logo,
      description:
        "Dynamically execute internal API requests based on conversation context and user needs. Configure authentication, headers, and request bodies to interact with your systems.",
      bgColor: "bg-[#F5F5F5]",
    },
    {
      title: "Slack",
      logo: slack,
      description:
        "Post targeted messages to Slack channels or users based on conversation developments. Share important updates, alerts, or conversation summaries directly in your workspace.",
      bgColor: "bg-[#EFFBF6]",
    },
  ];

  return (
    <div className="max-w-full h-screen overflow-y-auto mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {functions.map((func, index) => (
          <FunctionCard
            key={index}
            title={func.title}
            logo={func.logo}
            description={func.description}
            bgColor={func.bgColor} // <-- Passing dynamic background color for logo container
            onClick={() => console.log(`Setting up ${func.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Functions;
