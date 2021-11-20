/*
 * Name: Jerry Huang
 * Date: 11/15/2021
 * Section AF Tara Wueger & Austin Jenchi
 *
 * This JS file is the server side code which returns the fake identity data to index.js based
 * off what requests are made.
 */

'use strict';

const express = require('express');
const app = express();

/** The /male endpoint returns a random male first and last name */
app.get('/male', function (req, res) {
  res.type('text');
  res.send(randomMaleName());
});

/** The /female endpoint returns a random female first and last name */
app.get('/female', function (req, res) {
  res.type('json');
  let female = randomFemaleName();
  res.json(female);
});

/** All other endpoints are invalid and will send an error status of 400 */
app.get('*', function(req, res){
  res.status(400).send(
    "Error invalid endpoint!"
  );
});

/**
 * Returns a list of all possible male first names
 * @return {array} - an array of all male first names
 */
function allMale() {
  return ["Dane", "Francisco", "Brenden", "Ahmed", "Jarrett", "Roman", "Kymani", "Brayden"
  , "Nelson", "Luca", "Talan", "Brett"];
}

/**
 * Returns a list of all possible last names
 * @return {array} - an array of all last names
 */
function allLast() {
  return ["Edwards", "Lynn", "Rodgers", "Kidd", "Underwood", "Decker", "Costa", "King", "Norton"
  , "Arellano", "Walker", "Harvey"];
}

/**
 * Returns a random male first and last name
 * @return {string} - a male first and last name seperated by a new line
 */
function randomMaleName() {
  let first = allMale();
  let last = allLast();
  return first[Math.floor(Math.random() * first.length)] + "\n" + last[Math.floor(Math.random() * last.length)];
}

/**
 * Returns a random female first and last name
 * @return {JSON} - a JSON object with female first and last name
 */
function randomFemaleName() {
  let femaleName = allFemale();
  return {'firstName': femaleName.firstName[Math.floor(Math.random() * femaleName.firstName.length)],
  'lastName': femaleName.lastName[Math.floor(Math.random() * femaleName.lastName.length)]}
}

/**
 * Returns a json object with female firstname and lastname properties that hold an array of
 * all possible names
 * @return {JSON} - a JSON object with all female first and last name
 */
function allFemale() {
  return {
    'firstName': ['Taliyah', 'Kamryn', 'Ali', 'Marie', 'Taryn', 'Elisabeth', 'Sadie', 'Sherlyn',
    'Brooke', 'Azaria', 'Lindsey', 'Courtney'],
    'lastName': ['Salas', 'Miranda', 'Bell', 'Frank', 'Klein', 'Holland', 'Baxter', 'Stevens',
    'Erickson', 'Lozano', 'Choi', 'Henson']
  };
}

/** Use files from public folder */
app.use(express.static('public'));

/** Listen on port 8000 */
const PORT = process.env.PORT || 8000;
app.listen(PORT);