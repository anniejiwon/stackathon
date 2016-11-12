'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

const beenAsked =[];
const questions = [
  {id: 1, type: 'voice', ask: 'What is your favorite hobby?', image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCyOBq3hxMjn2O8zBXMKDXFIkC9KLOHjrLzAwwAerOMZA7ANZO3Q"},
  {id: 2, type: 'voice', ask: 'What do you like to do for exercise?'},
  {id: 3, type: 'voice', ask: 'Do you like animals? If so, what is your favorite animal?'},
  {id: 4, type: 'voice', ask: 'Do you believe in an afterlife?'},
  {id: 5, type: 'voice', ask: 'What are you good at? What are you bad at?'},
  {id: 6, type: 'voice', ask: 'What do you think about rollercoasters?'},
  {id: 7, type: 'voice', ask: 'Do you like spicy food?'},
  {id: 8, type: 'voice', ask: 'What\'s your favorite food?'},
  {id: 9, type: 'voice', ask: 'What is your favorite holiday?'},
  {id: 10, type: 'voice', ask: 'Which academic subject is your favorite?'},
  {id: 11, type: 'voice', ask: 'What were you like in high school?'},
  {id: 12, type: 'voice', ask: 'What makes you happy?'},
  {id: 13, type: 'voice', ask: 'What makes you sad?'},
  {id: 14, type: 'voice', ask: 'What is your pet peeve?'},
  {id: 15, type: 'voice', ask: 'Would you rather permanently have only one eyebrow or half a mustache?'},
  {id: 16, type: 'voice', ask: 'Would you rather be a mermaid or a dragon?'},
  {id: 17, type: 'voice', ask: 'What would you do if you had a year to do anything you wanted?'},
  {id: 18, type: 'voice', ask: 'What do you like to shop for?'},
  {id: 19, type: 'voice', ask: 'Where would you most like to vacation?'},
  {id: 20, type: 'voice', ask: 'What do you think about sports? Just in general.'},
  {id: 21, type: 'text', ask: 'Would you like to work as an entrepreneur?'},
  {id: 22, type: 'text', ask: 'Are you good at spelling?'},
  {id: 23, type: 'text', ask: 'What\'s the worst thing about living where you live?'},
  {id: 24, type: 'text', ask: 'What is your favorite book?'},
  {id: 25, type: 'text', ask: 'What kind of TV shows do you like?'},
  {id: 26, type: 'text', ask: 'Would you shave your head for like 500 bucks?'},
  {id: 27, type: 'text', ask: 'What are your thoughts on hot sauce?'},
  {id: 28, type: 'text', ask: 'If you had a billion dollars, what would you do with them?'},
  {id: 29, type: 'text', ask: 'What kind of clothes do you like to buy for yourself?'},
  {id: 30, type: 'text', ask: 'Are you a good driver?'},
  {id: 31, type: 'text', ask: 'What do you think about fake eyelashes?'},
  {id: 32, type: 'text', ask: 'Do you think that free will exists or that humans just use the concept of free will to assign importance to our existence?'},
  {id: 33, type: 'text', ask: 'If you could only wear one color for the rest of your life, which color would you choose?'},
  {id: 34, type: 'text', ask: 'Ninjas vs. vikings, who would win?'},
  {id: 35, type: 'text', ask: 'Could you beat Mark Zuckerberg in a fist fight?'},
  {id: 36, type: 'text', ask: 'Which do you like better, babies or puppies?'},
  {id: 37, type: 'text', ask: 'Capitalism. Hot or not?'},
  {id: 38, type: 'text', ask: 'Do you litter?'},
  {id: 39, type: 'text', ask: 'Is chapstick important to you?'},
  {id: 40, type: 'text', ask: 'Do you have any tattoos?'},
  {id: 41, type: 'click', ask: 'Would you rather be invisible or have super strength?'},
  {id: 42, type: 'click', ask: 'What do you consider to be the best fictional universe?'},
  {id: 43, type: 'click', ask: 'Do you like to wear cargo shorts?'},
  {id: 44, type: 'click', ask: 'What is your least favorite organism?'},
  {id: 45, type: 'click', ask: 'Who is your favorite historical figure?'},
  {id: 46, type: 'click', ask: 'How do you feel about slam poetry?'},
  {id: 47, type: 'click', ask: 'If you could choose a college major again, what would you choose?'},
  {id: 48, type: 'click', ask: 'Thoughts on surfing?'},
  {id: 49, type: 'click', ask: 'Would you enjoy being a farmer?'},
  {id: 50, type: 'click', ask: 'What are you a snob about?'},
  {id: 51, type: 'click', ask: 'How do you feel about the subway?'},
  {id: 52, type: 'click', ask: 'How do you feel about Subway?'},
  {id: 53, type: 'click', ask: 'What is your favorite holiday and why?'},
  {id: 54, type: 'click', ask: 'With which fictional character do you most identify?'},
  {id: 55, type: 'click', ask: 'Are you more of a Shrek or a Donkey?'},
  {id: 56, type: 'click', ask: 'Describe your dream house.'},
  {id: 57, type: 'click', ask: 'Would you rather eat salads or burritos for the rest of your life?'},
  {id: 58, type: 'click', ask: 'Do you have any DIY hobbies?'},
  {id: 59, type: 'click', ask: 'Do you like to play videogames?'},
  {id: 60, type: 'click', ask: 'Do you believe in karma?'}
];


app.get('/api/questions', function (req, res) {
  res.json(questions);
});


app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

