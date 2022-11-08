//import React, { useEffect } from "react";
import { useState } from "react";

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
  /*const [change, setChange] = useState(1);
  useEffect(() => {
    handleInputChange();
  }, [change]);
  const handleInputChange = (e) => {
    setChange(e.target.value);
  };
  */
  const handleCounter = () => {
    setInterval(() => {
      setCount((state) => {
        return {
          count: state.count + incrementsBy,
        };
      });
    }, 1000);
  };

  return (
    <div>
      <DisplayLanguage.Consumer>
        {(language) => {
          return (
            <div>
              {Strings[language].current_time}
              <h1>The current language is :{language}</h1>

              {/* <h1>{change}</h1>
              <input value={change} onChange={handleInputChange} /> */}
              <button onClick={handleCounter}>increments</button>
              <h1>{count}</h1>
            </div>
          );
        }}
        {/*<CounterButton />*/}
      </DisplayLanguage.Consumer>
    </div>
  );
}

//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component.

//Create a ClickCounter class component that increments a counter every time a user clicks on a button. Render both the current value of the counter and the button within the ClickCounter component

//Add a side effect to the ClickCounter component from useState 01
//that calls a onCounterChange function with the current value of the counter every time value of the counter changes.
//The function should be received as a prop
