import React from 'react';
import HeatAxis from './HeatAxis';
import PropTypes from 'prop-types';
const HeatAxes=({scales,margins,svgDimensions})=>{

    const {height,width}= svgDimensions;
    const xProps={
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${height+1})`, //full width
        //translate: `translate(0, ${(height - margins.bottom)})`,
        tickSize: height - margins.top - margins.bottom,
    };
    const yProps={
        orient: 'Right',
        scale: scales.yScale,
       translate: `translate(${svgDimensions.width+1},0)`,
       //translate:`translate(${margins.left},0)`
    };
    return(
        <g>
            <HeatAxis {...xProps}/>
            <HeatAxis {...yProps}/>
        </g>
    );
};
HeatAxes.propTypes={
    scales:PropTypes.shape({
        yScale:PropTypes.func,
        xScale:PropTypes.func
    }),
    margins:PropTypes.shape({
        top:PropTypes.number,
        right:PropTypes.number,
        bottom:PropTypes.number,
        left:PropTypes.number
    }),
    svgDimensions:PropTypes.shape({
        width:PropTypes.number,
        height:PropTypes.number
    })
};
export default HeatAxes;