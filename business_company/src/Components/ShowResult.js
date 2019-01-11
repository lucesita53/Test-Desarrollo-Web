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
    close: '',
    date: ''
  }

  componentDidMount() {
    this.calls.callWebService(this.onResponse, 'FB');
  }
  
  updateResult(newResult) {
    this.calls.callWebService(this.onResponse, newResult);
  }

   onResponse = ({open, high, low, close, date}) =>{
     //TODO: validar si son diferentes, calcular la diferencia y el %
     //TODO: Si el valor del % es negativo ponerle color rojo, sino verde
    this.setState({open: open,
      high :high,
      low: low,
      close: close,
      date: date});
  }

  render() {
    return (
        <div className="Result">
            <text>Date: {this.state.date} </text>
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