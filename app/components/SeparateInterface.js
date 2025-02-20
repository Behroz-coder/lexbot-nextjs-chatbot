// pages/SeparateInterface.js
import { useState, useRef, useEffect } from "react";
import logoLex from "../../public/lexLogo.svg";
import { Send, Paperclip, X, CalendarDays, FileText } from "lucide-react";
import Image from "next/image";

export default function SeparateInterface() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isMessageSent, setIsMessageSent] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const messagesEndRef = useRef(null);

  const [messages, setMessages] = useState([
    {
      sender: "Chat bot",
      text: "Hi, Thank you for choosing us, what will you like us to do for you? please explain clearly",
      time: "12:00 PM",
    },
    {
      sender: "Chat bot",
      text: "Lörem ipsum rehet eurobävning, susyheten backflyt. Muvisat soss. Stereoplastisk proredade att elektrotik i astronomi fast mande. Ålorade mura pred torggängare. Påvis suprase nyrest för nätdeklarant ker. Möpare krorat kvasisiv nid. Donebel intraskapet. Fessa reren teranera, tinat. Lakavis fande. Iledes smartball. Blingbling plafadäv rist obelt. Lysöhet lar deepfake. Lörem ipsum rehet eurobävning, susyheten backflyt. Muvisat soss. Stereoplastisk proredade att elektrotik i astronomi fast mande. Ålorade mura pred torggängare. Påvis suprase nyrest för nätdeklarant ker. Möpare krorat kvasisiv nid. Donebel intraskapet. Fessa reren teranera, tinat. Lakavis fande. Iledes smartball. Blingbling plafadäv rist obelt. Lysöhet lar deepfake. ",
      time: "12:01 PM",
    },
  ]);

  const suggestedMessages = ["Hey, how are you doing?", "Hope you are fine?"];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (suggestedMessage = "") => {
    const messageText = suggestedMessage || inputMessage;
    if (!messageText.trim()) return;

    const newMessage = {
      sender: "You",
      text: messageText,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, newMessage]);
    setInputMessage("");
    setIsMessageSent(true);
  };

//   const formatFileSize = (bytes) => {
//     if (bytes === 0) return "0 Bytes";
//     const k = 1024;
//     const sizes = ["Bytes", "KB", "MB", "GB"];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
//   };

  // Updated file upload handler
//   const handleFileUpload = (e) => {
//     const files = Array.from(e.target.files);

  
//     const fileMessages = files.map((file) => ({
//       sender: "You",
//       type: "file",
//       fileName: file.name,
//       fileSize: formatFileSize(file.size),
//       fileType: file.type,
//       time: new Date().toLocaleTimeString([], {
//         hour: "2-digit",
//         minute: "2-digit",
//       }),
//     }));

//     setMessages((prev) => [...prev, ...fileMessages]);
//     setIsMessageSent(true);
//   };

  // Updated message rendering to include file messages
//   const renderMessage = (msg, index) => {
//     if (msg.type === "file") {
//       return (
//         <div className={`flex justify-end`} key={index}>
//           <div className="max-w-[90%] lg:max-w-[90%] p-3 rounded-lg bg-[#2472FC] text-white">
//             <div className="flex items-center space-x-2">
//               <FileText size={20} />
//               <div>
//                 <p className="text-[16px] font-medium truncate">
//                   {msg.fileName}
//                 </p>
//                 <p className="text-sm opacity-75">{msg.fileSize}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     }

