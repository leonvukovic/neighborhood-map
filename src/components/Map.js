import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';
import CustomMarker from './Marker';
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps';

class Map extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.profile != nextProps.profile) {
        return true;
    }

    if (this.props.map != nextProps.map) {
        return true;
    }

    if (this.state == nextState) {
        return false;
    }

    return true;
  }
  // Clicked marker data
  openModal = (marker) => {
    this.props.openModal && this.props.openModal(marker);
    //this.props.changeIcon && this.props.changeIcon(marker);
    console.log(marker.venue.id);
  }

  render() {
    // Google map container position and size
    const mapContainer = <div style={{ height: '100%', width: '100%', position: 'absolute' }} />

    const GoogleMapLoader = withScriptjs(withGoogleMap(props => (
      // Google map
      <GoogleMap
        defaultCenter = { this.props.center }
        defaultZoom = { 13 }
      ><CustomMarker  markers={this.props.markers}/></GoogleMap>
    )));

    return (
      // Google map renderd wrapper
      <div>
        <GoogleMapLoader
          googleMapURL= "https://maps.googleapis.com/maps/api/js?libraries=visualization&key=AIzaSyBX_gcT9_iiz8kp_BuYe0vxLw6HNqRbnRY"
          loadingElement= { <div style={{ height: `100%` }} />}
          containerElement = { mapContainer }
          mapElement = { <div style={{ height: '100%' }} /> }
        />
      </div>
    )
  }
}

export default Map
