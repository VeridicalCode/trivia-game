
// vars first
let questionIndex = 0; // start with the first question & iterate
let losses = 0; // number of questions missed
let wins = 0; // number of questions beaten
let countdown = 20; // twenty seconds per question
let clockIsTicking; // stores our interval function

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

// function to pull next question
function nextQuestion(){
    if (questionIndex >= questionArray.length){ // if we're out of questions
        $('#alertTextDiv').text("The game is over! You got " + wins + " questions right!");
        $('#startGame').show();
        return; // bail out
    }
    // otherwise:
    $('#alertDiv').hide();  // hide alert div
    populateQuestionBox();  // call function to set up new question
}

// show the alert div for five seconds, then go back to question div
function showAlert(){
    $('#questionDiv').hide();  // hide question div
    $('#timerDiv').hide();
    $('#alertDiv').show();  // show alert div
    setTimeout(nextQuestion, 5000); // in five seconds, call nextQuestion
}

// function: not exactly fisher-yates but it's only four elements so
function shuffle(){
    let answerArray = [ '#index0', '#index1', '#index2', '#index3'];
    let j = Math.floor(Math.random() * 4); // grab a box at random
    $(answerArray[j]).appendTo('#hiddenDivForShuffle1'); // stick it at the beginning
    j = Math.floor(Math.random() * 4) // grab another box at random
    $(answerArray[j]).prependTo('#hiddenDivForShuffle2') // stick it to the end
}

// function: populate container
function populateQuestionBox(){
    let currentQuestion = questionArray[questionIndex]; // grab correct question object & save it as a var
    $("#questionTextDiv").text(currentQuestion.question); // pull question text from object to html
    
    for (let i=0; i < 3; i++){ // loop through wrong answer array
        let divIndex = '#index'+i; // iterate variable to create correct id tag
        let incorrectText = currentQuestion.incorrect[i]; // store current array entry
        $(divIndex).text(incorrectText); // print current array entry to current div class
    }
    
    $('.rightAnswer').text(currentQuestion.correct);  // pull correct answer text from object to html
    $('#questionIndexDiv').text(questionIndex+1); // change number in header
    questionIndex++ // set to next question for next time
    shuffle();    // call shuffle function
    $('#questionDiv').show(); // unhide the div
    $('#timerDiv').show();
    // call startTimer
    beginCountdown();
}

// shave one second off timer, alert to failure if the time hits 0
function questionTimer() {
    countdown--; // iterate down
    $("#timerDiv").html(countdown); // change text of timer accordingly
    if (countdown === 0) {
      stop();  // bail out of the interval
      losses-- // iterate losses
      let rightAnswer = $('.rightAnswer').text();  // store right answer as var
      $('#alertTextDiv').text('Time\'s up! The correct answer was "' + rightAnswer + '."');
        // change alert text
      showAlert(); // call the next card
    }
  }
// actual interval function to start timer ticking
function beginCountdown() {
    clearInterval(clockIsTicking); // safety check
    countdown = 20; // reset timer to 20 seconds with each new call
    clockIsTicking = setInterval(questionTimer, 1000); // proc questionTimer every second
}

// function: onclick correct answer
$('.rightAnswer').on('click', function(){
    clearInterval(clockIsTicking); // stop timer
    wins++ // iterate wins
    $('#alertTextDiv').text("That's right! Your score is now " + wins +"!")
    showAlert(); // swap cards
})

// function: onclick wrong answer
$(".wrongAnswer").on("click", function() {
    clearInterval(clockIsTicking); // stop timer
    let rightAnswer = $('.rightAnswer').text();  // store right answer as var
    $('#alertTextDiv').text('Sorry, the correct answer was "' + rightAnswer + '."');
    losses-- // iterate losses
    showAlert(); // swap cards
})

// on button click. clear everything just to be safe, then proc question box
$('#startGame').on('click', function(){
    $('#startGame').hide();
    $('#alertDiv').hide();
    wins = 0;
    losses = 0;
    questionIndex = 0;
    populateQuestionBox();
})