import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { geoMercator, geoPath } from "d3-geo";
import MeteorPoint from './MeteorPoint';
class WorldMap extends Component{
    project(){
        const {width,height}= this.props;
        return geoMercator().scale(100).translate([width/2,height/2])
    }
    onPointHover=value=>{
        console.log('====================================');
        console.log(`onPointHover value:${JSON.stringify(value,null,2)}`);
        console.log('====================================');
        const {pointEnter}= this.props;
        pointEnter(value);
    }
    onPointLeave=()=>{
        const {pointExit}= this.props;
        pointExit();
    }
    render(){
        const {world,meteorfall,width,height}= this.props;
        const parsedWorld= (
            world.map((d,i)=><path key={`path_${i}`} d={geoPath().projection(this.project())(d)} 
            fill={ `rgba(38,50,56,${1 / world.length * i})` } stroke="#FFFFFF" strokeWidth={0.5}/>,)
        )
        const meteorsData=(
            
            meteorfall.map((m,i)=>
                <MeteorPoint key={`mpoint_${i}`}
                    data={{
                        meteorname:m.properties.name,
                        meteorclass:m.properties.recclass,
                        datefell:m.properties.year
                    }}
                    mass={parseInt(m.properties.mass)}
                    rectangleLat={this.project()([Number(m.properties.reclong),Number(m.properties.reclat)])[0]}
                    rectangleLong={this.project()([Number(m.properties.reclong),Number(m.properties.reclat)])[1]}
                    circleId={i} meteorPointEnter={this.onPointHover}
                    meteorPointExit={this.onPointLeave}/>,
            )
        )
        return(
            <g>
                {parsedWorld}
                {meteorsData}
            </g>
        )
    }
    
}
WorldMap.propTypes={
    width:PropTypes.number,
    height:PropTypes.number
}
export default WorldMap;