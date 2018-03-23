import React from 'react'
import Link from 'gatsby-link'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import styles from './index-module.module.css';

const paperStyles={
  width:240,
  height:120,
  padding:'2px 2px 2px 2px',
  margin:'6px 6px 6px 6px'

};
const IndexPage = () => (

  <MuiThemeProvider>
    <div>
      <div className={styles.textIndex}>
        freeCodecamp Data Visualization Projects
      </div>
      <div className={styles.containerIndex}>
        <Paper zDepth={5} style={paperStyles}>
            <div className={styles.textContainer}>Placeholder to get you to the....</div>
            <div className={styles.textContainer}><Link to="/viewbarchart/">Bar Chart Project</Link></div>
        </Paper>
        <Paper zDepth={5} style={paperStyles}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/viewscatter/">Scatterplot Graph Project</Link></div>
        </Paper>
        <Paper zDepth={5} style={paperStyles}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/heatview/">Heat Chart Project</Link></div>
        </Paper>
        <Paper zDepth={5} style={paperStyles}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/forceview/">Force Directed Chart Project</Link></div>
        </Paper>
        <Paper zDepth={5} style={paperStyles}>
          <div className={styles.textContainer}>Placeholder to get you to the...</div>
          <div className={styles.textContainer}><Link to="/globeview/">Globe Chart Project</Link></div>
        </Paper>
      </div>
    </div>
  </MuiThemeProvider>
  
)

export default IndexPage
