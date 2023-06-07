import React, { useEffect, useRef, useState } from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface QuestionProps {
  question: string;
  value: string;
  clearAll: boolean;
  name: string;
  onOptionSelected: (value: string) => void;
}

function QuestionBox({
  name,
  value,
  question,
  clearAll,
  onOptionSelected,
}: QuestionProps) {
  const [isChecked, setIsChecked] = useState(false);

  const handleDivClick = () => {
    setIsChecked(!isChecked);
    onOptionSelected(value); // Chama a função de callback passando o valor da opção selecionada
  };

  useEffect(() => {
    setIsChecked(false); // Reseta o estado isChecked quando clearAll é true
  }, [clearAll]);

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
      {/* <p className="ml-4"> */}
        <MarkdownPreview
          source={question}
          className="!bg-transparent	!text-black"
        />
      {/* </p> */}
    </div>
  );
}

export default QuestionBox;
