import React from 'react'
import Helmet from 'react-helmet'
import TreeMapContainer from '../components/Challenges/TreeMap/TreeMapContainer'
import { TreeContext, TreeMapProvider } from '../contexts/TreeMapContext'

const ViewTree = () => {
  return (
    <div>
      <Helmet
        title="Super Duper Tree Map"
        meta={[
          {
            name: 'description',
            content: 'freeCodeCamp DataVis Challenges,TreeMap',
          },
          { name: 'keywords', content: 'react, gatsby,challenges,d3,treemap' },
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
      <TreeMapProvider>
        <TreeContext.Consumer>
          {({
            getTreeData,
            isloading,
            treeWidth,
            isError,
            saveTreeDimensions,
            activeTree,
            changeDataSet,
            activeTab,
            closePreloader,
          }) => (
            <TreeMapContainer
              getInfo={getTreeData}
              treeError={isError}
              treeMapWidth={treeWidth}
              treeloading={isloading}
              treeMapData={activeTree}
              treeMapTitle={activeTree.treeTitle}
              treeMapDescription={activeTree.treeDescription}
              resizeTree={saveTreeDimensions}
              switchdataset={changeDataSet}
              tabActive={activeTab}
              endPreloader={closePreloader}
            />
          )}
        </TreeContext.Consumer>
      </TreeMapProvider>
    </div>
  )
}
export default ViewTree
