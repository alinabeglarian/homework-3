import React from 'react';
import './App.css';



export default class App extends React.Component {
  state = {
    data: [
      {
        name: "Ivel Z3",
        manufacturer: "Ivasim",
        year: 1969,
        origin: "Croatia"
      },
      {
        name: "Bally Astrocade",
        manufacturer: "Bally Consumer Products",
        year: 1977,
        origin: "USA"
      },
      {
        name: "Sord M200 Smart Home Computer",
        manufacturer: "Sord Computer Corporation",
        year: 1971,
        origin: "Japan"
      },
      {
        name: "Commodore 64",
        manufacturer: "Commodore",
        year: 1982,
        origin: "USA"
      }
    ]
  }

  updateSelection = (event) => {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.value} onChange={this.updateSelection}>
          <option value="">-- Pick a model --</option>
          {this.state.data.map((data) => 
          <option key={data.name} value={data.name}>{data.name} ({data.year})</option>)}
        </select>
      </div>
    )
  }
}


