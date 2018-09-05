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
      { this.props.venues.map(venue => {

        <Marker
        position={{ lat: 46.305746, lng: 16.336607 }}
        />
        
      }) }
      </GoogleMap>
    ));

    console.log(this.props.venues)

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
