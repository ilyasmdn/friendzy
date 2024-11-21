import React from "react";

const WelcomePage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-purple-600 text-white">
      {/* App Branding */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">Friendzy</h1>
        <p className="text-sm mt-2 tracking-wide">Play, Laugh, Compete!</p>
      </div>

      {/* Main Buttons */}
      <div className="w-full px-6 space-y-4">
        <button className="w-full py-4 bg-green-500 rounded-lg text-lg font-semibold hover:bg-green-600 transition">
          Create Game
        </button>
        <button className="w-full py-4 bg-blue-500 rounded-lg text-lg font-semibold hover:bg-blue-600 transition">
          Join Game
        </button>
      </div>

      {/* Footer Section */}
      <footer className="absolute bottom-4 text-xs opacity-75">
        <p>© 2024 Friendzy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default WelcomePage;
