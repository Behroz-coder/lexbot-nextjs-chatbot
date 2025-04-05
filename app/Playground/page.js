"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import logoLex from "../../public/lexLogo.svg";
import { X } from "lucide-react";
import { Paperclip, Send } from "lucide-react";
import up_arrow_icon from "../../public/up_arrow.svg";
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
  const [text, setText] = useState("");

  const handleChange = (e) => {
    if (e.target.value.length <= 1000) {
      setText(e.target.value);
    }
  };

  return (
    // Yahan main container ki height ko set kia hai responsive tareeqe se
    // Laptop view par left side scroll hoga, right side fixed rahega
    <div className="flex items-start lg:h-screen bg-white gap-12 px-3 lg:px-6 mx-auto w-full overflow-hidden">
      {/* left side - is ko scrollable banaya hai */}
      {/* Yahan overflow-y-auto add kia hai taky sirf left side scroll ho */}
      <div className="w-full lg:w-1/2 lg:border-r-[1px] border-gray-300 lg:pr-6 pb-24 overflow-y-auto scrollbar-hidden h-screen">
        {/* Creativity Section */}
        <div className="my-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-lg font-medium text-black">Creativity</span>
            <span className="text-lg font-semibold text-gray-800">
              {creativity}
            </span>
          </div>

          <input
            type="range"
            min="0"
            max="100"
            value={creativity}
            onChange={handleSliderChange}
            style={{
              background: `linear-gradient(to right, #2472FC 0%, #2472FC ${creativity}%, #E5E7EB ${creativity}%, #E5E7EB 100%)`,
            }}
            className="w-full h-1.5 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between mt-1">
            <span className="text-sm text-gray-500">Specific</span>
            <span className="text-sm text-gray-500">Creative</span>
          </div>
        </div>

        {/* Functions Section */}
        <div className="mb-6">
          <h3 className="text-lg font-medium text-black mb-2">Functions</h3>
          <div className="">
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
            value={text}
            onChange={handleChange}
          ></textarea>

          {/* Character Counter with Limit */}
          <p className="text-sm mt-1 text-end">
            <span
              className={`font-semibold ${
                text.length >= 1000 ? "text-red-500" : "text-gray-600"
              }`}
            >
              {text.length}/1000
            </span>
          </p>
        </div>

        {/* Save Button */}
        <div className="flex  mt-5 w-full">
          <button className="bg-blue-600 text-white w-full px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Save to Chatbot
          </button>
        </div>

        <button
          className="mt-4 p-2 w-full bg-[#2472FC]/10 border border-[#2472FC] text-[#2472FC] rounded-md lg:hidden"
          onClick={() => setIsPreviewOpen(true)}
        >
          Preview
        </button>
      </div>

      {/* right side - is ko fixed rakha hai */}
      {/* Yahan overflow-hidden add kia hai taky right side fixed rahe, lekin uske andar ka content scroll ho */}
            {/* NEW UPDATE: Right side (preview) - fixed position on large screens */}
            <div className="hidden lg:block lg:w-1/2 lg:fixed lg:right-0 mr-2 xl:mr-12 lg:top-[110px] lg:bottom-4 lg:max-w-[33%] 2xl:max-w-[35%]">
  <div className="h-full w-full rounded-2xl border border-gray-300 bg-white overflow-hidden flex flex-col">
          <div className="flex items-center p-4 border-b">
      <Image
        src={logoLex}
        alt="lex logo"
        height={38}
        width={38}
      />
            <div className="ml-3">
        <h2 className="font-medium text-lg">Lex</h2>
        <p className="text-sm font-normal text-[#737373]">
                Our bot will reply instantly
              </p>
            </div>
          </div>

        <div className="flex-grow overflow-auto p-4 space-y-4">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex min-w-[100%] ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              } mb-4`}
            >
              <div className="flex items-start">
                {msg.sender === "Chat bot" && (
                  <div className="flex-shrink-0 mr-2 mt-1">
                    <Image
                      src={logoLex}
                      alt="lex logo"
                      height={38}
                      width={38}
                    />
                  </div>
                )}
                <div className="flex flex-col">
                  <div
                    className={`p-3  max-w-[100%] rounded-lg ${
                      msg.sender === "You"
                        ? "bg-[#2472FC] text-white"
                        : "bg-[#F3F3F3] text-black"
                    } break-words`}
                    style={{ maxWidth: "380px" }}
                  >
                    <p className="text-[16px] leading-[25px] font-normal">
                      {msg.text}
                    </p>
                  </div>
                  <div className={`flex mt-1 text-xs ${
                    msg.sender === "You" ? "justify-end" : "justify-start"
                  }`}>
                    <p className="text-black">{msg.sender}</p>
                    <span className="text-[#787878] pl-2">{msg.time}</span>
                  </div>
                </div>
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
                className="bg-[#DBDBDB]/40 px-4 py-3 rounded-lg border border-gray-300 text-sm lg:text-[16px] leading-6 hover:bg-gray-300 transition"
              >
                {msg}
              </button>
            ))}
          </div>

    <div className="p-4 flex items-center border-t">

      <div className="flex-grow relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Write a reply..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="w-full pr-24 pl-4 py-[14px] bg-white placeholder:text-[#737373] border rounded-[32px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <label className="cursor-pointer">
              <Paperclip size={20} className="text-black" />
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={() => handleSendMessage()}
              className="transition"
            >
              <Image src={up_arrow_icon} alt="up arrow" height={28} width={28} />
            </button>
          </div>
        </div>
      </div>
 
      
    </div>
  </div>
</div>

        {/* Mobile preview (unchanged) */}
        <div
          className={`fixed inset-0 bg-white shadow-xl lg:hidden  m-4 rounded-2xl z-50 transition-transform duration-300 ease-in-out ${
            isPreviewOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0"
          }`}
        >
          <div className="h-full w-full flex flex-col">
            <div className="flex items-center p-4 border-b">
              <Image
                src={logoLex}
                alt="lex logo "
                height={38}
                width={38}
              ></Image>
              <div className="ml-3">
                <h2 className="font-medium text-lg">Lex</h2>
                <p className="text-sm font-normal   text-[#737373]">
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

            <div className="flex-grow overflow-auto p-4 space-y-4">
      {messages.map((msg, index) => (
        <div
          key={index}
          className={`flex   ${
            msg.sender === "You" ? "justify-end" : "justify-start"
          } mb-4`}
        >
          <div className="flex items-start">
            {msg.sender === "Chat bot" && (
              <div className="flex-shrink-0 mr-2 mt-1">
                <Image
                  src={logoLex}
                  alt="lex logo"
                  height={38}
                  width={38}
                />
              </div>
            )}
            <div className="flex flex-col">
              <div
                className={`p-3  max-w-[100%] rounded-lg  ${
                  msg.sender === "You"
                    ? "bg-[#2472FC] max-w-[300px] text-white"
                    : "bg-[#F3F3F3] text-black"
                } break-words`}
              
              >
                <p className="text-[16px] leading-[25px] font-normal">
                  {msg.text}
                </p>
              </div>
              <div className={`flex mt-1 text-xs ${
                msg.sender === "You" ? "justify-end" : "justify-start"
              }`}>
                <p className="text-black">{msg.sender}</p>
                <span className="text-[#787878] pl-2">{msg.time}</span>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>

            <div className="flex justify-center space-x-2 p-2">
              {suggestedMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleSendMessage(msg)}
                  className="bg-[#DBDBDB]/40 px-2 py-3 rounded-lg border border-gray-300 text-sm lg:text-[16px] leading-6 hover:bg-gray-300 transition"
                >
                  {msg}
                </button>
              ))}
            </div>

            <div className="p-4 flex items-center border-t">
          <div className="flex-grow relative">
        <div className="relative">
          <input
            type="text"
            placeholder="Write a reply..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            className="w-full pr-24 pl-4 py-[14px] bg-white placeholder:text-[#737373] border rounded-[32px] focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center space-x-2">
            <label className="cursor-pointer">
              <Paperclip size={20} className="text-black" />
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
            <button
              onClick={() => handleSendMessage()}
              className="transition"
            >
              <Image src={up_arrow_icon} alt="up arrow" height={28} width={28} />
            </button>
          </div>
        </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playground;
