// components/InterfaceHeader.js
export default function Header({ activeTab, setActiveTab }) {
  return (
    <header className="border-b px-6 py-4">
      <div className="flex justify-between items-center overflow-x-auto  scrollbar-hidden whitespace-nowrap">
        <div className="flex space-x-4">
          <button
            className={`px-4 py-2 border font-normal text-[16px] border-[#DBDBDB] rounded-lg ${
              activeTab === "web" ? "bg-[#252525] text-white" : "text-[#252525] "
            }`}
            onClick={() => setActiveTab("web")}
          >
            Web Integration
          </button>
          <button
            className={`px-4 py-2 border border-[#DBDBDB] font-normal text-[16px]  rounded-lg ${
              activeTab === "social"
                ? "bg-[#252525] text-white"
                : "text-[#252525]"
            }`}
            onClick={() => setActiveTab("social")}
          >
            Social Media
          </button>
          <button
            className={`px-4 py-2 border border-[#DBDBDB] font-normal text-[16px]  rounded-lg ${
              activeTab === "separate"
                ? "bg-[#252525] text-white"
                : "text-[#252525]"
            }`}
            onClick={() => setActiveTab("separate")}
          >
            Separate Interface
          </button>
        </div>
      </div>
    </header>
  );
}
