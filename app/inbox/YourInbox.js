// pages/index.js
"use client";
import { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { FiChevronDown, FiPlus, FiArrowLeft } from "react-icons/fi"; // Added FiArrowLeft for mobile back button
import { HiOutlineMail, HiOutlineTicket } from "react-icons/hi";
import { BsPin, BsDownload, BsPaperclip, BsEmojiSmile } from "react-icons/bs";
import logoLex from "../../public/lexLogo.svg";
import Image from "next/image";

export default function YourInbox() {
  const [message, setMessage] = useState("");
  const [activeConversation, setActiveConversation] = useState(1);
  const [showMobileChat, setShowMobileChat] = useState(false); // can be "inbox" or "tickets"  // New state for mobile view control
  const [activeTab, setActiveTab] = useState("inbox");
  const [conversations, setConversations] = useState([
    {
      id: 1,
      name: "Macdonald Anyanwu",
      avatar: "/avatars/macdonald.jpg",
      message: "Hi! I need help organizing my sch...",
      time: "5m",
      messages: [
        {
          id: 1,
          sender: "Macdonald Anyanwu",
          message:
            "Hi! I need help organizing my schedule for next week. I've got meetings, deadlines, and a dentist appointment to juggle.",
          time: "Yesterday, 11:19 PM",
          isUser: true,
        },
        {
          id: 2,
          sender: "Assistant",
          message:
            "Hello Macdonald! I'd be happy to help organize your schedule. Could you share the specific commitments you need to coordinate?",
          time: "Yesterday, 11:20 PM",
          isUser: false,
        },
        {
          id: 3,
          sender: "Macdonald Anyanwu",
          message:
            "Sure! I have a team meeting on Tuesday at 10 AM, a project deadline on Thursday afternoon, and a dentist appointment on Wednesday at 2 PM. Plus, I need to find time to prepare the project presentation.",
          time: "Yesterday, 11:19 PM",
          isUser: true,
        },
        {
          id: 4,
          sender: "Assistant",
          message:
            "I've noted all those commitments. Here's a suggested organization: Monday afternoon for the client review, Tuesday morning for your team meeting, Wednesday afternoon for the dentist. I recommend blocking out Wednesday morning for presentation prep, giving you Thursday morning for final touches before your afternoon deadline.",
          time: "Yesterday, 11:20 PM",
          isUser: false,
        },
      ],
    },
    {
      id: 2,
      name: "Rayna Septimus",
      avatar: "/avatars/rayna.jpg",
      message: "This is me testing the platform to...",
      time: "5m",
      messages: [
        {
          id: 1,
          sender: "Rayna Septimus",
          message: "This is me testing the platform to see how it works.",
          time: "Yesterday, 10:30 PM",
          isUser: true,
        },
        {
          id: 2,
          sender: "Assistant",
          message:
            "Hello Rayna! Welcome to our platform. Im here to assist you. How can I help you today?",
          time: "Yesterday, 10:31 PM",
          isUser: false,
        },
      ],
    },
    {
      id: 3,
      name: "Roger Vaccaro",
      avatar: "/avatars/roger.jpg",
      message: "That sounds perfect! Could you al...",
      time: "5m",
      messages: [
        {
          id: 1,
          sender: "Roger Vaccaro",
          message:
            "Hi, Im trying to find a way to export my data from the system.",
          time: "Yesterday, 9:15 PM",
          isUser: true,
        },
        {
          id: 2,
          sender: "Assistant",
          message:
            "I can help you with that, Roger. You can export your data by going to Settings > Account > Data Export. Would you like me to guide you through the process?",
          time: "Yesterday, 9:17 PM",
          isUser: false,
        },
        {
          id: 3,
          sender: "Roger Vaccaro",
          message:
            "That sounds perfect! Could you also tell me what format the data will be in?",
          time: "Yesterday, 9:20 PM",
          isUser: true,
        },
      ],
    },
    {
      id: 4,
      name: "Aspen Vetroys",
      avatar: "/avatars/aspen.jpg",
      message: "That's a good system. Sarah, wan...",
      time: "5m",
      messages: [
        {
          id: 1,
          sender: "Aspen Vetroys",
          message:
            "Hi there, Im looking for a way to organize my tasks better.",
          time: "Yesterday, 8:45 PM",
          isUser: true,
        },
        {
          id: 2,
          sender: "Assistant",
          message:
            "Hello Aspen! I recommend using our task management system with labels and priorities. Would you like to know how to set that up?",
          time: "Yesterday, 8:47 PM",
          isUser: false,
        },
        {
          id: 3,
          sender: "Aspen Vetroys",
          message:
            "That's a good system. Sarah, wanted me to ask about integrating with calendar too?",
          time: "Yesterday, 8:50 PM",
          isUser: true,
        },
      ],
    },
    {
      id: 5,
      name: "Hanna Septimus",
      avatar: "/avatars/hanna.jpg",
      message: "You're welcome! Let me know if y...",
      time: "5m",
      messages: [
        {
          id: 1,
          sender: "Hanna Septimus",
          message: "Could you help me with setting up my account preferences?",
          time: "Yesterday, 7:30 PM",
          isUser: true,
        },
        {
          id: 2,
          sender: "Assistant",
          message:
            "Of course, Hanna! You can find account preferences under the Settings icon in the top right corner. From there, you can adjust notifications, privacy settings, and more.",
          time: "Yesterday, 7:32 PM",
          isUser: false,
        },
        {
          id: 3,
          sender: "Hanna Septimus",
          message: "Thanks so much for your help!",
          time: "Yesterday, 7:35 PM",
          isUser: true,
        },
        {
          id: 4,
          sender: "Assistant",
          message:
            "You're welcome! Let me know if you need assistance with anything else.",
          time: "Yesterday, 7:36 PM",
          isUser: false,
        },
      ],
    },
  ]);

  const messagesEndRef = useRef(null);
  const activeConvo = conversations.find((c) => c.id === activeConversation);

  // Auto-scroll to bottom of messages
  // useEffect(() => {
  //   if (messagesEndRef.current) {
  //     messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [activeConversation, conversations]);

  // Handler for mobile conversation selection
  // Shows chat and hides conversation list on mobile
  const handleConversationClick = (convoId) => {
    setActiveConversation(convoId);

    // Only change view on mobile devices
    if (window.innerWidth < 1024) {
      setShowMobileChat(true);
    }
  };

  // Handler to go back to conversation list on mobile
  const handleBackToList = () => {
    setShowMobileChat(false);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim()) {
      // Get current timestamp
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const timeStr = `${hours}:${minutes < 10 ? "0" + minutes : minutes} ${
        hours >= 12 ? "PM" : "AM"
      }`;

      // Create new message
      const newMessage = {
        id: activeConvo.messages.length + 1,
        sender: "You",
        message: message,
        time: `Today, ${timeStr}`,
        isUser: true,
      };

      // Create automated response (simulating chatbot)
      const botResponse = {
        id: activeConvo.messages.length + 2,
        sender: "Assistant",
        message: getAutoResponse(message),
        time: `Today, ${timeStr}`,
        isUser: false,
      };

      // Update conversations state with new messages
      setConversations((prevConversations) =>
        prevConversations.map((convo) =>
          convo.id === activeConversation
            ? {
                ...convo,
                // Update preview message in conversation list
                message:
                  message.length > 20
                    ? message.substring(0, 20) + "..."
                    : message,
                time: "now",
                // Add new messages to this conversation
                messages: [...convo.messages, newMessage, botResponse],
              }
            : convo
        )
      );

      // Clear input field
      setMessage("");
    }
  };

  // Simple auto-response function
  const getAutoResponse = (msg) => {
    const responses = [
      "I understand. How can I help you further with that?",
      "Thank you for sharing that information. Is there anything specific you'd like to know?",
      "I've noted that down. Is there anything else you need assistance with?",
      "I'm processing your request. Could you provide more details?",
      "I'm here to help! Let me know if you need anything else.",
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  };

  return (
    <div className="flex flex-col lg:h-screen w-full">
      <Head>
        <title>Inbox | Chat Bot</title>
        <meta name="description" content="Chat bot inbox interface" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex h-full pb-24 lg:pb-0">
        {/* Left sidebar - hidden on mobile */}

        {/* Middle conversations list - Toggle visibility on mobile */}
        <div
          className={`w-full lg:w-[330px] bg-white border-r border-gray-200 flex flex-col ${
            showMobileChat ? "hidden lg:flex" : "flex"
          }`}
        >
          <div className="px-4 py-5 lg:py-[17.5px] text-xl text-black font-medium  border-b border-gray-400 lg:border-gray-200">
            Your Inbox
          </div>
          <div className="overflow-y-auto  scrollbar-hidden flex-1 mx-[3px] rounded-xl">
            {conversations.map((convo) => (
              <div
                key={convo.id}
                className={`cursor-pointer mx-4 rounded-xl my-2 hover:bg-[#E1ECFF] ${
                  activeConversation === convo.id ? "bg-[#E1ECFF] " : ""
                }`}
                // Modified click handler for mobile responsiveness
                onClick={() => handleConversationClick(convo.id)}
              >
                <div className="flex p-3  ">
                  <div className="flex-shrink-0 mr-3">
                    <div className="w-[40px] h-[40px] rounded-full bg-gray-300 overflow-hidden">
                      {/* In production, you would use real images */}
                      <div className="w-full h-full bg-gray-400 flex items-center justify-center text-white font-medium">
                        {convo.name.charAt(0)}
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between">
                      <p className="text-[16px] leading-6 font-medium text-[#000000] truncate">
                        {convo.name}
                      </p>
                      <p className="text-sm font-normal text-[#737373]">
                        {convo.time}
                      </p>
                    </div>
                    <p className="text-[16px] leading-6 font-normal text-[#404040] truncate pt-1">
                      {convo.message}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right chat area - Toggle visibility on mobile */}
        <div
          className={`flex-1 flex flex-col ${
            showMobileChat ? "flex" : "hidden lg:flex"
          }`}
        >
          {activeConvo && (
            <>
              {/* Header with name and buttons - Added back button for mobile */}
              <div className="bg-white border-b px-6 border-gray-200 text-xl text-black font-medium flex items-center justify-between py-3">
                {/* Mobile back button */}
                <div className="flex items-center">
                  <button
                    className="lg:hidden mr-2 text-blue-500"
                    onClick={handleBackToList}
                  >
                    <FiArrowLeft size={20} />
                  </button>
                  <h2 className="font-medium text-[14px] lg:text-[20px]">{activeConvo.name}</h2>
                </div>
                <div className="flex items-center space-x-4">
                  <button className="text-black bg-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-lg hover:text-gray-900">
                    <BsPin />
                  </button>
                  <button className="text-black bg-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-lg hover:text-gray-900">
                    <BsDownload />
                  </button>
                  <button className="text-black bg-[#F2F2F2] w-10 h-10 flex items-center justify-center rounded-lg hover:text-gray-900">
                    <HiOutlineTicket />
                  </button>
                </div>
              </div>

              {/* Chat messages area - Modified styling to match screenshot */}
              <div className="flex-1 overflow-y-auto bg-white p-4">
                {/* Today divider */}
                <div className="flex justify-center my-6">
                  <div className="text-[#787878] text-sm font-medium">
                    Today
                  </div>
                </div>

                {/* Messages - Restyled to match the screenshot */}
                {activeConvo.messages.map((msg, index) => (
                  <div key={msg.id} className="mb-4">
                    <div
                      className={`flex ${
                        msg.isUser ? "justify-start" : "justify-end"
                      }`}
                    >
                      {/* User avatar for user messages */}
                      {msg.isUser && (
                        <div className="mr-2 mt-1 ">
                          <div className="lg:w-[38px] w-[24px] h-[24px] lg:h-[38px] rounded-full bg-gray-300 overflow-hidden">
                            {/* User avatar */}
                            <img
                              src="/avatars/macdonald.jpg"
                              alt="User"
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.parentNode.innerHTML = `<div class="w-full h-full bg-gray-400 flex items-center justify-center text-white font-medium">${activeConvo.name.charAt(
                                  0
                                )}</div>`;
                              }}
                            />
                          </div>
                        </div>
                      )}
<div className={`flex flex-col ${msg.isUser ? "items-start" : "items-end"}`}>
    {/* Message bubble */}
    <div
                        className={`${
                          msg.isUser
                            ? "bg-[#F3F3F3] rounded-lg text-[#252525]"
                            : "bg-[#2472FC] text-white rounded-lg"
                        } p-3 max-w-md`}
                      >
                        <p>{msg.message}</p>
                    
                      </div>
                      <div
                          className={ `text-xs mt-1 text-[#787878] text-[12px] leading-4 font-normal `}
                        >
                        <span className="text-black text-[12px] leading-4 font-normal"> Seen</span>   {msg.time}
                        </div>
</div>
                    

                      {/* Assistant avatar for assistant messages */}
                      {!msg.isUser && (
                        <div className="ml-2 mt-1">
                          <div className=" flex items-center  lg:w-[38px] lg:h-[38px] w-[24px] h-[24px]">
                            <Image
                              src={logoLex}
                              alt="lex logo "
                              height={38}
                              width={38}
                            ></Image>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              <form onSubmit={handleSendMessage}>
                <div className="max-w-full mx-auto px-4">
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4">
                    <div className="min-h-24 mb-2">
                      <input
                        className="w-full h-full text-black pb-16 text-lg placeholder-gray-500 focus:outline-none resize-none"
                        value={message}
                        placeholder="Write a reply...."
                        onChange={(e) => setMessage(e.target.value)}
                      ></input>
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="text-gray-500 hover:text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </button>

                        <div className="w-px h-6 bg-gray-300"></div>

                        <button className="text-gray-500 hover:text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                            />
                          </svg>
                        </button>

                        <button className="text-gray-500 hover:text-gray-700 font-medium border border-gray-300 rounded-md px-2 py-0.5">
                          GIF
                        </button>

                        <button className="text-gray-500 hover:text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                        </button>

                        <button className="text-gray-500 hover:text-gray-700">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                            />
                          </svg>
                        </button>
                      </div>

                      <button className="rounded-full bg-gray-200 p-2 text-gray-600 hover:bg-gray-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 10l7-7m0 0l7 7m-7-7v18"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
