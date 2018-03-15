import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
class GdPBar extends PureComponent{

    onGdpEnter=()=>{
        const{gdpEnter,gdpnode}= this.props;
        gdpEnter(gdpnode.gdpdata);
    }
    onGdpLeave=()=>{
        const{gdpLeave}=this.props;
        gdpLeave();
    }
    render(){
        const{gdpnode}= this.props;
        return(
            <rect
                key={`gdpbar_${gdpnode.gdpdata.dateTime}`}
                x={gdpnode.x}
                y={gdpnode.y}
                height={gdpnode.height}
                width={gdpnode.width}
                fill={gdpnode.fill}
                onMouseOver={this.onGdpEnter}
                onMouseOut={this.onGdpLeave}
            />
        )
    }
}
GdPBar.propTypes={
    gdpnode:PropTypes.shape({
        x:PropTypes.number,
        y:PropTypes.number,
        height:PropTypes.number,
        width:PropTypes.number,
        fill:PropTypes.string,
        gdpdata:PropTypes.shape({
            dateTime:PropTypes.string,
            domesticValue:PropTypes.number
        })
    }),
    gdpEnter:PropTypes.func,
    gdpLeave:PropTypes.func
};
export default GdPBar;