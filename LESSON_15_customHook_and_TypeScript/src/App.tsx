import Counter from './Counter';

function App() {
  return (
    <div>
      <Counter children={(num: number) => <>{num}</>} />
    </div>
  );
}

export default App;
