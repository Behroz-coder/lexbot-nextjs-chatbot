// pages/settings.js
"use client";
import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import { FaRegCheckCircle, FaStripe } from "react-icons/fa";
import {
  ArrowUpRight,
  Calendar,
  DollarSign,
  Copy,
  Download,
  Trash2,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { BiUpArrow } from "react-icons/bi";
import DateRangeButton from "../components/DateRangeButton";
import Image from "next/image";
import { RiTeamLine } from "react-icons/ri";
export default function Settings() {
  const [email, setEmail] = useState("macdonald@gmail.com");
  const [displayName, setDisplayName] = useState("Macdonald Anyanwu");
  const [activeTab, setActiveTab] = useState("Profile");
   const [billingCycle, setBillingCycle] = useState("annually");

   // Sample billing history data
   const billingHistory = [
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
     {
       invoice: "Pro version (Premium)",
       amount: "$4000",
       datePaid: "12th July, 2024",
       dueDate: "12th August, 2024",
     },
   ];
  const handleUpdate = (e) => {
    e.preventDefault();
    // Handle update logic here
    console.log("Updated profile:", { email, displayName });
    // Show success notification
    alert("Profile updated successfully!");
  };

  const handleDeleteAccount = () => {
    if (
      window.confirm(
        "Are you sure you want to delete your account? This action cannot be undone."
      )
    ) {
      // Handle account deletion logic here
      console.log("Account deleted");
      // In a real application, you would redirect to home or login page
      // Instead of using router directly, we'll use window.location
      // window.location.href = '/';
      alert("Account deleted successfully");
    }
  };
  const [copied, setCopied] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText("ij9jdiqdiim3dm3o2kdk32mkr32kr");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // Chart data to match the visualization in the image
  const chartData = [
    { month: "Feb", purchases: 7 },
    { month: "Mar", purchases: 10 },
    { month: "Apr", purchases: 15 },
    { month: "Apr-end", purchases: 8 },
    { month: "May", purchases: 18 },
    { month: "May-mid", purchases: 17 },
    { month: "Jun", purchases: 21 },
    { month: "Jun-mid", purchases: 19 },
    { month: "Jul", purchases: 23 },
    { month: "Jul-mid", purchases: 20 },
    { month: "Aug", purchases: 17 },
    { month: "Aug-mid", purchases: 19 },
    { month: "Aug-end", purchases: 10 },
    { month: "Sept", purchases: 15 },
  ];

  // Customize the display of months on x-axis
  const formatXAxis = (tickItem) => {
    return tickItem.includes("-") ? "" : tickItem;
  };

    

    const [showAddMemberModal, setShowAddMemberModal] = useState(false);
  const [teamMembers, setTeamMembers] = useState([
    { 
      id: 1, 
      name: 'Macdonald Anyanwu', 
      email: 'macdonald@gmail.com', 
      avatar: '/avatars/avatar1.jpg'
    },
    { 
      id: 2, 
      name: 'Adison Septimus', 
      email: 'macdonald@gmail.com', 
      avatar: '/avatars/avatar2.jpg'
    },
    { 
      id: 3, 
      name: 'Jaxson Torff', 
      email: 'macdonald@gmail.com', 
      avatar: '/avatars/avatar3.jpg'
    }
  ]);

  const handleAddMember = (newMember) => {
    setTeamMembers([...teamMembers, {
      id: teamMembers.length + 1,
      ...newMember,
      avatar: '/avatars/default-avatar.jpg'
    }]);
    setShowAddMemberModal(false);
  };
  return (
    <>
      <Head>
        <title>Settings | YourApp</title>
        <meta
          name="description"
          content="Manage your account settings and preferences"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-white">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-6 pb-8">
          <div className="flex flex-col md:flex-row gap-6">
            {/* Sidebar */}
            <div className="w-full md:w-32 lg:w-32 xl:w-64 flex-shrink-0 ">
              <nav className="space-y-1 overflow-auto flex items-center md:flex-col">
                {["Profile", "Billing", "Affiliate", "Team"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`w-full px-3   py-2 text-left ${
                      activeTab === tab
                        ? "bg-[#EAECF0]   rounded-lg  text-black text-[12px] lg:text-[16px] leading-6 font-normal lg:font-medium"
                        : "text-gray-800 hover:bg-gray-50  text-[12px] lg:text-[16px] leading-6  font-normal lg:font-medium"
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>

            {/* Main content */}
            <div className="flex-1">
              {activeTab === "Profile" && (
                <div className="space-y-6">
                  {/* Profile information */}
                  <div className="bg-white shadow-lg rounded-lg p-6">
                    <form onSubmit={handleUpdate}>
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <label
                            htmlFor="email"
                            className="block text-[16px] leading-6 font-medium text-black mb-2"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border border-[#DBDBDB] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                        <div>
                          <label
                            htmlFor="displayName"
                            className="block text-[16px] leading-6 font-medium text-black mb-2"
                          >
                            Display Name
                          </label>
                          <input
                            type="text"
                            id="displayName"
                            name="displayName"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            className="w-full border border-[#DBDBDB] rounded-lg px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                      <div className="mt-6 flex justify-end w-full">
                        <button
                          type="submit"
                          className="bg-[#2472FC] w-full lg:w-auto hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </div>

                  {/* Delete Account */}
                  <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between">
                    <div>
                      <h2 className="text-[16px] leading-6 font-medium text-black mb-2">
                        Delete Account
                      </h2>
                      <p className="text-[16px] leading-6 font-normal text-[#737373] mb-4">
                        Please note that all your data will be deleted as well
                      </p>
                    </div>

                    <button
                      onClick={handleDeleteAccount}
                      className="bg-[#CC0000] w-full lg:w-auto hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-150 ease-in-out"
                    >
                      Delete Account
                    </button>
                  </div>
                </div>
              )}

              {activeTab == "Billing" && (
                <div className="min-h-screen bg-white">
                  <div className="w-full scrollbar-hidden  overflow-y-auto h-screen mx-auto ">
                    <div className="flex flex-col md:flex-row gap-8 pt-6 lg:pt-0">
                      {/* Main Content */}
                      <div className="flex-1 space-y-6 mb-72 lg:mb-52">
                        {/* Available Messages Card */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                          <h2 className="text-xl font-bold text-black mb-4">
                            Available Message
                          </h2>
                          <div className="mb-2 flex justify-between items-center">
                            <span className="text-[#737373] text-[16px] leading-6">
                              Messages Usage
                            </span>
                            <span className="text-black font-medium">
                              800 / 1000
                            </span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div className="bg-[#2472FC] h-2 rounded-full w-4/5"></div>
                          </div>
                        </div>

                        {/* Subscription Card */}
                        <div className="bg-white rounded-lg border border-gray-200 p-6">
                          {/* Billing Cycle Toggle */}
                          <div className="flex items-center justify-between mb-6">
                            <h2 className="text-xl font-bold text-black mb-4">
                              Subscribe to Pro
                            </h2>
                            <div className="inline-flex rounded-full border border-gray-300">
                              <button
                                className={`px-5 py-2 text-sm font-medium rounded-l-full ${
                                  billingCycle === "annually"
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                                onClick={() => setBillingCycle("annually")}
                              >
                                Annually
                              </button>
                              <button
                                className={`px-5 py-2 text-sm font-medium rounded-r-full ${
                                  billingCycle === "monthly"
                                    ? "bg-blue-500 text-white"
                                    : "bg-white text-gray-700"
                                }`}
                                onClick={() => setBillingCycle("monthly")}
                              >
                                Monthly
                              </button>
                            </div>
                          </div>

                          {/* Subscription Plans */}
                          <div className="grid md:grid-cols-2 gap-6">
                            {/* Premium Plan */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                              <h3 className="text-lg font-medium  text-black mb-4">
                                Premium
                              </h3>
                              <div className="mb-4">
                                <span className="text-[24px] leading-9 font-bold text-black">
                                  $4,000
                                </span>
                                <span className="text-gray-600 ml-1">
                                  / year
                                </span>
                              </div>

                              <h4 className="font-medium text-[16px] leading-6 text-black mb-3">
                                What you will enjoy
                              </h4>
                              <ul className="space-y-3 mb-6">
                                {[1, 2, 3, 4, 5].map((item) => (
                                  <li key={item} className="flex items-center">
                                    <FaRegCheckCircle className="text-[#008000]" />
                                    <span className="ml-2 font-normal text-gray-600">
                                      Lorem ipsum ått preck prekrost
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              <button className="w-full justify-center flex items-center gap-1 py-1 px-4 border border-gray-300 rounded-lg text-sm font-medium text-black bg-white">
                                Pay with{" "}
                                <FaStripe
                                  size={35}
                                  className="text-[#635BFF]"
                                />
                              </button>
                            </div>

                            {/* Standard Plan */}
                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                              <h3 className="text-lg font-medium text-black mb-4">
                                Standard
                              </h3>
                              <div className="mb-4">
                                <span className="text-[24px] leading-9 font-bold text-black">
                                  $4,000
                                </span>
                                <span className="text-gray-600 ml-1">
                                  / year
                                </span>
                              </div>

                              <h4 className="font-medium text-[16px] leading-6 text-black mb-3">
                                What you will enjoy
                              </h4>
                              <ul className="space-y-3 mb-6">
                                {[1, 2, 3, 4, 5].map((item) => (
                                  <li key={item} className="flex items-center">
                                    <FaRegCheckCircle className="text-[#008000]" />
                                    <span className="ml-2 text-gray-600">
                                      Lorem ipsum ått preck prekrost
                                    </span>
                                  </li>
                                ))}
                              </ul>

                              <button className="w-full justify-center flex items-center gap-1 py-1 px-4 border border-gray-300 rounded-lg text-sm font-medium text-black bg-white">
                                Pay with{" "}
                                <FaStripe
                                  size={35}
                                  className="text-[#635BFF]"
                                />
                              </button>
                            </div>
                          </div>
                        </div>

                        {/* Billing History Card */}
                        <div className="bg-white rounded-lg border  border-gray-200 ">
                          <div className="p-6">
                            <h2 className="text-xl font-bold text-black mb-4">
                              Billing History
                            </h2>
                          </div>

                          <div className="overflow-auto  scrollbar-hidden h-[600px]  ">
                            <table className="min-w-full">
                              <thead>
                                <tr className="border-t border-b border-gray-200">
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-900"
                                  >
                                    Invoice
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-900"
                                  >
                                    Amount
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-900"
                                  >
                                    Date paid
                                  </th>
                                  <th
                                    scope="col"
                                    className="px-6 py-3 text-left text-sm font-medium text-gray-900"
                                  >
                                    Due date
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {billingHistory.map((item, index) => (
                                  <tr
                                    key={index}
                                    className="border-b border-gray-200"
                                  >
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                      {item.invoice}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                      {item.amount}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                      {item.datePaid}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                      {item.dueDate}
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab == "Affiliate" && (
                <div className="min-h-screen bg-white">
                  <div className=" scrollbar-hidden  max-w-6xl mx-auto h-screen overflow-y-auto ">
                    <div className="flex flex-col md:flex-row gap-6 mb-32">
                      {/* Main content */}
                      <div className="flex-1">
                        {/* Affiliate link section */}
                        <div className="bg-white p-4 rounded-lg shadow-md mb-6">
                          <div className="flex flex-col sm:flex-row items-center gap-2">
                            <input
                              type="text"
                              value="ij9jdiqdiim3dm3o2kdk32mkr32kr"
                              className="flex-1 w-full lg:w-auto p-2 border rounded-md text-gray-700 bg-white focus:outline-none "
                              readOnly
                            />
                            <button
                              onClick={handleCopyLink}
                              className="bg-gray-900 w-full lg:w-auto text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-gray-800 transition-colors"
                            >
                              <Copy size={18} />
                              {copied ? "Copied!" : "Copy Link"}
                            </button>
                          </div>
                        </div>

                        {/* Stats cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                          <div className="bg-white p-6 rounded-xl shadow-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h2 className="text-2xl font-medium text-[#252525]">
                                  $40,204
                                </h2>
                                <p className="text-gray-500">Total Revenue</p>
                              </div>
                              <div className="bg-gray-100 p-2 rounded-full">
                                <DollarSign
                                  size={20}
                                  className="text-gray-700"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="bg-white p-6 rounded-lg shadow-md">
                            <div className="flex justify-between items-start">
                              <div>
                                <h2 className="text-2xl font-medium text-[#252525]">
                                  950
                                </h2>
                                <p className="text-gray-500">Total Sales</p>
                              </div>
                              <div className="bg-gray-100 p-2 rounded-full">
                                <ArrowUpRight
                                  size={20}
                                  className="text-gray-700"
                                />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Purchase trends chart - Now using Recharts */}
                        <div className="bg-white p-6 rounded-xl shadow-md mb-6">
                          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
                            <div>
                              <div className="flex items-center gap-3">
                                <h2 className="text-2xl font-medium text-[#252525]">
                                  12,039
                                </h2>
                                <span className="text-green-600 flex items-center gap-1 text-sm bg-[#EBFFEB] px-2 py-1 rounded">
                                  <BiUpArrow /> 7.4%
                                </span>
                              </div>
                              <p className="text-gray-500">Purchase Trends</p>
                            </div>
                            <div>
                              <DateRangeButton />
                            </div>
                          </div>

                          {/* Recharts Line Chart */}
                          <div className="w-full h-64">
                            <ResponsiveContainer width="100%" height="100%">
                              <LineChart
                                data={chartData}
                                margin={{
                                  top: 5,
                                  right: 30,
                                  left: 0,
                                  bottom: 5,
                                }}
                              >
                                <CartesianGrid
                                  strokeDasharray="3 3"
                                  vertical={false}
                                  opacity={0.3}
                                />
                                <XAxis
                                  dataKey="month"
                                  tickFormatter={formatXAxis}
                                  axisLine={{ stroke: "#EEE" }}
                                  tickLine={false}
                                  tick={{ fill: "#888", fontSize: 12 }}
                                />
                                <YAxis
                                  domain={[0, 25]}
                                  ticks={[5, 10, 15, 20, 25]}
                                  axisLine={false}
                                  tickLine={false}
                                  tick={{ fill: "#888", fontSize: 12 }}
                                />
                                <Tooltip
                                  formatter={(value) => [
                                    `${value} purchases`,
                                    "Purchases",
                                  ]}
                                  contentStyle={{
                                    borderRadius: "6px",
                                    border: "1px solid #eee",
                                    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
                                  }}
                                />
                                <Line
                                  type="monotone"
                                  dataKey="purchases"
                                  stroke="#3B82F6"
                                  strokeWidth={2}
                                  dot={false}
                                  activeDot={{ r: 6 }}
                                />
                              </LineChart>
                            </ResponsiveContainer>
                          </div>
                        </div>

                        {/* Recent Invoices */}
                        <div className="bg-white p-6 rounded-xl shadow-md">
                          <div className="flex justify-between items-center mb-6">
                            <h2 className="text-xl text-black font-bold">
                              Recent Invoice
                            </h2>
                            <button className="bg-[#2472FC] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
                              Configure Payout
                            </button>
                          </div>

                          <div className="overflow-auto">
                            <table className="w-full">
                              <thead>
                                <tr className="border-b text-[16px] leading-6">
                                  <th className="text-left py-3 px-4 font-medium">
                                    Date
                                  </th>
                                  <th className="text-left py-3 px-4 font-medium">
                                    Invoice ID
                                  </th>
                                  <th className="text-left py-3 px-4 font-medium">
                                    Description
                                  </th>
                                  <th className="text-left py-3 px-4 font-medium">
                                    Amount
                                  </th>
                                  <th className="text-center py-3 px-4 font-medium">
                                    Action
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                {[1, 2, 3, 4, 5, 6, 7].map((item) => (
                                  <tr key={item} className="border-b">
                                    <td className="py-3 px-4">2024-01-15</td>
                                    <td className="py-3 px-4">#1234567</td>
                                    <td className="py-3 px-4">Payouts</td>
                                    <td className="py-3 px-4">$4,000</td>
                                    <td className="py-3 px-4">
                                      <div className="flex justify-center gap-2">
                                        <button className="text-gray-500 hover:text-gray-700">
                                          <Download size={18} />
                                        </button>
                                        <button className="text-red-500 hover:text-red-700">
                                          <Trash2 size={18} />
                                        </button>
                                      </div>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab == "Team" && (
                <div className="min-h-full overflow-y-auto bg-white shadow-md rounded-xl">
                  <div className="flex ">
                    {/* Main Content */}
                    <div className="flex-1 p-4 lg:p-8">
                      <div className="max-w-4xl mx-auto">
                        <div className="flex justify-between items-center mb-6">
                          <h1 className="text-sm lg:text-xl text-black font-bold">
                            Team Management
                          </h1>
                          <button
                            onClick={() => setShowAddMemberModal(true)}
                            className="bg-[#2472FC] hover:bg-blue-600 text-sm lg:text-base text-white px-2 lg:px-4 py-2 rounded-lg transition-colors"
                          >
                            Add Members
                          </button>
                        </div>

                        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
                          {teamMembers.map((member, index) => (
                            <div
                              key={member.id}
                              className={`flex items-center justify-between p-4 ${
                                index !== teamMembers.length - 1
                                  ? "border-b border-gray-200"
                                  : ""
                              }`}
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 rounded-full overflow-hidden mr-3 bg-gray-200">
                                  {member.avatar && (
                                    <Image
                                      src={member.avatar}
                                      alt={member.name}
                                      width={40}
                                      height={40}
                                      className="object-cover"
                                    />
                                  )}
                                </div>
                                <div>
                                  <h3 className="font-medium text-[16px] leading-6 text-black">
                                    {member.name}
                                  </h3>
                                  <p className="text-[#737373] text-[14px] leading-5">
                                    {member.email}
                                  </p>
                                </div>
                              </div>
                              <button className="text-gray-400 hover:text-gray-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-6 w-6"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                  />
                                </svg>
                              </button>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Add Member Modal */}
                  {showAddMemberModal && (
                    <AddMemberModal
                      onClose={() => setShowAddMemberModal(false)}
                      onAddMember={handleAddMember}
                    />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


function AddMemberModal({ onClose, onAddMember }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) {
      onAddMember({ name, email });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-[#F9fbff] rounded-2xl shadow-lg w-full max-w-md p-6 mx-4">
        <div className="text-center mb-6">
          <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
          <RiTeamLine className="text-blue-500 text-3xl" />
          </div>
          <h2 className="text-2xl text-black font-medium">Add team member</h2>
          <p className="text-gray-900 text-[16px] leading-6 mt-1 ">
            Add your teammates to easily access the platform
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-[16px] leading-6 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              placeholder="Please enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-[16px] leading-6 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Please enter email"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#2472FC] hover:bg-blue-600 text-white py-2 rounded-lg mb-2 transition-colors"
          >
            Add Member
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full bg-white hover:bg-gray-50 text-gray-800 py-2 border border-gray-300 rounded-lg transition-colors"
          >
            Close
          </button>
        </form>
      </div>
    </div>
  );}