import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Score from "./pages/Score";
import QuestionsYear from "./pages/QuestionsSubjectYear";
import KnowledgeArea from "./pages/KnowledgeArea";
import QuestionsSubjectYear from "./pages/QuestionsSubjectYear";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home />} />
        <Route path="enem/questoes">
          <Route path=":subject/:ano" element={<QuestionsSubjectYear />} />
          <Route path="area_conhecimento/:area" element={<KnowledgeArea />} />
          <Route path="area_conhecimento/:area/:ano" element={<Question />} />
          <Route path="pontuacao/:score" element={<Score />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
