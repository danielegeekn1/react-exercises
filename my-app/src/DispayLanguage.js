import React from "react";
export class DisplayLanguage extends React.Component {
  render() {
    return (
      <DisplayLanguage.Consumer>
        {(language) => (
          <div>
            <h1>The current language is :{language}</h1>
          </div>
        )}
      </DisplayLanguage.Consumer>
    );
  }
}
