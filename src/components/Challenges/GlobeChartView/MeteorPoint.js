import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class MeteorPoint extends PureComponent{
    onEnter=()=>{
        const {data,meteorPointEnter}= this.props;
        meteorPointEnter(
            {
                name:data.meteorname,
                meteorclass:data.meteorclass,
                dateofhit: data.datefell.substring(0,4),
                meteormass:data.mass,
                latitude:Number(data.rectangleLat).toFixed(4),
                longitude:Number(data.rectangleLong).toFixed(4)
            }
        );
    }
    onExit=()=>{
         const {meteorPointExit}= this.props;
        meteorPointExit();
    }
    render(){
        const {data}= this.props;
        return (
            <circle key={`marker_${data.circleId} `}
                fill="#E91E63"
                fillOpacity={data.circleFill}
                stroke="#FFFFFF"
                className="marker" 
                cx={data.rectangleLat}
                cy={data.rectangleLong}
                r={data.circleArea} 
                onMouseOver={this.onEnter}
                onMouseOut={this.onExit}/>
        )
    }
}
MeteorPoint.propTypes={
     data:PropTypes.shape({
        meteorname:PropTypes.string,
        meteorclass:PropTypes.string,
        datefell:PropTypes.string,
        mass:PropTypes.number,
        rectangleLat:PropTypes.number,
        rectangleLong:PropTypes.number,
        circleId:PropTypes.number,
        circleArea:PropTypes.number,
        circleFill:PropTypes.number
    }),
    meteorPointEnter:PropTypes.func,
    meteorPointExit:PropTypes.func
};
export default MeteorPoint;
