//ShareInterface.js
"use client";
import React, { useState } from "react";
import { Check, Copy } from "lucide-react";
const ShareInterface = () => {
  const [copied, setCopied] = useState(false);
  const interfaceLink = "https://www.chatbase.com/separate-interface-login";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(interfaceLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); 
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <div className="max-w-2xl mx-auto  px-4 py-8 md:py-12">
      <section className="space-y-6">
        <h1 className="text-xl font-bold text-center text-gray-800 md:text-2xl">
          Share separate interface
        </h1>

        <p className="text-center text-base text-gray-600">
          Copy this link to add the chatbot on your website
        </p>

        <div className="space-y-4">
          {/* Link display area */}
          <div className="bg-[#F4F4F5] p-4 rounded-lg text-center mx-auto lg:w-[80%]">
            <p className="text-gray-800 break-all text-sm md:text-base">
              {interfaceLink}
            </p>
          </div>

          {/* Copy button */}
          <button
            onClick={handleCopy}
            className="w-full flex items-center justify-center gap-2 bg-white border border-blue-500 text-center mx-auto lg:w-[80%] text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            aria-label="Copy interface link"
          >
            {copied ? (
              <>
                <Check size={20} className="text-green-500" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy size={20} />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </section>
    </div>
  );
};

export default ShareInterface;
