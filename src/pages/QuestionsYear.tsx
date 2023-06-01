import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { GetQuestionsByYear } from "../Services/Questions";
import { LoadingContext } from "../Context/LoginContext";

function QuestionsYear() {
  const { isLoading, startLoading, stopLoading } = useContext(LoadingContext);
  let { ano } = useParams();
  let intAno = 0;
  if (ano !== undefined) {
    intAno = parseInt(ano);
  }

  console.log("year", ano);

  useEffect(() => {
    const getAllQuestions = async () => {
      const response = await GetQuestionsByYear(intAno, {startLoading, stopLoading});
      // console.log("data", response.data);
    };
    getAllQuestions();
  }, []);

  return (
    <div>
      {isLoading && <div>Carregando...</div>}
      QuestionYear
    </div>
  );
}

export default QuestionsYear;
