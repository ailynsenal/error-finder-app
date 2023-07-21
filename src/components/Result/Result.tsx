import React from 'react';
import { HomeButtonWrapper, ResultWrapper, UserAnswers } from './Result.styles';
import { HeaderWrapper } from '../common.styles';
import { TResult } from './Result.types';

const Result: React.FC<TResult> = ({...props}) => {
  const { activityName, userAnswers } = props;

  return (
    <ResultWrapper>
      <HeaderWrapper>
        <h5>{activityName}</h5>
        <h1>Results</h1>
      </HeaderWrapper>

      {userAnswers.map((answer, index) => (
        <UserAnswers key={index}>
          <span>{`Q${index + 1}`}</span>
          <span className='answer'>{answer === 'true' ? 'CORRECT' : 'FALSE' }</span>
        </UserAnswers>
      ))}
      <HomeButtonWrapper>
        HOME
      </HomeButtonWrapper>
    </ResultWrapper>
  )
}

export default Result;
