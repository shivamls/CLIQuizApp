var readLineSync = require("readline-sync")
const chalk = require("chalk")

userName = readLineSync.question(chalk.bold.red("What is your name? "))

console.log(chalk.blue("Hi, "+ userName + ". Welcome to Do you know Shivam game"))

var score = 0;
highScore = {
  userName: "Shivam",
  score: 4
}

var questions = [
  {
    question: "What is my last name? Beware of the multi spellings of this name ",
    answer: "Agarwal",
    type: 1
  },
  {
    question: "Is my age greater than 25?",
    answer: false,
    type: 2
  },
  {
    question: "How many siblings do I have? ",
    answer: "1",
    type: 1
  },
  {
    question: "Where do I live? ",
    options: ["Hyderabad", "Delhi", "Mumbai", "Bangalore"],
    answer: "Mumbai",
    type: 3
  },
  {
    question: "Which city do I belong to?",
    answer: "Jaipur",
    options: ["Jaipur", "Delhi", "Mumbai", "Bangalore"],
    type: 3
  },
  {
    question: "Where did I go for university?",
    answer: "BITS Pilani",
    options: ["IIT Delhi", "NSIT Delhi", "BITS Pilani", "Drop Out"],
    type: 3
  },
  {
    question: "Am I married?",
    answer: false,
    type: 2
  }
  ]

function checkHighScore(score){
  if(score>highScore.score){
    console.log(chalk.yellow("Congrats! "+userName + " You have beaten the high score."))
    console.log(chalk.blue("Friendship over with everyone else, now you are my best friend"))
  }
}

function askQuestion(question_obj){
  question = question_obj.question
  answer = question_obj.answer
  type = question_obj.type
  
  var answerCorrect;

  if(type === 1){
    userAnswer = readLineSync.question(question)
    answerCorrect = (userAnswer.toUpperCase() === answer.toUpperCase())
  }
  else if(type === 2){
    userAnswer = readLineSync.keyInYN(question)
    console.log(userAnswer)
    answerCorrect = (userAnswer === answer)
  }
  else if(type === 3){
    options = question_obj.options
    userAnswer = readLineSync.keyInSelect(options, question)
    
    answerCorrect = (options[userAnswer]===answer)
  }

  if(answerCorrect){
    console.log("Correct")
    score = score + 1
    console.log("Updated score is "+score)
    checkHighScore(score)
  }
  else{
    console.log("Incorrect Answer")
  }
}

for(i=0; i<questions.length; i++){
  askQuestion(questions[i])
}