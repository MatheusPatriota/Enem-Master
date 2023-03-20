import Biology from "./assets/biology.svg";
import Nature from "./assets/nature.svg";
import Languages from "./assets/translation.svg";
import Science from "./assets/parchment.svg";
import Math from "./assets/math.svg";
import Random from "./assets/shuffle.svg";
import KnowledgeAreaStructure from "./components/KnowledgeAreaStructure";

function Home() {
  const areas = [
    {
      title: "Ciências Humanas e suas tecnologias",
      icon: Science,
    },
    {
      title: "Linguagens, códigos e suas tecnologias",
      icon: Languages,
    },
    {
      title: "Ciências da Natureza e suas tecnologias",
      icon: Nature,
    },
    {
      title: "Matemática e suas tecnologias",
      icon: Math,
    },
    {
      title: "Aleatório",
      icon: Random,
    },
  ];
  return (
    <div className="bg-enem-50 h-full flex flex-col items-center">
      <div> Capa do Sistema</div>
      <div>
        <div className="flex flex-col flex-wrap">
          <KnowledgeAreaStructure
            title={"Áreas de Conhecimento"}
            areas={areas}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
