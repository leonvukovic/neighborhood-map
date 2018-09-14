import React, { Component } from 'react';
import { Marker } from 'react-google-maps';

class CustomMarker extends Component {
  state = {
    markerUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  }

  render() {
    // Map over data from state and make markers
    const markers = this.props.markers.map((venues, i) => {
      // Individual marker
      const marker = {
        defaultIcon: this.state.markerUrl,
        position: {
          lat: venues.venue.location.lat,
          lng: venues.venue.location.lng
        },
        title: venues.venue.name,
        address: venues.venue.location.address,
        //animation: window.google.maps.Animation.DROP,
        venues: venues
      }

      // Render map component
      return <Marker key={i} {...marker}/>
    });

    return (
      <div>{markers}</div>
    )
  }
}

export default CustomMarker
