"use client";

import {  ArrowLeft } from "lucide-react";
import { useState, useEffect, memo } from "react";

// Sample initial data
const initialChats = [
  {
    id: 1,
    name: "Macdonald Anyanwu",
    messages: [
      {
        id: 1,
        text: "Hi! What can I help you with?",
        sender: "chatbot",
        timestamp: "21 Nov, 2024, 11:19 PM",
      },
      {
        id: 2,
        text: "Hey there",
        sender: "user",
        timestamp: "21 Nov, 2024, 11:19 PM",
      },
    ],
  },
  {
    id: 2,
    name: "John Doe",
    messages: [
      {
        id: 1,
        text: "Hello! Need help with my project",
        sender: "user",
        timestamp: "21 Nov, 2024, 11:00 PM",
      },
      {
        id: 2,
        text: "Sure, what kind of project are you working on?",
        sender: "chatbot",
        timestamp: "21 Nov, 2024, 11:01 PM",
      },
    ],
  },
];

export default function ChatInterface() {
  const [chats, setChats] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(null);
  const [message, setMessage] = useState("");
  const [isMobileView, setIsMobileView] = useState(false);

  useEffect(() => {
    if (!isMobileView && !activeChat) {
      setActiveChat(chats[0]);
    }
  }, [isMobileView, activeChat]); 

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
        setIsMobileView(isMobile);

          if (!isMobile && !activeChat) {
            setActiveChat(chats[0]);
          }

      if (!isMobile) {
        setActiveChat(chats[0]);
      } else {
        setActiveChat(null);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  //   const handleSendMessage = async () => {
  //     if (!message.trim() || !activeChat) return;

  //     const newMessage = {
  //       id: Date.now(),
  //       text: message,
  //       sender: "user",
  //       timestamp: new Date().toLocaleString(),
  //     };

  //     const updatedChat = {
  //       ...activeChat,
  //       messages: [...activeChat.messages, newMessage],
  //     };

  //     setChats((prevChats) =>
  //       prevChats.map((chat) => (chat.id === activeChat.id ? updatedChat : chat))
  //     );
  //     setActiveChat(updatedChat);
  //     setMessage("");

  //     try {
  //       // await sendMessageToAPI(newMessage);
  //     } catch (error) {
  //       console.error("Failed to send message:", error);
  //     }
  //   };

const MessageBubble = memo(({ message }) =>  {
    const isUser = message.sender === "user";

    return (
      <div className="mb-6">
        <div className="flex items-start gap-2">
          <div
            className={`flex flex-col ${isUser ? "ml-auto" : ""} max-w-[85%]`}
          >
            <div
              className={` py-6 px-4 ${
                isUser
                  ? "bg-[#2472FC] text-white rounded-lg rounded-br-none"
                  : "bg-[#EDEDED] text-black rounded-lg rounded-bl-none"
              }`}
            >
              <p className="text-base ">{message.text}</p>
            </div>

            <div className="flex items-center gap-2 mt-3">
              <span className="text-sm text-gray-900 ">
                {isUser ? "You" : "Chatbot"}
              </span>
              <span className="text-xs text-gray-500 ">
                {message.timestamp}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  });

  // Mobile view chat screen
  if (isMobileView && activeChat) {
    return (
      <div className="flex flex-col h-screen bg-white">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center">
            <button
              onClick={() => setActiveChat(null)}
              className="mr-4 text-blue-500"
            >
              <ArrowLeft />
            </button>
            <h3 className="font-medium text-lg">{activeChat.name}</h3>
          </div>
          <button className="text-red-500">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="3 6 5 6 21 6"></polyline>
              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
            </svg>
          </button>
        </div>

        {/* Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="text-center mb-6">
            <span className="text-sm text-gray-500">21 NOV, 2024</span>
          </div>
          {activeChat.messages.map((msg) => (
            <MessageBubble key={msg.id} message={msg} />
          ))}
        </div>

        {/* Message Input */}
        {/* <div className="p-4 border-t bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              onClick={handleSendMessage}
              className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Send
            </button>
          </div>
        </div> */}
      </div>
    );
  }

  // Desktop view or mobile chat list
  return (
    <div className="flex h-screen w-full bg-white">
      {/* Left Sidebar */}
      <div
        className={`${
          isMobileView ? "w-full" : "w-[40%]"
        } border-r border-gray-200 flex flex-col`}
      >
        {/* <div className="p-4 border-b bg-white">
          <h2 className="text-xl font-semibold">Messages</h2>
        </div> */}

        <div className="flex-1 overflow-y-auto">
          {chats.map((chat) => (
            <div
              key={chat.id}
              onClick={() => setActiveChat(chat)}
              className={`p-4 cursor-pointer hover:bg-gray-200 border-b-[.3px] border-b-gray-200 transition-colors ${
                activeChat?.id === chat.id ? "bg-[#F4F4F5]" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium text-lg text-black">{chat.name}</h3>
                <p className="text-[#A3A3A3]">1 minute ago</p>
              </div>
              <p className="text-base text-gray-500 mt-2 truncate">
                {chat.messages[chat.messages.length - 1]?.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Chat Area */}
      {!isMobileView && activeChat && (
        <div className="flex-1 flex flex-col">
          <div className="flex items-center justify-between p-4 border-b">
            <h3 className="font-semibold text-black text-lg">
              {activeChat.name}
            </h3>
            <button className="text-red-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="3 6 5 6 21 6"></polyline>
                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
              </svg>
            </button>
          </div>

          <div className="flex-1 p-6 overflow-y-auto">
            <div className="text-center mb-6">
              <span className="text-sm text-gray-500">21 NOV, 2024</span>
            </div>
            {activeChat.messages.map((msg) => (
              <MessageBubble key={msg.id} message={msg} />
            ))}
          </div>

          {/* <div className="p-4 border-t bg-white">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleSendMessage}
                className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Send
              </button>
            </div>
          </div> */}
        </div>
      )}
    </div>
  );
}
