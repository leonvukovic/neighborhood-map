import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
  render() {
    // Google map container position and size
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    // Map over data in state and make markers
    const markers = this.props.markers.map((venues, i) => {
      // Individual marker
      const marker = {
        position: {
          lat: venues.venue.location.lat,
          lng: venues.venue.location.lng
        },
        title: venues.venue.name,
        address: venues.venue.location.address
      }

      // Marker on click
      const onMarkerClick = (clickedMarker) => {
        console.log(marker.title, marker.position.lat, marker.position.lng, marker.address);
      };

      // Render map component
      return <Marker key={i} {...marker} onClick={onMarkerClick}>
      </Marker>
    });

    const GoogleMapLoader = withGoogleMap(props => (
      // Google map
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { 13 }
      >{ markers }</GoogleMap>
    ));

    return (
      // Google map renderd wrapper
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
