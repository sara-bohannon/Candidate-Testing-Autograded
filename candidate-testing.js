const input = require('readline-sync')

// TODO 2: modify your quiz app to ask 5 questions //


// TODO 1.1a: Define candidateName // 
let candidateName = " "

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = [
  "1) Who was the first American woman in space? ",
  "2) True or False: 5000 meters = 5 kilometers.",
  "3) (5 + 3)/2 * 10 = ?" , 
  "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "5) What is the minimum crew size for the International Space Station (ISS)? "
];



//TODO: Variables for Part 2





  // TODO 1.1b: Ask for candidate's name //
  function askForName(){
    candidateName = input.question("Enter your name: ");
  }

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers.push(input.question(questions[i]));
    console.log('Your answer: ${candidateAnswers[i]}\n');
  }
}
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //



function gradeQuiz(candidateAnswers) {
  let numCorrect = 0;

  for (let i = 0; i < questions.length; i++) {
    console.log('Question ${i + 1}; ${questions[i]}');
    console.log('Correct Answers: ${correctAnswers[i]}');
    console.log('Your Answer: ${candidateAnswers[i]}\n');

    if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()) {
    }
  }
 

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 



  let grade;  //TODO 3.2 use this variable to calculate the candidates score.


  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Greet candidate using their name //
   console.log(`Hello, ${firstName} ${lastName}!`);
  askQuestion();
  gradeQuiz(this.candidateAnswers);
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