import { TQuestion } from "../context/types";

export const checkAnswer = (question: TQuestion, answer: string) => {
  return question.is_correct.toString() === answer;
};