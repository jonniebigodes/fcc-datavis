import React, { Component } from 'react';
import PropTypes from 'prop-types'; 
import { geoMercator, geoPath } from "d3-geo"

class WorldMap extends Component{


    project(){
        const {width,height}= this.props;
        return geoMercator().scale(100).translate([width/2,height/2])
    }
    render(){
        const {world}= this.props;
        // console.log('====================================');
        // console.log(`world:${JSON.stringify(world,null,2)}`);
        // console.log('====================================');
        const parsedWorld= (
            world.map((d,i)=><path key={`path_${i}`} d={geoPath().projection(this.project())(d)} 
            fill={ `rgba(38,50,56,${1 / world.length * i})` }stroke="#FFFFFF" strokeWidth={0.5}/>,)
        )
        return(
            <g>
                {parsedWorld}
            </g>
        )
    }
    
}
WorldMap.propTypes={
    //world:PropTypes.obj,
    width:PropTypes.number,
    height:PropTypes.number
}
export default WorldMap;