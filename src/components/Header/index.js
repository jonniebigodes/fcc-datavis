import React from 'react'
import Link from 'gatsby-link'

const setPageItem=(value)=>{
  switch (value) {
    case "force":
      return '#ada9a9';
    default:
      return 'rebeccapurple';
  }
}
const Header = ({itemHeader}) => (
  <div
    style={{
      //background: 'rebeccapurple',
      background:setPageItem(itemHeader),
      marginBottom: '1.45rem',
    }}
  >
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '1.45rem 1.0875rem',
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
