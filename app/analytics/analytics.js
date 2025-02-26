"use client";
// pages/analytics.js
// pages/analytics.js
import Head from "next/head";
import { useEffect, useState } from "react";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { HiOutlineTicket } from "react-icons/hi";

// ChartJS registration
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

export default function AnalyticsPage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Data for the line chart (peak hours)
  const lineData = {
    labels: ["12 AM", "3 AM", "6 AM", "9 AM", "12 PM", "3 PM", "6 PM", "9 PM"],
    datasets: [
      {
        data: [22, 38, 53, 33, 63, 78, 85, 75, 68, 63, 40, 55],
        fill: false,
        backgroundColor: "rgb(59, 130, 246)",
        borderColor: "rgb(59, 130, 246)",
        tension: 0.4,
        pointRadius: 0,
      },
    ],
  };

  const lineOptions = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      y: {
        min: 0,
        max: 100,
        ticks: {
          stepSize: 20,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  // Data for the bar chart (conversation distribution)
  const barData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "AI Agents",
        data: [45, 95, 120, 95, 45, 95, 100, 12, 45, 45, 75, 45],
        backgroundColor: "rgb(59, 130, 246)",
        barPercentage: 0.4,
        categoryPercentage: 0.7,
      },
      {
        label: "Human Agents",
        data: [10, 45, 45, 45, 10, 45, 12, 10, 45, 45, 10, 45],
        backgroundColor: "rgb(52, 211, 153)",
        barPercentage: 0.4,
        categoryPercentage: 0.7,
      },
    ],
  };

  const barOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 120,
        ticks: {
          stepSize: 30,
        },
        grid: {
          color: "rgba(0, 0, 0, 0.05)",
        },
      },
      x: {
        grid: {
          display: false,
        },
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  // Data for the doughnut chart (AI vs Human)
  const doughnutData = {
    labels: ["Human Intervention Rate", "AI Inquiry Rate"],
    datasets: [
      {
        data: [63.5, 37.5],
        backgroundColor: ["rgb(52, 211, 153)", "rgb(59, 130, 246)"],
        borderWidth: 0,
        cutout: "75%",
      },
    ],
  };

  const doughnutOptions = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  return (
    <>
      <Head>
        <title>Chatbot Analytics Dashboard</title>
        <meta
          name="description"
          content="Detailed analytics dashboard for chatbot performance metrics"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
      </Head>

      <div className="min-h-screen bg-gray-50 p-4 md:p-6 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {/* Top Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            {/* Conversations */}
            <div className="bg-white rounded-xl shadow p-6 flex items-start justify-between">
              <div>
                <h2 className="text-[24px] leading-9 font-medium text-[#252525]">
                  2,400
                </h2>
                <p className="text-[#737373] text-sm mt-1">
                  Amount of Conversations
                </p>
              </div>
              <div className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
                  />
                </svg>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-white rounded-xl shadow p-6 flex items-start justify-between">
              <div>
                <h2 className="text-[24px] leading-9 font-medium text-[#252525]">
                  3.5 Seconds
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Average Response Time
                </p>
              </div>
              <div className="text-gray-600">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Resolved Tickets */}
            <div className="bg-white rounded-xl shadow p-6 flex items-start justify-between">
              <div>
                <h2 className="text-[24px] leading-9 font-medium text-[#252525]">
                  420
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  AI Resolved Tickets
                </p>
              </div>
              <div className="text-gray-600">
                {/* <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M5 13l4 4L19 7"
                  />
                </svg> */}
                <HiOutlineTicket size={25} />
              </div>
            </div>
          </div>

          {/* Middle Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            {/* Conversation Distribution */}
            <div className="bg-white rounded-xl shadow p-6">
              <h2 className="text-[20px] leading-8 font-medium text-[#252525]">
                Conversation Distribution
              </h2>
              <p className="text-[#737373] font-normal text-sm">
                Breakdown of conversations handled by AI versus human agents
              </p>

              <div className="grid  items-center  md:grid-cols-3   w-full mt-4 mb-6 pb-4">
                <div className="text-center p-4 border w-full border-[#A3A3A3] border-dashed rounded-lg">
                  <p className="text-[#252525] text-[16px] leading-6 font-normal mb-1">
                    Total Conversations
                  </p>
                  <p className="text-2xl font-medium  text-[#252525]">2,400</p>
                </div>
                <div className="text-center  px-8 w-full py-4 border-[#A3A3A3] border  border-dashed rounded-lg">
                  <p className="text-[#2472FC] text-[16px] leading-6 font-normal mb-1">
                    AI Agents
                  </p>
                  <p className="text-2xl font-medium text-[#252525]">36,899</p>
                </div>
                <div className="text-center px-8 w-full py-4 border-[#A3A3A3] border  border-dashed rounded-lg">
                  <p className="text-[#50CD89] text-[16px] leading-6 font-normal mb-1">
                    Human Agents
                  </p>
                  <p className="text-2xl font-medium text-[#252525]">43</p>
                </div>
              </div>

              <div className="h-72">
                {isClient && (
                  <Bar data={barData} options={barOptions} height={250} />
                )}
              </div>
            </div>

            {/* Peak Hours */}
            <div className="bg-white rounded-xl shadow p-6 ">
              <h2 className="text-[20px] leading-8 font-medium text-[#252525]">
                Peak Hours
              </h2>
              <p className="text-[#737373] font-normal text-sm">
                Time periods with the highest volume of customer interactions
              </p>

              <div className="flex justify-center mt-4 mb-6 pb-4">
                <div className="text-center px-4 py-4 border-[#A3A3A3] border border-dashed rounded-lg w-full">
                  <p className="text-[#252525] text-sm font-normal mb-1">
                    Peak Hour
                    <span className="text-[20px] ml-4 leading-8 font-medium text-[#252525]">
                      10 AM
                    </span>
                  </p>
                </div>
              </div>

              <div className="h-72">
                {isClient && (
                  <Line data={lineData} options={lineOptions} height={250} />
                )}
              </div>
            </div>
          </div>

          {/* Bottom Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
            {/* AI vs Human Rate */}
            <div className="bg-white rounded-xl shadow p-4 lg:p-6">
              <div className="flex  md:flex-row items-center gap-2 justify-center md:items-center">
                <div className="md:w-1/3 w-full h-36 lg:h-48 flex justify-center items-center relative mb-4 md:mb-0">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-lg md:text-xl font-bold text-gray-700">
                      {doughnutData.datasets[0].data[0]}%
                    </div>
                  </div>
                  {isClient && (
                    <Doughnut data={doughnutData} options={doughnutOptions} />
                  )}
                </div>
                <div className="md:w-2/3 w-full md:pl-6">
                  <h2 className="text-[20px] hidden md:block leading-8 font-medium text-[#252525] mb-2">
                    AI Inquiry Rate Vs Human Intervention Rate
                  </h2>
                  <div className="flex  flex-col lg:flex-row  gap-5 lg:items-center  lg:justify-between lg:mt-4">
                    <div className="flex items-center">
                      <div className="w-4 h-6 bg-green-400 rounded mr-2"></div>
                      <span className="text-[#7E8299] text-[10px] lg:text-[16px] leading-6 font-normal">
                        Human Intervention Rate
                      </span>
                    </div>
                    <div className="flex items-center">
                      <div className="w-4 h-6 bg-blue-500 rounded mr-2"></div>
                      <span className="text-[#7E8299] text-[10px] lg:text-[16px] leading-6 font-normal">
                        AI Inquiry Rate
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <h2 className="text-[14px] block md:hidden leading-8 font-medium text-[#252525] mb-2">
                AI Inquiry Rate Vs Human Intervention Rate
              </h2>
            </div>

            {/* Ticket Success Rate */}
            <div className="bg-white rounded-xl shadow p-6">
              <div className="flex flex-col md:flex-row md:items-center">
                <div className="md:w-1/3 w-full flex lg:justify-center items-center mb-4 md:mb-0">
                  <div className="relative w-36 lg:w-64">
                    <svg className="w-full h-full" viewBox="0 0 100 100">
                      {/* Background circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#EDF2F7"
                        strokeWidth="5"
                      />
                      {/* Progress circle - 74% completion */}
                      <circle
                        cx="50"
                        cy="50"
                        r="40"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="5"
                        strokeDasharray="251.2"
                        strokeDashoffset="65.3"
                        transform="rotate(-90 50 50)"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-semibold text-gray-800">
                        74%
                      </span>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3 w-full ">
                  <h2 className="text-[20px] leading-8 font-medium text-[#252525] mb-1">
                    Ticket Success Rate
                  </h2>
                  <p className="text-[#7E8299] text-[10px] lg:text-[16px] leading-6 font-normal">
                    Percentage of resolved tickets out of total tickets
                    received.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
