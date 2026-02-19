import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { Provider } from "react-redux";
import { store } from "./redux/store.tsx";
import ErrorBoundary from "./components/ErrorBoundary/ErrorBoundary.tsx";
import Modal from "./components/Modal/Modal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <ErrorBoundary fallback={<Modal />}>
        <App />
      </ErrorBoundary>
    </Provider>
  </StrictMode>,
);
