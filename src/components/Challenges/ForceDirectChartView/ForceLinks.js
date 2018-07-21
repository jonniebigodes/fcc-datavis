import React from 'react'
import PropTypes from 'prop-types'
import ForceLink from './ForceLink'

const ForceLinks = ({ graphLinks }) => {
  return (
    <g>
      {graphLinks.map(datum => {
        return (
          <ForceLink
            key={`line_${datum.source.code}_to_${datum.target.code}`}
            link={datum}
          />
        )
      })}
    </g>
  )
}

ForceLinks.propTypes = {
  graphLinks: PropTypes.arrayOf(
    PropTypes.shape({
      index: PropTypes.number,
      source: PropTypes.shape({
        code: PropTypes.string,
        country: PropTypes.string,
        index: PropTypes.number,
        vx: PropTypes.number,
        vy: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
      target: PropTypes.shape({
        code: PropTypes.string,
        country: PropTypes.string,
        index: PropTypes.number,
        vx: PropTypes.number,
        vy: PropTypes.number,
        x: PropTypes.number,
        y: PropTypes.number,
      }),
    })
  ),
}
export default ForceLinks
