#!/usr/bin/env node

var exec = require('child_process').exec;
exec('gem install compass', function(){});

var bower = require('bower');
bower.commands.install();

var grunt = require('grunt');
grunt.cli();

