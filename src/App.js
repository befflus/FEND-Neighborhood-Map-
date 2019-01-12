import React, { Component } from 'react';
import './App.css';
import {load_google_maps, getVenues} from './Utils'

class App extends Component {

  
  componentDidMount (){
    // Start with getting data
    this.getStarted();
  }
  
  getStarted(){

    load_google_maps().then(result => console.log(result))
    getVenues().then(result => console.log(result))
  }
  
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
