import React,{Component} from 'react';
import PropTypes from 'prop-types'; 
import WorldMap from './WorldMap';

class GlobeViewChart extends Component{

    showToolTipInfo=value=>{
        const {showToolTip}= this.props;
        showToolTip(value);
    }
    hideToolTipInfo=()=>{
        const {hideToolTip}= this.props;
        hideToolTip();
    }
    render(){
        const {globeData,meteorsInfo}= this.props;
        const svgDimensions={
            width:820,
            height:550
        }
        return (
            <svg width={svgDimensions.width} height={svgDimensions.height} viewBox={`0 0 ${svgDimensions.width} ${svgDimensions.height}`}>
                <WorldMap width={svgDimensions.width} 
                    height={svgDimensions.height}
                    world={globeData} meteorfall={meteorsInfo}
                    pointEnter={this.showToolTipInfo}
                    pointExit={this.hideToolTipInfo}
                    />
            </svg>
        )
    }
}
GlobeViewChart.propTypes={
    //globeData:PropTypes.obj
}
export default GlobeViewChart;