// src/components/Layout.jsx
import React from "react";

const Layout = ({ children, level = 1, score = 0 }) => {
  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="bg-purple-600 text-white p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Friendzy</h1>
        <div>
          <span className="mr-4">Level: {level}</span>
          <span>Score: {score}</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 bg-gradient-to-b from-purple-500 to-pink-500 p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="p-4 bg-purple-600 text-white flex justify-center">
        <button className="bg-green-500 text-white px-4 py-2 rounded">Next</button>
      </footer>
    </div>
  );
};

export default Layout;

