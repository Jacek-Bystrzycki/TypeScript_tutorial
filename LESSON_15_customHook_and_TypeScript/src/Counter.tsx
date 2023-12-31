import { ReactNode } from 'react';
import { StateType } from './context/CounterContext';
import { useCounterContext } from './context/CounterContext';

const initState: StateType = { count: 0, text: '' };

type ChilderProp = {
  children: (n: number) => ReactNode;
};

const Counter = ({ children }: ChilderProp) => {
  const { state, increment, decrement, textHandleInput } = useCounterContext(initState);
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
