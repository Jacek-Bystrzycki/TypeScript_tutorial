import { ChangeEvent, useReducer } from 'react';

export type StateType = { count: number; text: string };

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  USER_INPUT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: StateType, action: ReducerAction): StateType => {
  switch (action.type) {
    case REDUCER_ACTION_TYPE.INCREMENT:
      return (state = { ...state, count: state.count + 1 });
    case REDUCER_ACTION_TYPE.DECREMENT:
      return (state = { ...state, count: state.count - 1 });
    case REDUCER_ACTION_TYPE.USER_INPUT:
      return (state = { ...state, text: action.payload ?? '' });
    default:
      throw new Error('Wrong action in reducer!!!');
  }
};

//custom hook for handling reducer
export const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };
  const textHandleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev);

    dispatch({ type: REDUCER_ACTION_TYPE.USER_INPUT, payload: ev.target.value });
  };

  return { state, increment, decrement, textHandleInput };
};
