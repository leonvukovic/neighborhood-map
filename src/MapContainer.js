import React, { Component } from 'react';
import {Map } from 'google-maps-react';

export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google}>

      </Map>
    )
  }
}

export default MapContainer
