// pages/analytics.js
import React, { useEffect } from "react";
import Head from "next/head";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { BarChart, Bar } from "recharts";
import { PieChart, Pie, Cell } from "recharts";
import DateRangeButton from "../components/DateRangeButton";
import { ArrowDownIcon, ChevronDown, ChevronUp } from "lucide-react";

// Sample data for charts - can be replaced with API data
const monthlyData = [
  { name: "Feb", users: 30, repeatedUsers: 15, churnRate: 30 },
  { name: "Mar", users: 45, repeatedUsers: 19, churnRate: 45 },
  { name: "Apr", users: 38, repeatedUsers: 14, churnRate: 38 },
  { name: "May", users: 65, repeatedUsers: 12, churnRate: 65 },
  { name: "Jun", users: 85, repeatedUsers: 10, churnRate: 85 },
  { name: "Jul", users: 80, repeatedUsers: 10, churnRate: 80 },
  { name: "Aug", users: 45, repeatedUsers: 18, churnRate: 45 },
  { name: "Sept", users: 60, repeatedUsers: 22, churnRate: 60 },
];

const languageData = [
  { name: "English", value: 72.56, count: 192023, color: "#30C165" },
  { name: "French", value: 29.34, count: 2004, color: "#3C82F6" },
  { name: "Others", value: 17.83, count: 1092, color: "#E5E7EB" },
];

const csatData = [
  { region: "North America", score: 2.2 },
  { region: "Europe", score: 1.9 },
  { region: "Asia", score: 3.2 },
  { region: "Middle East", score: 4.9 },
];

const geoData = [
  {
    country: "United States",
    users: 102023,
    change: "+12.3%",
    lat: 37.0902,
    lng: -95.7129,
  },
  {
    country: "United Kingdom",
    users: 10002,
    change: "+2.2%",
    lat: 55.3781,
    lng: -3.436,
  },
  {
    country: "Austria",
    users: 102023,
    change: "+12.3%",
    lat: 47.5162,
    lng: 14.5501,
  },
  { country: "Nigeria", users: 102, change: "-7.4%", lat: 9.082, lng: 8.6753 },
];

