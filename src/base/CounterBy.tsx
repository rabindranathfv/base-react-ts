import { useState } from "react"

interface CounterState {
  counter: number;
  clicks: number;
}

interface ICounterBy {
  initialValue?: number;
}

export const CounterBy = ( { initialValue = 0}: ICounterBy) => {

  const [{ counter, clicks }, setCounter] = useState<CounterState>({
    counter: initialValue,
    clicks: 0
  });

  const handleClick = ( val: number ) => {
    setCounter( ({ clicks, counter}) => {
      return {
        counter: counter + val,
        clicks: clicks + 1
      }
    })
  }
  return (
    <>
      <h1> CounterBy: {counter}</h1>
      <h1> CounterBy Clicks: {clicks}</h1>

      <button onClick={ () => handleClick(1)} >
        +1
      </button>
      <button onClick={() => handleClick(5)} >
        +5
      </button>
    </>
  )
}
