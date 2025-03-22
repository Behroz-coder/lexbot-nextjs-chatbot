"use client";
import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import logo from "../../public/Lexbot.svg";
import logoLex from "../../public/lexLogo.svg";
import { FaTrash } from "react-icons/fa";
import message_icon from "../../public/message-icon.svg";
import profile_icon from "../../public/profile-icon.svg";
import custom_icon from "../../public/custom-icon.svg";
import { Paperclip, Send } from "lucide-react";
import { X } from "lucide-react";
import {
  MessageSquare,
  MessageCircle,
  User,
  MessagesSquare,
  MoreHorizontal,
  MenuSquare,
} from "lucide-react";
import { SketchPicker } from "react-color";
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
    setIsMessageSent(true);
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
  // const [selected, setSelected] = useState("textured");
  const [isMessageSent, setIsMessageSent] = useState(false);

  // changes here

  const [showCustomizer, setShowCustomizer] = useState(false);
  const [selected, setSelected] = useState("chat_bubble");
  const [selectedIcon, setSelectedIcon] = useState("message1");
  const [selectedColor, setSelectedColor] = useState("#2472FC");
  const [texture, setTexture] = useState("flat");
  const [customIcon, setCustomIcon] = useState(<MessageSquare size={24} />);
  const [customLabel, setCustomlabel] = useState("Custom");
  const [customColor, setCustomColor] = useState("#2472FC");
  const [showColorPicker, setShowColorPicker] = useState(false);

  // Chat bubble options
  const options = [
    {
      id: "chat_bubble",
      label: "Chat bubble",
      icon: (
        <Image
          src={message_icon}
          alt="Chat Bubble"
          className="w-auto"
          width={40}
          height={40}
        />
      ),
    },
    {
      id: "textured",
      label: "Textured",
      icon: <Image src={profile_icon} alt="Textured" width={40} height={40} />,
    },
    {
      id: "custom",
      label: "Custom",
      customElement: (
        <>
          <div
            className="w-[40px] h-[40px] rounded-full flex items-center justify-center"
            style={{
              background: customColor,
              boxShadow:
                texture === "textured"
                  ? "inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                  : "none",
            }}
          >
            <div className="text-white">{customIcon}</div>
          </div>
          <div className="text-gray-700 mt-2 text-sm">{customLabel}</div>
        </>
      ),
    },
  ];

  // Icon options
  const iconOptions = [
    { id: "message1", icon: <MessageSquare size={24} /> },
    { id: "message2", icon: <MessageCircle size={24} /> },
    { id: "user", icon: <User size={24} /> },
    { id: "messages", icon: <MessagesSquare size={24} /> },
    { id: "more", icon: <MoreHorizontal size={24} /> },
    { id: "menu", icon: <MenuSquare size={24} /> },
  ];

  // Color options
  const colorOptions = [
    { id: "blue", color: "#2472FC" },
    { id: "black", color: "#000000" },
    { id: "purple", color: "#800080" },
    { id: "green", color: "#008000" },
    { id: "gradient", color: "linear-gradient(135deg, #8B5CF6, #D8B4FE)" },
  ];

  // Handle icon selection
  const handleIconSelect = (icon, iconComponent) => {
    setSelectedIcon(icon);
    setCustomIcon(iconComponent);
  };

  // Handle color selection
  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setCustomColor(color);
  };

  // Handle custom color input
  // Updated custom color handler for SketchPicker
  const handleCustomColor = (color) => {
    // Update color on complete selection from SketchPicker
    handleColorSelect(color.hex);
    setShowColorPicker(false);
  };
  // Handle option selection
  const handleOptionSelect = (optionId) => {
    setSelected(optionId);
    if (optionId === "custom") {
      setShowCustomizer(true);
    } else if (optionId === "chat_bubble") {
      setTexture("flat");
    } else if (optionId === "textured") {
      setTexture("textured");
    }
  };

  const runtimeSize = 60;
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
    <div className="min-h-screen bg-white px-4 lg:px-6">
      <Head>
        <title>Lexbot Chatbot Settings</title>
        <meta
          name="description"
          content="Customize your chatbot settings with ease"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* NEW UPDATE: Changed the structure to allow scrolling only on the left side */}
      <main className="flex items-start gap-16 px-3 lg:px-0 mx-auto w-full">
        {/* Left side - Settings (scrollable) */}
        <div className="w-full lg:w-1/2 h-screen scrollbar-hidden overflow-y-auto pr-4">
          {/* <div className="flex items-center mb-6">
            <Image
              src={logo}
              alt="Lexbot Logo"
              width={80}
              height={80}
              priority
            />
          </div> */}
          <div>
            <h1 className="font-medium text-lg lg:text-2xl mt-1">Settings</h1>
            <p className="my-2 text-[#737373]">
              Easily customize your chatbot for web integrations
            </p>
          </div>
          {/* Initial Message Section */}
          <section className="mb-6 mt-4">
            <h2 className="text-lg font-medium mb-2">Initial Message</h2>
            <textarea
              value={initialMessage1}
              onChange={handleChange}
              className="w-full border rounded-lg p-3 text-[#252525] resize-none  transition"
              rows={3}
              placeholder="Type your message..."
            />
            {/* Character Counter with Limit */}
            <p className="text-sm mt-1 text-end">
              <span
                className={`font-medium ${
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
              <h2 className="text-lg font-medium">Suggested Messages</h2>
            </div>
            {suggestedMessages.map((message, index) => (
              <div
                key={index}
                className="flex items-center text-[#252525] mb-2 relative"
              >
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
            <span className="text-lg text-black font-medium">
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
            <h2 className="text-lg font-medium mb-2">Theme</h2>
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
          <section className="flex items-center justify-between space-x-3 mb-4">
            <span className="text-black text-lg font-medium ">
              User Message Color
            </span>
            <div className="flex items-center  gap-1">
              <input
                type="color"
                value={color}
                onChange={(e) => setColor(e.target.value)}
                className="w-8 h-8 cursor-pointer rounded-2xl"
              />
              <span className="text-sm font-mono p">{color}</span>
            </div>
          </section>
         
          <hr />
          {/* Chat Bubble Design Selection Section */}
          <section className="my-6 ">
            <h3 className="text-lg font-medium text-black mb-2">
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
                  onClick={() => handleOptionSelect(option.id)}
                >
                  <input
                    type="radio"
                    name="chat_bubble_design"
                    checked={selected === option.id}
                    onChange={() => handleOptionSelect(option.id)}
                    className="mb-2"
                  />
                  {option.customElement ? (
                    option.customElement
                  ) : (
                    <>
                      <div className="text-gray-700">{option.icon}</div>
                      <span className="mt-1 lg:mt-2 text-sm text-gray-700">
                        {option.label}
                      </span>
                    </>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* Customizer Popup */}
          {showCustomizer && (
            <div className="fixed right-1 top-0 sm:top-4 w-full sm:w-auto  sm:inset-0 lg:bg-black/50 flex items-center justify-center lg:p-4 z-50">
              <div className="bg-white rounded-lg max-h-[540px] shadow-xl max-w-5xl w-full lg:overflow-hidden">
                <div className="flex lg:flex-row flex-col bg-white">
                  {/* Preview Section */}
                  <div className="lg:w-1/2 bg-gray-50 p-8 border-r flex flex-col items-center justify-center">
                    <div
                      className="w-32 h-32 rounded-full flex items-center justify-center"
                      style={{
                        background: selectedColor,
                        boxShadow:
                          texture === "textured"
                            ? "0 4px 6px rgba(70, 80, 70, 0.7), inset 0 1px 0 rgba(255, 255, 255, 0.1)"
                            : "none",
                      }}
                    >
                      <div className="text-white ">
                        {" "}
                        {React.cloneElement(customIcon, { size: runtimeSize })}
                      </div>
                    </div>
                    {/* <div className="mt-4 text-center">
                      <p className="text-sm text-gray-600">
                        Texture: {texture}
                      </p>
                    </div> */}
                  </div>

                  {/* Customization Section */}
                  <div className="lg:w-1/2 p-4 lg:p-8">
                    <h2 className="text-xl font-semibold mb-2">
                      Customise your Chat bubble
                    </h2>

                    {/* Icons Section */}
                    <div className="space-y-4 mb-3">
                      <h3 className="text-lg font-medium text-gray-900">
                        Icons
                      </h3>
                      <div className="grid grid-cols-6 gap-4">
                        {iconOptions.map((icon) => (
                          <button
                            key={icon.id}
                            onClick={() => handleIconSelect(icon.id, icon.icon)}
                            className={`px-2 py-3 border rounded-md flex items-center justify-center transition-all ${
                              selectedIcon === icon.id
                                ? "border-blue-500 bg-blue-50"
                                : "border-gray-200 hover:border-blue-200"
                            }`}
                          >
                            <div className="text-gray-900">{icon.icon}</div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Colors Section */}
                    <div className="space-y-4 mb-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Chat Bubble Button Color
                      </h3>
                      <div className="grid grid-cols-6 gap-4">
                        {colorOptions.map((color) => (
                          <button
                            key={color.id}
                            onClick={() => handleColorSelect(color.color)}
                            className={`w-12 h-12 rounded-full transition-all ${
                              selectedColor === color.color
                                ? "ring-2 ring-blue-500 ring-offset-2"
                                : ""
                            }`}
                            style={{ background: color.color }}
                          />
                        ))}
                        <div className="relative">
                          {/* Pencil icon button to toggle professional color picker */}
                          <button
                            onClick={() => setShowColorPicker(!showColorPicker)}
                            className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center"
                          >
                            <span className="text-xl">✏️</span>
                          </button>
                          {showColorPicker && (
                            <div className="absolute right-16 -top-[120%] mt-2 z-50">
                              {/* Professional color picker (SketchPicker) replaces native color input */}
                              <SketchPicker
                                color={selectedColor}
                                onChangeComplete={handleCustomColor}
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                    {/* Texture Section */}
                    <div className="space-y-4 mb-4">
                      <h3 className="text-lg font-medium text-gray-900">
                        Texture
                      </h3>
                      <div className="grid grid-cols-2 gap-4">
                        <button
                          onClick={() => setTexture("flat")}
                          className={`p-3 rounded-xl text-center transition-all ${
                            texture === "flat"
                              ? "bg-blue-50 border-blue-500 border"
                              : "border border-gray-200"
                          }`}
                        >
                          Flat
                        </button>
                        <button
                          onClick={() => setTexture("textured")}
                          className={`p-3 rounded-xl text-center transition-all ${
                            texture === "textured"
                              ? "bg-blue-50 border-blue-500 border"
                              : "border border-gray-200"
                          }`}
                        >
                          Textured
                        </button>
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="space-y-3">
                      <button
                        onClick={() => setShowCustomizer(false)}
                        className="w-full py-3 bg-[#2472FC] text-white rounded-lg hover:bg-blue-600 transition-colors"
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setShowCustomizer(false)}
                        className="w-full py-3 bg-[#DBDBDB]/40 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* chat button color */}
          <section className="flex items-center justify-between space-x-3">
            <span className="text-black text-lg font-medium capitalize ">
              chat bubble button color
            </span>
            <div className="flex items-center gap-1">
              <input
                type="color"
                value={color2}
                onChange={(e) => setColor2(e.target.value)}
                className="w-8 h-8 cursor-pointer rounded-2xl"
              />
              <span className="text-sm font-mono p">{color2}</span>
            </div>
          </section>
          {/* Additional Settings */}
          <section className="mb-6">
            <h2 className="text-lg font-medium mb-2 mt-4">
              Align Chat bubble
            </h2>
            <div className="flex space-x-4 justify-between w-full">
              <button
                onClick={() => setAlignment("left")}
                className={`px-6 py-2 w-full rounded-xl border transition-all duration-300 ${
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
                className={`px-6 w-full py-2 rounded-xl border transition-all duration-300 ${
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
            <h2 className="text-lg font-medium mb-2 ">
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

          {/* Added some extra padding at the bottom for better scrolling */}
          <div className="pb-8"></div>
        </div>

        {/* NEW UPDATE: Right side (preview) - fixed position on large screens */}
        <div className="hidden lg:block lg:w-1/2 lg:fixed lg:right-0 mr-2 xl:mr-12 lg:top-40 lg:bottom-4 lg:max-w-[35%]">
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
