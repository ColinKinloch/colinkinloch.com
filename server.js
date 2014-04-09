#!/bin/env node
//  OpenShift sample Node application
var express = require('express');

var app = express();

app.use(express.static(__dirname + '/dist'));
app.listen(OPENSHIFT_NODEJS_PORT);