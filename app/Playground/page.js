'use client'
import Image from "next/image";
import React, { useState, useRef } from "react";
import logoLex from "../../public/lexLogo.svg";
import { X } from "lucide-react";
import { Paperclip, Send } from "lucide-react";
const Playground = () => {
  const [creativity, setCreativity] = useState(0);
    const [isPreviewOpen, setIsPreviewOpen] = useState(false);
    const [isMessageSent, setIsMessageSent] = useState(false);
     const [messages, setMessages] = useState([
       {
         text: "Hi, Thank you for choosing us, what will you like us to do for you? Please explain clearly.",
         sender: "Chat bot",
         time: new Date().toLocaleString(),
       },
     ]);
    const messagesEndRef = useRef(null);
    const [suggestedMessages, setSuggestedMessages] = useState([
      "Hey, how are you doing?",
      "Hope you are fine?",
    ]);
    const [inputMessage, setInputMessage] = useState("");

      const handleFileUpload = (event) => {
        setFiles([...event.target.files]);
      };

      const handleSendMessage = (msg) => {
        const messageText = msg || inputMessage.trim();
        if (messageText === "") return;

        const newMessages = [
          ...messages,
          {
            text: messageText,
            sender: "You",
            time: new Date().toLocaleString(),
          },
          {
            text: "Our bot will reply instantly",
            sender: "Chat bot",
            time: new Date().toLocaleString(),
          },
        ];
        setIsMessageSent(true);
        setMessages(newMessages);
        setInputMessage("");
      };
  // Handle slider change
  const handleSliderChange = (e) => {
    setCreativity(e.target.value);
  };

    return (
      <div className="flex items-start  overflow-y-auto lg:min-h-screen bg-white  gap-20 px-3 lg:px-4 mx-auto w-full ">
        {/* left side */}
        <div className="w-full lg:w-1/2 lg:border-r-2 border-gray-300 lg:pr-6 pb-24 min-h-screen   ">
          {/* Creativity Section */}
          <div className="my-6 ">
            <div className="flex justify-between items-center mb-2">
              <span className="text-lg font-medium text-black">Creativity</span>
              <span className="text-lg font-semibold text-gray-800">{creativity}</span>
            </div>
            {/* Custom styled range input */}
            <input
              type="range"
              min="0"
              max="100"
              value={creativity}
              onChange={handleSliderChange}
              className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between mt-1">
              <span className="text-sm text-gray-500">Specific</span>
              <span className="text-sm text-gray-500">Creative</span>
            </div>
          </div>

          {/* Functions Section */}
          <div className="mb-6">
            <h3 className="text-lg font-medium text-black mb-2">Functions</h3>
            <div className="border border-dashed border-gray-300 rounded-lg p-4">
              <p className="text-lg text-gray-500 mb-3">No functions enabled</p>
              <button className="w-full py-3 px-4 border border-gray-300 rounded-md text-lg font-medium text-gray-900 hover:bg-gray-50 flex items-center justify-center gap-2">
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <line x1="12" y1="5" x2="12" y2="19"></line>
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                </svg>
                Add Function
              </button>
            </div>
          </div>

          {/* System Prompt Section */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-black mb-2">
              System Prompt
            </label>
            <div className="relative">
              <select className="w-full  p-4 border border-gray-300 rounded-md outline-none text-lg text-gray-800 appearance-none bg-white">
                <option value="" disabled selected>
                  Select Template
                </option>
                <option value="default">Default Template</option>
                <option value="custom">Custom Template</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-400"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Instruction Section */}
          <div className="mb-6">
            <label className="block text-lg font-medium text-black mb-2">
              Instruction
            </label>
            <textarea
              className="w-full p-2 border border-gray-300 outline-none rounded-md text-sm text-gray-700 min-h-[100px] resize-none"
              placeholder="Enter your instruction here..."
            ></textarea>
          </div>

          {/* Save Button */}
          <div className="flex  mt-5 w-full">
            <button className="bg-blue-600 text-white w-full px-6 py-3 rounded-lg hover:bg-blue-700 transition">
              Save to chatbot
            </button>
          </div>

          <button
            className="mt-4 p-2 w-full bg-[#2472FC]/10 border border-[#2472FC] text-[#2472FC] rounded-md lg:hidden"
            onClick={() => setIsPreviewOpen(true)}
          >
            Preview
          </button>
        </div>

        {/* right side */}
        <div
          className={`fixed inset-0   rounded-2xl border border-gray-300 bg-white dark:bg-gray-900 mx-4 mb-6 mt-2 lg:mt-4 lg:mb-[70px] shadow-lg lg:relative lg:w-1/2 lg:flex lg:p-4  md:shadow-none transition-transform duration-300 ease-in-out ${
            isPreviewOpen
              ? "translate-x-0  opacity-100 "
              : "translate-x-full opacity-0   lg:opacity-100 lg:translate-x-0"
          }`}
        >
          {/* Close Button for Mobile View */}
          {/* <button
            className="absolute top-4 right-4 md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsPreviewOpen(false)}
          >
            <X size={24} />
          </button> */}

          <div
            className={`h-full    ${
              isMessageSent ? "lg:h-screen" : "lg:h-[500px]"
            } w-full flex flex-col`}
          >
            <div className="flex items-center p-4 border-b">
              <Image
                src={logoLex}
                alt="lex logo "
                height={40}
                width={40}
              ></Image>
              <div className="ml-3">
                <h2 className="font-bold text-lg">Lex</h2>
                <p className="text-sm text-gray-500">
                  Our bot will reply instantly
                </p>
              </div>
              <button
                className="ml-auto text-gray-500"
                onClick={() => setIsPreviewOpen(false)}
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex-grow overflow-y-auto p-4 space-y-3">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${
                    msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}
                >
                  {msg.sender === "Chat bot" && (
                    <div className=" flex items-center justify-center mr-2">
                      <Image
                        src={logoLex}
                        alt="lex logo "
                        height={30}
                        width={30}
                      ></Image>
                    </div>
                  )}
                  <div
                    className={`max-w-[90%] lg:max-w-[100%] p-3 rounded-lg ${
                      msg.sender === "You"
                        ? "bg-[#2472FC] text-white"
                        : "bg-[#F3F3F3] text-black"
                    }`}
                  >
                    <p className="text-lg">{msg.text}</p>
                    <p className="text-xs text-gray-600 mt-1">
                      {msg.sender} {msg.time}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <div className="flex space-x-2 p-4">
              {suggestedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(msg)}
                  className="bg-[#DBDBDB] px-4 py-3 rounded-lg border border-gray-400 text-sm lg:text-lg hover:bg-gray-300 transition"
                >
                  {msg}
                </button>
              ))}
            </div>

            <div className="p-4 flex items-center border-t">
              <label className="cursor-pointer">
                <Paperclip className="text-gray-500 mr-2" />
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
              <div className="flex-grow relative">
                <input
                  type="text"
                  placeholder="Write a reply..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  className="w-full pr-10 pl-4 py-2 border rounded-full focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <button
                onClick={() => handleSendMessage()}
                className="ml-2 bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center hover:bg-blue-600 transition"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Playground;
