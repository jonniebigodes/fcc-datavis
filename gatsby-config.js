module.exports = {
  siteMetadata: {
    title: 'freeCodeCamp Data Visualization projects',
  },
  pathPrefix: `/fcc-datavis`,
  plugins: ['gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-google-fonts',
      options:{
        fonts:[
          'Mukta Mahee',
          'source sans-serif',
          'Merriweather',
          'source serif'
        ]
      }
    }
  ],
};
