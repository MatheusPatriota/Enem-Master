import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Question from "./pages/Question";
import Score from "./pages/Score";


const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Home/>} />
        <Route path="/question/:id" element={<Question/>} />
        <Route path="/score" element={<Score/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
