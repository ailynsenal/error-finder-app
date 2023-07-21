import React from 'react';
import { TQuestionCard } from './QuestionCard.types'
import { ButtonWrapper, QuestionCardHeader, QuestionCardWrapper } from './QuestionCard.styles';
import { choices } from './constants';

const QuestionCard: React.FC<TQuestionCard> = ({...props}) => {
	const { activityName, question, questionNr, handleNextQuestion } = props;

  return (
    <QuestionCardWrapper>
			<QuestionCardHeader>
				<span className='subtitle'>{activityName}</span>
				<h1 className='questionNr'>{`Q${questionNr + 1}.`}</h1>
			</QuestionCardHeader>
      <div className='question'>{question?.stimulus}</div>
    	<ButtonWrapper>
				{
					choices.map((choice, idx) => (
						<button className='choice' type='button' onClick={handleNextQuestion} value={choice.value} key={idx}>{choice.label}</button>
					))
				}
			</ButtonWrapper>
		</QuestionCardWrapper>
  )
}

export default QuestionCard;
