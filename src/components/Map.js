import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  // Clicked marker data
  openModal = (marker) => {
    this.props.openModal && this.props.openModal(marker);
  }

  render() {
    // Variable that holds filtered markers
    let showingMarkers

    // Filter the markers based on the query
    if (this.props.query) {
      const match = new RegExp(escapeRegExp(this.props.query), 'i')
      showingMarkers = this.props.markers.filter((venues) => match.test(venues.venue.name))
    } else {
      showingMarkers = this.props.markers
    }

    // Google map container position and size
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    // Map over data from state and make markers
    const markers = showingMarkers.map((venues, i) => {
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
      const cashData = (clickedMarker) => {
        const markerData = marker;
        this.openModal(markerData);
      };

      // Render map component
      return <Marker key={i} {...marker} onClick={cashData}/>
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
