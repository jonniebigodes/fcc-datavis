import PropTypes from 'prop-types'
import uuid from 'uuid'
import React, { PureComponent } from 'react'
import MeteorPoint from './MeteorPoint'

class WorldMap extends PureComponent {
  onPointHover = value => {
    const { pointEnter } = this.props
    pointEnter(value)
  }
  onPointLeave = () => {
    const { pointExit } = this.props
    pointExit()
  }
  render() {
    const { world, meteorfall } = this.props

    const parsedWorld = world.map(d => (
      <path
        key={`path:${uuid.v4()}`}
        d={d.dpath}
        fill={d.fillInfo}
        stroke="#FFFFFF"
        strokeWidth={0.5}
      />
    ))

    const meteorsData = meteorfall.map((m, x) => (
      <MeteorPoint
        key={`mpoint_${m.name}_class_${m.meteorclass}`}
        data={{
          meteorname: m.name,
          meteorclass: m.meteorClass,
          datefell: m.date,
          mass: m.mass,
          rectangleLat: m.latitude,
          rectangleLong: m.longitude,
          circleId: x,
          circleArea: m.radius,
          circleFill: m.fillOp,
        }}
        meteorPointEnter={this.onPointHover}
        meteorPointExit={this.onPointLeave}
      />
    ))
    return (
      <g>
        {parsedWorld}
        {meteorsData}
      </g>
    )
  }
}
WorldMap.propTypes = {
  world: PropTypes.arrayOf(
    PropTypes.shape({
      dpath: PropTypes.string,
      fillInfo: PropTypes.string,
    })
  ),
  pointEnter: PropTypes.func,
  pointExit: PropTypes.func,
  meteorfall: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string,
      fillOp: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      mass: PropTypes.number,
      name: PropTypes.string,
      radius: PropTypes.number,
      meteorClass: PropTypes.string,
    })
  ),
}
export default WorldMap
