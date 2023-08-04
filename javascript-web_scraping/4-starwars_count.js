#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('An error occurred:', error.message);
  } else if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
  } else {
    const films = JSON.parse(body).results;
    const wedgeMovies = films.filter(film => film.characters.includes('https://swapi-api.hbtn.io/api/people/18/'));
    console.log(wedgeMovies.length);
  }
});
