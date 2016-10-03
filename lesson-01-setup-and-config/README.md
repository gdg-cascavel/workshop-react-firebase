# React & Redux Workshop

## Initial setup & config

Basic app structure:

```bash
  $ mkdir workshop-react
  $ cd workshop-react
  $ npm init # creates package.json with the basic structure
  $ npm i react react-dom -S # dependencies
  $ npm i babel-core babel-loader babel-preset-es2015 babel-preset-react -D # dev-dependencies
  $ npm i babel webpack webpack-dev-server -g # dev tools - installed globally
  $ touch webconfig.config.js # webpack config
  $ touch index.html # html template to load everything
  $ mkdir -p src/components # components folder
  $ mkdir -p public/ # output folder
  $ touch src/index.jsx # app loader
  $ touch src/components/App.jsx # our first component
```
