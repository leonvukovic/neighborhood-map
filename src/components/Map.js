import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps'

class Map extends Component {
  state = {
    markerUrl: 'http://maps.google.com/mapfiles/ms/icons/blue-dot.png'
  }

  changeIcon = (markerData) => {
    this.setState({
      markerUrl: 'http://maps.google.com/mapfiles/ms/icons/red-dot.png'
    });
  }

  // Clicked marker data
  openModal = (marker) => {
    this.props.openModal && this.props.openModal(marker);
    //this.props.changeIcon && this.props.changeIcon(marker);
    console.log(marker.venue.id);
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

      function toggleBounce() {
        if (this.getAnimation() !== null) {
          this.setAnimation(null);
        } else {
          this.setAnimation(window.google.maps.Animation.BOUNCE);
        }
      }

      // Marker on click
      const cashData = (clickedMarker) => {
        const markerData = marker.venues;
        this.openModal(markerData);
      };

      // Render map component
      return <Marker key={i} {...marker} onClick={toggleBounce,cashData}/>
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
