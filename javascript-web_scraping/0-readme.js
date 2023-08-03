#!/usr/bin/node

const fs = require('fs');

if (process.argv.length < 3) {
  console.log('Usage: ./script_name.js <file_path>');
} else {
  fs.readFile(process.argv[2], 'utf-8', (err, data) => {
    if (err) console.error(err);
    else console.log(data);
  });
}
