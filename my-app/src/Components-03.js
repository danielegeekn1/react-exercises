//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Age } from "./Age";
import { ClickCounter } from "./ClickCounter";
import { ClickTracker } from "./ClickTracker";
import { Color } from "./Color";
import { Hello } from "./Component-02";

import { ControlInputs } from "./ControlInputs";

import { Counter } from "./Counter";
import { CounterButton } from "./CounterButton";
import { CounterDisplay } from "./CounterDisplay";
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";

import { InteractiveWelcome } from "./InteractiveWelcome";
import { DisplayLanguage } from "./LanguageContext";
import { Login } from "./Login";
import { Welcome } from "./Props-01";
import { Sum } from "./Sum";
import { TodoList } from "./TodoList";
const items = [
  { id: 1, name: "green" },
  {
    id: 2,
    name: "red",
  },
  {
    id: 3,
    name: "white",
  },
  {
    id: 4,
    name: "blue",
  },
];

const ItemsF = ["billy", "kate", "jane"];

/*
export class App extends React.Component {
  state = {
    language: "en",
  };
  

  handleLanguageChange = (e) => {
    this.setState({
      language: e.target.value,
    });
  };

  render() {
    return (
      <div>
        <select
          value={this.state.language}
          onChange={this.handleLanguageChange}
        >
          <option value="en">ENGLISH</option>
          <option value="it">ITALIAN</option>
        </select>

        <DisplayLanguage.Provider value={this.state.language}>
          <GitHubUser username="gianmarcotoso" />
          <ControlInputs />
          <Counter />
          <GitHubUserList />
          <Age name="daniele" age={25} />
          <CounterButton initialValue={1} incrementsBy={1} />

          <Counter initialValue={0} incrementor={1} timeout={1000} />
          <CounterDisplay initialValue={1} />
          <InteractiveWelcome />

          <Login />
          <Sum number1={1} number2={3} />
          <Hello />
          <Welcome name="Daniele" age={33} />
          <Color items={items} />
          <ClickTracker />
          <TodoList items={ItemsF} />
          <ClickCounter initialValue={3} incrementsBy={1} />
          <Container>
             {(position) => {
            const [x, y] = position;
            return (
              <div>
                The current position is{x},{y}
              </div>
            );
          }}
            {(title) => {
              title = ["My Title", "My Title 2"];
              const [title1, title2] = title;
              return (
                <div>
                  <h1>
                    The first title is {title1}, while the second one is{title2}
                  </h1>
                </div>
              );
            }}
          </Container>
        </DisplayLanguage.Provider>
      </div>
    );
  }
}


*/
export function App() {
  const [language, setLanguage] = useState("en");
  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name="daniele" />}></Route>
      </Routes>

      <select value={language} onChange={handleLanguageChange}>
        <option value="en"></option>
        <option value="it"></option>
      </select>
      <DisplayLanguage.Provider value={language}>
        <GitHubUser username="gianmarcotoso" />
        <ControlInputs />
        <Counter />
        <GitHubUserList />
        <Age name="daniele" age={25} />
        <CounterButton initialValue={1} incrementsBy={1} />

        <Counter initialValue={0} incrementor={1} timeout={1000} />
        <CounterDisplay initialValue={1} />
        <InteractiveWelcome />

        <Login />
        <Sum number1={1} number2={3} />
        <Hello />
        <Welcome name="Daniele" age={33} />
        <Color items={items} />
        <ClickTracker />
        <TodoList items={ItemsF} />
        <ClickCounter initialValue={3} incrementsBy={1} />
      </DisplayLanguage.Provider>
    </div>
  );
}
//context-02
//Consume the LanguageContext within the DisplayLanguage component by using the context consumer
//and show the selected language in an h1 tag
