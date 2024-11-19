// src/pages/Home.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-semibold mb-6">Welcome to Friendzy!</h2>
      <p className="text-lg mb-8 text-center">
        A fun game to learn more about your friends and strengthen your bond.
      </p>
      <Link
        to="/game/truth-toss"
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Start Truth Toss
      </Link>
    </div>
  );
};

export default Home;
