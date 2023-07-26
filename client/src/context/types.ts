export type TInitialState = {
  isLoading: boolean;
  isError: boolean;
  activities: TActivities | null;
  userAnswers: TAnswer[],
  gameOver: boolean,
  getActivities?: () => void;
  saveUserAnswer?: (answer: TAnswer | []) => void;
  setGameOver?: (gameOver: boolean) => void;
};

export interface IInitialContext extends TInitialState {
  getActivities: () => void;
  saveUserAnswer: (answer: TAnswer | []) => void;
  setGameOver: (gameOver: boolean) => void;
};

export type TAppReducerAction = {
  type: string;
  payload: any;
};

export type TActivities = {
  name: string;
  heading: string;
  activities: TActivity[];
};

export type TActivity = {
  'activity_name': string;
  order: number;
  questions: TRound[] | TQuestion[];
};

export type TRound = {
  'round_title': string;
  order: number;
  questions: TQuestion[];
};

export type TQuestion = {
  'is_correct': boolean;
  stimulus: string;
  order: number;
  'user_answers': string[];
  feedback: string;
};

export type TAnswer = {
  questionNr: number;
  activityName: string;
  answer: boolean;
  roundTitle?: string;
};