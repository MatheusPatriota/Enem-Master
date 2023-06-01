import { useNavigate } from "react-router-dom";

interface AreasTypes {
  title: string;
  icon: any;
  link: string;
}

interface KnowledgeAreaStructureProps {
  title: string;
  areas: AreasTypes[];
}

function KnowledgeAreaStructure({ title, areas }: KnowledgeAreaStructureProps) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col flex-wrap gap-4">
      <div className="font-bold text-lg">{title}</div>
      <div className="flex flex-row flex-wrap gap-4">
        {areas.map(({ title, icon, link }, index) => {
          return (
            <div
              key={index}
              onClick={() => {navigate(`enem/questoes/area_conhecimento/${link}`)}}
              className="bg-enem-118ab2 p-4 rounded-md flex flex-col justify-center items-center cursor-pointer hover:opacity-80"
            >
              <img src={icon} alt={`ícone do ${title}`} />
              <div className="max-w-[150px] min-w-[150px] w-full flex items-center justify-center text-center	 text-white font-bold">
                {title}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default KnowledgeAreaStructure;
