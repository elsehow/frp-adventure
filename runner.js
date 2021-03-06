#!/usr/bin/env node

var adventure = require('adventure');
var shop = adventure('frp-adventure');

var problems = require('./problemList.js')
problems.forEach(function (prob) {
    shop.add(prob, function () { return require('./problems/' + prob) });
});

shop.execute(process.argv.slice(2));
