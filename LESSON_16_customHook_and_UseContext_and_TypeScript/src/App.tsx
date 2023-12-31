import Counter from './Counter';
import { CounterProvider } from './context/CounterContext';
import { initState } from './context/CounterContext';

function App() {
  return (
    <>
      <CounterProvider count={initState.count} text={initState.text}>
        <>
          <Counter children={(num: number) => <>{num}</>} />
        </>
      </CounterProvider>
    </>
  );
}

export default App;
