import React from 'react'
import { CloroContext } from '../../../contexts/CloropethContext'

const CloroToolTip = () => (
  <CloroContext.Consumer>
    {({ dataToolTip }) => (
      <div key="container">
        <div
          id="tooltip"
          key="tooltipdata"
          data-education={dataToolTip.percentage ? dataToolTip.percentage : 0}
          style={{
            opacity: dataToolTip.percentage ? 0.9 : 0,
          }}>
          {dataToolTip.percentage ? (
            <p>
              <span>
                State:{dataToolTip.namestate} County:{dataToolTip.county} with
                percentage:{dataToolTip.percentage}
              </span>
            </p>
          ) : (
            <p>
              <span>Nothing to see here</span>
            </p>
          )}
        </div>
      </div>
    )}
  </CloroContext.Consumer>
)
export default CloroToolTip
