import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Neighborghood-map app</h1>
        </header>
        <nav className="App-menu">
        test          
        </nav>
        <MapContainer google={this.props.google}/>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCSXDAwIgD_Hc4vXEHKsdOdKymZ99BHw0k'
})(App)
