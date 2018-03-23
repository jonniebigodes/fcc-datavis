/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it

// const setLayout=value=>{

//   switch (value) {
//     case "/forceview/":
//       console.log('====================================');
//       console.log(`forceview layout`);
//       console.log('====================================');
//       return "LayoutForce"
//     case "/viewbarchart/":
//       console.log('====================================');
//       console.log(`money layout`);
//       console.log('====================================');
//       return "LayoutMoney";
//     case "/viewscatter/":
//       console.log('====================================');
//       console.log(`scatter layout`);
//       console.log('====================================');
//       return "LayoutScatter";
//     //case "/heatview/":
//     default:
//       return "index";
//   }
// }
 //exports.onCreatePage = async ({ page, boundActionCreators }) => {
exports.onCreatePage = ({ page, boundActionCreators }) => {
    const { createPage } = boundActionCreators;
  
    // console.log('====================================');
    // console.log(`path:${page.path}`);
    // console.log('====================================');
    return new Promise((resolve, reject) => {
      // if (page.path!=='/' || page.path!=='/404/' || page.path!=='/dev-404-page/' || page.path!=='/404.html'){
      //   page.layout=setLayout(page.path);  
      //   createPage(page);
      // }
      if(page.path.match(/^\/viewbarchart/)||page.path.match(/^\/viewscatter/)||page.path.match(/^\/heatview/)||page.path.match(/^\/forceview/)||page.path.match(/^\/globeview/)){
        
        page.layout="LayoutProjects";
        createPage(page);
      }
      
      //if (page.path.match(/^\/forceview/)) {
        //It's assumed that `landingPage.js` exists in the `/layouts/` directory
      // page.layout = "LayoutForce";
        //Update the page.
      // createPage(page);
      //}
      resolve();
    });
  };