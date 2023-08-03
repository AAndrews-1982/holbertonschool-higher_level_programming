#!/usr/bin/node

const fs = require('fs');

const filePath = process.argv[2];
const content = process.argv[3];

function writeToFile(filePath, content) {
    try {
        fs.writeFileSync(filePath, content, 'utf-8');
        console.log("Content written successfully.");
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
}

if (!filePath || !content) {
    console.log('Usage: ./script_name.js <file_path> <content>');
} else {
    writeToFile(filePath, content);
}
