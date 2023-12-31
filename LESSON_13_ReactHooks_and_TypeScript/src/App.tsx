import {
  useState,
  useEffect,
  useCallback, //remember a function
  useMemo, //remember a value
  useRef,
  MouseEvent,
  KeyboardEvent,
} from 'react';

interface User {
  id: number;
  username: string;
}

type fibFn = (n: number) => number;

const fib: fibFn = (n) => {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
};

const myNum: number = 39;

function App() {
  //USESTATE=========================
  const [count, setCount] = useState<number>(0);
  // const [user, setUser] = useState<User | null>({} as User);
  // const [user, setUser] = useState<User|null>(null)
  const [users, setUsers] = useState<User[] | null>(null);

  //USEREF=========================
  const inputRef = useRef<HTMLInputElement>(null!);
  const inputRef1 = useRef<HTMLInputElement>(null);
  //custom typeguard
  // if (!inputRef1.current) //1st method
  console.log(inputRef1?.current);
  console.log(inputRef1?.current?.value); //2nd method

  //USEEFFECT=========================
  useEffect(() => {
    //logs 2x because of strict mode!!!
    console.log('Mounting');
    console.log(`Users: ${users}`);

    return () => console.log('Unmounting');
  }, [users]);

  // const addTwo = useCallback(()=>{
  //   setCount(prev=>prev+2)
  // },[])

  //USECALLBACK=========================
  //in case if we want pass event into function:
  const addTwo = useCallback(
    (
      ev: MouseEvent<HTMLButtonElement> | KeyboardEvent<HTMLButtonElement>
    ): void => {
      setCount((prev) => prev + 2);
    },
    []
  );

  //USEMEMO=========================
  //calculaet value only on mount or on dependency value change
  const fibResult = useMemo<number>(() => {
    return fib(myNum);
  }, [myNum]);
  //it calculate w result each time compenent rerender:
  // const fibResult = fib(myNum);

  return (
    <div className="App">
      <h1>{count}</h1>
      <button onClick={addTwo}>Add Two</button>
      <h2>{fibResult}</h2>
      <input ref={inputRef1} type="text" />
    </div>
  );
}

export default App;
