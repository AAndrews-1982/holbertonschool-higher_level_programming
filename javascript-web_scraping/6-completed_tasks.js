#!/usr/bin/node

const request = require('request');

const apiUrl = process.argv[2];

request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('An error occurred:', error.message);
    return;
  }

  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
  }

  const todos = JSON.parse(body);

  const completedTasksByUser = {};

  for (const todo of todos) {
    if (todo.completed) {
      if (completedTasksByUser[todo.userId]) {
        completedTasksByUser[todo.userId]++;
      } else {
        completedTasksByUser[todo.userId] = 1;
      }
    }
  }

  for (const userId in completedTasksByUser) {
    console.log(`User ${userId} completed ${completedTasksByUser[userId]} tasks.`);
  }
});
