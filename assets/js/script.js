let randomQuestions, questionIndex;
let startbtn = document.getElementById("start-button");
let questionContainer = document.getElementById("question-container");
let timer = document.getElementById('timer')
let questionElement = document.getElementById("question")
let answerButton = document.getElementById("answer-button")
startbtn.addEventListener("click", quizGame);
//form function. First of everything. 
let usernames = ["Harry", "Daisy", "Michael", "Sarah", "Sally"];
let form = document.getElementById("form-container");
form.addEventListener('submit', formFirst);
let errorMsg = document.getElementById("errors");

function formFirst(event) {
    event.preventDefault();
    let username = document.getElementById('username').value;
    if (usernames.includes(username)) {
        errorMsg.innerHTML = `Sorry, the username ${username} is already in use. Please choose another username.`;
    } else {
        usernames.push(`${username}`);
        //form.submit();
        form.classList.add("hide")
        startbtn.classList.remove('hide')
        timer.classList.remove('hide')
    }

}
// stats the game after the form, with start button.
function quizGame() {
    startbtn.classList.add("hide");
    //get the questions randomly
    randomQuestions = myQuestions.sort(() => Math.random() - 0.5);
    questionIndex = 0;
    questionContainer.classList.remove('hide');
    showNextQuestion()
}
// shows the question in container
function showNextQuestion() {
    showQuestion(randomQuestions[questionIndex]);
}
// Function gets the question from myQuestions
function showQuestion(question) {
    questionElement.innerHTML = question.question;
    myQuestions.answers.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add("button");
        //check answer if is correct
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        };
        button.addEventListener("click", selectAnswer)

    });
}

function selectAnswer(q) {

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
        question: "Which is the strongest muscle in the human .",
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
                text: 'switzerland',
                correct: false
            },
            {
                text: 'Costa Rica}',
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