import React from 'react';
import { TQuestion } from "../common.types";

export type TQuestionCard = {
	activityName: string;
  question: TQuestion;
	questionNr: number;
	userAnswers: string[];
	handleNextQuestion: (e: React.MouseEvent<HTMLButtonElement>) => void;
};