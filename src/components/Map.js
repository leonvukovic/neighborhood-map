import React, { Component } from 'react'
import { withGoogleMap, GoogleMap, Marker, InfoWindow } from 'react-google-maps'

class Map extends Component {
  render() {
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    const markers = this.props.markers.map((venues, i) => {
      const marker = {
        position: {
          lat: venues.venue.location.lat,
          lng: venues.venue.location.lng
        },
        title: venues.venue.name
      }

      const onMarkerClick = (clickedMarker) => {
        console.log(marker.title);
      };

      return <Marker key={i} {...marker} onClick={onMarkerClick}>
      </Marker>
    });

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
