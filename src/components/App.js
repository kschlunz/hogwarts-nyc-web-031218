import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import PigPen from '../container/PigPen';


class App extends Component {
  render() {
    return (
      <div className="App">
          < Nav />

        <PigPen hogs={hogs}/>
        
      </div>
    )
  }
}

export default App;
