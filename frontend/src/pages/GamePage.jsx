// src/pages/Game.jsx
import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [gameCompleted, setGameCompleted] = useState(false);

  useEffect(() => {
    // Simulate fetching questions from backend
    setTimeout(() => {
      setQuestions([
        { id: 1, question_text: 'What is your favorite color?' },
        { id: 2, question_text: 'What is your dream job?' },
        { id: 3, question_text: 'What is your most embarrassing moment?' },
      ]);
      setLoading(false);
    }, 1000); // Simulating a 1-second API call delay
  }, []);

  const handleSubmit = () => {
    if (userAnswer.trim() === '') {
      alert('Please enter an answer.');
      return;
    }

    // For simplicity, we'll assign 10 points for each answer
    setScore(score + 10);
    alert(`You answered: ${userAnswer}`);
    setUserAnswer('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setGameCompleted(true);
      alert(`Game Completed! Your score: ${score + 10}`);
      // Optionally, navigate back to Home or show a summary
    }
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  if (gameCompleted) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <h2 className="text-3xl font-semibold mb-6">Game Over!</h2>
        <p className="text-lg mb-6">Your Score: {score}</p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full">
      {questions.length > 0 && (
        <div className="w-full max-w-md">
          <QuestionCard question={questions[currentQuestionIndex].question_text} />
          <div className="mt-4">
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
            <button
              onClick={handleSubmit}
              className="mt-2 w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
            >
              Submit
            </button>
          </div>
          <p className="mt-4 text-gray-600">Score: {score}</p>
        </div>
      )}
    </div>
  );
};

export default Game;
