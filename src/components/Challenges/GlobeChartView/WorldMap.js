import React, { PureComponent } from 'react';
import PropTypes from 'prop-types'; 
//import { geoMercator, geoPath } from "d3-geo";
import MeteorPoint from './MeteorPoint';
class WorldMap extends PureComponent{
   
    // project(){
    //     const {width,height}= this.props;
    //     return geoMercator().scale(100).translate([width/2,height/2])
    // }
    onPointHover=value=>{
        // console.log('====================================');
        // console.log(`onPointHover value:${JSON.stringify(value,null,2)}`);
        // console.log('====================================');
        const {pointEnter}= this.props;
        pointEnter(value);
    }
    onPointLeave=()=>{
        const {pointExit}= this.props;
        pointExit();
    }
    render(){
        const {world,meteorfall,width,height}= this.props;
        // const parsedWorld= (
        //     world.map((d,i)=><path key={`path_${i}`} d={geoPath().projection(this.project())(d)} 
        //     fill={ `rgba(38,50,56,${1 / world.length * i})` } stroke="#FFFFFF" strokeWidth={0.5}/>,)
        // )
        const parsedWorld=(
            world.map((d,i)=><path key={`path:${i}`} d={d.dpath} fill={d.fillInfo} stroke="#FFFFFF" strokeWidth={0.5}/>,)
        )
        // const meteorsData=(
            
        //     meteorfall.map((m,i)=>
        //         <MeteorPoint key={`mpoint_${i}`}
        //             data={{
        //                 meteorname:m.properties.name,
        //                 meteorclass:m.properties.recclass,
        //                 datefell:m.properties.year
        //             }}
        //             mass={parseInt(m.properties.mass)}
        //             rectangleLat={this.project()([Number(m.properties.reclong),Number(m.properties.reclat)])[0]}
        //             rectangleLong={this.project()([Number(m.properties.reclong),Number(m.properties.reclat)])[1]}
        //             circleId={i} meteorPointEnter={this.onPointHover}
        //             meteorPointExit={this.onPointLeave}/>,
        //     )
        // )
        const meteorsData=(
            meteorfall.map((m,x)=>
                <MeteorPoint key={`mpoint_${x}`}
                    data={{
                        meteorname:m.name,
                        meteorclass:m.meteorClass,
                        datefell:m.date,
                        mass:m.mass,
                        rectangleLat:m.latitude,
                        rectangleLong:m.longitude,
                        circleId:x,
                        circleArea:m.radius,
                        circleFill:m.fillOp
                    }}
                    meteorPointEnter={this.onPointHover}
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
    height:PropTypes.number,
    world:PropTypes.arrayOf(PropTypes.shape({
        dpath:PropTypes.string,
        fillInfo:PropTypes.string
    })),
    meteorfall:PropTypes.arrayOf(PropTypes.shape({
        date:PropTypes.string,
        fillOp:PropTypes.number,
        latitude:PropTypes.number,
        longitude:PropTypes.number,
        mass:PropTypes.number,
        name:PropTypes.string,
        radius:PropTypes.number,
        meteorClass:PropTypes.string
    }))
}
export default WorldMap;