'use strict';

const express = require('express');
const volleyball = require('volleyball');

const app = express();

app.use(volleyball);

app.use(express.static(__dirname));

const beenAsked =[];
const questions = [
  {id: 1, type: 'voice', ask: 'What is your favorite hobby?', image: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSCyOBq3hxMjn2O8zBXMKDXFIkC9KLOHjrLzAwwAerOMZA7ANZO3Q", answer: 'my favorite hobby is '},
  {id: 2, type: 'voice', ask: 'What do you like to do for exercise?', answer: 'i like to '},
  {id: 3, type: 'voice', ask: 'Do you like animals? If so, what is your favorite animal?', answer: 'my favorite animal is '},
  {id: 4, type: 'voice', ask: 'Do you believe in an afterlife?' ,answer: 'afterlife '},
  {id: 5, type: 'voice', ask: 'What are you good at?', answer: 'i am good at '},
  {id: 6, type: 'voice', ask: 'What do you think about rollercoasters?', answer: 'rollercoasters are '},
  {id: 7, type: 'voice', ask: 'what is your favorite spicy food?', answer: 'my favorite spicy food is '},
  {id: 8, type: 'voice', ask: 'What\'s your favorite food?' ,answer: 'my favorite food is '},
  {id: 9, type: 'voice', ask: 'What is your favorite holiday?' ,answer: 'my favorite holiday is '},
  {id: 10, type: 'voice', ask: 'Which academic subject is your favorite?', answer: 'my favorite academic subject is '},
  {id: 11, type: 'voice', ask: 'What were you like in high school?', answer: 'in high school i was '},
  {id: 12, type: 'voice', ask: 'What makes you happy?', answer: 'im happiest when i '},
  {id: 13, type: 'voice', ask: 'What makes you sad?', answer: 'im sad when '},
  {id: 14, type: 'voice', ask: 'What is your pet peeve?', answer: 'my pet peeve is '},
  {id: 15, type: 'voice', ask: 'Would you rather permanently have only one eyebrow or half a mustache?', answer: 'i would like to have '},
  {id: 16, type: 'voice', ask: 'Would you rather be a mermaid or a dragon?', answer: 'i would like to be a '},
  {id: 17, type: 'voice', ask: 'What would you do if you had a year to do anything you wanted?', answer: 'i would like to '},
  {id: 18, type: 'voice', ask: 'What do you like to shop for?' ,answer: 'i like to shop for '},
  {id: 19, type: 'voice', ask: 'Where would you most like to vacation?', answer: 'i want to travel to '},
  {id: 20, type: 'voice', ask: 'What do you think about sports? Just in general.', answer: 'i think sports are '},
  {id: 21, type: 'text', ask: 'Would you like to work as an entrepreneur?', answer: 'entrepreneur: '},
  {id: 22, type: 'text', ask: 'Are you good at spelling?' ,answer: 'my spelling is '},
  {id: 23, type: 'text', ask: 'What\'s the worst thing about living where you live?', answer: 'where i live is '},
  {id: 24, type: 'text', ask: 'What is your favorite book?' ,answer: 'my favorite book is '},
  {id: 25, type: 'text', ask: 'What kind of TV shows do you like?', answer: 'i like to watch '},
  {id: 26, type: 'text', ask: 'Would you shave your head for like 500 bucks?', answer: 'shave head: '},
  {id: 27, type: 'text', ask: 'What are your thoughts on hot sauce?', answer: 'hot sauce is '},
  {id: 28, type: 'text', ask: 'If you had a billion dollars, what would you do with them?', answer: 'i would '},
  {id: 29, type: 'text', ask: 'What kind of clothes do you like to buy for yourself?', answer: 'i like clothes that are '},
  {id: 30, type: 'text', ask: 'Are you a good driver?', answer: 'driving is '},
  {id: 31, type: 'text', ask: 'What do you think about fake eyelashes?', answer: 'fake eyelashes are '},
  {id: 32, type: 'text', ask: 'Do you think that free will exists or that humans just use the concept of free will to assign importance to our existence?', answer: 'free will is '},
  {id: 33, type: 'text', ask: 'If you could only wear one color for the rest of your life, which color would you choose?' ,answer: 'my favorite color to wear is '},
  {id: 34, type: 'text', ask: 'Ninjas vs. vikings, who would win?', answer: 'i think the winner is '},
  {id: 35, type: 'text', ask: 'Could you beat Mark Zuckerberg in a fist fight?', answer: ''},
  {id: 36, type: 'text', ask: 'Which do you like better, babies or puppies?', answer: ''},
  {id: 37, type: 'text', ask: 'Capitalism. Hot or not?', answer: 'capitalism is '},
  {id: 38, type: 'text', ask: 'Do you litter?', answer: 'littering is '},
  {id: 39, type: 'text', ask: 'Is chapstick important to you?' ,answer: 'chapstick is '},
  {id: 40, type: 'text', ask: 'Do you have any tattoos?', answer: 'tattoos are '},
  {id: 41, type: 'click', ask: 'Would you rather be invisible or have super strength?', answer: 'i would rather be '},
  {id: 42, type: 'click', ask: 'What do you consider to be the best fictional universe?', answer: 'the best fictional universe is '},
  {id: 43, type: 'click', ask: 'Do you like to wear cargo shorts?', answer: 'cargo shorts is a '},
  {id: 44, type: 'click', ask: 'What is your least favorite organism?', answer: ''},
  {id: 45, type: 'click', ask: 'Who is your favorite historical figure?', answer: ''},
  {id: 46, type: 'click', ask: 'How do you feel about slam poetry?', answer: ''},
  {id: 47, type: 'click', ask: 'If you could choose a college major again, what would you choose?', answer: ''},
  {id: 48, type: 'click', ask: 'Thoughts on surfing?', answer: ''},
  {id: 49, type: 'click', ask: 'Would you enjoy being a farmer?' ,answer: ''},
  {id: 50, type: 'click', ask: 'What are you a snob about?' ,answer: ''},
  {id: 51, type: 'click', ask: 'How do you feel about the subway?', answer: ''},
  {id: 52, type: 'click', ask: 'How do you feel about Subway?' ,answer: ''},
  {id: 53, type: 'click', ask: 'What is your favorite holiday and why?', answer: ''},
  {id: 54, type: 'click', ask: 'With which fictional character do you most identify?', answer: ''},
  {id: 55, type: 'click', ask: 'Are you more of a Shrek or a Donkey?', answer: ''},
  {id: 56, type: 'click', ask: 'Describe your dream house.' ,answer: ''},
  {id: 57, type: 'click', ask: 'Would you rather eat salads or burritos for the rest of your life?', answer: ''},
  {id: 58, type: 'click', ask: 'Do you have any DIY hobbies?' ,answer: ''},
  {id: 59, type: 'click', ask: 'Do you like to play videogames?' ,answer: ''},
  {id: 60, type: 'click', ask: 'Do you believe in karma?' ,answer: ''}
];


app.get('/api/questions', function (req, res) {
  res.json(questions);
});


app.listen(3000, function () {
  console.log('Server listening on port', 3000);
});

