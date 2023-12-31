import { ChangeEvent, ReactNode, useReducer } from 'react';

type InitState = { count: number; text: string };

const initState: InitState = { count: 0, text: '' };

enum REDUCER_ACTION_TYPE {
  INCREMENT,
  DECREMENT,
  USER_INPUT,
}
type ReducerAction = {
  type: REDUCER_ACTION_TYPE;
  payload?: string;
};

const reducer = (state: InitState, action: ReducerAction): InitState => {
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

type ChilderProp = {
  children: (n: number) => ReactNode;
};

const Counter = ({ children }: ChilderProp) => {
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  };
  const decrement = () => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  };
  const textHandleInput = (ev: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: REDUCER_ACTION_TYPE.USER_INPUT, payload: ev.target.value });
  };

  return (
    <>
      <h2>Counter: {children(state.count)}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <input type="text" onChange={textHandleInput} value={state.text} />
      <h2>{state.text}</h2>
    </>
  );
};
export default Counter;
