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
  } catch (error) {
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
  } catch (error) {
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
  } catch (error) {
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};

const GetQuestionsBySubjectYear = async (
  subject: string | undefined,
  year: number | undefined,
  loadingContext: any
) => {
  const { startLoading, stopLoading } = loadingContext;
  let data;
  try {
    startLoading();
    const response = await EnemInstance.get(
      `/questions/disciplina-ano/${subject}/${year}`
    );
    data = JSON.parse(response.data);
  } catch (error) {
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};
const GetRandomQuestions = async (loadingContext: any) => {
  const { startLoading, stopLoading } = loadingContext;
  let data;
  try {
    startLoading();
    const response = await EnemInstance.get(`/questions/random`);
    data = JSON.parse(response.data);
  } catch (error) {
    data = error;
  } finally {
    stopLoading();
  }
  return data;
};

export {
  GetQuestionsByYear,
  GetQuestionsByKnowledgeArea,
  GetQuestionsBySubjectYear,
  GetQuestionsByKnowledgeAreaAndYear,
  GetRandomQuestions,
};
