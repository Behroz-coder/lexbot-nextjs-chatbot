"use client";
import { useState } from "react";
import AnalyticsPage from "./teamAnalytics";
import LayoutAnalytics from "../components/LayoutAnalytics";

export default function Analytics() {
  const [activeMenuItem, setActiveMenuItem] = useState("team");

  return (
    <LayoutAnalytics
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
    ></LayoutAnalytics>
  );
}
