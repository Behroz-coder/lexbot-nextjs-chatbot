"use client";
import React, { useState } from "react";
import { Copy, Trash2 } from "lucide-react";

const Settings = () => {
  const [formData, setFormData] = useState({
    name: "Chatbot",
    basicInstruction: "",
    fullPrompt: "",
    chatbotId: "userlinkcommunity/xyz",
  });

  const [showCopyToast, setShowCopyToast] = useState(false);
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
  const [showHistoryConfirm, setShowHistoryConfirm] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleCopyId = async () => {
    try {
      await navigator.clipboard.writeText(formData.chatbotId);
      setShowCopyToast(true);
      setTimeout(() => setShowCopyToast(false), 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Settings saved:", formData);
      // Show success message
      alert("Settings saved successfully!");
    } catch (error) {
      console.error("Error saving settings:", error);
      alert("Failed to save settings. Please try again.");
    } finally {
      setIsSaving(false);
    }
  };

  const handleDeleteHistory = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete all conversation history? This action cannot be undone."
      )
    ) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Conversation history deleted");
        alert("Conversation history deleted successfully!");
      } catch (error) {
        console.error("Error deleting history:", error);
        alert("Failed to delete conversation history. Please try again.");
      }
    }
  };

  const handleDeleteChatbot = async () => {
    if (
      window.confirm(
        "Are you sure you want to delete this chatbot? This action cannot be undone."
      )
    ) {
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Chatbot deleted");
        alert("Chatbot deleted successfully!");
      } catch (error) {
        console.error("Error deleting chatbot:", error);
        alert("Failed to delete chatbot. Please try again.");
      }
    }
  };

  return (
    <div className="max-w-3xl w-full overflow-y-scroll mx-auto p-4 md:p-6 scrollbar-hidden">
      <h1 className="text-xl text-center text-black font-medium mb-6">
        Settings
      </h1>

      <form onSubmit={handleSave} className="space-y-6">
        {/* Name Input */}
        <div className="space-y-2">
          <label
            htmlFor="name"
            className="block text-lg font-medium text-black"
          >
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleInputChange}
            className="w-full px-3 py-3 border placeholder:text-[#252525] placeholder:font-normal border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
            required
          />
        </div>

        {/* Basic Instruction */}
        <div className="space-y-2">
          <label
            htmlFor="basicInstruction"
            className="block text-lg font-medium text-black"
          >
            Basic Instruction
          </label>
          <textarea
            id="basicInstruction"
            name="basicInstruction"
            value={formData.basicInstruction}
            onChange={handleInputChange}
            rows={3}
            className="w-full h-32 px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
          />
        </div>

        {/* Full Prompt */}
        <div className="space-y-2">
          <label
            htmlFor="fullPrompt"
            className="block text-lg font-medium text-black"
          >
            Full Prompt
          </label>
          <textarea
            id="fullPrompt"
            name="fullPrompt"
            value={formData.fullPrompt}
            onChange={handleInputChange}
            rows={3}
            className="w-full h-32  px-3 py-3 border resize-none border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 text-sm"
          />
        </div>

        {/* Chatbot ID */}
        <div className="space-y-2">
          <label
            htmlFor="chatbotId"
            className="block text-lg font-medium text-black"
          >
            Chatbot ID
          </label>
          <div className="flex gap-2 relative">
            <input
              id="chatbotId"
              type="text"
              value={formData.chatbotId}
              readOnly
              className="w-full px-3 relative py-3 border border-gray-300 rounded-md bg-gray-50 text-sm"
            />
            <button
              type="button"
              onClick={handleCopyId}
              className="px-3 py-2 absolute flex items-center gap-2  right-1 top-1 rounded-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <Copy className="w-4 h-4" />Copy
            </button>
            {showCopyToast && (
              <div className="absolute -top-10 right-0 bg-gray-800 text-white px-3 py-1 rounded text-sm">
                Copied!
              </div>
            )}
          </div>
        </div>

        {/* Save Button */}
        <button
          type="submit"
          disabled={isSaving}
          className={`w-full bg-blue-600 text-white py-2.5 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors ${
            isSaving ? "opacity-75 cursor-not-allowed" : ""
          }`}
        >
          {isSaving ? "Saving..." : "Save"}
        </button>

        {/* Danger Zone */}
        <div className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Danger Zone
          </h2>

          <div className="space-y-4">
            <button
              type="button"
              onClick={handleDeleteHistory}
              className="w-full flex items-center justify-between px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
              <span className="text-sm">Delete all Conversation History</span>
              <Trash2 className="w-4 h-4 text-red-600" />
            </button>

            <button
              type="button"
              onClick={handleDeleteChatbot}
              className="w-full flex items-center justify-between px-4 py-2.5 border border-red-300 text-red-600 rounded-md hover:bg-red-50 active:bg-red-100 transition-colors"
            >
              <span className="text-sm">Delete Chatbot</span>
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Settings;
