import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import QuestionBox from "../components/QuestionBox";
import QuestionCorrectModal from "../components/QuestionCorrectModal";
import { LoadingContext } from "../Context/LoginContext";
import { GetQuestionsByKnowledgeAreaAndYear } from "../Services/Questions";
import Loading from "../components/Loading";

function Question() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { isLoading, startLoading, stopLoading } = useContext(LoadingContext);
  const [questions, setQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [clearAll, setClearAll] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState<any>(null); // Definindo null como valor inicial
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  let { ano, area } = useParams();
  let intAno = 0;
  
  if (ano !== undefined) {
    intAno = parseInt(ano);
  }
  
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const getAllQuestions = async () => {
      const response = await GetQuestionsByKnowledgeAreaAndYear(area, intAno, {
        startLoading,
        stopLoading,
      });
      setQuestions(response);
      setCurrentQuestion(response[0]); // Definindo o valor da primeira questão como currentQuestion
      console.log("data", response);
    };
    getAllQuestions();
  }, []);

  const handleOptionSelected = (value: any) => {
    console.log("Opção selecionada:", value);
    setSelectedOption(value);
    // Faça o que for necessário com o valor da opção selecionada
  };

  function verifyResponse(userResponse: string) {
    console.log("Resposta do usuário: " + userResponse);
    console.log("question: " + currentQuestion.alternativa_correta);
    if (userResponse === currentQuestion.alternativa_correta) {
      console.log("acertou");
      setScore((previousScore) => previousScore + 100);
      removeQuestionFromList();
      if (questions.length === 0) {
        navigate(`../pontuacao/${score+ 100}` );
      } else {
        handleClearAll();
        nextQuestion();
      }
    } else {
      removeQuestionFromList();
      if (questions.length === 0) {
        navigate(`../pontuacao/${score}` );
      } else {
        handleClearAll();
        console.log("errou", questions.length);
        nextQuestion();
      }
    }
  }

  function removeQuestionFromList() {
    handleClearAll();
    questions.splice(currentIndex, 1);
  }

  function nextQuestion() {
    setCurrentIndex((previousIndex) => previousIndex + 1);
    handleClearAll();
    setCurrentQuestion(questions[currentIndex]);
  }

  function exibirPontuacaoFinal() {
    console.log("Pontuação final: " + score);
  }

  const handleClearAll = () => {
    setClearAll(!clearAll);
    setSelectedOption("");
  };

  return (
    <>
      {isLoading && <Loading />}
      <div className="flex flex-col gap-8 p-10">
        <div className="flex gap-4 items-center justify-between">
          <div className=" flex items-center gap-8">
            <div className="text-[30px] font-black">ENEM Master {ano}</div>
            <div className="font-normal text-[16px] capitalize italic opacity-80">
              {area}
            </div>
          </div>
          <div className=" flex items-center gap-20">
            {/* <div className="flex flex-row gap-4">
              <div>Star</div>
              <div>
                <p>Strikes</p>
                <p>1.0</p>
              </div>
            </div> */}
            <div className="flex flex-col gap-1">
              <p>Pontuação atual:</p>
              <p className="font-bold text-[26px]">{score}</p>
            </div>
          </div>
        </div>
        {currentQuestion ? (
          <div>
            <div className=" p-4 flex flex-col h-fit flex-wrap bg-enem-d9d9d9 mt-4 mb-4 rounded-md">
              <MarkdownPreview
                source={currentQuestion.enunciado}
                className="!bg-transparent	!text-black"
              />
            </div>
            <div className="flex flex-col gap-6">
              <QuestionBox
                value={"a"}
                name={"alternativa"}
                question={currentQuestion.alternativa_a}
                onOptionSelected={handleOptionSelected}
                clearAll={clearAll}
              />
              <QuestionBox
                value={"b"}
                name={"alternativa"}
                question={currentQuestion.alternativa_b}
                onOptionSelected={handleOptionSelected}
                clearAll={clearAll}
              />
              <QuestionBox
                value={"c"}
                name={"alternativa"}
                question={currentQuestion.alternativa_c}
                onOptionSelected={handleOptionSelected}
                clearAll={clearAll}
              />
              <QuestionBox
                name={"alternativa"}
                value={"d"}
                question={currentQuestion.alternativa_d}
                onOptionSelected={handleOptionSelected}
                clearAll={clearAll}
              />
              <QuestionBox
                name={"alternativa"}
                value={"e"}
                question={currentQuestion.alternativa_e}
                onOptionSelected={handleOptionSelected}
                clearAll={clearAll}
              />
              {/* {isModalOpen && <VideoTutorialModal onClose={handleModalClose} />} */}
              {isModalOpen && (
                <QuestionCorrectModal onClose={handleModalClose} />
              )}
              {/* {isModalOpen && <QuestionErrorModal onClose={handleModalClose} />} */}
            </div>
          </div>
        ) : (
          <Loading />
        )}

        <div
          className={`mt-6 font-bold p-4 flex justify-center items-center bg-enem-75f9a2 rounded-md cursor-pointer hover:opacity-70 ${selectedOption === "" ? "pointer-events-none opacity-50" : ""}`}
          onClick={() => verifyResponse(selectedOption)}
          
        >
          {questions.length === 0 ? "Finalizar" : "Enviar"}
        </div>
        {questions.length > 0 && (
          <div className="mt-6 flex justify-end">
            <button
              className="bg-enem-75f9a2 p-4 rounded-full w-32 cursor-pointer hover:opacity-70 font-bold"
              onClick={nextQuestion}
            >
              Pular
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Question;
