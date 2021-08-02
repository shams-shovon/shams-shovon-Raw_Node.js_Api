/*
Title: handle Request Response
Despription: handle Request Response.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/
//dependencies
const url = require('url');
const {StringDecoder} = require('string_decoder');

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
    console.log(headerObject);

    //buffer to String. It's same to "toString()"
    const decoder = new StringDecoder('utf-8');
    let realData = '';
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