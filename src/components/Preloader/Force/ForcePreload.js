import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './preloadForce.css'

class PreloadForce extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.endCounter()
    }, 6000)
  }

  render() {
    return (
      <div className="containerForce">
        <div className="Atom">
          <div className="Atom-core" />
          <div className="Atom-orbit Atom-orbit--left Atom-orbit--visible" />
          <div className="Atom-orbit Atom-orbit--right Atom-orbit--visible" />
          <div className="Atom-orbit Atom-orbit--top Atom-orbit--visible" />
          <div className="Atom-orbit Atom-orbit--left Atom-orbit--foreground">
            <div className="Atom-electron" />
          </div>
          <div className="Atom-orbit Atom-orbit--right Atom-orbit--foreground">
            <div className="Atom-electron" />
          </div>
          <div className="Atom-orbit Atom-orbit--top Atom-orbit--foreground">
            <div className="Atom-electron" />
          </div>
        </div>
      </div>
    )
  }
}
PreloadForce.propTypes = {
  endCounter: PropTypes.func,
}
export default PreloadForce
