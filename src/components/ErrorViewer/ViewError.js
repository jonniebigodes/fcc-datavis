import React from 'react'
import upsy from '../../Assets/images/ups.gif'
import './ErrorViewer.scss'

const ErrorViewer = () => {
  return (
    <div className="containerError">
      <figure>
        <img src={upsy} alt="error view cowboy riding" />
      </figure>
      <span className="textError">
        Lights up the sirens.....Something went wrong
      </span>
    </div>
  )
}
export default ErrorViewer
