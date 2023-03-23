import React from 'react';

interface QuestionProps {
  question: string;
}
function QuestionBox({ question }: QuestionProps) {
  return (
    <div className="p-4 flex justify-center items-center bg-enem-d8d8de rounded-md cursor-pointer hover:opacity-70">
      {question}
    </div>
  );
}

export default QuestionBox;
