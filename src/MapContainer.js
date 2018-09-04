import React, { Component } from 'react';
import {Map } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map className="App-map"
        google={this.props.google}
      >
      </Map>
    )
  }
}

export default MapContainer
