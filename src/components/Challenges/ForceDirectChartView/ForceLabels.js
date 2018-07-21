import React from 'react'
import ForceLabel from './ForceLabel'

const ForceLabels = ({ graphNodes }) => {
  const labelNodes = graphNodes.map((datum, i) => (
    <ForceLabel key={i} node={datum} />
  ))
  return <g>{labelNodes}</g>
}
export default ForceLabels
