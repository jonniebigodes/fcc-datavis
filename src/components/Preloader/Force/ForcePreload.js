import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './preloadForce.scss'

class PreloadForce extends Component {
  state = { loadStage: 0 }

  componentDidMount() {
    this.timerID = setInterval(() => this.updateLoadState(), 1000)
  }
  componentWillUnmount() {
    clearTimeout(this.timerID)
  }
  updateLoadState() {
    const { loadStage } = this.state
    if (loadStage >= 15) {
      this.props.endCounter()
    } else {
      this.setState(prevState => {
        return { loadStage: prevState.loadStage + 1 }
      })
    }
  }
  render() {
    const { loadStage } = this.state
    return (
      <div className="containerForce">
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
        <div className={`itemForce-${loadStage}`} />
      </div>
    )
  }
}
PreloadForce.propTypes = {
  endCounter: PropTypes.func,
}
export default PreloadForce
