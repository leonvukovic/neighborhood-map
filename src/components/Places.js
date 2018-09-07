import React, { Component } from 'react'

class Places extends Component {
  // Clicked places list item
  openModal = () => {
    console.log('jeje');
  }

  render() {
    // Map over data from state and make list of places
    const placesList = this.props.markers.map((venues, i) => {
      return <li onClick={this.openModal} key={i}>{venues.venue.name}</li>
    });

    return (
      <ol>{placesList}</ol>
    )
  }
}

export default Places
