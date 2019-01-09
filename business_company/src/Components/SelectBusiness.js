import React, { Component } from 'react';
import '../App.css';
import CompanyFilter from './CompanyFilter.js'


class SelectBusiness extends Component {
  render() {
    return (
      <div>
        <header className="SelectBusiness">
          <text>Select business company</text>
        </header>
        <CompanyFilter></CompanyFilter>
      </div>
    );
  }
}

export default SelectBusiness;
