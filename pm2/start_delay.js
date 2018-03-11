#!/usr/bin/env node

const spawn = require('child_process').spawn;
const exec = require('child_process').execSync;
const os = require('os');

var command;
delay = parseInt(process.argv[2]) * 1000;
program = process.argv[3];

setTimeout(function() {
    command = spawn(program);
    command.stdout.on('data', (data) => {
      console.log(data.toString());
    });

    command.stderr.on('data', (data) => {
      console.log(data.toString());
    });

    command.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });
}, delay);
