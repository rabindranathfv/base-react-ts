import { Counter } from "./base/Counter";
import { CounterBy } from './base/CounterBy';

function App() {
  return (
    <>
      <h1>React</h1>
      <hr />
      <Counter initialValue={10}/>
      <CounterBy />
    </>
  );
}

export default App;
