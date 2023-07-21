import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { mockData } from '../../mock_data';
import QuestionCard from '../QuestionCard/QuestionCard';
import { TActivities, TErrorFinderData, TQuestion } from '../common.types';
import Result from '../Result/Result';
import { HeaderWrapper } from '../common.styles';
import { Wrapper, ActivityButtonsWrapper, ResultButtonWrapper } from './ErrorFinder.styles';
import RoundCard from '../RoundCard/RoundCard';

const ErrorFinderHome = () => {
  const [data, setData] = useState<TErrorFinderData>(mockData);
  const [loading, setLoading] = useState(true);
  const [questions, setQuestions] = useState<TQuestion[]>([]);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(0);
  const [roundNumber, setRoundNumber] = useState(0);
  const [totalRounds, setTotalRounds] = useState(0);
  const [userAnswers, setUserAnswers] = useState<string[]>([]);
  const [score, setScore] = useState(0);
  //const [gameOver, setGameOver] = useState(true);
  const [activityName, setActivityName] = useState('');
  const [activityData, setActivityData] = useState<TActivities | undefined>(undefined);
  //const [roundTitle, setRoundTitle] = useState('');
  const [showRoundActivity, setShowRoundActivity] = useState(false);

  const activityInProgress = useMemo(() => userAnswers.length !== totalQuestions, [userAnswers.length, totalQuestions]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowRoundActivity(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, [questions]);

  useEffect(() => {
    if (showRoundActivity && activityData) {
      const currentRoundNr = roundNumber + 1;
      if (currentRoundNr <= totalRounds) {
        let newQuestion = flattenRoundQuestions(activityData?.questions, currentRoundNr);
        setTotalQuestions(totalQuestions + newQuestion.length);
        setQuestions(newQuestion);
        setRoundNumber(currentRoundNr);
      }
    }
  }, [showRoundActivity, activityData])

  const handleActivity = useCallback((data: TActivities) => {
    const activityRound = data?.questions.filter(activity => activity.round_title).length || 0;
    setLoading(false);
    setQuestionNumber(0);
    setUserAnswers([]);
    setRoundNumber(0);
    setScore(0);
    //setGameOver(true);
    setActivityData(data);
    setShowRoundActivity(activityRound > 0);
    setTotalRounds(activityRound);
    
    if (activityRound === 0) {
      setQuestions(data.questions);
      setTotalQuestions(data.questions.length)
      setActivityName(data.activity_name as string);
    }
  }, []);

  const handleNextQuestion = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
    // check answer
    const answer = e.currentTarget.value;
    const correctAnswer = questions[questionNumber]?.is_correct?.toString();
    const isCorrectAnswer = correctAnswer === answer;
    if (isCorrectAnswer) setScore((prev) => prev + 1);
    setUserAnswers((prev) => [...prev, isCorrectAnswer.toString()]);

    // move to the next question
    const currentQuestionNr = questionNumber + 1;
    if (currentQuestionNr === totalQuestions) {
      if (roundNumber !== totalRounds) {
        setShowRoundActivity(true);
        setQuestionNumber(0);
        setQuestions([]);
      }
    }
    else {
      setQuestionNumber(currentQuestionNr);
    }
  }, [questions, questionNumber]);

  const flattenRoundQuestions = (questions: TQuestion[], roundNumber: number) => {
    const newSetOfQuestions: TQuestion[] = [];
    questions.find((question: TQuestion) => {
      if (question.order === roundNumber && question?.questions) {
        for (const q of question.questions) {
          q.round_title = question.round_title;
          newSetOfQuestions.push(q);
        }
      }
    });
    return newSetOfQuestions;
  };

  const renderQuestionCard = useMemo(() => {
    if (!loading && activityInProgress && !showRoundActivity) {
      return (
        <QuestionCard 
          activityName={activityName}
          questionNr={questionNumber}
          question={questions[questionNumber]}
          userAnswers={userAnswers}
          handleNextQuestion={handleNextQuestion}
        />
      );
    };
    return (
      <></>
    );
  }, [loading, activityInProgress, showRoundActivity, activityName, questionNumber, questions, userAnswers, handleNextQuestion]);

  const renderResults = useMemo(() => {
    if (!loading && !activityInProgress && totalRounds === roundNumber) {
      return (
        <Result 
          activityName={activityName}
          userAnswers={userAnswers}
        />
      );
    };
    return (
      <></>
    );
  }, [loading, activityInProgress, totalRounds, roundNumber, activityName, userAnswers]);

  return (
    <Wrapper>
      <>
      {loading && (
        <>
          <HeaderWrapper>
            <h5>CAE</h5>
            <h1>{data.name}</h1>
            <h5>{data.heading}</h5>
          </HeaderWrapper>
          <ActivityButtonsWrapper>
            {
              data.activities.map((data) => (
                <button className={`activity_${data.order}`} key={data.order} onClick={() => handleActivity(data)}>
                  {data.activity_name}
                </button>
              ))
            }
          </ActivityButtonsWrapper>
        </>
      )}
      {showRoundActivity && (<RoundCard />)}
      {renderQuestionCard}
      {renderResults}
      {loading && (
        <ResultButtonWrapper>
          RESULTS
        </ResultButtonWrapper>
      )}
      </>
    </Wrapper>
  )
}

export default ErrorFinderHome