// Google Maps implementation
const GoogleMapsComponent = () => {
  useEffect(() => {
    // Load Google Maps script dynamically
    const loadGoogleMapsScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap`;
        script.async = true;
        script.defer = true;
        window.initMap = initMap;
        document.head.appendChild(script);
      } else {
        initMap();
      }
    };

    // Initialize the map
    const initMap = () => {
      const mapDiv = document.getElementById("map");
      if (mapDiv) {
        const map = new window.google.maps.Map(mapDiv, {
          center: { lat: 20, lng: 0 },
          zoom: 2,
          styles: [
            {
              elementType: "geometry",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              elementType: "labels.icon",
              stylers: [{ visibility: "off" }],
            },
            {
              elementType: "labels.text.fill",
              stylers: [{ color: "#616161" }],
            },
            {
              elementType: "labels.text.stroke",
              stylers: [{ color: "#f5f5f5" }],
            },
            {
              featureType: "administrative.land_parcel",
              stylers: [{ visibility: "off" }],
            },
            {
              featureType: "administrative.land_parcel",
              elementType: "labels.text.fill",
              stylers: [{ color: "#bdbdbd" }],
            },
            {
              featureType: "administrative.country",
              elementType: "geometry.stroke",
              stylers: [{ color: "#dadada" }],
            },
            {
              featureType: "water",
              elementType: "geometry",
              stylers: [{ color: "#e9e9e9" }],
            },
            {
              featureType: "water",
              elementType: "labels.text.fill",
              stylers: [{ color: "#9e9e9e" }],
            },
          ],
        });

        // Add markers for each country
        geoData.forEach((country) => {
          const marker = new window.google.maps.Marker({
            position: { lat: country.lat, lng: country.lng },
            map: map,
            title: country.country,
            icon: {
              path: window.google.maps.SymbolPath.CIRCLE,
              scale: Math.log(country.users) / 2, // Scale marker based on users
              fillColor: country.change.startsWith("+") ? "#3B82F6" : "#EF4444",
              fillOpacity: 0.6,
              strokeWeight: 0,
            },
          });

          // Add info window to each marker
          const infoWindow = new window.google.maps.InfoWindow({
            content: `
              <div style="padding: 10px;">
                <h3 style="margin: 0; font-size: 16px;">${country.country}</h3>
                <p style="margin: 5px 0 0;">Users: ${country.users.toLocaleString()}</p>
                <p style="margin: 5px 0 0; color: ${
                  country.change.startsWith("+") ? "green" : "red"
                }">
                  ${country.change}
                </p>
              </div>
            `,
          });

          marker.addListener("click", () => {
            infoWindow.open(map, marker);
          });
        });

        // Add heat map layer
          if (window.google.maps.visualization) {
              const heatmapData = geoData.map((country) => {
                  return {
                      location: new window.google.maps.LatLng(country.lat, country.lng),
                      weight: country.users / 1000,
                  };
              });

              const heatmap = new window.google.maps.visualization.HeatmapLayer({
                  data: heatmapData,
                  map: map,
                  radius: 50,
              });
          }
        // else {
        //   const script = document.createElement("script");
        //   script.src =
        //     "https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=visualization&callback=initHeatmap";
        //   script.async = true;
        //   script.defer = true;
        //   window.initHeatmap = initMap;
        //   document.head.appendChild(script);
        // }
      }
    };

    loadGoogleMapsScript();

    // Cleanup
    return () => {
      window.initMap = undefined;
      window.initHeatmap = undefined;
    };
  }, []);

  return (
    <div className="relative  bg-gray-300 lg:w-[80%] rounded-xl">
      <div id="map" className="w-full h-96 rounded-lg"></div>
      <div className="absolute top-2 right-2 bg-white bg-opacity-90 rounded-md p-2 text-sm shadow-md">
        <div className="font-medium mb-1">User Density</div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full bg-blue-500 opacity-70 mr-2"></div>
          <span>High</span>
        </div>
        <div className="flex items-center mt-1">
          <div className="w-3 h-3 rounded-full bg-blue-500 opacity-30 mr-2"></div>
          <span>Low</span>
        </div>
      </div>
    </div>
  );
};

export default function CustomerAnalytics() {
  return (
    <div className="flex h-screen bg-gray-50 ">
      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Main content area */}
        <div className="flex items-center justify-around lg:hidden px-4 py-4">
          <p className="text-sm">Customer Analytics</p>
          <DateRangeButton />
        </div>
        <main className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-4">
          <Head>
            <title>Analytics Dashboard</title>
            <meta
              name="description"
              content="Comprehensive analytics dashboard with user metrics and geographical distribution"
            />
          </Head>

          <div className="grid grid-cols-1 gap-6 sm:gap-4 md:grid-cols-2 lg:grid-cols-2">
            {/* Total Users Card */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex  flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-[24px] leading-9 font-medium text-black">
                      259,786
                    </h2>
                    
                    <span className="text-green-500 flex items-center gap-1  font-medium bg-[#E8FFF3] py-1 px-[7px] rounded text-[12px]"> <ChevronUp className="w-3 h-3" />  12.3%</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm">

                      <span className="ml-2 text-[14px] leading-5 text-[#737373]">
                        Total Users
                      </span>
             
                  </div>
                </div>
                <div className="mt-5 h-32 md:h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="users"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                      />
                      <CartesianGrid
                        stroke="#EFF6FF"
                        strokeDasharray="5 5"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                      <YAxis
                        domain={[0, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Repeated Users Card */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <div className="flex  flex-col">
                  <div className="flex items-center gap-2">
                    <h2 className="text-[24px] leading-9 font-medium text-black">
                      4,920
                    </h2>
                    <span className="text-red-500 bg-[#FEE2E2] py-1 px-[7px] rounded text-[12px] font-medium flex items-center gap-1">   <ChevronDown className="w-3 h-3" /> 7.4%</span>
                    </div>
                    <div className="mt-1 flex items-center text-sm">

                      <span className="ml-2 text-[14px] leading-5 text-[#737373]">
                        Repeated Users
                      </span>
                    </div>
              
                </div>
                <div className="mt-5 h-32 md:h-60 ">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="repeatedUsers"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                      />
                      <CartesianGrid
                        stroke="#EFF6FF"
                        strokeDasharray="5 5"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                      <YAxis
                        domain={[5, 25]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Customers Segmentation by Language */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-medium  text-black">
                  Customers Segmentation by Language
                </h3>
                <div className="mt-4 border border-[#A3A3A3] rounded-md border-dashed py-4">
                  <p className="text-center text-[16px] leading-6 font-normal text-[#737373]">
                    Total Customers:{" "}
                    <span className="font-medium text-[24px] leading-10 text-black">
                      259,786
                    </span>
                  </p>
                </div>
                <div className="mt-2 flex flex-col md:flex-row items-center justify-between">
                  <div className="w-full md:w-1/2 h-40 md:h-36">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={languageData}
                          cx="50%"
                          cy="50%"
                          innerRadius={40}
                          outerRadius={60}
                          paddingAngle={5}
                          dataKey="value"
                          startAngle={90}
                          endAngle={-270}
                        >
                          {languageData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-4 mt-4 md:mt-0">
                    <div className="space-y-4">
                      {languageData.map((item, index) => (
                        <div key={index} className="flex items-center">
                          <div
                            className="w-3 h-3 rounded-full mr-2"
                            style={{ backgroundColor: item.color }}
                          ></div>
                          <span className="text-[16px] leading-6 font-normal text-[#7E8299]">
                            {item.name}:
                          </span>
                          <span className="ml-2 text-[16px] leading-6 font-medium text-[#5E6278]">
                            {item.value}%
                          </span>
                          <span className="ml-auto text-[16px] leading-6 font-medium text-[#000]">
                            {item.count.toLocaleString()}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Churn Rate */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-medium leading-6 text-black">
                  Customer Churn Rate
                </h3>
                <div className="mt-6 border border-[#A3A3A3] rounded-md border-dashed py-4 text-center">
                  <p className="text-2xl font-medium">70%</p>
                </div>
                <div className="mt-5 h-36 lg:h-60">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                      data={monthlyData}
                      margin={{ top: 5, right: 5, left: 5, bottom: 5 }}
                    >
                      <Line
                        type="monotone"
                        dataKey="churnRate"
                        stroke="#3B82F6"
                        strokeWidth={2}
                        dot={false}
                        isAnimationActive={true}
                      />
                      <CartesianGrid
                        stroke="#EFF6FF"
                        strokeDasharray="5 5"
                        vertical={false}
                      />
                      <XAxis
                        dataKey="name"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                      <YAxis
                        domain={[20, 100]}
                        axisLine={false}
                        tickLine={false}
                        tick={{ fontSize: 12, fill: "#9CA3AF" }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            {/* Customer Satisfaction Score */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-medium leading-6 text-black">
                  Customer Satisfaction (CSAT) Score
                </h3>
                <div className="mt-6 border border-[#A3A3A3] rounded-md border-dashed py-4 text-center">
                  <p className="text-2xl font-semibold text-[#252525]">
                    4.6{" "}
                    <span className="text-sm leading-6 font-normal text-[#252525]">
                      / 5.0
                    </span>
                  </p>
                </div>
                <div className="mt-2">
                  <div className="flex space-x-2 py-2">
                    <button className="bg-blue-100 text-blue-600 px-4 py-3 border border-blue-500 rounded-lg text-sm">
                      Region
                    </button>
                    <button className="text-gray-600 bg-[#F2F2F2] px-4 py-1 rounded-lg text-sm">
                      Language
                    </button>
                  </div>
                  <div className="mt-2 h-32 md:h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart
                        data={csatData}
                        margin={{ top: 5, right: 5, left: 5, bottom: 20 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" vertical={false} />
                        <XAxis
                          dataKey="region"
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: "#9CA3AF" }}
                        />
                        <YAxis
                          domain={[0, 5]}
                          axisLine={false}
                          tickLine={false}
                          tick={{ fontSize: 10, fill: "#9CA3AF" }}
                        />
                        <Bar dataKey="score" fill="#2472FC" barSize={40} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Effort Score */}
            <div className="bg-white overflow-hidden shadow rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-medium leading-6 text-black">
                  Customer Effort Score (CES)
                </h3>
                <p className="mt-10 text-[16px] leading-[25px] text-[#595959] font-normal">
                  This measures of how easy it was for customers to resolve
                  their issues, with trends analyzed across demographics like
                  income level or subscription type, in real time.
                </p>
                <div className="mt-6 py-4 px-6 bg-[#eaf2ff] border-[#A3A3A3] border border-dashed rounded-md text-center">
                  <p className="text-2xl font-semibold text-[#252525]">
                    4.1{" "}
                    <span className="text-sm leading-6 font-normal text-[#252525]">
                      / 5.0
                    </span>
                  </p>
                </div>
                <div className="mt-12 lg:mt-4 flex items-center justify-center">
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
                      <span className="lg:text-[28px] lg:leading-[44px] font-medium  text-[#5E6278]">
                        74%
                      </span>
                    </div>
                  </div>
                  <div className="ml-4 max-w-xs">
                    <p className="lg:text-[20px] lg:leading-8 font-medium text-[#252525]">
                      Percentage of customers who stopped interacting with the
                      service
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Geographical Distribution - GOOGLE MAPS IMPLEMENTATION */}
          <div className="mt-6 bg-white overflow-hidden shadow rounded-lg mb-16">
            <div className="px-4 py-5 sm:p-6">
              <h3 className="text-xl font-medium leading-6 text-black">
                Geographical Distribution
              </h3>
              <div className="mt-4 flex item-center flex-col lg:flex-row rounded-xl">
                {/* Google Maps implementation */}
                <GoogleMapsComponent />

                <div className="mt-1 lg:ml-12 grid grid-cols-4 mb-12 lg:grid-cols-1 gap-4 ">
                  {geoData.map((item, index) => (
                    <div key={index} className="bg-white px-4 py-3 ">
                      <p className="lg:text-[16px] lg:leading-6 font-normal text-[#595959]">
                        {item.country}
                      </p>
                      <div className="flex items-center mt-1">
                        <p className="lg:text-[20px] lg:leading-8 font-medium text-black">
                          {item.users.toLocaleString()}
                        </p>
                        <span
                          className={`ml-2 text-xs ${
                            item.change.startsWith("+")
                              ? "text-green-500"
                              : "text-red-500"
                          }`}
                        >
                          {item.change}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
