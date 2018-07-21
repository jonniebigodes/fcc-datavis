import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './preloader-scatter.scss'

class Counter extends Component {
  state = { loadStage: 0 }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateLoadStage(), 2500)
  }
  componentWillUnmount() {
    clearTimeout(this.timerID)
  }
  updateLoadStage() {
    const { loadStage } = this.state
    if (loadStage >= 10) {
      const { endCounter } = this.props
      endCounter()
    } else {
      this.setState(prevState => {
        return { loadStage: prevState.loadStage + 1 }
      })
    }
  }
  render() {
    const { loadStage } = this.state
    return (
      <div className="containerCounter">
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
        <div className={`itemCounter-${loadStage} flip`} />
      </div>
    )
  }
}
Counter.propTypes = {
  endCounter: PropTypes.func,
}
export default Counter
