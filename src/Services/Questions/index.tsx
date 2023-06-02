import EnemInstance from "../Axios";

const GetQuestionsByYear = async (
  year: number | undefined,
  loadingContext: any
) => {
  let data;
  const { startLoading, stopLoading } = loadingContext;

  try {
    startLoading();
    const response = await EnemInstance.get(`/questions/ano/${year}`);
    data = JSON.parse(response.data);
    console.log(data);
  } catch (error) {
    console.log(error);
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};

const GetQuestionsByKnowledgeArea = async (
  knowledgeArea: string,
  loadingContext: any
) => {
  let data;
  const { startLoading, stopLoading } = loadingContext;
  try {
    startLoading();
    const response = await EnemInstance.get(
      `/questions/area_conhecimento/${knowledgeArea}`
    );
    data = JSON.parse(response.data);
    console.log(data);
  } catch (error) {
    console.log(error);
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};

const GetQuestionsByKnowledgeAreaAndYear = async (
  knowledgeArea: string | undefined,
  year: number | undefined,
  loadingContext: any
) => {
  let data;
  const { startLoading, stopLoading } = loadingContext;
  try {
    startLoading();
    const response = await EnemInstance.get(
      `/questions/area-ano/${knowledgeArea}/${year}`
    );
    data = JSON.parse(response.data);
    // console.log(data);
  } catch (error) {
    console.log(error);
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};

const GetQuestionsBySubject = async (subject: string) => {
  let data;
  try {
    await EnemInstance.get(`/questions/disciplina/${subject}`).then(
      (response) => {
        console.log(response);
        data = response;
      }
    );
  } catch (error) {
    console.log(error);
    data = error;
  }
  return data;
};

export {
  GetQuestionsByYear,
  GetQuestionsByKnowledgeArea,
  GetQuestionsBySubject,
  GetQuestionsByKnowledgeAreaAndYear,
};
