# Freecodecamp Data Visualization Challenges

This repository contains the implementation of the Data Visualization challenges for freecodecamp.
The challenges are the following
  - [Visualize Data with a Bar Chart]
  - [Visualize Data with a Scatterplot Graph]
  - [Visualize Data with a Heat Map]
  - [Show National Contiguity with a Force Directed Graph]
  - [Map Data Across the Globe]
  - [Visualize Data with a Choropleth Map]
  - [Visualize Data with a Treemap Diagram]

# Methodology used
This repo contains the implementation of all the challenges.  

In terms of development methodology i used the following folder structure:
  - /public/
    - This folder contains the bundled release for the project.
  - /src/
    - This folder contains all the view implementation and also the routing logic used.
      And also the logic applied to the server interactions. 
  - /src/Assets/
    - This folder contains the stylesheets and other types of media.
  - /src/contexts/
    - Folder that contains global state using the revamped context feature
  - /src/components/Challenges/
    - Inside this folder are the components i.e views used for the challenges.
  - /src/client/layouts/
    - This folder contains the layouts used in this project.
  - /src/pages/
    - This folder contains the static pages to be rendered server side.
  - /src/Utils/
    - This folder contains the some helper utilities.
    
### Tech

This set of challenges uses a number of open source projects to work properly:
* [React] - Great Javascript library for Building user interfaces
* [node.js] - evented I/O for the backend
* [Gatsby] - A static site generator for React.
* [d3] - JavaScript library for manipulating documents based on data


And of course the implementation of the challenges themselves are open source with a [git-repo-url]
 on GitHub.

### Installation from source

fcc-datavis requires [Node.js](https://nodejs.org/) v4+ to run.

Download and extract the [latest pre-built release](https://github.com/jonniebigodes/freecodecampdynamicwebapps/releases).

Before anything else you should install [Gatsby] globally, it will make your life easier.
To do that do the following:

```sh
npm install -g gatsby
```
Wait for it to finish and then install the dependencies and dev dependencies and start the server like the example bellow shows
```sh
$ cd folder to contain the app
$ npm install 
$ gatsby develop

Open url http://localhost:8000
```


License
----

MIT


**Free Software, Hell Yeah!**

[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)
   [Visualize Data with a Bar Chart]: <https://jonniebigodes.github.io/fcc-datavis/viewbarchart/>
   [Visualize Data with a Scatterplot Graph]: <https://jonniebigodes.github.io/fcc-datavis/viewscatter/>
   [Map Data Across the Globe]:<https://jonniebigodes.github.io/fcc-datavis/globeview/>
   [Visualize Data with a Heat Map]:<https://jonniebigodes.github.io/fcc-datavis/heatview/>
   [Show National Contiguity with a Force Directed Graph]:<https://jonniebigodes.github.io/fcc-datavis/forceview/>
   [Visualize Data with a Choropleth Map]:<https://jonniebigodes.github.io/fcc-datavis/viewcloro/>
   [Visualize Data with a Treemap Diagram]:<https://jonniebigodes.github.io/fcc-datavis/viewtreemap/>
   [Gatsby]: <https://www.gatsbyjs.org/>
   [git-repo-url]: <https://github.com/jonniebigodes/fcc-datavis.git>
   [node.js]: <http://nodejs.org>
   [React]: <https://facebook.github.io/react/>
   [Material-UI]:<http://www.material-ui.com>
   [d3]:<https://d3js.org/>
   [PlGh]:  <https://github.com/jonniebigodes/fcc-datavis/tree/master/plugins/github/readme.md>