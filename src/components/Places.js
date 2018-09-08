import React, { Component } from 'react';
import escapeRegExp from 'escape-string-regexp';

class Places extends Component {
  // Clicked places list item
  openModal = (marker) => {
    this.props.openModal && this.props.openModal(marker);
  }

  render() {
    // Variable that holds filtered places
    let showingPlaces

    // Filter the places based on the query
    if (this.props.query) {
      const match = new RegExp(escapeRegExp(this.props.query), 'i')
      showingPlaces = this.props.places.filter((venues) => match.test(venues.venue.name))
    } else {
      showingPlaces = this.props.places
    }

    // Map over data from state and make list of places
    const placesList = showingPlaces.map((venues, i) => {
      return <li onClick={(e) => this.openModal(venues, e)} key={i}>{venues.venue.name}</li>
    });

    return (
      <ol>
        {placesList}
      </ol>
    )
  }
}

export default Places
