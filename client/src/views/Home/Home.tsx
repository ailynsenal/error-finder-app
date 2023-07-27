import { FC, useContext, useEffect, useState } from 'react';
import ClipLoader from "react-spinners/ClipLoader";
import { AppContext } from '../../context/Context';
import { TActivity } from '../../context/types';
import Activity from '../Activity/Activity';
import Result from '../Results/Results';
import { Activities, Header, LoadingWrapper, ResultButton, Wrapper } from './styles';

const Home: FC = () => {
  const { isError, isLoading, activities, getActivities, gameOver, setGameOver, saveUserAnswer } = useContext(AppContext);
  const [activityData, setActivityData] = useState<TActivity | null>(null)

  useEffect(() => {
    getActivities();
  }, []);

  const handleActivity = (data: TActivity) => {
    setActivityData(data);
    saveUserAnswer([]);
  };

  const handleHomeButton = () => {
    setActivityData(null)
    setGameOver(false);
  };

  return (
    <Wrapper>
      {!activityData && !gameOver &&
        (
          <h4 className='title'>CAE</h4>
        )
      }
      {isLoading && !isError &&
        (
          <LoadingWrapper>
            <ClipLoader color={'#30A2FF'} />
            <div className='loading-text'>Loading app...</div>
          </LoadingWrapper>
        )
      }
      {!isLoading && !isError && !activities &&
        (
          <div className='msg'>No Activities to display.</div>
        )
      }
      {!isLoading && isError &&
        (
          <div className='msg'>Failed to load activities!</div>
        )
      }
      {!isLoading && !isError && !activityData && !gameOver &&
        (
          <>
            <Header>
              <h1>{activities?.name}</h1>
              <h5>{activities?.heading}</h5>
            </Header>
            <Activities>
              {
                activities?.activities ? activities?.activities?.map((activity) => (
                  <button className={'activity-btn'} key={activity.order} onClick={() => handleActivity(activity)}>
                    <h4>{activity.activity_name}</h4>
                  </button>
                )) : <></>
              }
            </Activities>
            <ResultButton>RESULTS</ResultButton>
          </>
        )
      }
      {activityData && !gameOver &&
        (
          <Activity activityData={activityData} />
        )
      }
      {gameOver &&
        (
          <Result activityName={activityData?.activity_name as string} handleHomeButton={handleHomeButton}  />
        )
      }
    </Wrapper>
  )
}

export default Home;