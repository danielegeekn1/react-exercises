//ex custom hooks-01
//Create a custom hook `useCounter` that keeps track of the state of a counter, and returns the current value of the counter
// as well as three functions to increment, decrement and reset the counter.
import { useCallback, useState } from "react";
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

  const incrementCounter = useCallback(() => {
    setCount((c) => c + incrementor);
  }, [incrementor]);

  const decrementCounter = useCallback(() => {
    setCount((c) => c - incrementor);
  }, [incrementor]);
  const resetCounter = useCallback(() => {
    setCount(initialValue);
  }, [initialValue]);
  return {
    count,
    onIncrement: incrementCounter,
    onDecrement: decrementCounter,
    onReset: resetCounter,
  };
}
//ex useCallback
//Modify the useCounter custom hook from Custom Hooks 01
// to use the useCallback to memoize the functions used to increment, decrement and reset the counter
