import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class TreeTile extends PureComponent {
  // #region propTypes
  static propTypes = {
    tileContents: PropTypes.shape({
      idTile: PropTypes.string,
      tileName: PropTypes.string,
      tileCategory: PropTypes.string,
      tileValue: PropTypes.string,
      tileWidth: PropTypes.number,
      tileHeight: PropTypes.number,
      tileColor: PropTypes.string,
    }),
    eraseToolTipData: PropTypes.func,
    setToolTipData: PropTypes.func,
  }
  // #endregion

  // #region event handlers
  onMouseOverHandler = () => {
    const { tileContents, setToolTipData } = this.props
    setToolTipData({
      dataname: tileContents.tileName,
      datacategory: tileContents.tileCategory,
      datavalue: tileContents.tileValue,
    })
  }
  onMouseOutHandler = () => {
    this.props.eraseToolTipData()
  }

  // #endregion

  render() {
    const { tileContents } = this.props
    return (
      <g>
        <rect
          key={`tile_${tileContents.idTile}`}
          id={tileContents.idTile}
          className="tile"
          width={tileContents.tileWidth}
          height={tileContents.tileHeight}
          data-name={tileContents.tileName}
          data-category={tileContents.tileCategory}
          data-value={tileContents.tileValue}
          fill={tileContents.tileColor}
          onMouseOver={this.onMouseOverHandler}
          onMouseOut={this.onMouseOutHandler}
          onFocus={this.onMouseOverHandler}
          onBlur={this.onMouseOutHandler}
        />
      </g>
    )
  }
}
export default TreeTile
