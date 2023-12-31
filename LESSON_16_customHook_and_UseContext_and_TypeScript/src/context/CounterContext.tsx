import { ChangeEvent, createContext, useReducer, ReactElement, useCallback } from 'react';

type StateType = { count: number; text: string };
export const initState: StateType = { count: 0, text: '' };

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
const useCounterContext = (initState: StateType) => {
  const [state, dispatch] = useReducer(reducer, initState);

  //using useCallback disable recreating those function on each render
  const increment = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.INCREMENT });
  }, []);
  const decrement = useCallback(() => {
    dispatch({ type: REDUCER_ACTION_TYPE.DECREMENT });
  }, []);
  const textHandleInput = useCallback((ev: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: REDUCER_ACTION_TYPE.USER_INPUT,
      payload: ev.target.value,
    });
  }, []);

  return { state, increment, decrement, textHandleInput };
};

type UseCounterContextType = ReturnType<typeof useCounterContext>;

//creating defautValue for context
const initContextState: UseCounterContextType = {
  state: initState,
  increment: () => {},
  decrement: () => {},
  textHandleInput: (ev: ChangeEvent<HTMLInputElement>) => {
    console.log(ev);
  },
};

//crate context with defualtValue of type "UseCounterContextTpye" (this is what is returned from customHook)
export const CounterContext = createContext<UseCounterContextType>(initContextState);

type ChildrenType = {
  children?: ReactElement;
};

//creating component to use context (global context) and this component returns customHook as value
export const CounterProvider = ({
  children,
  ...initState
}: ChildrenType & StateType): ReactElement => {
  return (
    <CounterContext.Provider value={useCounterContext(initState)}>
      {children}
    </CounterContext.Provider>
  );
};
