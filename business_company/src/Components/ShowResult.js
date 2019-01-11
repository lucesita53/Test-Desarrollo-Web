import React, { Component } from 'react';
import '../App.css';
import Calls from '../Constants/Calls';


class ShowResults extends Component {

  constructor(props){
    super(props);
    this.calls = new Calls();
  }

  state = {
    open: '',
    high :'',
    low: '',
    close: ''
  }

  componentDidMount() {
    this.calls.callWebService(this.onResponse, 'FB');
  }
  
  updateResult(newResult) {
    this.calls.callWebService(this.onResponse, newResult);
  }

   onResponse = ({open, high, low, close}) =>{
    this.setState({open: open,
      high :high,
      low: low,
      close: close});
  }

  render() {
    return (
        <div className="Result">
            <text>Open: {this.state.open} </text>
            <text>High: {this.state.high}</text>
            <text>Low: {this.state.low}</text>
            <text>Close: {this.state.close}</text>
            <text>%</text>
            <text>Difference</text>
        </div>
    );
  }
}

export default ShowResults;