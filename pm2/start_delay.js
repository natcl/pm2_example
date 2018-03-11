#!/usr/bin/env node

const spawn = require('child_process').spawn;

var command;
const delay = parseInt(process.argv[2]) * 1000;
const program = process.argv[3];
const args = process.argv.slice(4);
const env = process.env;
const cwd = process.cwd();

setTimeout(function() {
    command = spawn(program, args, {cwd: cwd, env: env});
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
