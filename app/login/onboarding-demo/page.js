// pages/demo.js
import Head from 'next/head' 
import Link from 'next/link' 

export default function DemoPage() {
  return (
    <>
      {/* SEO meta tags */}
      <Head>
        <title>Lexbot Demo</title>
        <meta name="description" content="Quick introduction to Lexbot." />
    
      </Head>

      <div className="flex items-center justify-center min-h-screen bg-white lg:bg-gradient-to-r from-[#8711C180] to-[#2472FCCC]">
        <div className="bg-white lg:rounded-3xl lg:shadow-lg w-full max-w-3xl p-4 mx-4 lg:mx-0 lg:px-8 lg:py-6">
          <h2 className="text-lg md:text-xl font-medium text-center mb-2">
            Let's get started with a quick demo
          </h2>
          <p className="text-center text-sm text-gray-600 mb-4">
            Here is a quick introduction of Lexbot.
          </p>
          <div className="text-center mb-4">
        
            <Link href="/login/create-chatbot-form" passHref>
   
                <button className="lg:bg-[#2472FC] flex w-full lg:w-auto border border-[#2472FC] items-center gap-2 mx-auto text-blue-500 lg:text-white px-4 py-2 rounded-xl lg:rounded-lg justify-center hover:bg-blue-700">
                  Skip{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="white"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-fast-forward" // Updated for JSX: use className instead of class
                  >
                    <polygon points="13 19 22 12 13 5 13 19" />
                    <polygon points="2 19 11 12 2 5 2 19" />
                  </svg>
                </button>
           
            </Link>
          </div>
          <div className="relative mb-4">

            <div className="relative overflow-hidden rounded-xl">
              <video
                controls
                poster="/path-to-your-thumbnail.jpg" 
                className="w-full h-full"
              >
                <source src="/path-to-your-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
