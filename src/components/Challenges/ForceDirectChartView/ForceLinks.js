import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForceLink from './ForceLink';
class ForceLinks extends Component{
    render(){
        const {graphLinks}= this.props;
        const dataLines=(
            graphLinks.map((datum,index)=>
                <ForceLink 
                    key={`Line_${index}`}
                    link={datum}
                    />,
            )
        );
        return(
            <g>
                {dataLines}
            </g>
        );
    }
}
ForceLinks.propTypes={
    graphLinks:PropTypes.arrayOf(PropTypes.shape({
        index:PropTypes.number,
        source:PropTypes.shape({
            code:PropTypes.string,
            country:PropTypes.string,
            index:PropTypes.number,
            vx:PropTypes.number,
            vy:PropTypes.number,
            x:PropTypes.number,
            y:PropTypes.number
        }),
        target:PropTypes.shape({
            code:PropTypes.string,
            country:PropTypes.string,
            index:PropTypes.number,
            vx:PropTypes.number,
            vy:PropTypes.number,
            x:PropTypes.number,
            y:PropTypes.number
        })
    }))
}
export default ForceLinks;