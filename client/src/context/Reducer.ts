import { Reducer } from 'react';
import { initialState } from './Context';
import { TAppReducerAction, TInitialState } from './types';

const AppReducer: Reducer<TInitialState, TAppReducerAction> = (state = initialState, action) => {
  switch(action.type) {
    case 'GET_ACTIVITIES':
      return {
        ...state,
        activities: action.payload,
        isLoading: false,
        isError: false,
      }
    case 'USER_ANSWERS':
      return {
        ...state,
        userAnswers: Array.isArray(action.payload) ? [] : [action.payload, ...state.userAnswers],
      }
    case 'GAME_OVER': 
      return {
        ...state,
        gameOver: action.payload,
      }
    case 'ERROR':
      return {
        ...state,
        isError: action.payload,
        isLoading: false,
      }
    default:
      return state;
  };
};

export default AppReducer;