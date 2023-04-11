import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { WordProvider } from "./context/WordContext";
import { AnswerProvider } from "./context/AnswerContext";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <WordProvider>
      <AnswerProvider>
        <App />
      </AnswerProvider>
    </WordProvider>
  </StrictMode>
);
