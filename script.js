const quizData = [
    {
        question: "What is the capital of France?",
        a: "Berlin",
        b: "Madrid",
        c: "Paris",
        d: "Rome",
        correct: "c"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Venus",
        correct: "b"
    },
    {
        question: "Who wrote 'Hamlet'?",
        a: "Charles Dickens",
        b: "William Shakespeare",
        c: "Mark Twain",
        d: "Jane Austen",
        correct: "b"
    },
    {
        question: "What is the largest ocean on Earth?",
        a: "Atlantic Ocean",
        b: "Indian Ocean",
        c: "Arctic Ocean",
        d: "Pacific Ocean",
        correct: "d"
    },
    {
        question: "Which element has the chemical symbol 'O'?",
        a: "Oxygen",
        b: "Gold",
        c: "Silver",
        d: "Osmium",
        correct: "a"
    },
    {
        question: "How many continents are there on Earth?",
        a: "5",
        b: "6",
        c: "7",
        d: "8",
        correct: "c"
    },
    {
        question: "Which country is famous for inventing pizza?",
        a: "France",
        b: "Italy",
        c: "Greece",
        d: "Spain",
        correct: "b"
    },
    {
        question: "What is the main language spoken in Brazil?",
        a: "Spanish",
        b: "Portuguese",
        c: "French",
        d: "English",
        correct: "b"
    },
    {
        question: "What is the boiling point of water in Celsius?",
        a: "90°C",
        b: "100°C",
        c: "110°C",
        d: "120°C",
        correct: "b"
    },
    {
        question: "Who painted the Mona Lisa?",
        a: "Vincent van Gogh",
        b: "Pablo Picasso",
        c: "Leonardo da Vinci",
        d: "Michelangelo",
        correct: "c"
    },
    {
        question: "Which animal is known as the 'King of the Jungle'?",
        a: "Tiger",
        b: "Lion",
        c: "Elephant",
        d: "Cheetah",
        correct: "b"
    },
    {
        question: "What is the smallest country in the world?",
        a: "Monaco",
        b: "Vatican City",
        c: "Malta",
        d: "San Marino",
        correct: "b"
    },
    {
        question: "What is the hardest natural substance on Earth?",
        a: "Gold",
        b: "Iron",
        c: "Diamond",
        d: "Platinum",
        correct: "c"
    },
    {
        question: "Which planet is closest to the Sun?",
        a: "Venus",
        b: "Mars",
        c: "Mercury",
        d: "Earth",
        correct: "c"
    },
    {
        question: "How many players are on a standard football team?",
        a: "9",
        b: "10",
        c: "11",
        d: "12",
        correct: "c"
    }
];


const answer_a = document.getElementById("a_text");
const answer_b = document.getElementById("b_text");
const answer_c = document.getElementById("c_text");
const answer_d = document.getElementById("d_text");

const questionEl = document.getElementById("question")
const submitBtn = document.getElementById("submit");

const answerEls = document.querySelectorAll(".answer");
const quiz = document.getElementById("quiz");

let score = 0;
let currentQuiz= 0;

startQuiz()

function startQuiz(){
    
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;

    answer_a.innerHTML = currentQuizData.a;
    answer_b.innerHTML = currentQuizData.b;
    answer_c.innerHTML = currentQuizData.c;
    answer_d.innerHTML = currentQuizData.d;
}



function getSelected(){

    let answer = undefined;

    answerEls.forEach((answerEl)=>{
        if(answerEl.checked){
            answer = answerEl.id;
        }
    })

    return answer;
}

function deselectAnswers(){
 
    answerEls.forEach((answerEl)=>{
        answerEl.checked = false;
    })

}

submitBtn.addEventListener("click", ()=>{

 const answer = getSelected();


 if(answer){


    if(answer === quizData[currentQuiz].correct){
        score++;
    }
    currentQuiz++;
    if(currentQuiz < quizData.length){
        startQuiz();
    }else{
        quiz.innerHTML = `<h2>You answered correctly at ${score}/${quizData.length} questions.</h2> <button onclick="location.reload()">Reload</button>`;

    }
 }

});




