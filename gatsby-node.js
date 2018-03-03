/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it


 //exports.onCreatePage = async ({ page, boundActionCreators }) => {
exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
  
    return new Promise((resolve, reject) => {
      if (page.path.match(/^\/forceview/)) {
        // It's assumed that `landingPage.js` exists in the `/layouts/` directory
        page.layout = "LayoutForce";
        // Update the page.
        createPage(page);
      }
      
      resolve();
    });
  };