import React from 'react'
import uuid from 'uuid'
import { CloroContext } from '../../../contexts/CloropethContext'
import './cloropeth-style.css'

const Clorolegend = () => (
  <CloroContext.Consumer>
    {({ cloroLegendData }) => (
      <svg id="legend" height="30px" width="95%">
        <g>
          {cloroLegendData.map(d => (
            <g key={`glegend_${uuid.v4()}`}>
              <rect
                key={`legend${uuid.v4()}`}
                x={d.cellX}
                style={{
                  fill: d.educationcolor,
                  width: '35px',
                  height: '30px',
                }}
              />
              <text className="infoLegend" x={d.cellX} y={20}>
                {d.educationpercentage}
              </text>
            </g>
          ))}
        </g>
      </svg>
    )}
  </CloroContext.Consumer>
)
export default Clorolegend
