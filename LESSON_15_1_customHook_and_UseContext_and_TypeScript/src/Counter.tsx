import { ReactNode } from 'react';
import { useCount } from './customHook/useCount';
import { useText } from './customHook/useText';

type ChilderProp = {
  children: (n: number) => ReactNode;
};

const Counter = ({ children }: ChilderProp) => {
  const { count, increment, decrement } = useCount();
  const { text, textHandleInput } = useText();
  return (
    <>
      <h2>Counter: {children(count)}</h2>
      <div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
      <input type="text" onChange={textHandleInput} value={text} />
      <h2>{text}</h2>
    </>
  );
};
export default Counter;
