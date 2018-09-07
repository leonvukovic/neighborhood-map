import React, { Component } from 'react';
import Map from './components/Map';
import Modal from './components/Modal';
import Places from './components/Places';
import axios from 'axios';
import './App.css';

class App extends Component {

  state = {
    venues: [],
    show: false,
    openMarker: [],
    activeMarker: false,
    query: ''
  }

  updateMarker = (marker) => {
    this.setState({
      activeMarker: true
    })
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() })
  }

  showModal = (marker) => {
    this.setState({
      ...this.state,
      show: !this.state.show,
      openMarker: marker
    });
  }

  componentDidMount() {
    this.getVenues()
  }

  // Get Forsquare data
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
        // console.log(response.data.response.groups[0].items);
        this.setState({
          // Data in state
          venues: response.data.response.groups[0].items
        })
      })
      .catch(error => {
        console.log("ERROR!! " + error)
      })
  }

  render() {
    // Map center
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
          <div className="App-search">
            <input
              className="App-search-places"
              type="text"
              placeholder="Search places"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}
            />
          </div>
          <Places openModal={this.showModal} places={this.state.venues} query={this.state.query}/>
        </nav>

        <div className="App-map">
          <Map openModal={this.showModal} center={mapCenter} markers={this.state.venues} query={this.state.query} modal={this.state.show} icon={this.state.activeMarker} changeIcon={this.updateMarker}/>
        </div>

        <div>
          <Modal onClose={this.showModal} show={this.state.show} markerData={this.state.openMarker}>
          </Modal>
        </div>
      </div>
    );
  }
}

export default App
