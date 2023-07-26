import { FC, useContext, useEffect, useState } from 'react';

import { AppContext } from '../../context/Context';
import { TAnswer } from '../../context/types';
import { HomeButtonWrapper, ResultWrapper, UserAnswers } from './styles';
import { Header } from '../Home/styles';

type TResult = {
	activityName: string;
	handleHomeButton: () => void;
};

const Result: FC<TResult> = ({...props}) => {
  const { activityName, handleHomeButton } = props;
  const { userAnswers } = useContext(AppContext);
  const [results, setResults] = useState<TAnswer[]>([]);

  useEffect(() => {
    if (userAnswers.length) {
      setResults(userAnswers.reverse());
    }
  }, [userAnswers]);

  const renderUserAnswers = () => {
    let idx = 0;
    return (
      results.map((answer, index) => {
        idx = index + 1;
        return (
          <>
            {answer.roundTitle && answer.roundTitle === results[idx]?.roundTitle ? <h4>{answer.roundTitle}</h4> : ''}
            <UserAnswers key={index}>
              <span>{`Q${index + 1}`}</span>
              <span className='answer'>{answer.answer === true ? 'CORRECT' : 'FALSE' }</span>
            </UserAnswers>
          </>
        )
      })
    )
  };

  return (
    <ResultWrapper>
      <Header>
        <h4>{activityName}</h4>
        <h1>Results</h1>
      </Header>
      {renderUserAnswers()}
      <HomeButtonWrapper onClick={handleHomeButton}>
        HOME
      </HomeButtonWrapper>
    </ResultWrapper>
  )
}

export default Result;
