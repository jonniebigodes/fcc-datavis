import React from 'react';
import ScatterAxis from './ScatterAxis';
import PropTypes from 'prop-types';
const ScatterAxes=({scales, margins, svgDimensions})=>{

    const {height,width}= svgDimensions;
    const xProps={
        orient: 'Bottom',
        scale: scales.xScale,
        translate: `translate(0, ${(height - margins.bottom)+2})`,
        tickSize: height - margins.top - margins.bottom,
    };
    const yProps={
        orient: 'Left',
        scale: scales.yScale,
        translate: `translate(${margins.left}, 0)`,
        tickSize: width - margins.left - margins.right,
    };
    return(
        <g>
            <ScatterAxis {...xProps}/>
            <ScatterAxis {...yProps}/>
        </g>
    );
};
ScatterAxes.propTypes={
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
}
export default ScatterAxes;