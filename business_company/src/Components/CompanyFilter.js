import React, { Component } from 'react';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'

const options = [
  'Facebook', 'Apple', 'Microsoft', 'Google', 'Amazon'
]
const defaultOption = options[0]

class CompanyFilter extends Component {
  render() {
    return (
      <div>
        <header>
          <Dropdown options={options} 
                    onChange={this._onSelect} 
                    value={defaultOption} 
                    placeholder="Select business company" />
        </header>
      </div>
    );
  }
}

export default CompanyFilter;
