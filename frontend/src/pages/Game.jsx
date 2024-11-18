import React, { useState, useEffect } from 'react';
import QuestionCard from '../components/QuestionCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Game = () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // For now, simulate fetching questions with a hardcoded array
    setTimeout(() => {
      setQuestions([
        { id: 1, question_text: 'What is your favorite color?' },
        { id: 2, question_text: 'What is your dream job?' },
      ]);
      setLoading(false);
    }, 1000); // Simulating a 1-second delay for loading
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <div className="w-full max-w-md">
          {questions.length > 0 && (
            <QuestionCard question={questions[0].question_text} />
          )}
        </div>
      )}
    </div>
  );
};

export default Game;
