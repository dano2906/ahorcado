import { useContext } from "react";
import { WordContext } from "../context/WordContext";

export const useWord = () => {
    const { word, setWord, chances, setChances } = useContext(WordContext);
    return {
        word, setWord, chances, setChances
    }
}
