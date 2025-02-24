//app/leads/page.js
"use client";
import { useState } from "react";
import Layout from "../components/Layout"; // Shared layout with sidebar and main nav

import LayoutInbox from "../components/LayoutInbox";
import InboxPage from "./InboxPage";


export default function Inbox() {
  // Set activeMenuItem to "leads" taake sidebar mein leads option active ho
  const [activeMenuItem, setActiveMenuItem] = useState("inbox");

  return (
    // Wrap LeadsPage with Layout so that sidebar and main nav remain visible
    <LayoutInbox
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
    >
      <InboxPage />
    </LayoutInbox>
  );
}
