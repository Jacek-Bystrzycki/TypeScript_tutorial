import { ReactNode } from 'react';

type CounterProps = {
  setCount: React.Dispatch<React.SetStateAction<number>>;
  children: ReactNode;
};

const Counter = (props: CounterProps) => {
  return (
    <>
      <h3>{props.children}</h3>
      <button type="button" onClick={() => props.setCount((prev) => prev - 1)}>
        -
      </button>
      <button type="button" onClick={() => props.setCount((prev) => prev + 1)}>
        +
      </button>
    </>
  );
};
export default Counter;
