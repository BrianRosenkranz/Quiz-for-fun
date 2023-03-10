let randomQuestions, questionIndex;
let startbtn = document.getElementById("start-button");
let nextButtons = document.getElementById("next-button");
let feedback= document.getElementById("feedback-container");
let fbUsername= [''];
let questionContainer = document.getElementById("question-container");
let timer = document.getElementById('timer');
let score = document.getElementById('score');
let currentScore = 0;
let timeS = document.getElementById("timer-reduce");
let time= 5;
let questionElement = document.getElementById("question");
let answerButton = document.getElementById("answer-button");
startbtn.addEventListener("click", quizGame);
nextButtons.addEventListener("click", () => {
    questionIndex++;
    showNextQuestion();
});
//form function. First of everything. 
let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById("form-container");
form.addEventListener('submit', formFirst);
let errorMsg = document.getElementById("errors");
function validation(username) {
    if (username.trim() == "") {
        alert("Enter your name");
        return false;
    }
}
function formFirst(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    validation(username);
    if (usernames.includes(username)) {
        errorMsg.innerHTML = `Sorry, the username ${username} is already in use. Please choose another username.`;
    } else {
        usernames.push(`${username}`);
        fbUsername.push(`${username}`);
        //form.submit();
        // If i submit the form without action and method it won't start the game. Bug
        form.classList.add("hide");
        document.getElementById("intro").classList.remove('hide');
        startbtn.classList.remove('hide');
    }
}
// feedback function
function feedBack(){
    feedback.classList.remove("hide");
    let congrats = document.getElementById('h3-fb');
    congrats.innerHTML=`Congratulation ${fbUsername}!`;
}
// timer function
function setTimer(){ setInterval(() => {
    time--;
    timeS.innerText = time;
    if (time <= 0 || time < 0) {
       timeS.innerText=time=60;
       nextButtons.classList.remove("hide");
       nextButtons.innerText="Next";
    }
}, 1000);}
// stats the game after the form, with start button.
function quizGame() {
    document.getElementById("intro").classList.add('hide');
    startbtn.classList.add("hide");
    //get the questions randomly
    randomQuestions = myQuestions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    questionContainer.classList.remove('hide');
    showNextQuestion();
    timer.classList.remove('hide');
    score.classList.remove("hide");
    setTimer();
    feedback.classList.add("hide");
}
// shows the question in container
function showNextQuestion() {
    nextButton();
    showQuestion(randomQuestions[questionIndex]);
}
// Function gets the question from myQuestions
function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("button");
        //check answer if is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButton.appendChild(button);
    });
}
// remove buttons in html.
function nextButton() {
    resetStatus(document.body);
    nextButtons.classList.add('hide');
    nextButtons.innerText= "Next";
    while (answerButton.firstChild) {
        answerButton.removeChild(answerButton.firstChild);
}
}
/*
Function to bring the answer.
checks the answers.
creates Buttons wit the answers inside
*/
function selectAnswer(q) {
    let buttonChoice = q.target;
    let correct = buttonChoice.dataset.correct;
    // check the correct answers from the new buttons
    checkStatusClass(document.body, correct);
    Array.from(answerButton.children).forEach(button => {
        checkStatusClass(button, button.dataset.correct);
    });
    if (randomQuestions.length > questionIndex + 1 ) {
        nextButtons.classList.add("hide");
    } else{
        startbtn.innerText = "Restart";
        startbtn.classList.add('hide');
        // Bug. It will still appear the nextButtons
        nextButtons.innerText = "Finish";
        nextButtons.classList.add("hide");
        feedBack(nextButtons);
        currentScore = 0;
        timer.classList.add("hide");
        questionContainer.classList.add("hide");
    }
    nextButtons.classList.remove("hide");
}
//Function + selectAnswer to check the answer. Event listener click to change the color
function checkStatusClass(element, correct) {
    resetStatus(element);
    if (correct) {
        element.classList.add("correct");
        adjustScore(true);
    } else{
        element.classList.add("incorrect");
    }
}
//After the answer is checked, nextButton() will reset the status.
function resetStatus(element) {
    element.classList.remove('correct');
    element.classList.remove("incorrect");
    time=60;
}
// Function to adjust the score
function adjustScore() {
    if (true) {
        currentScore++;
    }
    document.getElementById("actual-score").textContent = currentScore;
}

const myQuestions = [{
        question: "How many bones are there in an adult human body?",
        answers: [{
                text: '113',
                correct: false
            },
            {
                text: '205',
                correct: false
            },
            {
                text: '115',
                correct: false
            },
            {
                text: '206',
                correct: true
            }
        ],
    },
    {
        question: "Which is the strongest muscle in the human body?",
        answers: [{
                text: 'Glutes',
                correct: false
            },
            {
                text: 'Masseter',
                correct: true
            },
            {
                text: 'Tongue',
                correct: false
            },
            {
                text: 'Quadriceps',
                correct: false
            }
        ],
    },
    {
        question: "Which is the biggest organ in the human body?",
        answers: [{
                text: 'Skin',
                correct: true
            },
            {
                text: 'Small & large intestines',
                correct: false
            },
            {
                text: 'Brain',
                correct: false
            },
            {
                text: 'Femur',
                correct: false
            }
        ],
    },
    {
        question: "Which is the smallest country in the world??",
        answers: [{
                text: 'Switzerland',
                correct: false
            },
            {
                text: 'Costa Rica',
                correct: false
            },
            {
                text: 'Vatican City',
                correct: true
            },
            {
                text: 'Nigeria',
                correct: false
            }
        ],
    },
    {
        question: "What is the fastest flying bird in the world?",
        answers: [{
                text: 'Anna\'s hummingbird',
                correct: false
            },
            {
                text: 'Golden eagle',
                correct: false
            },
            {
                text: 'Common swift',
                correct: false
            },
            {
                text: 'Peregrine Falcon',
                correct: true
            }
        ],
    },
    {
        question: "Which is the most famous painting in the world?",
        answers: [{
                text: 'Mona Lisa',
                correct: true
            },
            {
                text: 'The Last Supper',
                correct: false
            },
            {
                text: 'The Scream',
                correct: false
            },
            {
                text: 'Girl With a Pearl Earring',
                correct: false
            }
        ]
    },
    {
        question: "Which artist painted 'The Scream'?",
        answers: [{
                text: 'Wes Craven',
                correct: false
            },
            {
                text: 'Edvard Munch',
                correct: true
            },
            {
                text: 'Vincent van Gogh',
                correct: false
            },
            {
                text: 'Leonardo da Vinci',
                correct: false
            }
        ]
    },
    {
        question: 'This is a famous line from which movie: "Hasta la vista, baby".',
        answers: [{
                text: 'Terminator 2: Judgment Day',
                correct: true
            },
            {
                text: 'Dragon Ball',
                correct: false
            },
            {
                text: 'Titanic',
                correct: false
            },
            {
                text: 'Superman',
                correct: false
            }
        ]
    },
    {
        question: "In which country was Frida Kahlo born?",
        answers: [{
                text: 'Australia',
                correct: false
            },
            {
                text: 'Ecuador',
                correct: false
            },
            {
                text: 'Mexico',
                correct: true
            },
            {
                text: 'Panama',
                correct: false
            }
        ],
    },
    {
        question: 'Who directed "Avatar"?',
        answers: [{
                text: 'Steven Spielberg',
                correct: false
            },
            {
                text: 'David Fincher',
                correct: false
            },
            {
                text: 'Christopher Nolan',
                correct: false
            },
            {
                text: 'James Cameron',
                correct: true
            }
        ],
    }
];


