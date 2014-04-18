#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

var ipaddr = process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
var port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

app.use(express.static(__dirname + '/dist'));
app.listen(port);
