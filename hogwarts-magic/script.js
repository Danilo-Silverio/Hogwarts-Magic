const quizData = [
    {
        question: "What is the name of the spell to levitate things?",
        a: "Wingardium Leviosa",
        b: "Winguardium Leviossa",
        c: "Vingardium Levieosa",
        d: "Wingar Dium Leviosa",
        correct: "a",
    },
    {
        question: "Which conjured word turns off the light created by the Lumos spell?",
        a: "Noir",
        b: "Nox",
        c: "Offus",
        d: "Noire",
        correct: "b",
    },
    {
        question: "Which of these spells are considered defensive only?",
        a: "Protego and Protego Totalum",
        b: "Protego and Crucio",
        c: "Protego and Rictumsempra",
        d: "Protego and Alohomora",
        correct: "a",
    },
    {
        question: "Who is the only person who has survived the death spell known as Avada Kedavra?",
        a: "Harry June Potter",
        b: "Harry Joy Potter",
        c: "Harry James Potter",
        d: "Harry Jamald Potter",
        correct: "c",
    },
    {
        question: "Who are the founders of Hogwarts?",
        a: "Percival, Salazar, Helga and Rowena",
        b: "Godric, Severous, Helga and Rowena",
        c: "Percival, Salazar, Minerva and Rowena",
        d: "Godric, Salazar, Helga and Rowena",
        correct: "d",
    },
    {
        question: "Which of these are the unforgivable curses?",
        a: "Avada Kedavra, Imperius and Cruciatus",
        b: "Avada Kedavra, Imperial and Torturus",
        c: "Avada Kedavra, Imperi and Sofferius",
        d: "Avada Kedavra, Imperieus and Cruciotus",
        correct: "a",
    },
    {
        question: "Complete the name of the most famous director of Hogwarts: Albus Percival (...) Dumbledore",
        a: "Ufric Brover",
        b: "Dolores Brie",
        c: "Wulfric Brian",
        d: "Godrics Hollow",
        correct: "c",
    },
    {
        question: "What is the real name of the dark wizard known as Lord Voldemort?",
        a: "Morfino Gaunt",
        b: "Lucius Malfoy",
        c: "Gellert Grindelwald",
        d: "Tom Servolo Riddle",
        correct: "d",
    },
    {
        question: "What is the function of the spell Petrificus Totalus?",
        a: "Unlock a chest",
        b: "Petrify a person",
        c: "Faint a person",
        d: "Freeze a moment",
        correct: "b",
    },
    {
        question: "Who selects the students for the hogwarts houses?",
        a: "The sorting spell",
        b: "The sorting hat",
        c: "The sorting wand",
        d: "The sorting book",
        correct: "b",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitButton = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {

    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitButton.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score ++
        }
        
        currentQuiz++

        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `<h2>You answered ${score}/${quizData.length} questions correctly</h2>
            
            <button onclick="location.reload()">Reaload</button>`
        }
    }
})