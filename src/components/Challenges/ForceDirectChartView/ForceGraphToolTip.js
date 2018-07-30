import PropTypes from 'prop-types'
import React from 'react'
import './forceGraph.css'
import dummy from '../../../Assets/images/dummy.png'

const ForceGraphToolTip = ({ value }) => {
  return (
    <div key="container">
      <div
        style={{
          opacity: value ? 1 : 0,
        }}>
        {value ? (
          <div className="containerTooltip">
            <figure>
              <img src={value.flag} className="imgToolTip" alt={value.name} />
            </figure>
            <p>
              <span className="tooltipText">
                {value.name} Capital {value.capital} with {value.population}{' '}
                souls and area of {value.area} Km
              </span>
            </p>
          </div>
        ) : (
          <div className="containerTooltip">
            <figure>
              <img src={dummy} className="imgToolTip" alt="dummy" />
            </figure>
            <p>
              <span className="tooltipText">Nothing to see here</span>
            </p>
          </div>
        )}
      </div>
    </div>
  )
}
ForceGraphToolTip.propTypes = {
  value: PropTypes.shape({
    area: PropTypes.number,
    capital: PropTypes.string,
    flag: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.number,
  }),
}
export default ForceGraphToolTip