//     return (
//       <div
//         key={index}
//         className={`flex ${
//           msg.sender === "You" ? "justify-end" : "justify-start"
//         }`}
//       >
//         {msg.sender === "Chat bot" && (
//           <div className="flex items-center justify-center mr-2">
//             <Image src={logoLex} alt="lex logo " height={30} width={30} />
//           </div>
//         )}
//         <div
//           className={`max-w-[90%] lg:max-w-[90%] p-3 rounded-lg ${
//             msg.sender === "You"
//               ? "bg-[#2472FC] text-white"
//               : "bg-[#F3F3F3] text-black"
//           }`}
//         >
//           <p className="text-[16px] leading-[25px] font-normal">{msg.text}</p>
//         </div>
//       </div>
//     );
//   };

    const handleFileUpload = (e) => {
          console.log("Files selected:", e.target.files);
          
      }
  return (
    <div className="flex min-h-full">
      {/* Left section */}
      <div className="w-full lg:w-[50%] bg-white p-8">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-[40px] p-2 bg-red-500 rounded-xl flex items-center justify-center text-white text-sm">
            <CalendarDays />
          </div>
          <h1 className="text-xl font-bold">Caleicen</h1>
        </div>
        <h2 className="text-[24px] leading-[38px] w-full text-black font-medium">
          You've been invited to have a conversation with Chatbot
        </h2>
        {/* Get Started Button - Only visible on mobile */}
        <button
          onClick={() => setIsPreviewOpen(true)}
          className="mt-6 px-6 py-3 bg-[#2472FC] text-white rounded-lg w-full font-medium text-lg lg:hidden"
        >
          Get Started
        </button>
      </div>

      {/* Right section */}
      <div
        className={`fixed inset-0 border overflow-y-auto border-gray-300 bg-white dark:bg-gray-900 mx-0 mb-0 mt-0 lg:m-0 shadow-lg lg:relative lg:w-[70%] lg:flex lg:p-4 md:shadow-none transition-transform duration-300 ease-in-out ${
          isPreviewOpen
            ? "translate-x-0 opacity-100"
            : "translate-x-full opacity-0 lg:opacity-100 lg:translate-x-0"
        }`}
      >
        <div
          className={`h-full ${
            isMessageSent ? "lg:h-screen" : "lg:h-[600px]"
          } w-full flex flex-col`}
        >
          {/* Mobile Header - Only visible on mobile */}
          <div className="flex items-center justify-between p-4 border-b lg:hidden">
            <div className="flex items-center">
              <Image src={logoLex} alt="lex logo" height={30} width={30} />
            </div>
            <button
              className="text-gray-500"
              onClick={() => setIsPreviewOpen(false)}
            >
              <X size={24} />
            </button>
          </div>

          {/* <div className="flex-grow overflow-y-auto scrollbar-hidden p-4 space-y-3">
            {messages.map((msg, index) => renderMessage(msg, index))}
            <div ref={messagesEndRef} />
          </div> */}

          {/* Messages */}
          <div className="flex-grow overflow-y-auto scrollbar-hidden p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${
                  msg.sender === "You" ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender === "Chat bot" && (
                  <div className="flex items-center justify-center mr-2">
                    <Image
                      src={logoLex}
                      alt="lex logo "
                      height={30}
                      width={30}
                    />
                  </div>
                )}
                <div
                  className={`max-w-[90%] lg:max-w-[90%] p-3 rounded-lg ${
                    msg.sender === "You"
                      ? "bg-[#2472FC] text-white"
                      : "bg-[#F3F3F3] text-black"
                  }`}
                >
                  <p className="text-[16px] leading-[25px] font-normal">
                    {msg.text}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Suggested Messages */}
          <div className="flex space-x-2 p-8">
            {suggestedMessages.map((msg, index) => (
              <button
                key={index}
                onClick={() => handleSendMessage(msg)}
                className="bg-[#DBDBDB]/10 p-3 rounded-lg border-2 border-blue-500 text-sm lg:text-[16px] leading-6 hover:bg-gray-300 transition"
              >
                {msg}
              </button>
            ))}
          </div>

          {/* Input Area */}
          <div className="p-4 flex items-center border-t">
            <label className="cursor-pointer">
              <Paperclip className="text-gray-500 mr-2" />
              <input
                type="file"
                multiple
                onChange={handleFileUpload}
                className="hidden"
                accept="*/*" // Accepts all file types
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
}
