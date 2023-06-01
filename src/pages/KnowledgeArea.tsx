import React from "react";
import { useNavigate, useParams } from "react-router-dom";

function KnowledgeArea() {
  const years = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];
  let { area } = useParams();
  const navigate = useNavigate();
  return (
    <div className="bg-enem-50 h-full flex flex-col items-center">
      <div className="h-[200px] bg-enem-118ab2 w-[90%] mt-10 mb-6 rounded-lg flex items-center justify-center p-4">
        <div className="flex flex-col items-center text-center justify-center text-white font-bold text-[25px] max-w-[200px]">
          <p className="capitalize">{area}</p>
        </div>
      </div>
      <div className="w-[90%]">
        <p className="capitalize font-bold">Escolha um ano:</p>
        <div className="flex gap-8">
          {years.map((year, index) => {
            return (
              <div
                className="mt-6 mb-6 bg-enem-118ab2 p-8 text-white rounded-md cursor-pointer hover:opacity-70"
                key={`${index}-year`}
                onClick={() => {
                  navigate(`/enem/questoes/area_conhecimento/${area}/${year}`);
                }}
              >
                <div>
                  <p className="font-bold text-lg">{year}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default KnowledgeArea;
