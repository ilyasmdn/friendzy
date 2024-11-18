import React from 'react';

const QuestionCard = ({ question }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-semibold">{question}</h3>
    </div>
  );
};

export default QuestionCard;
