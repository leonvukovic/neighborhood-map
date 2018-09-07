import React, { Component } from 'react'

class Modal extends Component {
  onClose = (e) => {
    this.props.onClose && this.props.onClose(e);
  }


  render() {
    if(!this.props.show) {
      return null;
    }
    return (
      <div className='App-modal-background'>
        <div className='App-modal'>
          <p><strong>title:</strong> {this.props.markerData.title}</p>
          <p><strong>lat:</strong> {this.props.markerData.position.lat}</p>
          <p><strong>lng:</strong> {this.props.markerData.position.lng}</p>
          <p><strong>address:</strong> {this.props.markerData.address}</p>
          <div className='App-modal-button'>
            <button onClick={(e) => { this.onClose(e) }}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal
