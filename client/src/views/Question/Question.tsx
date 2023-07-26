import { FC } from 'react';
import { TQuestion } from '../../context/types';
import { QuestionWrapper, QuestionHeader, Buttons } from './styles';

type TQuestionProps = {
  activityName: string;
  questionInfo: TQuestion;
  currQuestionNr: number;
  userAnswer: string[];
  nextQuestion: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Question: FC<TQuestionProps> = ({...props}) => {
  const { activityName, questionInfo, nextQuestion } = props;

  const choices = [
    { label: 'correct', value: 'true' },
    { label: 'incorrect', value: 'false' },
  ];

  const formattedQuestion = () => {
    const question = questionInfo?.stimulus?.split('*');
		return (
			<>
				{question?.map((q, i) => {
					if (i === 1) return <strong key={i}>{q}</strong>;
					return q;
				})}
			</>
		);
  };

  return (
    <QuestionWrapper>
      <QuestionHeader>
        <h4 className='activityName'>{activityName}</h4>
        <h1 className='questionNr'>{`Q${questionInfo?.order}.`}</h1>
      </QuestionHeader>
      <p className='question'>{formattedQuestion()}</p>
      <Buttons>
        {
          choices.map((choice, idx) => (
            <button className='choice' type='button' onClick={nextQuestion} value={choice.value} key={idx}>{choice.label}</button>
          ))
        }
      </Buttons>
    </QuestionWrapper>
  )
}

export default Question;
