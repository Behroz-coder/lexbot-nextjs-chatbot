// components/Header.js
export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="border-b px-6 py-4">
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border border-gray-300 rounded-lg ${
              activeTab === "web" ? "bg-[#252525] text-white" : "text-gray-600"
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Integration
          </button>
          <button
            className={`px-4 py-2 border border-gray-300  rounded-lg ${
              activeTab === "social"
                ? "bg-[#252525] text-white"
                : "text-gray-600"
            }`}
            onClick={() => setActiveTab("social")}
          >
            Social Media
          </button>
        </div>
      </div>
    </header>
  );
}
