import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  render() {
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    const markers = this.props.markers.map((myVenue, i) => {
      const marker = {
        position: {
          lat: myVenue.venue.location.lat,
          lng: myVenue.venue.location.lng
        }
      }
      return <Marker key={i} {...marker} />
    })

    const GoogleMapLoader = withGoogleMap(props => (
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { 13 }
      >{ markers }</GoogleMap>
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
