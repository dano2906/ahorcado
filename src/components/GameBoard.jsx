import { useWord } from "../hooks/useWord";
import QuestionLetter from "./QuestionLetter";
import LetterSelector from "./LetterSelector";
import { useAnswer } from "../hooks/useAnswer";

export default function GameBoard() {
  const { word } = useWord();
  const { chances } = useAnswer();

  return (
    <div className="flex flex-col items-center jusitfy-center gap-y-12">
      <h1 className="text-8xl font-bold text-blue-950 select-none">
        {chances}
      </h1>
      <div className="flex flex-row items-center justify-center gap-x-6">
        {word.map((letter, index) => (
          <QuestionLetter letter={letter} key={index} />
        ))}
      </div>
      <LetterSelector />
    </div>
  );
}
