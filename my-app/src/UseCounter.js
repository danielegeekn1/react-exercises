//ex custom hooks-01
//Create a custom hook `useCounter` that keeps track of the state of a counter, and returns the current value of the counter
// as well as three functions to increment, decrement and reset the counter.
import { useState } from "react";
export function useCounter(initialValue = 0, incrementor = 1) {
  const [count, setCount] = useState(initialValue);
  /*
  useEffect(() => {
    const _CounterCount = setInterval(() => {
      console.log("i re-rendered ");
      setCount(() => {
        return {
          count: initialValue + incrementor,
        };
      });
    }, timeout);
    return () => {
      clearInterval(_CounterCount);
    };
  }, [initialValue, incrementor, timeout]);
  */
  function incrementCounter() {
    setCount((c) => c + incrementor);
  }
  function decrementCounter() {
    setCount((c) => c - 1);
  }
  function resetCounter() {
    setCount(initialValue);
  }
  return {
    count,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onReset: resetCounter,
  };
}
