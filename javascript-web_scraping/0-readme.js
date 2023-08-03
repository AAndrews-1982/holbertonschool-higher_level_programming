#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];

function readAndPrintFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf-8');
        console.log(content);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

if (!filePath) {
    console.log('Usage: ./script_name.js <file_path>');
} else {
    readAndPrintFile(filePath);
}
