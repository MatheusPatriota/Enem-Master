import React from "react";
import { useNavigate } from "react-router-dom";

interface SubjectCardProps {
  icon: any;
  title: string;
  years: string[];
  link: string;
}

function SubjectCard({ title, years, icon, link }: SubjectCardProps) {

  const navigate = useNavigate();
  return (
    <>
      <div className="mt-6 mb-6">
        <div>
          <p className="font-bold text-lg mb-4">{title}</p>
        </div>
        <div className="flex  gap-4 flex-wrap">
          {years.map((year, index) => {
            return (
              <>
                <div
                  key={index}
                  onClick={()=> navigate(`/enem/questoes/${link}/${year}`)}
                  className="bg-enem-118ab2 p-4 rounded-md flex flex-col min-w-[150px]  min-h-[150px] gap-4 justify-center items-center cursor-pointer hover:opacity-80"
                >
                  <div>
                    <img src={icon} alt="imagem da disciplina" />
                  </div>
                  <div className="flex flex-col text-white font-bold">
                    <p>Enem</p>
                    <p>{year}</p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default SubjectCard;
