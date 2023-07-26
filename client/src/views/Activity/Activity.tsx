import { FC, useEffect, useState } from 'react';
import { TActivity, TQuestion, TRound } from '../../context/types';
import Round from '../Round/Round';
import Questions from '../Question/Questions';

type TActivityProps = {
  activityData: TActivity;
};

const Activity: FC<TActivityProps> = ({...props}) => {
  const { activityData } = props;
  const [activityName, setActivityName] = useState('');
  const hasRound = activityData.questions?.some(activity => activity.hasOwnProperty('questions'));

  useEffect(() => {
    if (activityData) {
      setActivityName(activityData.activity_name);
    }
  }, [activityData]);

  return (
    <>
      {hasRound ? 
        (
          <Round 
            activityName={activityName}
            activityRoundQuestions={activityData.questions as TRound[]}
          />
        ) : (
          <Questions activityName={activityName} activityQuestions={activityData.questions as TQuestion[]} />
        ) 
      }
    </>
  )
}

export default Activity
