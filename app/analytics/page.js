"use client";
import { useState } from "react";
import AnalyticsPage from "./analytics";
import LayoutAnalytics from "../components/LayoutAnalytics";

export default function Analytics() {
  // State name remains activeMenuItem
  const [activeMenuItem, setActiveMenuItem] = useState("team");

  return (
    <LayoutAnalytics
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
    >
      <AnalyticsPage />
    </LayoutAnalytics>
  );
}
