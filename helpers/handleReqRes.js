/*
Title: handle Request Response
Despription: handle Request Response.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/
//dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');
const routes = require('../routes');
const {notFoundHandle} = require('../handlers/routeHandlers/notFoundHandler');

//app object - module scaffolding
const handler = {};

handler.handleReqRes = (req,res) =>
{
    //request handling
    const parseUrl = url.parse(req.url, true);
    const path = parseUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g,'');
    const method = req.method.toLowerCase();
    const queryStringObject = parseUrl.query;
    const headerObject = req.headers;
    //console.log(headerObject);

    // all requested property in a single object.
    const requestProperty = {
        parseUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headerObject,
    };

    //buffer to String. It's same to "toString()"
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    // handler choose
    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandle;
    chosenHandler(requestProperty,(statusCode , payload) =>
    {
       statusCode = typeof statusCode === 'number' ? statusCode : 500;
       payload = typeof payload === 'object' ? payload : {};

       const payloadString = JSON.stringify(payload);

       //return final response
        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data',(buffer) =>
    {
        realData += decoder.write(buffer);
    });

    req.on('end',() =>
    {
        realData += decoder.end();
        console.log(realData);

        //response handling
        res.end("It's me.");
    });

}
module.exports = handler;