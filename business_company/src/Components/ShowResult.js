import React, { Component } from 'react';
import '../App.css';


class ShowResults extends Component {
  render() {
    return (
        <div className="Result">
            <text>Open:</text>
            <text>High:</text>
            <text>Low:</text>
            <text>Close:</text>
            <text>%</text>
            <text>Difference</text>
        </div>
    );
  }
}

export default ShowResults;