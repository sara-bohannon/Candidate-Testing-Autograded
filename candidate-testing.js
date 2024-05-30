const input = require('readline-sync')

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = ""

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //


const questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ", 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers = [];



//TODO: Variables for Part 2
let question = "Who was the first American woman in space? "
let correctAnswer = "Sally Ride"
let candidateAnswer = " "



// TODO 1.1b: Ask for candidate's name //
function askForName(){
  candidateName = input.question("Enter your name: ");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    console.log(`Your answer: ${candidateAnswers[i]}\n`);
   }
}
 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //



function gradeQuiz(candidateAnswers) {
  let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    console.log(`Question ${i + 1}: ${questions[i]}`);
    console.log(`Correct Answer: ${correctAnswers[i]}`);
    console.log(`Your Answer: ${candidateAnswers[i]}\n`);

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
      numCorrect++;
    }
  }
 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade = (numCorrect / questions.length) * 100;
  
 //TODO 3.2 use this variable to calculate the candidates score.
console.log(` Overall Grade: ${grade}% (${numCorrect} out of ${questions.length} correct answers) `);
  
if (grade >= 80) {
  console.log(` Status: PASSED `);
} else {
  console.log(` Status: FAILED `);
}

 return grade;
 }

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
  console.log(`Hello, ${candidateName}!\n`);
  askQuestion();
  gradeQuiz(candidateAnswers);
}



 

// ----------- Don't write any code or change any code below this line ---------- //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};