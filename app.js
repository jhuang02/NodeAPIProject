'use strict';

const express = require('express');
const app = express();

app.get('/male', function (req, res) {
  res.type('text');
  res.send(randomMaleName());
});

app.get('/female', function (req, res) {
  res.type('json');
  let female = randomFemaleName();
  res.json(female);
});

function allMale() {
  return ["Dane", "Francisco", "Brenden", "Ahmed", "Jarrett", "Roman", "Kymani", "Brayden"
  , "Nelson", "Luca", "Talan", "Brett"];
}

function allLast() {
  return ["Edwards", "Lynn", "Rodgers", "Kidd", "Underwood", "Decker", "Costa", "King", "Norton"
  , "Arellano", "Walker", "Harvey"];
}

function randomMaleName() {
  let first = allMale();
  let last = allLast();
  return first[Math.floor(Math.random() * first.length)] + "\n" + last[Math.floor(Math.random() * last.length)];
}

function randomFemaleName() {
  let femaleName = allFemale();
  return {'firstName': femaleName.firstName[Math.floor(Math.random() * femaleName.firstName.length)],
  'lastName': femaleName.lastName[Math.floor(Math.random() * femaleName.lastName.length)]}
}

function allFemale() {
  return {
    'firstName': ['Taliyah', 'Kamryn', 'Ali', 'Marie', 'Taryn', 'Elisabeth', 'Sadie', 'Sherlyn',
    'Brooke', 'Azaria', 'Lindsey', 'Courtney'],
    'lastName': ['Salas', 'Miranda', 'Bell', 'Frank', 'Klein', 'Holland', 'Baxter', 'Stevens',
    'Erickson', 'Lozano', 'Choi', 'Henson']
  };
}

app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);