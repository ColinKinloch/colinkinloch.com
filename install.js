#!/usr/bin/env node

var bower = require('bower');
bower.commands.install();

var grunt = require('grunt');
grunt.cli();