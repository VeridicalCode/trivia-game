
// vars first
let questionIndex = 0; // start with the first question & iterate
let losses = 0; // number of questions missed
let wins = 0; // number of questions beaten


// 1 object per question
  // question
  // right answer
  // three wrong answers

// function startTimer
    // hide alert div
    // show question div
    // begin timer

// function: populate container
    // get object at questionIndex
    // get question, print to question <p>
    // get wrong answers, print to wrong answer divs
    // get right answer, print to right answer divs
    // call shuffle function
    // call startTimer functino

// function: timer expires
    // store right answer as var
    // hide question div
    // show alert div
    // divtext to "Time's up! The answer was " + answer
    // iterate losses

// function: onclick correct answer
    // stop timer
    // hide question div
    // show alert div
    // wins++
    // divtext to "That's right! Your score is " + wins

// function: onclick wrong answer
    // stop timer
    // store right answer as var
    // hide question div
    // show alert div
    // losses--
    // divtext to "Sorry, the correct answer was " + answer