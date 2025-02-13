"use client";
import Link from "next/link";
import Lottie from "lottie-react";

export default function Custom404() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-9xl font-extrabold text-blue-500">404</h1>
      <h2 className="mt-4 text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>
      <p className="mt-2 text-gray-600 max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white font-medium rounded shadow hover:bg-blue-600 transition-colors"
      >
        Go Home
      </Link>
      <div className="mt-10 w-64 mx-auto">
        <Lottie
          animationData={require("../public/404-animation.json")}
          loop={true}
          className="w-full h-full"
        />
      </div>
    </div>
  );
}
