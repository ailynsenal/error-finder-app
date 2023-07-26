import { FC, useContext, useEffect, useState } from 'react';

import Question from '../Question/Question';
import Confirmation from '../../components/confirmation/Confirmation';

import { AppContext } from '../../context/Context';
import { TQuestion, TRound } from '../../context/types';
import { RoundWrapper } from './styles';
import { checkAnswer } from '../utils';

type TRoundProps = {
  activityName: string;
  activityRoundQuestions: TRound[];
}

const Round: FC<TRoundProps> = ({...props}) => {
  const { activityName, activityRoundQuestions } = props;
  const { saveUserAnswer, setGameOver } = useContext(AppContext);

  // states
  const [showRound, setShowRound] = useState(true); 
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [questionNr, setQuestionNr] = useState(0);
  const [currRoundNr, setCurrRoundNr] = useState(0);
  const [roundTitle, setRoundTitle] = useState('');
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const totalRounds = activityRoundQuestions.length;

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRound(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [questions]);

  useEffect(() => {
    if (showRound && totalRounds) {
      const currentRoundNr = currRoundNr + 1;
      if (currentRoundNr <= totalRounds) {
        const newQuestions = extractQuestions(activityRoundQuestions, currentRoundNr);
        setCurrRoundNr(currentRoundNr);
        setRoundTitle(newQuestions[0].round_title);
        setQuestions(newQuestions[0].questions as TQuestion[]);
        setTotalQuestions(totalQuestions + newQuestions.length);
      }
    }
  }, [showRound, activityRoundQuestions, totalRounds]);

  const extractQuestions = (roundQuestions: TRound[], roundNo: number) => {
    const extractedQ = roundQuestions.filter(question => question.order === roundNo);
    return extractedQ;
  };

  const handleNextQuestion = (e: React.MouseEvent<HTMLButtonElement>) => {
    const answer = e.currentTarget.value;
    const correctAnswer = checkAnswer(questions[questionNr], answer);
    saveUserAnswer(
      {
        questionNr,
        activityName,
        answer: correctAnswer,
        roundTitle,
      }
    );

    // move to the next question
    const nextQ = questionNr + 1;
    if (nextQ === questions.length) {
      if (currRoundNr !== totalRounds) {
        setShowConfirmation(true);
        setGameOver(false);
        return;
      }
      setGameOver(true);
    }
    else {
      setQuestionNr(nextQ);
    }
  };

  const handleNextRound = () => {
    setQuestionNr(0);
    setQuestions([]);
    setRoundTitle('');
    setShowConfirmation(false);
    setShowRound(true);
  };

  const handleCancelNextRound = () => {
    setShowConfirmation(false);
    setGameOver(true);
  };

  const newActivityName = `${activityName} / ${roundTitle}`;

  return (
    <>
      {showRound &&
        (
          <RoundWrapper>
            <h4>{activityName}</h4>
            <h1>{roundTitle}</h1>
          </RoundWrapper>
        )
      }
      {!showRound && !showConfirmation &&
        (
          (
            <Question
              activityName={newActivityName}
              questionInfo={questions[questionNr]} 
              currQuestionNr={questionNr}
              nextQuestion={handleNextQuestion} 
              userAnswer={[]}
            />
          )
        )
      }
      {showConfirmation &&
        (
          <Confirmation nextRound={handleNextRound} cancelNextRound= {handleCancelNextRound} />
        )
      }
    </>
  )
}

export default Round;