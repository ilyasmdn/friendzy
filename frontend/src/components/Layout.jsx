// src/components/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-blue-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Friendzy</h1>
          <nav>
            <Link to="/" className="mr-4 hover:underline">
              Home
            </Link>
            <Link to="/game/truth-toss" className="hover:underline">
              Truth Toss
            </Link>
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto p-4">
        {children}
      </main>
      <footer className="bg-gray-200 text-center p-4">
        <p>© 2024 Friendzy. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;
