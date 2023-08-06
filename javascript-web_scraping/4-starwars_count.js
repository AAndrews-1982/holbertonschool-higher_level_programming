#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('error:', error);
    return;
  }

  const films = JSON.parse(body).results;
  const count = films.reduce((acc, film) => {
    if (film.characters.some(character => character.endsWith('/18/'))) {
      return acc + 1;
    }
    return acc;
  }, 0);

  console.log(count);
});
