import { useParams } from "react-router-dom";
import MainLayout from "../../components/MainLayout/MainLayout";
import { useGetQuestionByIdQuery } from "../../api/questionsApi/questionsApi";

const QuestionPage = () => {
    const {id} = useParams()

    const {data} = useGetQuestionByIdQuery({id})
    console.log(data);
    
  return (
    <MainLayout>
      <div>{id}</div>
    </MainLayout>
  );
};

export default QuestionPage;
