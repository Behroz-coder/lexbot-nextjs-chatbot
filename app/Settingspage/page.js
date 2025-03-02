"use client";
import { useState } from "react";


import LayoutSetting from "../components/LayoutSetting";
import Settings from "./Settingspage";

export default function Analytics() {
  const [activeMenuItem, setActiveMenuItem] = useState("team");

  return (
    <LayoutSetting
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
      >
          <Settings/>
    </LayoutSetting>
  );
}
