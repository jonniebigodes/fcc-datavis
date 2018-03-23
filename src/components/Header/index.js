import React from 'react'
import Link from 'gatsby-link'
const Header = () => (
  <div
    style={{
      //background: 'rebeccapurple',
      background:'#06691b',
      marginBottom: '1.15rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.15rem 1.0875rem',
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none'
          }}
        >
          Supercalifragilistic Data Visualization
        </Link>
      </h1>
    </div>
  </div>
)

export default Header
