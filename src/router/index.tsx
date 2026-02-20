import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import QuestionsSection from "../components/QuestionsSection/QuestionsSection";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <QuestionsSection /> },
    ],
  },
]);