"use client";
import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

// Third-party packages
import ReactPlayer from "react-player";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

// Example platform logos (replace with your actual images)
import ShopifyLogo from "../../public/image 9.png";
import FramerLogo from "../../public/image 10.png";
import WixLogo from "../../public/image 11.png";
import SquarespaceLogo from "../../public/image 12.png";
import WordpressLogo from "../../public/image 13.png";
import WebflowLogo from "../../public/image 14.png";

// Example chat preview image (replace with your actual image)
import ChatPreview from "../../public/image 21.png";
import { Copy } from "lucide-react";

export default function WebIntegrationPage() {
  // State for copy button
  const [copied, setCopied] = useState(false);

  // Sample code snippet (aap isko dynamically pass kara sakte hain)
  const codeSnippet = `
import fetch from 'node-fetch';
import createHttpsProxyAgent from 'https-proxy-agent';

const username = 'USER';
const password = 'PASS';
const proxy = 'us1.proxmy.io:1111';

const agent = createHttpsProxyAgent(
  \`http://\${username}:\${password}@\${proxy}\`
);

const response = await fetch('https://google.com', {
  method: 'get',
  agent,
});

console.log(await response.text());
`;

  // Cards data array jisko map ki madad se render karenge
  const cardsData = [
    {
      logo: ShopifyLogo,
      alt: "Shopify Logo",
      title: "Shopify",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#F4F9F1]",
    },
    {
      logo: FramerLogo,
      alt: "Framer Logo",
      title: "Framer",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#EBF2FF]",
    },
    {
      logo: WixLogo,
      alt: "Wix Logo",
      title: "Wix",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#EBF2FF]",
    },
    {
      logo: SquarespaceLogo,
      alt: "Squarespace Logo",
      title: "Squarespace",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#FFF6EB]",
    },
    {
      logo: WordpressLogo,
      alt: "Wordpress Logo",
      title: "Wordpress",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#F5F5F5]",
    },
    {
      logo: WebflowLogo,
      alt: "Webflow Logo",
      title: "Webflow",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam ultrices, lectus eget congue aliquet, nunc nisi dapibus augue, at vestibulum nulla nunc non elit.",
      bgColor: "bg-[#F5F5F5]",
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(codeSnippet);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000); // 2 second baad "Copied!" reset
    } catch (error) {
      console.error("Copy failed:", error);
    }
  };

  return (
    <>
      {/* SEO Optimization ke liye Head component */}
      <Head>
        <title>Web Integration - Publish</title>
        <meta
          name="description"
          content="Integrate your chatbot with various platforms seamlessly."
        />
        <meta name="robots" content="index, follow" />
      </Head>

      {/* Main container */}
      <div className="min-h-screen w-full flex flex-col items-center bg-white">
        {/* Top Section: 6 Cards (3x2 grid) */}
        <section className=" w-full px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {cardsData.map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-6 shadow-md transition-shadow"
              >
                <div
                  className={`flex items-center justify-center p-4 rounded-lg mb-3 ${card.bgColor}`}
                >
                  <div className="relative flex items-center justify-center">
                    <Image
                      src={card.logo}
                      alt={card.alt}
                      width={140}
                      height={80}
                      loading="lazy"
                    />
                  </div>
                </div>
                <h3 className="text-lg font-semibold my-2">{card.title}</h3>
                <p className="text-sm text-gray-500 mb-4 text-left min-h-[60px]">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </section>
        <h3 className="text-sm lg:text-2xl my-2">Guide for Html</h3>
        {/* Middle Section: Video Player */}
        <section className=" w-full px-4 pb-8">
          <div className="relative pb-[56.25%] h-0 rounded-lg overflow-hidden shadow-sm">
            <ReactPlayer
              url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
              controls={true}
              width="100%"
              height="100%"
              className="absolute top-0 left-0"
              loading="lazy"
            />
          </div>
        </section>
        <h4 className="text-sm lg:text-2xl my-2 text-center px-6">
          To add the chat bubble on your HTML or any website, add this script in
          the <br className="hidden md:block" /> &lt;head&gt; or &lt;body&gt;
          part:
        </h4>
     
        <section className=" w-full px-4 py-8 flex flex-col md:flex-row gap-4">
          {/* Left: Code Snippet */}
          <div className="w-full md:w-1/2 bg-[#253238] text-white p-6 rounded-2xl relative pb-16">
            {/* Code Snippet */}
            <SyntaxHighlighter
              language="javascript"
              style={oneDark}
              customStyle={{
                background: "transparent",
                margin: 0,
                padding: 0,
                fontSize: "0.9rem",
                lineHeight: "1.4",
              }}
              showLineNumbers={false}
            >
              {codeSnippet}
            </SyntaxHighlighter>

            {/* Copy Button */}
            <button
              onClick={handleCopy}
              className="
      group absolute bottom-4 left-1/2 -translate-x-1/2 
      flex items-center justify-center gap-2
      w-4/5 sm:w-2/3 md:w-1/2 
      rounded-full px-3 py-1.5 
      bg-[#FFFFFF1A]/10 hover:bg-[#4A4A4A] 
      transition-colors
    "
            >
              <Copy
                size={16}
                className="text-gray-200 group-hover:text-gray-100"
              />
              <span className="text-sm text-gray-200 group-hover:text-gray-100">
                {copied ? "Copied!" : "Copy"}
              </span>
            </button>
          </div>

     
          <div className="w-full md:w-1/2 relative rounded-2xl overflow-hidden">
          
            <div className="absolute inset-0 bg-custom-gradient"></div>
          
            <div className="relative flex items-center justify-center w-full h-full">
              <Image
                src={ChatPreview}
                alt="Chatbot Preview"
                className="w-2/3 h-auto py-8 rounded-lg shadow-lg"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
