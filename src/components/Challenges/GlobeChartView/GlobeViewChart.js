import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import WorldMap from './WorldMap';

class GlobeViewChart extends Component{

    render(){
        const {globeData,meteorsInfo}= this.props;
        const svgDimensions={
            width:800,
            height:450
        }
        return (
            <svg width={svgDimensions.width} height={svgDimensions.height} viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
                <WorldMap width={svgDimensions.width} 
                    height={svgDimensions.height}
                    world={globeData} meteorfall={meteorsInfo}/>
            </svg>
        )
    }
}
GlobeViewChart.propTypes={
    //globeData:PropTypes.obj
}
export default GlobeViewChart;