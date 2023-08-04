#!/usr/bin/node

const fs = require('fs');
const [fileToWrite, contentToWrite] = process.argv.slice(2);

fs.writeFile(fileToWrite, contentToWrite, 'utf-8', (error) => {
  if (error) {
    console.error('An error occurred:', error.message);
  } else {
    console.log('Content written successfully.');
  }
});
