import { useState, useEffect } from "react";
import { CounterButton } from "./CounterButton";
import { DisplayLanguage } from "./LanguageContext";
const Strings = {
  en: {
    current_time: "Current time is",
  },
  it: {
    current_time: "la ora attuale è ",
  },
};
/*
export class ClickCounter extends React.Comonent {
  state = {
    count: this.props.initialValue,
  };
  handleCounter = (e) => {
    console.log(e);
    this.setState((state) => {
      return {
        count: state.count + this.props.incrementsBy,
      };
    });
  };
  render() {
    return (
      <div>
        <DisplayLanguage.Consumer>
          {(language) => {
            return (
              <div>
                {Strings[language].current_time}
                <h1>{this.state.count}</h1>
                <button onClick={this.handleCounter}></button>
              </div>
            );
          }}
          <CounterButton />
        </DisplayLanguage.Consumer>
      </div>
    );
  }
}
*/
export function ClickCounter({ initialValue, incrementsBy }) {
  const [count, setCount] = useState(initialValue);
  function handleCounter(e) {
    console.log(e);
    setCount((state) => {
      return {
        count: state.count + incrementsBy,
      };
    });
  }

  useEffect(
    (e) => {
      setCount(e.current.value);
    },
    [count]
  );
  return (
    <div>
      <DisplayLanguage.Consumer>
        {(language) => {
          return (
            <div>
              {Strings[language].current_time}
              <h1>{count}</h1>
              <button onClick={handleCounter}></button>
              <button></button>
            </div>
          );
        }}
        <CounterButton />
      </DisplayLanguage.Consumer>
    </div>
  );
}
//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component
