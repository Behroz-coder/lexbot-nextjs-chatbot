//app/leads/page.js
"use client";
import { useState } from "react";
import Layout from "../components/Layout"; // Shared layout with sidebar and main nav
import LeadsPage from "./leads";


export default function Leads() {
  // Set activeMenuItem to "leads" taake sidebar mein leads option active ho
  const [activeMenuItem, setActiveMenuItem] = useState("leads");

  return (
    // Wrap LeadsPage with Layout so that sidebar and main nav remain visible
    <Layout
      activeMenuItem={activeMenuItem}
      setActiveMenuItem={setActiveMenuItem}
    >
      <LeadsPage />
    </Layout>
  );
}
