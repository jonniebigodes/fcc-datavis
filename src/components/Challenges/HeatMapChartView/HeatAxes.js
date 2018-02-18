import React from 'react';
import HeatAxis from './HeatAxis';

const HeatAxes=({scales,margins,svgDimensions})=>{

    const {height,width}= svgDimensions;
    const xProps={
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${height+1})`, //full width
        tickSize: height - margins.top - margins.bottom,
    };
    const yProps={
        orient: 'Right',
        scale: scales.yScale,
        translate: `translate(${svgDimensions.width+1},0)`,
    };
    return(
        <g>
            <HeatAxis {...xProps}/>
            <HeatAxis {...yProps}/>
        </g>
    );
};
export default HeatAxes;