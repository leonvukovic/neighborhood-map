import React, { Component } from 'react'

class Places extends Component {
  // Clicked places list item
  openModal = (venues) => {
    console.log(venues.venue.name);
  }

  render() {
    // Map over data from state and make list of places
    const placesList = this.props.markers.map((venues, i) => {
      return <li onClick={(e) => this.openModal(venues, e)} key={i}>{venues.venue.name}</li>
    });

    return (
      <ol>{placesList}</ol>
    )
  }
}

export default Places
