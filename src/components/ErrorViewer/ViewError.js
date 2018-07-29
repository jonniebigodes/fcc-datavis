import React from 'react'
import upsy from '../../Assets/images/ups.gif'
import styles from './error-style.module.css'

const ErrorViewer = () => {
  return (
    <div className={styles.containerError}>
      <figure>
        <img src={upsy} alt="error view cowboy riding" />
      </figure>
      <span className={styles.textError}>
        Lights up the sirens.....Something went wrong
      </span>
    </div>
  )
}
export default ErrorViewer
