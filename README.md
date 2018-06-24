##Introduction
Client-side of this project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Server-side of this project was bootstrapped with [Sails JS](https://sailsjs.com/).


<h2>Useful CLI Commands</h2>

| Command                 | Description                                                   |
|:-----------------------:|:-------------------------------------------------------------|
| `npm install`             | Installs client-side dependencies. On 'postinstall' installs server-side dependencies.  | 
| `npm start`             | Runs the server in watch mode, then begins the client-side via react-scripts and starts watching for SASS changes   | 
| `npm run dev`             | (npm start) Runs the server in watch mode, then begins the client-side via react-scripts and starts watching for SASS changes   | 
| `npm run prod`             | Builds and runs a Docker image encapsulating the entire project  | 
| `npm run build`           | Compile client-side assets via react-scripts.     | 
| `npm run test`    | Runs client-side tests via react-scripts in JSDOM environment. | 
| `npm run docker`        | (npm run prod) Builds and runs a Docker image encapsulating the entire project | 
| `npm run mysql`          | Runs a mysql:5.7 local MySQL server for development via Docker | 
| `npm run test-all-ci`          | Runs client-side and server-side tests with no interaction (For CI use) | 


##Known Bugs

####Fix 'Error watching file for changes: EMFILE' when running client-side tests
Ensure Watchman package is installed on your machine (e.g. ```brew install watchman```)

####NPM Scripts only working/tested on Unix systems
Change how environment variables are set


####fix "TypeError: environment.teardown is not a function" in react-scripts test

Remove all jest dependencies, then run:
```
rm -rf node_modules ; rm package-lock.json ; rm yarn.lock ; yarn install
```
