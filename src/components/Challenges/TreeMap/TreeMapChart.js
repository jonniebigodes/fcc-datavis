import React from 'react'
import uuid from 'uuid'
import TreeTile from './TreeTile'
import { TreeContext } from '../../../contexts/TreeMapContext'
import './treemap.scss'

const TreeMapChart = () => (
  <TreeContext.Consumer>
    {({
      treeHeight,
      treeWidth,
      activeTree,
      toolTipActivate,
      toolTipDisable,
    }) => (
      <svg height={treeHeight} width={treeWidth} className="svgInfo">
        {activeTree.dataTree.map(item => (
          <g
            key={`cellgroup_${item.key}`}
            transform={`translate(${item.cellPos.posX},${item.cellPos.posY})`}>
            <TreeTile
              tileContents={item.tileData}
              setToolTipData={toolTipActivate}
              eraseToolTipData={toolTipDisable}
              key={`cTile_${item.key}`}
            />
            <text>
              {item.tileData.tileName.split(/(?=[A-Z][^A-Z])/g).map((x, i) => (
                <tspan key={`textinfo_${uuid.v4()}`} x={4} y={13 + i * 10}>
                  {x}
                </tspan>
              ))}
            </text>
          </g>
        ))}
      </svg>
    )}
  </TreeContext.Consumer>
)
export default TreeMapChart
