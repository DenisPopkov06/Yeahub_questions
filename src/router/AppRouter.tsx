import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const QuestionsPage = lazy(
  () => import("../pages/QuestionsPage/QuestionsPage"),
);

const AppRouter = () => {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <Routes>
        <Route path="/" element={<QuestionsPage />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
