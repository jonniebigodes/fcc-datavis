/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
    return new Promise((resolve, reject) => {
      if(page.path.match(/^\/viewbarchart/)||page.path.match(/^\/viewscatter/)||page.path.match(/^\/heatview/)||page.path.match(/^\/forceview/)||page.path.match(/^\/globeview/)){
        page.layout="LayoutProjects";
        createPage(page);
      }
      resolve();
    });
  };