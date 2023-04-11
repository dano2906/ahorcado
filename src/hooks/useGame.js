import { useWord } from './useWord'
import { useAnswer } from './useAnswer'

export const useGame = () => {
    const { word, setWord } = useWord()
    const { answer, chances, setAnswer, setChances } = useAnswer();

    const checkCorrect = (letter) => {
        if (word.includes(letter)) {
            setAnswer([...answer, letter])
        } else {
            setChances(chances - 1)
        }
    }

    const resetGame = () => {
        setAnswer([]);
        setChances(3);
        setWord(null);
    }

    const checkWin = () => word.every((letter) => answer.includes(letter))

    return {
        checkCorrect, checkWin, resetGame
    }
}

