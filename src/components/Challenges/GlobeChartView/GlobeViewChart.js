import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import WorldMap from './WorldMap';

class GlobeViewChart extends Component{

    render(){
        const {globeData}= this.props;
        const svgDimensions={
            width:800,
            height:450
        }
        return (
            <svg width={svgDimensions.width} height={svgDimensions.height}>
                <WorldMap width={svgDimensions.width} 
                    height={svgDimensions.height}
                    world={globeData}/>
                    {/* <circle cx={5} cy={5} x={5} y={5} r={10} fill="red"/> */}
            </svg>
        )
    }
}
GlobeViewChart.propTypes={
    //globeData:PropTypes.obj
}
export default GlobeViewChart;