import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
ScatterPoints.propTypes={
    PointMouseEnter:PropTypes.func,
    PointMouseLeave:PropTypes.func,
    margins:PropTypes.shape(
        {
            bottom:PropTypes.number,
            left:PropTypes.number,
            right:PropTypes.number,
            top:PropTypes.number
        }
    ),
    scales:PropTypes.shape({
        xScale:PropTypes.func,
        yScale:PropTypes.func
    }),
    scatterData:PropTypes.arrayOf(PropTypes.shape({
        Doping:PropTypes.string,
        Name:PropTypes.string,
        Nationality:PropTypes.string,
        Place:PropTypes.number,
        Seconds:PropTypes.number,
        Time:PropTypes.string,
        URL:PropTypes.string,
        Year:PropTypes.number,
        behind:PropTypes.number 

    })),
    svgDimensions:PropTypes.shape(
        {
            height:PropTypes.number,
            width:PropTypes.number
        }
    )
}
export default ScatterPoints;