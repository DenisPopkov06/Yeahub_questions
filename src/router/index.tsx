import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import QuestionsPage from "../pages/QuestionsPage/QuestionsPage";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <QuestionsPage /> },
    ],
  },
]);