import React, { Component } from 'react';
import './App.css';
import SelectBusiness from './Components/SelectBusiness';
import ShowResults from './Components/ShowResult';
import ShowImages from './Components/ShowImages';


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Test Web Development</h2>
        </header>
        <SelectBusiness></SelectBusiness>
        <body>
          <div className="App-body">
            <ShowResults></ShowResults>
            <ShowImages></ShowImages>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
