"use client";
import React, { Suspense } from "react";
import HomeContent from "./ChatbotsContent";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}
