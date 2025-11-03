"use strict";
// Note not really a beginner


let playAgain;
do {
  const questions = [
    {
      question:
        "1. Which keyword is used to declare a variable in JavaScript that can not be reassigned ?",
      answer: "const",
    },
    {
      question: "2. What data type is used for true / false values?",
      answer: "boolean",
    },
    {
      question: "3. What operator is used for strict equality",
      answer: "===",
    },
    {
      question: "4. Which method converts a string to lowercase",
      answer: "tolowerCase",
    },
    {
      question: "5. What symbol is used for comments in javascript?",
      answer: "//",
    },
  ];

  let score = 0;
  let userInput;

  //Using 'For Loop'  to loop through the questions
  for (let i = 0; i < questions.length; i++) {
    userInput = prompt(questions[i].question);

    if (
      userInput &&
      userInput.toLowerCase() === questions[i].answer.toLowerCase()
    ) {
      alert("Correct");
      console.log("correct!");
      score++;
    } else {
      alert("Wrong answer");
      console.log("wrong answer")
    }
  }

  //Show score
  alert("You got " + score + " out of " + questions.length + " correct");

  console.log("You got " + score + " out of " + questions.length + " correct");

  //Ask if player wants to play again
  playAgain = confirm("Want to play again?");

  if (playAgain) {
    console.log("Restarting...");
  }
} while (playAgain);
{
  console.log("Thanks for playing");
}


