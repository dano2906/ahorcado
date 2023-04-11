import { createContext, useState } from "react";

export const AnswerContext = createContext([]);

export const AnswerProvider = ({ children }) => {
  const [answer, setAnswer] = useState([]);
  const [chances, setChances] = useState(3);

  return (
    <AnswerContext.Provider value={{ answer, setAnswer, chances, setChances }}>
      {children}
    </AnswerContext.Provider>
  );
};
