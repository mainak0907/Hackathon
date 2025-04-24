"use client";
import React from "react";
import Link from "next/link";
import CallRequest from "../components/CallRequest";

const Dashboard: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-800 to-gray-900 text-white p-6 flex flex-col items-center">
      {/* Main Title */}
      <h1 className="text-4xl font-extrabold mb-10 text-center">Dashboard</h1>

      {/* Links Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10 w-full max-w-md">
        <Link
          href="https://atlantic-vault-a4e.notion.site/Analytics-17173084af3d804188abc43f9161c2c2"
          className="bg-blue-500 hover:bg-blue-600 transition-colors text-white font-semibold py-3 px-6 rounded-lg text-center"
        >
          View Analytics
        </Link>
        <Link
          href="http://127.0.0.1:8000/docs"
          className="bg-green-500 hover:bg-green-600 transition-colors text-white font-semibold py-3 px-6 rounded-lg text-center"
        >
          Get Prediction and Analysis
        </Link>
      </div>

      {/* Call Request Header */}
      <div className="w-full max-w-lg text-center bg-gray-700 p-4 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">AML Assistive AI on Call</h2>
        <CallRequest />
      </div>
    </div>
  );
};

export default Dashboard;
