import React, { Component } from 'react';
import './App.css';
import ShowResults from './Components/ShowResult';
import ShowImages from './Components/ShowImages';
import all from './Images/All.png'


import Dropdown, {MenuItem}  from 'react-dropdown'
import 'react-dropdown/style.css'

const options = ['Facebook', 'Apple', 'Microsoft', 'Google', 'Amazon']
const optionsId = ['FB', 'AAPL', 'MSFT', 'GOOGL', 'AMZN']


class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      dropdown: options[0]
    }
  }

  _onSelect = ({value}) => {
    let index = options.indexOf(value) > -1 ? options.indexOf(value) : -1;
    this.carousel.updateCurrentItem(index);
    this.result.updateResult(index > -1 ? optionsId[index]: '');
    this.setState({dropdown: value})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <div style={{paddingLeft: 50, paddingRight: 50}}>
          <h2>Test Web Development</h2>
          <div>
            <img src={all} style={{width: 300}}/>
          </div>
        </div>
        <div style={{paddingLeft: 100}}>
          <ShowImages ref={component => this.carousel = component} />
        </div>

        </header>
        <body>
          <div className="SelectBusiness">
            <text>Select business company</text>
          </div>
          <div>
            <Dropdown options={options} 
                      onChange={this._onSelect} 
                      value={this.state.dropdown} 
                      placeholder="Select business company" />
          </div>
          <div className="App-body">
            <ShowResults ref={component => this.result = component}/>
          </div>
        </body>
      </div>
    );
  }
}

export default App;
