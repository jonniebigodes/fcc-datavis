import React, { Component } from 'react';

class ScatterPoints extends Component{

    scatterOnMouseEnter=value=>{

    }
    scatterOnMouseLeave=()=>{

    }
    render(){
        const {scales, margins, scatterData, svgDimensions}= this.props;
        const{xScale,yScale}= scales
        const Points=(
            scatterData.map(datum=>
<<<<<<< HEAD
                <ScatterPoint 
                    key={`Points_${datum.Seconds}_${datum.Place}_${datum.Nationality}`}
                    scatterItem={datum}
                    pos={{x:xScale(datum.behind),y:yScale(datum.Place)}}
                    scatterPointMouseEnter={this.scatterOnMouseEnter}
                    scatterPointMouseLeave={this.scatterOnMouseLeave}
                    />,
               
=======
                <circle
                    key={`Point_${datum.Seconds}_${datum.Place}_${datum.Nationality}`}
                    cx={xScale(datum.behind)}
                    cy={yScale(datum.Place)}
                    r={5}
                    fill={datum.Doping==="Doping Allegations"?"#a2371a":"#1aa33a"}
                    onMouseOver={this.scatterOnMouseEnter}
                    onMouseOut={this.scatterOnMouseLeave}/>,
>>>>>>> parent of a57af93... Changed tooltips for heat and scatter chart added config for github publish and configured the fonts using the gatsby google font package
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