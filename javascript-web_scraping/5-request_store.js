#!/usr/bin/node

const request = require('request');
const fs = require('fs'); // Using the built-in fs module

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('error:', error);
  } else {
    fs.writeFile(filePath, body, 'utf8', function (err) {
      if (err) {
        console.error(err);
      } else {
        console.log(`Contents of ${url} have been saved to ${filePath}`);
      }
    });
  }
});
