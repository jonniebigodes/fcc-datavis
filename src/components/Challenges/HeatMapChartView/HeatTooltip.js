import React from 'react'
import PropTypes from 'prop-types'
import styles from './heat-style.module.css'
import { dataVisConstant } from '../../../Utils/Constants'

const getMonths = value => {
  return dataVisConstant.Months[value - 1]
}
const showInfo = () => {
  return (
    <p>
      <span className={styles.heattooltipText}>
        Mouse over a bar to show you information
      </span>
    </p>
  )
}
const showData = value => {
  return (
    <p>
      <span className={styles.heattooltipText}>
        {getMonths(value.month)} {value.year} temperature was: {value.baseTemp}{' '}
        with variance:{value.variance}
      </span>
    </p>
  )
}
const HeatToolTip = ({ data }) => {
  return (
    <div className={styles.heatcontainerToolTip}>
      {data ? showData(data) : showInfo()}
    </div>
  )
}
HeatToolTip.propTypes = {
  data: PropTypes.shape({
    variance: PropTypes.number,
    baseTemp: PropTypes.number,
    month: PropTypes.number,
    year: PropTypes.number,
  }),
}
export default HeatToolTip
