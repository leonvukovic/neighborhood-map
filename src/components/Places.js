import React, { Component } from 'react'

class Places extends Component {
  render() {

    // Map over data from state and make list of places
    const placesList = this.props.markers.map((venues, i) => {
      return (
        <li key={i}>{venues.venue.name}</li>
      )
    });

    return (
      <ol>{placesList}</ol>
    )
  }
}

export default Places
