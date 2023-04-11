import { createContext, useState } from "react";

export const WordContext = createContext("");

export const WordProvider = ({ children }) => {
  const [word, setWord] = useState(null);

  return (
    <WordContext.Provider value={{ word, setWord }}>
      {children}
    </WordContext.Provider>
  );
};
