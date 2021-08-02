/*
Title: Not Found handler.
Despription: Not Found handler.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/

//app object - module scaffolding
const handle = {};

handle.notFoundHandle = (requestProperty, Callback) =>
{
    console.log(requestProperty);
    Callback(404,{
        message : 'The link is not found',
    });
}

module.exports = handle;