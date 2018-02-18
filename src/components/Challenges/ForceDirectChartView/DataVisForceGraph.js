import React, { Component } from 'react';

class DataVisForceGraph extends Component{

    render(){
        const svgDimensions={
            width:1024,
            height:500,
        };
        
        return(
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <ForceSimulation data={graphData}/>
            </svg>
        )
    }
}
export default DataVisForceGraph;