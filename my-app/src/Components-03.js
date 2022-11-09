//Write a class component called `App` that renders the `Hello` component within a `div` tag.
import React, { useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
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
//import { ShowGitHubUser } from "./ShowGitHubUser";
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
//react-router-02 ex
//Add a new Route to the /counter path
// that renders the Counter component from useState 01

//react-router-04 ex
//Add three Links within the main App component and use them
//to navigate to all three routes.

//react-router-05 ex
//Add a Not Found route that renders when a user navigates to a path that does not exist
export function App() {
  const [language, setLanguage] = useState("en");
  function handleLanguageChange(e) {
    setLanguage(e.target.value);
  }
  return (
    <div>
      <div>
        <Link to="/">Home</Link>||<Link to="/counter">Counter</Link>||
        <Link to="users/:username">Username list </Link>||
        <Link to="githubuser"></Link>
      </div>
      <Routes>
        <Route path="/" element={<Welcome name="daniele" />}></Route>
        <Route path="/counter" element={<Counter />} />
        {/* <Route path="users/:username" element={<ShowGitHubUser />}>
          <Route
            path="githubuser"
            element={<GitHubUser username="gianmarcotoso" />}
          />
          Show github user route
        </Route> */}

        <Route
          path="*"
          element={
            <div>
              <p>This page does not exist, go back to the home page</p>
              <Link to="/">Go Home</Link>
            </div>
          }
        />
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
