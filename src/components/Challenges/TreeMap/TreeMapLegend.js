import React from 'react'
import { scaleOrdinal } from 'd3-scale'
import { TreeContext } from '../../../contexts/TreeMapContext'

const legendcolours = scaleOrdinal().range([
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
const OFFSET = 10
const RECTSIZE = 15
const RECT_H_SPACE = 150
const RECT_V_SPACE = 10
const LEGEND_TEXT_X_OFFSET = 3
const LEGEND_TEXT_Y_OFFSET = -2
const elementsPerRow = value => {
  return Math.floor(value / RECT_H_SPACE)
}
const TreeLegend = () => (
  <TreeContext.Consumer>
    {({ treeWidth, activeTree }) => (
      <svg width={treeWidth} id="legend" height={80}>
        <g transform={`translate(60,${OFFSET})`}>
          {activeTree.legenddata.map((item, i) => (
            <g
              key={`legendgroup_${item}`}
              transform={`translate(${(i % elementsPerRow(treeWidth)) *
                RECT_H_SPACE},${Math.floor(i / elementsPerRow(treeWidth)) *
                RECTSIZE +
                RECT_V_SPACE * Math.floor(i / elementsPerRow(treeWidth))})`}>
              <rect
                width={RECTSIZE}
                height={RECTSIZE}
                className="legend-item"
                fill={legendcolours(item)}
              />
              <text
                x={RECTSIZE + LEGEND_TEXT_X_OFFSET}
                y={RECTSIZE + LEGEND_TEXT_Y_OFFSET}>
                {item}
              </text>
            </g>
          ))}
        </g>
      </svg>
    )}
  </TreeContext.Consumer>
)
export default TreeLegend
