import React, { Component } from 'react';
import './App.css';

import Entry from './components/entry.js';

class App extends Component {
  
  state = {
    isLoading: true,
    data: null,
    error: null
  };

  componentDidMount() {
    this.setState({isLoading: true});

    fetch('/bugdrop/completed')
      .then(response => response.json())
      .then(data => this.setState({ isLoading:false, data:data }))
      .catch(error => this.setState({ isLoading:false, error }));
  };

  render() {
    const {data, isLoading, error} = this.state;

    if(error) {
      return (
        <div>{error.message}</div>
      );
    }

    if (isLoading) {
      return (
        <div>Loading</div>
      );
    }

    return (
      <table className="entryList">
        <thead>
          <tr>
            <th>Player ID</th>
            <th>Completion Time</th>
            <th>Attempt Number</th>
            <th>Collectables</th>
          </tr>
        </thead>
        <tbody>
          {data.map((entry, index) =>
            <Entry information={entry} key={index}/>
          )}
        </tbody>
      </table>
    );
  }
}

export default App;