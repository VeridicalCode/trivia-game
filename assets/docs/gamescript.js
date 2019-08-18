
// vars first
let questionIndex = 0; // start with the first question & iterate
let losses = 0; // number of questions missed
let wins = 0; // number of questions beaten

let q1 = {
    question: 'Which of the following people has never been in a Star Trek episode?',
    correct: 'Winona Ryder',
    fake1: 'King Abdullah II of Jordan',
    fake2: 'Dwayne "The Rock" Johnson',
    fake3: 'Stephen Hawking'
}

let q2 = {
    question: 'What song did Zefram Cochrane listen to while conducting his warp drive test flight?',
    correct: 'Steppenwolf’s "Magic Carpet Ride"',
    fake1: 'Elton John’s "Rocket Man"',
    fake2: 'David Bowie’s "Space Oddity"',
    fake3: 'The Beastie Boys’s "Intergalactic"'
}

let q3 = {
    question: 'In the DS9 episode "Far Beyond the Stars," Ben Sisko experiences another life in:',
    correct: '1950s New York',
    fake1: '2020s San Francisco',
    fake2: '1970s Detroit',
    fake3: '1840s Johannesburg'
}

// 1 object per question
  // question
  // right answer
  // three wrong answers

// function startTimer
    // hide alert div
    // show question div
    // begin timer

// function: populate container
function populateQuestionBox(){
    // get object at questionIndex
    // get question, print to question <p>
    // get wrong answers, print to wrong answer divs
    // get right answer, print to right answer divs
    // call shuffle function
    // call startTimer
}

// function: timer expires
    // store right answer as var
    // hide question div
    // show alert div
    // divtext to "Time's up! The answer was " + answer
    // iterate losses

// function: onclick correct answer
$(".rightAnswer").on("click", function() {
    // stop timer
    // hide question div
    // show alert div
    // wins++
    // divtext to "That's right! Your score is " + wins
})

// function: onclick wrong answer
$(".wrongAnswer").on("click", function() {
    // stop timer
    // store right answer as var
    // hide question div
    // show alert div
    // losses--
    // divtext to "Sorry, the correct answer was " + answer
})