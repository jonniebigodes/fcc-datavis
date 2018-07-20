import React, { Component } from 'react'
import Axios from 'axios'
import PropTypes from 'prop-types'
import { scaleOrdinal } from 'd3-scale'
import { hierarchy, treemap } from 'd3-hierarchy'
import uuid from 'uuid'

export const TreeContext = React.createContext()

export class TreeMapProvider extends Component {
  
  // #region Props
  static propTypes = {
    children:PropTypes.func
  }

  // #endregion

  // #region state
  state = {
    isloading: true,
    isError: false,
    toolTipActive: false,
    activeTree: {},
    toolTipData: {},
    videodata: [],
    moviesdata: {},
    kickdata: [],
    treeWidth: 0,
    treeHeight: 0,
    activeTab: 0,
  }
  // #endregion

  setDimensions = (valuewidth, valueHeight) => {
    const margin = { top: 20, right: 10, bottom: 10, left: 10 }
    this.setState({
      treeWidth: valuewidth - margin.left - margin.right,
      treeHeight: valueHeight - margin.top - margin.bottom,
    })
  }

  // #region fetch data
  fetchTreeData = () => {
    Axios.all([
      Axios.get(
        'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/video-game-sales-data.json'
      ),
      Axios.get(
        'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/movie-data.json'
      ),
      Axios.get(
        'https://cdn.rawgit.com/freeCodeCamp/testable-projects-fcc/a80ce8f9/src/data/tree_map/kickstarter-funding-data.json'
      ),
    ])
      .then(
        Axios.spread((videos, movies, kicks) => {
          const { treeWidth, treeHeight } = this.state
          const colours = scaleOrdinal().range([
            '#1F77B4',
            '#AEC7E8',
            '#FF7F0E',
            '#FFBB78',
            '#2CA02C',
            '#98DF8A',
            '#E12728',
            '#FF9896',
            '#9467BD',
            '#C5B0D5',
            '#8C564B',
            '#C49C94',
            '#E377C2',
            '#F7B6D2',
            '#7F7F7F',
            '#C7C7C7',
            '#BCBD22',
            '#DBDB8D',
            '#17BECF',
            '#9EDAE5',
          ])
          const DataTreeMap = treemap()
            .size([treeWidth, treeHeight])
            .paddingInner(1)
          const rootMovie = hierarchy(movies.data, d => d.children)
            .sum(d => d.value)
            .sort((a, b) => b.height - a.height || b.value - a.value)
            .eachBefore(
              d =>
                (d.data.id =
                  (d.parent ? `${d.parent.data.id  }.` : '') + d.data.name)
            )
          const rootVideoGames = hierarchy(videos.data, d => d.children)
            .sum(d => d.value)
            .sort((a, b) => b.height - a.height || b.value - a.value)
            .eachBefore(
              d =>
                (d.data.id =
                  (d.parent ? `${d.parent.data.id  }.` : '') + d.data.name)
            )
          const rootkickstarter = hierarchy(kicks.data, d => d.children)
            .sum(d => d.value)
            .sort((a, b) => b.height - a.height || b.value - a.value)
            .eachBefore(
              d =>
                (d.data.id =
                  (d.parent ? `${d.parent.data.id  }.` : '') + d.data.name)
            )

          DataTreeMap(rootMovie)
          const moviesTree = rootMovie.leaves().map(x => {
            return {
              key: uuid.v4(),
              cellPos: {
                posX: x.x0,
                posY: x.y0,
              },
              cellColor: colours(x.data.category),
              tileData: {
                idTile: x.data.id,
                tileName: x.data.name,
                tileCategory: x.data.category,
                tileValue: x.data.value,
                tileWidth: x.x1 - x.x0,
                tileHeight: x.y1 - x.y0,
                tileColor: colours(x.data.category),
              },
            }
          })
          const moviesLegend = rootMovie
            .leaves()
            .map(item => item.data.category)
            .filter((cat, index, selfcat) => {
              return selfcat.indexOf(cat) === index
            })
          const movieTreeData = {
            dataTree: moviesTree,
            legenddata: moviesLegend,
            treeTitle: 'Movie Sales',
            treeDescription: 'Top 100 Highest Grossing Movies Grouped By Genre',
          }
          DataTreeMap(rootVideoGames)

          const videogamesTree = rootVideoGames.leaves().map(i => {
            return {
              key: uuid.v4(),
              cellPos: {
                posX: i.x0,
                posY: i.y0,
              },
              cellColor: colours(i.data.category),
              tileData: {
                idTile: i.data.id,
                tileName: i.data.name,
                tileCategory: i.data.category,
                tileValue: i.data.value,
                tileWidth: i.x1 - i.x0,
                tileHeight: i.y1 - i.y0,
                tileColor: colours(i.data.category),
              },
            }
          })
          const gamesLegend = rootVideoGames
            .leaves()
            .map(item => item.data.category)
            .filter((cat, index, selfcat) => {
              return selfcat.indexOf(cat) === index
            })
          const videogameTreeData = {
            dataTree: videogamesTree,
            legenddata: gamesLegend,
            treeTitle: 'Video Game Sales',
            treeDescription:
              'Top 100 Most Sold Video Games Grouped by Platform',
          }
          DataTreeMap(rootkickstarter)

          const kickstartertree = rootkickstarter.leaves().map(x => {
            return {
              key: uuid.v4(),
              cellPos: {
                posX: x.x0,
                posY: x.y0,
              },
              cellColor: colours(x.data.category),
              tileData: {
                idTile: x.data.id,
                tileName: x.data.name,
                tileCategory: x.data.category,
                tileValue: x.data.value,
                tileWidth: x.x1 - x.x0,
                tileHeight: x.y1 - x.y0,
                tileColor: colours(x.data.category),
              },
            }
          })
          const kickstarterLegend = rootkickstarter
            .leaves()
            .map(item => item.data.category)
            .filter((cat, index, selfcat) => {
              return selfcat.indexOf(cat) === index
            })
          const kickstarterTreeData = {
            dataTree: kickstartertree,
            legenddata: kickstarterLegend,
            treeTitle: 'Kickstarter Pledges',
            treeDescription:
              'Top 100 Most Pledged Kickstarter Campaigns Grouped By Category',
          }
          this.setState({
            activeTree: movieTreeData,
            videodata: videogameTreeData,
            moviesdata: movieTreeData,
            kickdata: kickstarterTreeData,
            isloading: false,
          })
        })
      )
      .catch(error => {
        console.log('====================================')
        console.log(
          `error getting the chart data:${JSON.stringify(
            error.response,
            null,
            2
          )}`
        )
        console.log('====================================')
        this.setState({ isError: true })
      })
  }
  // #endregion

  // #region data manipulation
  showToolTip = value => {
    this.setState({
      toolTipData: value,
      toolTipActive: true,
    })
  }
  hideToolTip = () => {
    this.setState({ toolTipData: {}, toolTipActive: false })
  }
  switchData = value => {
    const { moviesdata, videodata, kickdata } = this.state
    if (value === this.state.activeTab) {
      return
    }
    if (value === 0) {
      this.setState({ activeTab: value, activeTree: moviesdata })
      return
    }
    if (value === 1) {
      this.setState({ activeTab: value, activeTree: videodata })
      return
    }
    if (value === 2) {
      this.setState({ activeTab: value, activeTree: kickdata })
    }
  }
  // #endregion

  render() {
    return (
      <TreeContext.Provider
        value={{
          ...this.state,
          getTreeData: this.fetchTreeData,
          saveTreeDimensions: this.setDimensions,
          toolTipActivate: this.showToolTip,
          toolTipDisable: this.hideToolTip,
          changeDataSet: this.switchData,
        }}>
        {this.props.children}
      </TreeContext.Provider>
    )
  }
}

