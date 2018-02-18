import React, { Component } from 'react';
import ScatterPoint from './ScatterPoint';
class ScatterPoints extends Component{

    scatterOnMouseEnter=value=>{
        const {PointMouseEnter}= this.props;
        PointMouseEnter(value);
    }
    scatterOnMouseLeave=()=>{
        this.props.PointMouseLeave();

    }
    render(){
        const {scales, margins, scatterData, svgDimensions}= this.props;
        const{xScale,yScale}= scales
        const Points=(
            scatterData.map(datum=>
                <ScatterPoint 
                    key={`Points_${datum.Seconds}_${datum.Place}_${datum.Nationality}`}
                    scatterItem={datum}
                    pos={{x:xScale(datum.behind),y:yScale(datum.Place)}}
                    scatterPointMouseEnter={this.scatterOnMouseEnter}
                    scatterPointMouseLeave={this.scatterOnMouseLeave}
                    />,
            )
        )
        return(
            <g>
                {Points}
            </g>
        );
    }
}
export default ScatterPoints;