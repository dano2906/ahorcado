import { useAnswer } from "../hooks/useAnswer";
import { useEffect } from "react";
import { useGame } from "../hooks/useGame";

export default function AnswerLetter({ letter }) {
  const { answer, chances } = useAnswer();
  const { resetGame, checkCorrect } = useGame();

  useEffect(() => {
    if (chances <= 0) resetGame();
  }, [chances]);

  return (
    <button
      className={`w-10 h-10 rounded-2xl shadow flex flex-row items-center justify-center ${
        answer.includes(letter) ? `bg-gray-500` : `bg-pink-200`
      } text-xl font-bold text-center text-pink-950 disabled:cursor-not-allowed select-none`}
      onClick={() => checkCorrect(letter)}
      disabled={answer.includes(letter)}
    >
      {letter}
    </button>
  );
}
