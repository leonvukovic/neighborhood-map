import React, { Component } from 'react';
import { GoogleApiWrapper } from 'google-maps-react';
import MapContainer from './MapContainer';
import axios from 'axios';
import './App.css';

class App extends Component {

  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "RBCZ3PMP2LKASH0HSVROBYWNQIIL2W0KDUG5U3EM3VGJWOPB",
      client_secret: "BKBSL1SEYCQJIC5D5HLORDHGO1XI51MHDSWZLQCWKKSFKUT1",
      query: "food",
      near: "Varaždin",
      v: "20180409"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response.data.response.groups[0].items);
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

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
