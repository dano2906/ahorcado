import { useAnswer } from "../hooks/useAnswer";

export default function QuestionLetter({ letter }) {
  const { answer } = useAnswer();

  return (
    <div
      className={`w-14 h-14 bg-sky-400 rounded-xl shadow-md flex flex-row items-center justify-center`}
    >
      {answer.includes(letter) && (
        <h1 className="text-3xl font-bold text-center text-blue-950 select-none">
          {letter}
        </h1>
      )}
    </div>
  );
}
