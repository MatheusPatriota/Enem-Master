import React, { useRef, useState } from "react";

interface QuestionProps {
  question: string;
  value: string;
  name: string;
  onOptionSelected: (value: string) => void;
}

function QuestionBox({
  name,
  value,
  question,
  onOptionSelected,
}: QuestionProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDivClick = () => {
    setIsChecked(!isChecked);
    onOptionSelected(value); // Chama a função de callback passando o valor da opção selecionada
  };

  return (
    <div
      className="p-4 flex justify-center items-center bg-enem-d8d8de rounded-md cursor-pointer hover:opacity-70"
      onClick={handleDivClick}
    >
      <input
        type="radio"
        name={name}
        value={value}
        checked={isChecked}
        onChange={() => {}}
        className="scale-150"
      />
      <p className="ml-4">{question}</p>
    </div>
  );
}

export default QuestionBox;
