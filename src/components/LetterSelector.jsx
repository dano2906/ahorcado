import { useEffect } from "react";
import { useAnswer } from "../hooks/useAnswer";
import AnswerLetter from "./AnswerLetter";
import confetti from "canvas-confetti";
import { alphabet } from "../utils/alphabet";
import { useGame } from "../hooks/useGame";

export default function LetterSelector() {
  const { answer } = useAnswer();
  const { resetGame, checkWin } = useGame();

  useEffect(() => {
    if (checkWin()) {
      confetti({
        particleCount: 100,
      });
      resetGame();
    }
  }, [answer]);

  return (
    <div className="grid grid-cols-12 gap-4">
      {alphabet.map((letter, index) => (
        <AnswerLetter letter={letter} key={index} />
      ))}
    </div>
  );
}
