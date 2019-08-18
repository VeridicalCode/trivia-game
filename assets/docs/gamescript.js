
// vars first
let questionIndex = 0; // start with the first question & iterate
let losses = 0; // number of questions missed
let wins = 0; // number of questions beaten

let q0 = {
    question: 'Which of the following people has never been in a Star Trek episode?',
    correct: 'Winona Ryder',
    incorrect: [ 'King Abdullah II of Jordan',
        'Dwayne "The Rock" Johnson',
        'Stephen Hawking' ]
}

let q1 = {
    question: 'What song did Zefram Cochrane listen to while conducting his warp drive test flight?',
    correct: 'Steppenwolf’s "Magic Carpet Ride"',
    incorrect: [ 'Elton John’s "Rocket Man"',
        'David Bowie’s "Space Oddity"',
        'The Beastie Boys’s "Intergalactic"']
}

let q2 = {
    question: 'In the DS9 episode "Far Beyond the Stars," Ben Sisko experiences another life in:',
    correct: '1950s New York',
    incorrect: ['2020s San Francisco',
        '1970s Detroit',
        '1840s Johannesburg']
}

let questionArray = [q0, q1, q2];

// function startTimer
    // hide alert div
    // show question div
    // begin timer

// function: populate container
function populateQuestionBox(){
    // grab correct question object & save it as a var
    let currentQuestion = questionArray[questionIndex];
    $("#questionTextDiv").text(currentQuestion.question); // pull question text from object to html
    
    for (let i=0; i < 3; i++){ // loop through wrong answer array
        let divIndex = '.index'+i; // iterate variable to create correct class tag
        let incorrectText = currentQuestion.incorrect[i]; // store current array entry
        $(divIndex).text(incorrectText); // print current array entry to current div class
    }
    
    $('.rightAnswer').text(currentQuestion.correct);  // pull correct answer text from object to html
    $('#questionIndexDiv').text(questionIndex+1); // change number in header
    // call shuffle function
    // call startTimer
}
populateQuestionBox();

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