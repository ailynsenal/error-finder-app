import { FC, useContext, useEffect, useState } from 'react';
import Question from './Question';

import { TQuestion } from '../../context/types';
import { AppContext } from '../../context/Context';

import { checkAnswer } from '../utils';

type TQuestionsProps = {
  activityName: string,
  activityQuestions: TQuestion[];
};

const Questions: FC<TQuestionsProps> = ({...props}) => {
  const { activityName, activityQuestions } = props;
  const { saveUserAnswer, setGameOver } = useContext(AppContext);

  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [questionNr, setQuestionNr] = useState(0);

  useEffect(() => {
    if (activityQuestions.length) {
      setQuestions(activityQuestions);
    }
  }, [activityQuestions])

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correctAnswer = checkAnswer(questions[questionNr], answer);
    saveUserAnswer({
      questionNr,
      activityName,
      answer: correctAnswer,
    });

    // move to the next question
    const nextQ = questionNr + 1;
    if (nextQ === questions.length) {
      setGameOver(true);
    }
    else {
      setQuestionNr(nextQ);
    }
  };

  return (
    <>
      {questions && 
        (
          <Question
            activityName={activityName}
            questionInfo={questions[questionNr]} 
            currQuestionNr={questionNr}
            nextQuestion={handleNextQuestion} 
            userAnswer={[]}
          />
        )
      }
    </>
  )
}

export default Questions
