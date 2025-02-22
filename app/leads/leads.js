
//app/leads/leads.js
"use client"
import React, { useState } from "react";
import Head from "next/head";
import { Download, Upload } from "lucide-react";


const MOCK_DATA = [
  {
    name: "Macdonald Anyanwu",
    email: "chibuikemcdonald@gmail.com",
    company: "Links Company",
    region: "Africa",
    language: "English",
  },
  {
    name: "John Doe",
    email: "johndoe@example.com",
    company: "Doe Enterprises",
    region: "North America",
    language: "English",
  },
  {
    name: "Maria Garcia",
    email: "maria.garcia@example.com",
    company: "Garcia Solutions",
    region: "Europe",
    language: "Spanish",
  },
  {
    name: "Akira Yamamoto",
    email: "akira.yamamoto@example.com",
    company: "Yamamoto Tech",
    region: "Asia",
    language: "Japanese",
  },
  {
    name: "Liu Wei",
    email: "liu.wei@example.com",
    company: "Wei Industries",
    region: "Asia",
    language: "Mandarin",
  },
  {
    name: "Fatima Al-Farsi",
    email: "fatima.alfarsi@example.com",
    company: "Al-Farsi Co.",
    region: "Middle East",
    language: "Arabic",
  },
  {
    name: "Hans Müller",
    email: "hans.mueller@example.com",
    company: "Müller GmbH",
    region: "Europe",
    language: "German",
  },
  {
    name: "Sofia Rossi",
    email: "sofia.rossi@example.com",
    company: "Rossi Group",
    region: "Europe",
    language: "Italian",
  },
  {
    name: "Carlos Silva",
    email: "carlos.silva@example.com",
    company: "Silva Corp",
    region: "South America",
    language: "Portuguese",
  },
  {
    name: "Anita Kumar",
    email: "anita.kumar@example.com",
    company: "Kumar Technologies",
    region: "Asia",
    language: "Hindi",
  },
  {
    name: "Olivia Brown",
    email: "olivia.brown@example.com",
    company: "Brown Inc",
    region: "North America",
    language: "English",
  },
  {
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    company: "Wilson Co.",
    region: "Europe",
    language: "English",
  },
  {
    name: "David Smith",
    email: "david.smith@example.com",
    company: "Smith & Co",
    region: "North America",
    language: "English",
  },
  {
    name: "Chen Li",
    email: "chen.li@example.com",
    company: "Li Enterprises",
    region: "Asia",
    language: "Mandarin",
  },
  {
    name: "Isabella Martinez",
    email: "isabella.martinez@example.com",
    company: "Martinez LLC",
    region: "South America",
    language: "Spanish",
  },
];

const LeadsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalLeads = MOCK_DATA.length;

  // Improved Pagination logic
  const totalPages = Math.ceil(totalLeads / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get current page data
  const currentData = MOCK_DATA.slice(startIndex, endIndex);

  // Generate page numbers with ellipsis
  const getPageNumbers = () => {
    const pages = [];
    if (totalPages <= 10) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      if (currentPage <= 5) {
        for (let i = 1; i <= 5; i++) {
          pages.push(i);
        }
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      } else if (currentPage >= totalPages - 4) {
        pages.push(1);
        pages.push(2);
        pages.push("...");
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        pages.push(1);
        pages.push(2);
        pages.push("...");
        pages.push(currentPage - 1);
        pages.push(currentPage);
        pages.push(currentPage + 1);
        pages.push("...");
        pages.push(totalPages - 1);
        pages.push(totalPages);
      }
    }
    return pages;
  };

    return (
      <div className="h-screen flex flex-col bg-white">
        <div className="border-b border-gray-300 font-medium text-[20px] leading-8 py-5 px-5">
          Leads
        </div>

      
          <div className="flex-1 p-4 md:mt-4 md:border border-gray-300 md:mx-3 bg-white rounded-lg shadow overflow-auto flex flex-col">
            {/* Header */}
            <div className="p-5 border-b border-gray-200">
              <div className="flex flex-wrap justify-between items-center gap-4">
                <h1 className=" sm:text-lg md:text-xl lg:text-2xl font-medium text-black">
                  {totalLeads.toLocaleString()} Total Leads
                </h1>
                <div className="space-x-2 flex items-center gap-1 lg:gap-2">
                  <button className="flex items-center gap-[6px] px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50">
                    <Download size={15} />
                    <span className="hidden sm:inline">Import</span>
                  </button>
                  <button className="flex items-center gap-[6px] px-4 py-2 bg-[#2472FC] text-white rounded-lg hover:bg-blue-700">
                    <Upload size={15} />
                    <span className="hidden sm:inline">Export</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Table */}
            <div className="flex-1 overflow-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-[#EDEDED]/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-[16px] leading-6   text-black uppercase tracking-wider">
                      Name
                    </th>
                    <th className="px-6 py-4 text-left text-[16px] leading-6  text-black uppercase tracking-wider">
                      Email
                    </th>
                    <th className="px-6 py-4 text-left text-[16px] leading-6  text-black uppercase tracking-wider">
                      Company
                    </th>
                    <th className="px-6 py-4 text-left text-[16px] leading-6  text-black uppercase tracking-wider">
                      Region
                    </th>
                    <th className="px-6 py-4 text-left text-[16px] leading-6  text-black uppercase tracking-wider">
                      Language
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {currentData.map((lead, index) => (
                    <tr
                      key={index}
                      className={index % 2 === 0 ? "bg-white" : "bg-[#F5F9FF]"}
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] leading-6  font-normal text-[#252525]">
                        {lead.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] leading-6 font-normal  text-[#252525]">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] leading-6  font-normal text-[#252525]">
                        {lead.company}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] leading-6 font-normal text-[#252525]">
                        {lead.region}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-[16px] leading-6 font-normal text-[#252525]">
                        {lead.language}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

   

            <div className="mt-auto border-t border-gray-200 px-4 py-3 sm:px-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="w-full sm:w-auto">
                  <select
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
                    className="w-full sm:w-auto border border-gray-300 rounded-md text-sm p-2 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  >
                    <option value={10}>10 per page</option>
                    <option value={20}>20 per page</option>
                    <option value={50}>50 per page</option>
                  </select>
                </div>
       
                <div className="w-full sm:w-auto overflow-x-auto">
                  <div className="flex items-center justify-center sm:justify-end min-w-max">
                    <button
                      onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                      disabled={currentPage === 1}
                      className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <span className="sr-only">Previous</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    <div className="flex space-x-1">
                      {getPageNumbers().map((number, index) => (
                        <button
                          key={index}
                          onClick={() =>
                            typeof number === "number" && setCurrentPage(number)
                          }
                          className={`relative inline-flex items-center px-3 py-2 border text-sm font-medium ${
                            number === currentPage
                              ? "z-10 bg-blue-600 text-white border-blue-600"
                              : "bg-white text-gray-500 border-gray-300 hover:bg-gray-50"
                          } ${
                            typeof number !== "number" ? "cursor-default" : ""
                          }`}
                          disabled={typeof number !== "number"}
                        >
                          {number}
                        </button>
                      ))}
                    </div>
                    <button
                      onClick={() =>
                        setCurrentPage((p) => Math.min(totalPages, p + 1))
                      }
                      disabled={currentPage === totalPages}
                      className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                    >
                      <span className="sr-only">Next</span>
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        
      </div>
    );
};

export default LeadsPage;