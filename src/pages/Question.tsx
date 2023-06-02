import MarkdownPreview from "@uiw/react-markdown-preview";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  const [currentQuestion, setCurrentQuestion] = useState<any>(null); // Definindo null como valor inicial

  let { ano, area } = useParams();
  let intAno = 0;
  let pontuacao = 0;
  let indiceAtual = 0;
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
      // console.log("data", response.data);
    };
    getAllQuestions();
  }, []);

  const handleOptionSelected = (value: any) => {
    console.log("Opção selecionada:", value);
    setSelectedOption(value);
    // Faça o que for necessário com o valor da opção selecionada
  };

  function exibirQuestao() {
    if (indiceAtual < questions.length) {
      const questaoAtual = questions[indiceAtual];
      // console.log(questaoAtual.texto);
    }
  }

  function verificarResposta(respostaUsuario: string) {
    const questaoAtual = questions[indiceAtual];
    // if (respostaUsuario === questaoAtual.resposta) {
    //   pontuacao++;
    // }
  }

  function proximaQuestao() {
    // questions.splice(indiceAtual, 1);
    indiceAtual++;
    setCurrentQuestion(questions[indiceAtual])
  }

  function exibirPontuacaoFinal() {
    console.log("Pontuação final: " + pontuacao);
  }

  return (
    <>
      {isLoading && <Loading/>}
      <div className="flex flex-col gap-8 p-10">
        <div className="flex gap-4 items-center justify-between">
          <div className=" flex items-center gap-8">
            <div className="text-[30px] font-black">ENEM Master {ano}</div>
            <div className="font-normal text-[16px] capitalize italic opacity-80">
              {area}
            </div>
          </div>
          <div className=" flex items-center gap-20">
            <div className="flex flex-row gap-4">
              <div>Star</div>
              <div>
                <p>Strikes</p>
                <p>1.0</p>
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <p>Pontuação atual:</p>
              <p>{score}</p>
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
              />
              <QuestionBox
                value={"b"}
                name={"alternativa"}
                question={currentQuestion.alternativa_b}
                onOptionSelected={handleOptionSelected}
              />
              <QuestionBox
                value={"c"}
                name={"alternativa"}
                question={currentQuestion.alternativa_c}
                onOptionSelected={handleOptionSelected}
              />
              <QuestionBox
                name={"alternativa"}
                value={"d"}
                question={currentQuestion.alternativa_d}
                onOptionSelected={handleOptionSelected}
              />
              <QuestionBox
                name={"alternativa"}
                value={"e"}
                question={currentQuestion.alternativa_e}
                onOptionSelected={handleOptionSelected}
              />
              {/* {isModalOpen && <VideoTutorialModal onClose={handleModalClose} />} */}
              {isModalOpen && (
                <QuestionCorrectModal onClose={handleModalClose} />
              )}
              {/* {isModalOpen && <QuestionErrorModal onClose={handleModalClose} />} */}
            </div>
          </div>
        ): <Loading/>}

        <div className="mt-6 font-bold p-4 flex justify-center items-center bg-enem-75f9a2 rounded-md cursor-pointer hover:opacity-70">
          Enviar
        </div>
        <div className="mt-6 flex justify-end">
          <button
            className="bg-enem-75f9a2 p-4 rounded-full w-32 cursor-pointer hover:opacity-70 font-bold"
            onClick={proximaQuestao}
          >
            Pular
          </button>
        </div>
      </div>
    </>
  );
}

export default Question;
