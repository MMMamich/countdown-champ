import React, { Component } from 'react';
import './App.css';

class App extends Component{
  render(){
    return (
      <div className="App">
          <div className="App-title">Countdown till September 29, 2018</div>
          <div>
              <div className="Clock-days">45 days</div>
              <div className="Clock-hours">23 hours</div>
              <div className="Clock-minutes">24 minutes</div>
              <div className="Clock-seconds">11 seconds</div>
          </div>
          <div>
            <input placeholder="New Date"/>
            <button>Submit</button>
          </div>
      </div>
    )
  }
}

export default App;
