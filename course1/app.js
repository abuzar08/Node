// const readline = require('readline');
// const rl = readline.createInterface({input: process.stdin,
//                           output: process.stdout});
//
// let num1 = Math.floor((Math.random()*10)+1); //Random number
// let num2 = Math.floor((Math.random()*10)+1);
//
// let answer = num1 + num2;
//
// rl.question(`What is ${num1} + ${num2}? \n`,
// (userInput)=>{
//   if (userInput.trim() == answer){
//     rl.close();
//   } //Get rid of trailing whitespace using trim()
//
//   else {
//
//     rl.setPrompt(`Your answer is incorrect. Try agin?\n`);
//     rl.prompt();
//     rl.on('line', (userInput)=>{
//       if (userInput.trim() == answer){
//         rl.close();
//       }
//
//       else {
//         // rl.setPrompt('Incorrect response. Please try again.\n');
//         rl. prompt();
//       }
//     });
//   }
//
// });
//
// //readline is an instance of the eventemmitter class. so you can add a listener with .on
//
// rl.on('close', ()=>{
//   console.log("Yay! you got it!");
//
// });

// const lodash = require('lodash');
// let example = lodash.fill([1,2,3,4,5], "banana", 1, 4);
// console.log(example);

// Express

const express = require('express');
const path = require('path');
const app = express();
const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended: false}));
//Body parser module
app.get('/', (req, res)=>{
  // res.send('Jello!');
  res.sendFile(path.join(__dirname, 'static', 'express.html'))
})


// app.get('/example', (req, res)=>{
//   res.send('In example route!');
// })
//
// app.get('/example/:name/:age', (req, res)=>{
//   console.log(req.params);
//   // res.send('In example route with params!');
//   console.log(req.query);
//   res.send(`${req.params.name} is your name and you are ${req.params.age} years old`)
// })
app.post('/', (req,res)=>{
  console.log(req.body);
  // database work here
  res.send('Successful Post of data')
})
app.listen(3000)
