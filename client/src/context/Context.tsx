import { createContext, useReducer } from 'react';
import axios from 'axios';
import AppReducer from './Reducer';
import { IInitialContext, TAnswer, TInitialState } from './types';

const domainUrl = "http://localhost:3001";

export const initialState: TInitialState = {
  isLoading: true,
  isError: false,
  activities: null,
  userAnswers: [],
  gameOver: false,
};

export const initialContext: IInitialContext = {
  isLoading: true,
  isError: false,
  activities: null,
  userAnswers: [],
  gameOver: false,
  getActivities: () => undefined,
  saveUserAnswer: () => undefined,
  setGameOver: () => undefined,
};

//create context
export const AppContext = createContext<IInitialContext>(initialContext);

// provider component
export const AppProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions
  const getActivities = async () => {
    axios
      .get(`${domainUrl}/activities`)
      .then( response => {
        dispatch({
          type: 'GET_ACTIVITIES',
          payload: response.data
        });
      })
      .catch(() => {
        dispatch({
          type: 'ERROR',
          payload: true
        });
      });
  };

  const saveUserAnswer = (answer: TAnswer | []) => {
    dispatch({
      type: 'USER_ANSWERS',
      payload: answer,
    });
  };

  const setGameOver = (gameOver: boolean) => {
    dispatch({
      type: 'GAME_OVER',
      payload: gameOver,
    });
  };

  const contextValues = {
    isLoading: state.isLoading,
    isError: state.isError,
    activities: state.activities,
    userAnswers: state.userAnswers,
    gameOver: state.gameOver,
    getActivities,
    saveUserAnswer,
    setGameOver,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};