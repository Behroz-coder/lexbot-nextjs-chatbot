"use client"
import React, { useState, useRef, useEffect } from "react";
import Head from 'next/head';
import Image from 'next/image';
import logo from "../../public/Lexbot.svg";
import logoLex from "../../public/lexLogo.svg";
import { FaTrash } from "react-icons/fa";
import message_icon from "../../public/message-icon.svg"
import profile_icon from "../../public/profile-icon.svg"
import custom_icon from "../../public/custom-icon.svg"
import { Paperclip, Send } from "lucide-react";
import { X } from "lucide-react";
export default function ChatbotSettings() {
  const [theme, setTheme] = useState("light");
 const [messages, setMessages] = useState([
   {
     text: "Hi, Thank you for choosing us, what will you like us to do for you? Please explain clearly.",
     sender: "Chat bot",
     time: new Date().toLocaleString(),
   },
 ]);
  const [autoShowDelay, setAutoShowDelay] = useState(3);
const [suggestedMessages, setSuggestedMessages] = useState([
  "Hey, how are you doing?",
  "Hope you are fine?",
]);


//   const scrollToBottom = () => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   };

 
//   useEffect(() => {
//     scrollToBottom();
//   }, [suggestedMessages]);





const handleDeleteSuggestedMessage = (index) => {
  setSuggestedMessages((prevMessages) =>
    prevMessages.filter((_, i) => i !== index)
  );
};

const handleAddSuggestedMessage = () => {
  setSuggestedMessages([...suggestedMessages, " "]);
};


  const handleSuggestedMessageChange = (index, value) => {
    const updatedMessages = [...suggestedMessages];
    updatedMessages[index] = value;
    setSuggestedMessages(updatedMessages);
  };

 
  const [inputMessage, setInputMessage] = useState("");
  const [files, setFiles] = useState([]);
  const messagesEndRef = useRef(null);



  const handleSendMessage = (msg) => {
    const messageText = msg || inputMessage.trim();
    if (messageText === "") return;

    const newMessages = [
      ...messages,
      { text: messageText, sender: "You", time: new Date().toLocaleString() },
      {
        text: "Our bot will reply instantly",
        sender: "Chat bot",
        time: new Date().toLocaleString(),
      },
    ];

    setMessages(newMessages);
    setInputMessage("");
  };

  const handleFileUpload = (event) => {
    setFiles([...event.target.files]);
  };

  const [enabled, setEnabled] = useState(false);
  const [color, setColor] = useState("#000000");
  const [color2, setColor2] = useState("#2472FC");
  const [alignment, setAlignment] = useState("right");
  const [selected, setSelected] = useState("textured");
  const options = [
    {
      id: "chat_bubble",
      label: "Chat bubble",
      icon: message_icon,
    },
    { id: "textured", label: "Textured", icon: profile_icon },
    { id: "custom", label: "Custom", icon: custom_icon },
  ];
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);

  const [initialMessage1, setInitialMessage1] = useState(
    "Hi, Thank you for choosing us, what will you like us to do for you? please explain clearly"
  );

  const handleChange = (e) => {
    if (e.target.value.length <= 1000) {
      setInitialMessage1(e.target.value);
    }
  };
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <Head>
        <title>Lexbot Chatbot Settings</title>
        <meta
          name="description"
          content="Customize your chatbot settings with ease"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex items-start   gap-16 px-3 lg:px-4 mx-auto w-full ">
        {/* left side */}
        <div className="w-full lg:w-1/2 ">
          <div className="flex items-center mb-6">
            <Image
              src={logo}
              alt="Lexbot Logo"
              width={80}
              height={80}
              priority
            />
          </div>
          <div>
            <h1 className="font-semibold text-2xl mt-8">Settings</h1>
            <p className="my-2 text-[#737373]">
              Easily customize your chatbot for web integrations
            </p>
          </div>
          {/* Initial Message Section */}
          <section className="mb-6 mt-4">
            <h2 className="text-lg font-semibold mb-2">Initial Message</h2>
            <textarea
              value={initialMessage1}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 resize-none focus:ring-2 focus:ring-blue-500 transition"
              rows={3}
              placeholder="Type your message..."
            />
            {/* Character Counter with Limit */}
            <p className="text-sm mt-1 text-end">
              <span
                className={`font-semibold ${
                  initialMessage1.length >= 1000
                    ? "text-red-500"
                    : "text-gray-600"
                }`}
              >
                {initialMessage1.length}/1000
              </span>
            </p>
            <button
              onClick={handleAddSuggestedMessage}
              className=" text-blue-500  mt-2   transition"
            >
              + Add
            </button>
          </section>
          {/* Suggested Messages Section */}
          <section className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <h2 className="text-lg font-semibold">Suggested Messages</h2>
            </div>
            {suggestedMessages.map((message, index) => (
              <div key={index} className="flex items-center mb-2 relative">
                <input
                  type="text"
                  value={message}
                  onChange={(e) =>
                    handleSuggestedMessageChange(index, e.target.value)
                  }
                  className="w-full border rounded-lg p-2 pr-10"
                />
                <button
                  onClick={() => handleDeleteSuggestedMessage(index)}
                  className="absolute right-3 text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
            <button
              onClick={handleAddSuggestedMessage}
              className=" text-blue-500  mt-1   transition"
            >
              + Add
            </button>
            <div ref={messagesEndRef} />
          </section>

          {/* toggle button */}
          <section className="flex items-center justify-between space-x-3">
            <span className="text-lg text-black font-semibold">
              Collect User Emails
            </span>
            <button
              onClick={() => setEnabled(!enabled)}
              className={`relative w-10 h-5 rounded-full transition-colors duration-200 ease-in-out ${
                enabled ? "bg-gray-700" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out ${
                  enabled ? "translate-x-5" : "translate-x-0"
                }`}
              />
            </button>
          </section>
          {/* Theme Selection */}
          <section className="mb-6 mt-6">
            <h2 className="text-lg font-semibold mb-2">Theme</h2>
            <select
              value={theme}
              onChange={(e) => setTheme(e.target.value)}
              className="w-full border rounded-lg p-3"
            >
              <option value="light">Light</option>
              <option value="dark">Dark</option>
            </select>
          </section>
          {/* color picker */}
          <section className="flex items-center justify-between space-x-3">
            <span className="text-black text-lg font-semibold ">
              User Message Color
            </span>
            <div className="flex items-center gap-1">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 cursor-pointer"
              />
              <span className="text-sm font-mono p">{color}</span>
            </div>
          </section>
          {/* Chat Bubble Design */}
          <section className="my-6">
            <h3 className="text-lg font-semibold text-black mb-2">
              Chat bubble design
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {options.map((option) => (
                <div
                  key={option.id}
                  className={`flex flex-col items-center p-4 border rounded-lg cursor-pointer transition-all duration-300 ${
                    selected === option.id
                      ? "border-blue-500 shadow-md"
                      : "border-gray-300"
                  }`}
                  onClick={() => setSelected(option.id)}
                >
                  <input
                    type="radio"
                    name="chat_bubble_design"
                    checked={selected === option.id}
                    onChange={() => setSelected(option.id)}
                    className="mb-2"
                  />
                  <Image
                    src={option.icon}
                    alt={option.label}
                    width={40}
                    height={40}
                  />
                  <span className="mt-2 text-xs sm:text-sm md:text-lg text-gray-700">
                    {option.label}
                  </span>
                </div>
              ))}
            </div>
          </section>
          {/* chat button color */}
          <section className="flex items-center justify-between space-x-3">
            <span className="text-black text-lg font-semibold capitalize ">
              chat bubble button color
            </span>
            <div className="flex items-center gap-1">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-8 h-8 cursor-pointer"
              />
              <span className="text-sm font-mono p">{color2}</span>
            </div>
          </section>
          {/* Additional Settings */}
          <section className="mb-6">
            <h2 className="text-lg font-semibold mb-2 mt-4">
              Align Chat bubble
            </h2>
            <div className="flex space-x-4 justify-between w-full">
              <button
                onClick={() => setAlignment("left")}
                className={`px-6 py-2 w-full rounded-lg border transition-all duration-300 ${
                  alignment === "left"
                    ? "border-blue-500 shadow-md"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="additional_setting_design"
                  checked={alignment === "left"}
                  onChange={() => setAlignment("left")}
                  className="mr-2"
                />
                Left
              </button>
              <button
                onClick={() => setAlignment("right")}
                className={`px-6 w-full py-2 rounded-lg border transition-all duration-300 ${
                  alignment === "right"
                    ? "border-blue-500 shadow-md"
                    : "border-gray-300"
                }`}
              >
                <input
                  type="radio"
                  name="additional_setting_design"
                  checked={alignment === "right"}
                  onChange={() => setAlignment("right")}
                  className="mr-2"
                />
                Right
              </button>
            </div>
          </section>
          {/* Auto show */}
          <section>
            <h2 className="text-lg font-semibold mb-2 ">
              Auto show initial message pop-up after
            </h2>
            <select
              value={autoShowDelay}
              onChange={(e) => setAutoShowDelay(Number(e.target.value))}
              className="w-full border rounded-lg p-3"
            >
              {[1, 2, 3, 4, 5].map((seconds) => (
                <option key={seconds} value={seconds}>
                  {seconds} Seconds
                </option>
              ))}
            </select>
          </section>
          {/* Save Button */}
          <div className="flex justify-end mt-5">
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
              Save Settings
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
          className={`fixed inset-0 rounded-2xl border border-gray-300 bg-white dark:bg-gray-900 mx-4 mb-6 mt-1 lg:m-0 shadow-lg lg:relative lg:w-1/2 lg:flex lg:p-4  md:shadow-none transition-transform duration-300 ease-in-out ${
            isPreviewOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 lg:opacity-100 lg:translate-x-0"
          }`}
        >
          {/* Close Button for Mobile View */}
          {/* <button
            className="absolute top-4 right-4 md:hidden text-gray-600 dark:text-gray-300"
            onClick={() => setIsPreviewOpen(false)}
          >
            <X size={24} />
          </button> */}

          <div className="h-full lg:h-screen w-full flex flex-col">
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
      </main>
    </div>
  );
}