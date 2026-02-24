import MainLayout from "../../components/MainLayout/MainLayout";
import QuestionAside from "../../components/QuestionAside/QuestionAside";
import Question from "../../components/Question/Question";

const QuestionPage = () => {
  return (
    <MainLayout path={"/"} linkTitle="Назад">
      <Question />
      <QuestionAside />
    </MainLayout>
  );
};

export default QuestionPage;
