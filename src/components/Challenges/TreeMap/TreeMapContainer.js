import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TreeMapChart from './TreeMapChart'
import TreeToolTip from './TreeToolTip'
import TreeLegend from './TreeMapLegend'
import ErrorViewer from '../../ErrorViewer/ViewError'
import './treemap.scss'

class TreeMapContainer extends Component {
  // #region component props
  static propTypes = {
    treeMapWidth: PropTypes.number,
    tabActive: PropTypes.number,
    treeError: PropTypes.bool,
    treeloading: PropTypes.bool,
    treeMapTitle: PropTypes.string,
    treeMapDescription: PropTypes.string,
    getInfo: PropTypes.func,
    resizeTree: PropTypes.func,
    switchdataset: PropTypes.func,
  }
  // #endregion

  // #region component guardMethods
  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.setChartDimensions()

      window.addEventListener('resize', this.setChartDimensions)
    }
    this.props.getInfo()
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.setChartDimensions)
    }
  }
  // #endregion

  // #region handlers
  onClickHandler = e => {
    const { switchdataset } = this.props

    if (e.currentTarget.dataset.tab === 'tab-0') {
      return switchdataset(0)
    }
    if (e.currentTarget.dataset.tab === 'tab-1') {
      return switchdataset(1)
    }
    if (e.currentTarget.dataset.tab === 'tab-2') {
      return switchdataset(2)
    }
  }
  // #endregion

  // #region chart sizing
  setChartDimensions = () => {
    const { treeMapWidth, resizeTree } = this.props
    let currentWidth = 0
    let currentHeight = 0
    if (this.chartContainer) {
      currentWidth = this.chartContainer.getBoundingClientRect().width
      currentHeight = this.chartContainer.getBoundingClientRect().height
      currentWidth =
        this.chartContainer.getBoundingClientRect().width <= 768
          ? this.setChartWidth(
              this.chartContainer.getBoundingClientRect().width
            )
          : this.chartContainer.getBoundingClientRect().width
      currentHeight =
        this.chartContainer.getBoundingClientRect().width <= 768
          ? this.setChartWidth(
              this.chartContainer.getBoundingClientRect().height
            )
          : this.chartContainer.getBoundingClientRect().height
      if (currentWidth !== treeMapWidth) {
        resizeTree(currentWidth, currentHeight)
      }
    } else {
      currentWidth = window.innerWidth >= 960 ? 900 : window.innerWidth
      currentHeight = this.setChartWidth(window.innerHeight)
      if (currentWidth !== treeMapWidth) {
        resizeTree(currentWidth, currentHeight)
      }
    }
  }
  setChartWidth = value => {
    return value * 0.8
  }
  // #endregion

  render() {
    const {
      treeError,
      treeloading,
      treeMapTitle,
      treeMapDescription,
      tabActive,
    } = this.props
    if (treeError) {
      return <ErrorViewer />
    }
    if (treeloading) {
      return (
        <p>
          <span>fetching.....fetching</span>
        </p>
      )
    }
    return (
      <div
        ref={el => {
          this.chartContainer = el
        }}
        className="containerTreeMap">
        <div className="tabs vertical">
          <ul className="tabs-nav">
            <li
              data-tab="tab-0"
              className={tabActive === 0 ? 'active' : 'notactive'}
              onClick={this.onClickHandler}>
              Movies Tree
            </li>
            <li
              data-tab="tab-1"
              className={tabActive === 1 ? 'active' : 'notactive'}
              onClick={this.onClickHandler}>
              Videogames Tree
            </li>
            <li
              data-tab="tab-2"
              className={tabActive === 2 ? 'active' : 'notactive'}
              onClick={this.onClickHandler}>
              Kickstarter Tree
            </li>
          </ul>
          <div className="tabs-contents">
            <div id="title" className="treetitle">
              {treeMapTitle}
            </div>
            <div id="description" className="treeDescription">
              {treeMapDescription}
            </div>
            <div>
              <TreeMapChart />
            </div>
            <div>
              <TreeToolTip />
            </div>
            <div>
              <TreeLegend />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default TreeMapContainer
