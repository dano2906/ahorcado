import { useContext } from "react";
import { AnswerContext } from "../context/AnswerContext";


export const useAnswer = () => {
    const { answer, setAnswer, chances, setChances } = useContext(AnswerContext);

    return {
        answer, setAnswer, chances, setChances
    }

}
