import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { select as d3Select } from 'd3-selection';
//import '../../../Assets/css/forceGraph.css';
import styles from './forceGraph.css';
class ForceLink extends Component{

    componentDidMount(){
        this.renderLine();
    }
    renderLine(){
        const {link}= this.props;
        d3Select(this.linkElement).data([link]);
    }
    render(){
        return (
            <line className="link"
                ref={(el) => { this.linkElement = el; }}
                strokeWidth={1}/>
        );
    }
}
ForceLink.propTypes={
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
}
export default ForceLink;