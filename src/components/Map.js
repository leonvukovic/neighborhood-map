import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render() {
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    const GoogleMapLoader = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { 13 }
      >
      </GoogleMap>
    ));

    return (
      <div>
        <GoogleMapLoader
          containerElement = { mapContainer }
          mapElement = { <div style={{ height: '100%' }} /> }
        />
      </div>
    )
  }
}

export default Map
