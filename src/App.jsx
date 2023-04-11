import GameBoard from "./components/GameBoard";
import IntroduceWord from "./components/IntroduceWord";
import { useWord } from "./hooks/useWord";

function App() {
  const { word } = useWord();

  return (
    <div className="w-screen h-screen bg-gradient-to-br from-blue-500 via-sky-300 to-green-300">
      <main className="max-w-2xl h-screen py-20 mx-auto flex flex-col items-center justify-start">
        {!word && <IntroduceWord />}
        {word && <GameBoard />}
      </main>
    </div>
  );
}

export default App;
