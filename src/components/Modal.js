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
          {this.props.children}
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
