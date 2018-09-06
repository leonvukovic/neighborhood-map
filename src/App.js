import React, { Component } from 'react';
import Map from './components/Map';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    venues: []
  }

  componentDidMount() {
    this.getVenues()
  }

  getVenues = () => {
    const endPoint = "https://api.foursquare.com/v2/venues/explore?"
    const parameters = {
      client_id: "RBCZ3PMP2LKASH0HSVROBYWNQIIL2W0KDUG5U3EM3VGJWOPB",
      client_secret: "BKBSL1SEYCQJIC5D5HLORDHGO1XI51MHDSWZLQCWKKSFKUT1",
      query: "pizza",
      near: "Varaždin",
      v: "20180409"
    }

    axios.get(endPoint + new URLSearchParams(parameters))
      .then(response => {
        console.log(response.data.response.groups[0].items)
        this.setState({
          venues: response.data.response.groups[0].items
        })
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

  render() {
    const mapCenter = {
      lat: 46.305746,
      lng: 16.336607
    }

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to React Neighborghood-map app</h1>
        </header>
        <nav className="App-menu">
        menu
        </nav>

        <div className="App-map">
          <Map center={mapCenter} markers={this.state.venues}/>
        </div>
      </div>
    );
  }
}

export default App
