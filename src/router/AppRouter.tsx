import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const QuestionsPage = lazy(
  () => import("../pages/QuestionsPage/QuestionsPage"),
);

const QuestionPage = lazy(() => import("../pages/QuestionPage/QuestionPage"));

const AppRouter = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
        <Route path="/:id" element={<QuestionPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
