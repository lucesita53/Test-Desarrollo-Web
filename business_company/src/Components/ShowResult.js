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
    date: '',
    yesterday: '',
    openYesterday : '',
    highYesterday :'',
    lowYesterday : '',
    closeYesterday : '',
    difference: '',
    percentage: '',
    color: ''
  }

  componentDidMount() {
    this.calls.callWebService(this.onResponse, 'FB');
  }
  
  updateResult(newResult) {
    this.calls.callWebService(this.onResponse, newResult);
  }

   onResponse = ({open, high, low, close, date, yesterday, openYesterday, highYesterday, lowYesterday, closeYesterday}) =>{
     if (close != '') {
        var dif = parseFloat(close - closeYesterday).toFixed(2);
        this.percentage = "Percentage: " + parseFloat((dif / close)*100).toFixed(2) + " %";
        this.difference = "Difference: " + dif;
        if (this.percentage < 0) {
          this.color = 'rgba(255,0,0,0.7)';
        } else {
          this.color = 'rgba(0,255,0,0.7)'
        }
     } else {
        this.difference = "Sorry, there's no closing value available yet, try later";
     }

    this.setState({open: open,
      high :high,
      low: low,
      close: close,
      date: date,
      yesterday: yesterday,
      openYesterday : openYesterday,
      highYesterday : highYesterday,
      lowYesterday : lowYesterday,
      closeYesterday : closeYesterday,
      difference: this.difference,
      percentage: this.percentage,
      color: this.color});
  }

  render() {
    return (
        <div className="Result">
            <text>Date: {this.state.date} </text>
            <text>Open: {this.state.open} </text>
            <text>High: {this.state.high}</text>
            <text>Low: {this.state.low}</text>
            <text>Close: {this.state.close}</text>
            <text>Yesterday: {this.state.yesterday} </text>
            <text>Open: {this.state.openYesterday} </text>
            <text>High: {this.state.highYesterday}</text>
            <text>Low: {this.state.lowYesterday}</text>
            <text>Close: {this.state.closeYesterday}</text>
            <text style={{paddingTop: 10}}>{this.state.difference}</text>
            <div style={{color: this.state.color}}>
              <h4>{this.state.percentage}</h4>
            </div>
        </div>
    );
  }
}

export default ShowResults;