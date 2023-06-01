import Biology from "../assets/biology.svg";
import Chemistry from "../assets/chemistry.svg";
import English from "../assets/english.svg";
import Geography from "../assets/geography.svg";
import Mathematics from "../assets/mathematics.svg";
import Spanish from "../assets/spanish.svg";
import Portuguese from "../assets/portuguese.svg";
import Philosophy from "../assets/philosopher.svg";
import Physic from "../assets/physics.svg";
import Poem from "../assets/poem.svg";
import Sociology from "../assets/sociology.svg";

import Student from "../assets/student.svg";
import Nature from "../assets/nature.svg";
import Languages from "../assets/translation.svg";
import Science from "../assets/parchment.svg";
import Math from "../assets/math.svg";
import Random from "../assets/shuffle.svg";
import KnowledgeAreaStructure from "../components/KnowledgeAreaStructure";
import SubjectCard from "../components/SubjectCard";
import BgTopSection from "../assets/bg-top-section.svg";

function Home() {
  const areas = [
    {
      title: "Ciências Humanas e suas tecnologias",
      icon: Science,
      link: 'humanas'
    },
    {
      title: "Linguagens, códigos e suas tecnologias",
      icon: Languages,
      link: 'linguagens'
    },
    {
      title: "Ciências da Natureza e suas tecnologias",
      icon: Nature,
      link: 'natureza'
    },
    {
      title: "Matemática e suas tecnologias",
      icon: Math,
      link: 'exatas'
    },
    {
      title: "Aleatório",
      icon: Random,
      link: 'random'
    },
  ];

  const subjectAndImages = [
    { subject: "Matemática", icon: Mathematics },
    { subject: "Física", icon: Physic },
    { subject: "Química", icon: Chemistry },
    { subject: "Biologia", icon: Biology },
    { subject: "História", icon: Poem },
    { subject: "Geografia", icon: Geography },
    { subject: "Filosofia", icon: Philosophy },
    { subject: "Sociologia", icon: Sociology },
    { subject: "Língua Portuguesa", icon: Portuguese },
    { subject: "Literatura", icon: Poem },
    { subject: "Inglês", icon: English },
    { subject: "Espanhol", icon: Spanish },
    { subject: "Educação Física", icon: Poem },
    { subject: "Artes", icon: Poem },
  ];

  const years = ["2022", "2021", "2020", "2019", "2018", "2017", "2016"];

  return (
    <div className="bg-enem-50 h-full flex flex-col items-center">
      <div
        className="h-[200px] bg-enem-118ab2 w-[90%] mt-10 mb-6 rounded-lg flex items-center justify-center p-4"
        style={{
          background: `url(${BgTopSection})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
        }}
      >
        <div>
          <img src={Student} alt="" />
        </div>{" "}
        <div className="flex flex-col items-center text-center justify-center text-white font-bold text-[25px] max-w-[200px]">
          <p>
            Conquiste sua nota <span className="text-[#08c3a4]">1000</span>
          </p>
          <button className="bg-white text-black p-2 rounded-full text-sm mt-2 shadow-lg shadow-black hover:opacity-80">
            Comece Agora
          </button>
        </div>
      </div>
      <div className="w-[90%]">
        <div className="flex flex-col flex-wrap">
          <KnowledgeAreaStructure
            title={"Áreas de Conhecimento"}
            areas={areas}
          />
        </div>
        <div>
          {subjectAndImages.map(({ subject, icon }, index) => {
            return (
              <SubjectCard
                title={subject}
                icon={icon}
                key={`${subject} - ${index}`}
                years={years}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
