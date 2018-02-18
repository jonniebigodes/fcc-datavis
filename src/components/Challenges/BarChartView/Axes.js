import React from 'react';
import Axis from './Axis';
const Axes=({ scales, margins, svgDimensions})=>{
    const { height, width } = svgDimensions;
    const xProps = {
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${height - margins.bottom})`,
        tickSize: height - margins.top - margins.bottom,
      };

      const yProps = {
        orient: 'Left',
        scale: scales.yScale,
        translate: `translate(${margins.left}, 0)`,
        tickSize: width - margins.left - margins.right,
      };
      // console.log('====================================');
      // console.log(`AXES xPRops:${JSON.stringify(xProps,null,2)}\n yProps:${JSON.stringify(yProps,null,2)}\n scales:${JSON.stringify(scales)}`);
      // console.log('====================================');
      return (
        <g>
          <Axis {...xProps} />
          <Axis {...yProps} />
        </g>
      );
}
export default Axes;
