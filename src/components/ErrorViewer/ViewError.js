import React, { Component } from 'react';
import upsy from '../../Assets/images/ups.gif';
import './ErrorViewer.scss';
const ErrorViewer=()=>{

    return (
        <div className="containerError">
            <img src={upsy}/>
            <span className="textError">Lights up the sirens.....Something went wrong</span>
        </div>
    );
    
};
export default ErrorViewer;