import React, { Component } from 'react';
import './App.css';
import {load_google_maps, getVenues} from './Utils'

class App extends Component {

state = {
  google: {}
}
  componentDidMount (){
    // Start with getting data
    this.getStarted();
  }
  
  getStarted(){

    load_google_maps().then(result => {

      this.setState({google: result})
    })
    .catch(err=> console.log(err));
    ;
    getVenues().then(result => {
      this.setState({venuesdata: result.data.response.groups[0].items})
  }).catch(err=> console.log(err));

  }
  
  render() {
    return (
      <div className="App">
       
      </div>
    );
  }
}

export default App;
