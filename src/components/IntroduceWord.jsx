import { useWord } from "../hooks/useWord";
import { useAnswer } from "../hooks/useAnswer";
import { useRef } from "react";

export default function IntroduceWord() {
  const { setWord } = useWord();
  const { setChances } = useAnswer();
  const question = useRef("");
  const chances = useRef(1);

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-6">
      <input
        type="text"
        placeholder="Ingresa una palabra"
        className="w-[50%] h-20 px-4 outline-none border-4 border-green-600 bg-green-200 rounded-xl text-xl text-green-600 placeholder:text-xl placeholder:text-green-500"
        ref={question}
        maxLength={15}
      />
      <input
        type="number"
        max={5}
        step={1}
        defaultValue={1}
        ref={chances}
        className="w-[50%] h-20 px-4 outline-none border-4 border-green-600 bg-green-200 rounded-xl text-xl text-green-600 placeholder:text-xl placeholder:text-green-500"
      />
      <button
        className="px-4 py-3 border-2 border-blue-500 bg-blue-200 rounded-md text-xl text-blue-500"
        onClick={() => {
          setWord(question.current.value.toUpperCase().split(""));
          setChances(Number(chances.current.value));
        }}
      >
        Comenzar a jugar!!!
      </button>
    </div>
  );
}
