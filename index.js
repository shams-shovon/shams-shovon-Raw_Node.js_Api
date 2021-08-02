/*
Title: Uptime Monitoring Aplication
Despription: A RESTFul API to monitor up or down time of user defined links.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/

//dependencies
const http = require('http');
const {handleReqRes} = require('./helpers/handleReqRes');

//app object - module scaffolding
const app = {};

//configuration
app.config = {
  port : 3000,
};

//create server
app.createServer = ()=>
{
  const server = http.createServer(app.handleReqRes);
  server.listen(app.config.port, () =>
  {
    console.log(`listening port ${app.config.port}`);
  });
}

//handle Request Response
app.handleReqRes = handleReqRes;

//start Server
app.createServer();