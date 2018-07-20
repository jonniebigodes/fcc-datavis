import React from 'react'
import { CloroContext } from '../../../contexts/CloropethContext'
import County from './County'

const CountyMap = () => (
  <CloroContext.Consumer>
    {({ countyData, statesData, activateToolTip, deactivateToolTip }) => (
      <svg
        height={650}
        width={960}
        viewBox="0 0 960 650"
        preserveAspectRatio="xMinYMin">
        <g className="counties">
          {countyData.map(d => (
            <County
              key={`counties_${d.id}`}
              countyData={d}
              setToolTipData={activateToolTip}
              clearToolTipData={deactivateToolTip}
            />
          ))}
          <path
            key="states"
            d={statesData}
            style={{
              fill: 'none',
              stroke: '#373737 ',
              strokeLinejoin: 'round',
            }}
          />
        </g>
      </svg>
    )}
  </CloroContext.Consumer>
)

export default CountyMap
