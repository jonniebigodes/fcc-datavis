import React from 'react'
import Helmet from 'react-helmet'
import CloroPethContainer from '../components/Challenges/CloropethMap/CloropethViewContainer'
import { CloroContext, CloroProvider } from '../contexts/CloropethContext'

const ViewCloro = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Camper Cloropeth Map"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,Cloropeth',
          },
          {
            name: 'keywords',
            content: 'react, gatsby,challenges,d3,cloropeth',
          },
          { name: 'author', content: 'jonniebigodes' },
        ]}
        script={[
          {
            src:
              'https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js',
            type: 'text/javascript',
          },
        ]}
      />
      <CloroProvider>
        <CloroContext.Consumer>
          {({ getData, isloading, isError, chartWidth, setChart }) => (
            <CloroPethContainer
              fetchMapData={getData}
              appError={isError}
              appLoading={isloading}
              widthchart={chartWidth}
              resizeChart={setChart}
            />
          )}
        </CloroContext.Consumer>
      </CloroProvider>
    </div>
  )
}

export default ViewCloro
