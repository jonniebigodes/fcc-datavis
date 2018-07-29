import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './tree.css'

class TreeLoader extends PureComponent {
  static propTypes = {
    endLoading: PropTypes.func,
  }
  componentDidMount() {
    this.timerID= setTimeout(() => {
        this.props.endLoading();
    }, 5000);
  }
  render() {
    return (
      <div className="preload">
        <div className="preloadProgress">
          <div className="progress-bar" />
          <div className="progress-bar" />
          <div className="progress-bar" />
          <div className="loadText">LOADING TREE...</div>
        </div>
       
      </div>
    )
  }
}
export default TreeLoader
