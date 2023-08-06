#!/usr/bin/node

const request = require('request');
const fs = require('fs/promises'); // Using the built-in promises version of fs

const url = process.argv[2];
const filePath = process.argv[3];

request(url, (error, response, body) => {
  if (error) {
    console.error('error:', error);
    return;
  }

  fs.writeFile(filePath, body, 'utf8')
    .then(() => {
      console.log(`Contents of ${url} have been saved to ${filePath}`);
    })
    .catch(err => {
      console.error(err);
    });
});
