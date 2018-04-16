import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import MeteorPoint from './MeteorPoint';
class WorldMap extends PureComponent{
    onPointHover=value=>{
        const {pointEnter}= this.props;
        pointEnter(value);
    }
    onPointLeave=()=>{
        const {pointExit}= this.props;
        pointExit();
    }
    render(){
        const {world,meteorfall}= this.props;
       
        const parsedWorld=(
            world.map((d,i)=><path key={`path:${i}`} d={d.dpath} fill={d.fillInfo} stroke="#FFFFFF" strokeWidth={0.5}/>,)
        )
        
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