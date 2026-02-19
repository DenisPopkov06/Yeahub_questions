import type { QuestionsResponse } from "../../api/questionsApi/models/questionsType";
import QuestionListItem from "../QuestionListItem/QuestionListItem";

type QuestionsListProps = {
  questions: QuestionsResponse;
};

const QuestionsList = ({ questions }: QuestionsListProps) => {
  return (
    <ul>
      {questions.data.map((question) => (
        <li key={question.id}>
          <QuestionListItem {...question} />
        </li>
      ))}
    </ul>
  );
};

export default QuestionsList;
