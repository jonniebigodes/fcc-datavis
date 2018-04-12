import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Header from '../components/Header';
import Footer from '../components/Footer/footer';
import './layoutprojects.css';
const TemplateWrapper = ({ children }) => (
  
    <div>
      <Helmet
        title="freeCodeCamp Data Visualization Projects"
        meta={[
          { name: 'description', content: 'freeCodeCamp Data Visualization ' },
          { name: 'keywords', content: 'react, d3, bar chart, heat map, force direct graph,scatter graph, maps,data visualization,gatsbyjs' },
          {name:'author',content:'jonniebigodes'}
        ]}
        link={[
          {rel:"stylesheet",href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"}
        ]}
        // script={[
        //   {rel: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css", rel: "stylesheet"}
        // ]}
      />
      <Header/>
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '0px 1.0875rem 1.45rem',
          paddingTop: 0,
          //background:'rgba(214, 255, 233,0.6)'
        }}
      >
        {children()}
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
  
  TemplateWrapper.propTypes = {
    children: PropTypes.func,
  }
  
  export default TemplateWrapper;
