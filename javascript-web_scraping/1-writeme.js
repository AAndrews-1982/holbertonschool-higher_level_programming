#!/usr/bin/node

const fs = require('fs');

const [filePath, content] = process.argv.slice(2);

if (!filePath || !content) return console.log('Usage: ./script_name.js <file_path> <content>');

try {
    fs.writeFileSync(filePath, content, 'utf-8');
    console.log("Content written successfully.");
} catch (error) {
    console.error('An error occurred:', error.message);
}
