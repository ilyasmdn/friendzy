import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Friendzy!</h1>
        <p className="mb-8">A fun game to learn more about your friends.</p>
        <Link to="/game" className="bg-blue-500 text-white px-6 py-2 rounded-md">Start Game</Link>
      </div>
    </div>
  );
};

export default Home;
