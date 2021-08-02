/*
Title: Sample handler.
Despription: Sample handler.
Author: Md. Shams Araf Shovon (try to learn node.js)
Date: 02-08-2021
*/

//app object - module scaffolding
const handle = {};

handle.sampleHandle = (requestProperty, Callback) =>
{
    console.log(requestProperty);
    Callback(200,{
        message : 'This is sample url',
    });
}

module.exports = handle;