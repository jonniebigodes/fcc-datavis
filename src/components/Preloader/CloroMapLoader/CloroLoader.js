import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './cloro.css'

class CloroLoader extends PureComponent {
  static propTypes = {
    endLoader: PropTypes.func,
  }

  state = {
    loadStage: 0,
  }
  componentDidMount() {
    this.timerID = setInterval(() => this.updateLoadStage(), 1200)
  }
  componentWillUnmount() {
    clearTimeout(this.timerID)
  }

  setLoaderText() {
    const { loadStage } = this.state
    switch (true) {
      case loadStage < 2:
        return 'Contacting server...'
      case loadStage < 5:
        return 'Server response obtained'
      case loadStage < 7:
        return 'Parsing data'
      default:
        return 'Generating map'
    }
  }
  updateLoadStage() {
    const { loadStage } = this.state
    if (loadStage >= 10) {
      this.props.endLoader()
    } else {
      this.setState(prevState => {
        return { loadStage: prevState.loadStage + 1 }
      })
    }
  }
  render() {
    return (
      <div className="container">
        <h2>{this.setLoaderText()}</h2>
        <div className="circular-container">
          <div className="circle circular-loaderOuter">
            <div className="circle circular-loaderInner" />
          </div>
        </div>
      </div>
    )
  }
}
export default CloroLoader
