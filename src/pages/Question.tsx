import React from "react";
import QuestionBox from "../components/QuestionBox";

function Question() {
  return (
    <>
      <div className="flex flex-col gap-8 p-10">
        <div className="flex gap-4 items-center justify-between">
          <div className=" flex items-center gap-8">
            <div className="text-[30px] font-black">ENEM Master</div>
            <div className="font-light italic opacity-80">Ciencias ....</div>
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
              <p>Pontuacao atual:</p>
              <p>100</p>
            </div>
          </div>
        </div>
        <div>
          <div className=" p-4 flex flex-wrap bg-enem-d9d9d9 mt-4 mb-4 rounded-md">
            Title
          </div>
          <div className="flex flex-col gap-6">
            <QuestionBox question={"A1"} />
            <QuestionBox question={"A2"} />
            <QuestionBox question={"A3"} />
            <QuestionBox question={"A4"} />
            <QuestionBox question={"A5"} />
          </div>
          <div className="mt-6 font-bold p-4 flex justify-center items-center bg-enem-75f9a2 rounded-md cursor-pointer hover:opacity-70">
            Enviar
          </div>
          <div className="mt-6 flex justify-end">
            <button className="bg-enem-75f9a2 p-4 rounded-full w-32 cursor-pointer hover:opacity-70 font-bold">
              Pular
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Question;
