import React from 'react'
import { TreeContext } from '../../../contexts/TreeMapContext'
import './treemap.scss'

const TreeToolTip = () => (
  <TreeContext.Consumer>
    {({ toolTipData }) => (
      <div key="container">
        <div
          id="tooltip"
          key="tooltipdata"
          data-value={toolTipData.datavalue ? toolTipData.datavalue : 0}
          style={{
            opacity: toolTipData.datavalue ? 0.9 : 0,
          }}>
          {toolTipData.datavalue ? (
            <p>
              <span className="treeInfo">
                Item:{toolTipData.dataname} in:{toolTipData.datacategory} with
                value:{toolTipData.datavalue}
              </span>
            </p>
          ) : (
            <p>
              <span className="treeInfo">Nothing to see here</span>
            </p>
          )}
        </div>
      </div>
    )}
  </TreeContext.Consumer>
)
export default TreeToolTip
