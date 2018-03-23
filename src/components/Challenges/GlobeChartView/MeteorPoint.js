import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class MeteorPoint extends PureComponent{
    
    calculateRadius=value=>{
        let range=179687.5
        // console.log('====================================');
        // console.log("range: "+range+" value:"+ value);
        // console.log('====================================');
        if (value<=range){
            // console.log('====================================');
            // console.log(`(value<=range`);
            // console.log('====================================');
            return 2;
        }
        else if (value<=range*2){
            // console.log('====================================');
            // console.log(`(value<=range*2)`);
            // console.log('====================================');
            //return 10;
            return 4;
        }
        else if (value<=range*3){
            // console.log('====================================');
            // console.log(`(value<=range*3`);
            // console.log('====================================');
            return 6;
        }
        else if (value<=range*20){
            // console.log('====================================');
            // console.log(`(value<=range*20)`);
            // console.log('====================================');
            return 8;
        }
        else if (value<=range*100){
            // console.log('====================================');
            // console.log(`(value<=range*100)`);
            // console.log('====================================');
            return 10;
        }
        // console.log('====================================');
        // console.log(`(50)`);
        // console.log('====================================');
        return 12;
    }
    onEnter=()=>{
        const {meteorPointEnter,data,mass,rectangleLat,rectangleLong}= this.props;
        meteorPointEnter(
            {
                name:data.meteorname,
                meteorclass:data.meteorclass,
                dateofhit:data.datefell,
                meteormass:mass,
                latitude:rectangleLat,
                longitude:rectangleLong
            }
        );
    }
    onExit=()=>{
         const {meteorPointExit}= this.props;
        meteorPointExit();
    }
    render(){
        const {mass,rectangleLat,rectangleLong,circleId}= this.props;
        return (
            <circle key={`marker_${circleId} `}
                fill="#E91E63"
                fillOpacity={mass<=179687.5?1:0.5}
                stroke="#FFFFFF"
                className="marker" 
                cx={rectangleLat}
                cy={rectangleLong}
                r={this.calculateRadius(mass)}
                onMouseOver={this.onEnter}
                onMouseOut={this.onExit}/>
        )
    }
}
MeteorPoint.propTypes={
    data:PropTypes.shape({
        meteorname:PropTypes.string,
        meteorclass:PropTypes.string,
        datefell:PropTypes.string
    }),
    mass:PropTypes.number,
    rectangleLat:PropTypes.number,
    rectangleLong:PropTypes.number,
    circleId:PropTypes.number,
    meteorPointEnter:PropTypes.func,
    meteorPointExit:PropTypes.func
};
export default MeteorPoint;
