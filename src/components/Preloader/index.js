import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Counter from './Scatter/Counter';
import PreloadBars from './Bars/BarsPreload';
import PreloadHeat from './Heat/HeatPreload';
import PreloadForce from './Force/ForcePreload';
import PreloadWorld from './WorldMap/PreloadWorld';
import './preloader-styles.scss';
class Preload extends Component{
    
    RenderTextPreloader=()=>{
        const {chartName}= this.props;
        switch (chartName){
            case 'bar':
                return "Hold on to your hat...i'm getting the data at lightspeed";
            case 'scatter':
                return "Hold on to your hat...i'm getting the data at Lance Armstrong speed";
            case 'heat':
                return "Hold on to your hat...i'm getting the data at *insert average lava speed here";
            case "force":
                return " Hold on to your hat...i'm getting the data Chuck Norris style."
            default:
                return "Hold on to your hat...i'm getting the data at *insert meteor speed here";
        }
        
    }
    renderPreloader=()=>{
        const {chartName}= this.props;
        switch (chartName){
            case 'bar':
                return <PreloadBars endCounter={this.closePreload}/>;
            case 'scatter':
                return <Counter endCounter={this.closePreload}/>;
            case 'heat':
                return <PreloadHeat endCounter={this.closePreload}/>;
            case "force":
                return <PreloadForce endCounter={this.closePreload}/>;
            default:
                return <PreloadWorld endCounter={this.closePreload}/>;
        }
    }
    closePreload=()=>{
        const {turnDownPreload}= this.props;
        turnDownPreload();
    }
    render(){
        return (
            <div>
                {
                    this.renderPreloader()   
                }
                <div className="Preload">{this.RenderTextPreloader()}</div>
            </div>
        )
    }

}
Preload.propTypes={
    turnDownPreload:PropTypes.func,
    chartName:PropTypes.string
};
export default Preload;