'use client'
import React, { useState } from "react";
import Image from "next/image";
import calendly from "../../public/calendly.png";
import cal from "../../public/cal.png";
import zapier from "../../public/zapier.png";
import webhooks from "../../public/webhooks.png";
import api_logo from "../../public/api_logo.png";
import slack from "../../public/slack.png";
import make from "../../public/make.png";
import { ArrowLeftIcon, Trash2 } from "lucide-react";

const FunctionCard = ({ title, logo, description, onClick, bgColor }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md transition-shadow">
      <div
        className={`flex items-center justify-center p-4 rounded-lg mb-3 ${bgColor}`}
      >
        {logo && (
          <div className="relative flex items-center justify-center">
            <Image src={logo} alt={`${title} logo`} width={140} height={80} />
          </div>
        )}
      </div>
      <h3 className="text-lg font-semibold my-2">{title}</h3>
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

const SetupForm = ({ integration, onBack }) => {
  const [context, setContext] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      integration,
      context,
      userName,
      description,
    });
  };

  return (
    <div className="max-w-[640px] mx-auto p-6 overflow-y-auto scrollbar-hidden">
      {/* Back button */}
      <button
        onClick={onBack}
        className="mb-6 text-blue-600 hover:text-blue-700  text-lg font-medium flex items-center gap-2"
      >
        <ArrowLeftIcon/>
     Back to integrations
      </button>

      {/* Title */}
      <h1 className="text-xl font-semibold text-center mb-8">
        Setup {integration.title} Function
      </h1>

      <form onSubmit={handleSubmit} className="space-y-8">
        {/* When This Happens Section */}
        <div>
          <div className="flex justify-center mb-6">
            <span className="bg-[#4B5563] text-white text-sm px-4 py-1.5 rounded-full">
              When this happens...
            </span>
          </div>

          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <div className="text-sm text-gray-900 mb-2">
              Please explain the context of the conversation for the function to
              trigger.
            </div>
            <div className="relative pt-2">
              <input
                type="text"
                value={context}
                onChange={(e) => setContext(e.target.value)}
                placeholder="When the user is interested about the AI functionality of my company"
                className="w-full p-6 border border-gray-200 rounded-lg bg-white shadow-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 text-sm"
              />
            </div>
          </div>
        </div>

        {/* Do This Section */}
        <div>
          <div className="flex justify-center mb-6">
            <span className="bg-[#4B5563] text-white text-sm px-4 py-1.5 rounded-full">
              Do this...
            </span>
          </div>

          {/* Name Input */}
          <div className="space-y-2 relative">
            {/* First Card */}
            <div className=" bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <button
                type="button"
                className="absolute top-1 -right-6 text-gray-400 hover:text-gray-600"
                aria-label="Delete"
              >
                <Trash2 size={18} />
              </button>

              <div className="mb-2 text-sm text-gray-900">Name of user</div>
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="Please type here"
                className="w-full p-3 border border-gray-200 rounded-md focus:ring-0 text-sm"
              />
            </div>

            {/* Updated Plus Button Section with Connecting Lines */}
            <div className="relative py-12 flex justify-center">
          
              <div className="absolute top-0 bottom-0 w-[2px] bg-gray-800">
         
              </div>

              {/* Plus Button */}
              <div className="absolute top-1/2 -translate-y-1/2 z-10">
                <button
                  type="button"
                  className="w-6 h-6 rounded-full bg-black text-white flex items-center justify-center"
                >
                  +
                </button>
              </div>
            </div>

            {/* Second Card */}
            <div className="relative bg-white rounded-lg shadow-md p-4 border border-gray-100">
              <button
                type="button"
                className="absolute top-1 -right-6 text-gray-400 hover:text-gray-600"
                aria-label="Delete"
              >
                <Trash2 size={18} />
              </button>

              <div className="mb-2 text-sm text-gray-900">Description</div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Please type here"
                rows={4}
                className="w-full  p-4 border border-gray-200 rounded-md focus:ring-0 text-sm resize-none"
              />
            </div>
          </div>
        </div>

        {/* Connect Button */}
        <button
          type="submit"
          className="w-full bg-[#2472FC] text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors"
        >
          Connect with {integration.title}
        </button>
      </form>
    </div>
  );
};

const Functions = () => {
  const [selectedIntegration, setSelectedIntegration] = useState(null);

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

  if (selectedIntegration) {
    return (
      <SetupForm
        integration={selectedIntegration}
        onBack={() => setSelectedIntegration(null)}
      />
    );
  }

  return (
    <div className="max-w-full h-screen overflow-y-auto mx-auto px-4 py-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {functions.map((func, index) => (
          <FunctionCard
            key={index}
            title={func.title}
            logo={func.logo}
            description={func.description}
            bgColor={func.bgColor}
            onClick={() => setSelectedIntegration(func)}
          />
        ))}
      </div>
    </div>
  );
};

export default Functions;
