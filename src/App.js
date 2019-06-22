import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import ModelDetails from './ModelDetails';

const data = [
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

class App extends React.Component {
  state = {
    data,
    }
  
  updateSelection = (event) => {
    this.setState({ selectedValue: event.target.value });
  }

  addModel = () => {
    const selectedModel = data.filter(model => model.name === this.state.selectedValue)
    this.props.dispatch({
      type: 'ADD_MODEL',
      payload: {
        ...selectedModel[0]
      }
    })
  }

  render() {
    return (
      <div className="App">
        <ModelDetails state={this.props.reduxsState} />

        <select value={this.state.selectedValue} onChange={this.updateSelection}>
          <option value="">-- Pick a model --</option>
          {this.state.data.map((data) => 
          <option key={data.year} value={data.name}>{data.name} ({data.year})</option>)}
        </select>
        <button onClick={this.addModel}>Add</button>
      </div>
    )
  }
}

const mapStateToProps = (reduxsState) => {
  return {
    reduxsState
  }
}

export default connect(mapStateToProps)(App)
