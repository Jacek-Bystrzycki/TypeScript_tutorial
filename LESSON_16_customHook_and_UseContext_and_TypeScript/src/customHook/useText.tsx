import { useContext, ChangeEvent } from 'react';
import { CounterContext } from '../context/CounterContext';

type UseTextTextType = {
  text: string;
  textHandleInput: (ev: ChangeEvent<HTMLInputElement>) => void;
};

export const useText = (): UseTextTextType => {
  const {
    state: { text },
    textHandleInput,
  } = useContext(CounterContext);
  return { text, textHandleInput };
};
