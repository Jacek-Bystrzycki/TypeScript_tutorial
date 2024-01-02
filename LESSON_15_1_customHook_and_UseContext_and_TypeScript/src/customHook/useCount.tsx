import { useContext } from 'react';
import { CounterContext } from '../context/CounterContext';

type UseCountHookType = {
  count: number;
  increment: () => void;
  decrement: () => void;
};

export const useCount = (): UseCountHookType => {
  const {
    state: { count },
    increment,
    decrement,
  } = useContext(CounterContext);
  return { count, increment, decrement };
};
