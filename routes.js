/*
Title: Routes
Despription: Application routes.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/

//dependencies
const {sampleHandle} = require('./handlers/routeHandlers/sampleHandlers');


const routes = {
  sample: sampleHandle,
};

module.exports = routes;
