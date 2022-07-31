const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionsContainerElement = document.getElementById('container-question')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-button')
let shuffleQuestions, currentQuestionIndex

startButton.addEventListener('click',startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame(){
    console.log("start")
    startButton.classList.add('hide')
    shuffleQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0;
    questionsContainerElement.classList.remove('hide')
    setNextQuestion();
}

function setNextQuestion(){
    resetState()
    showQuestion(shuffleQuestions[currentQuestionIndex])
}

function showQuestion(question){
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState(){
    nextButton.classList.add('hide')
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e){
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffleQuestions.length > currentQuestionIndex + 1){
        nextButton.classList.remove('hide')
    }else{
        startButton.innerText = "Restart"
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct){
    clearStatusClass(element)
    if(correct){
        element.classList.add('correct')
    }else{
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: "Which array method returns a new array and returns a new value in the new array",
        answers: [
            {text: "shift", correct: false},
            {text: "forEach", correct: false},
            {text: "filter", correct: false},
            {text: "map", correct: true},
        ]
    },
    {
        question: "Which array method removes an element at the end",
        answers: [
            {text: "push", correct: false},
            {text: "pop", correct: true},
            {text: "unshift", correct: false},
            {text: "shift", correct: false},
        ]
    },
    {
        question: " Which array method creates a new array filled with elements when the element comes to true.",
        answers: [
            {text: "filter", correct: true},
            {text: "every", correct: false},
            {text: "some", correct: false},
            {text: "reduce", correct: false},
        ]
    },
    {
        question: "Which array method takes in the accumulator and current and adds to 1 value",
        answers: [
            {text: "some", correct: false},
            {text: "every", correct: false},
            {text: "reduce", correct: true},
            {text: "New Set", correct: false},
        ]
    },
    {
        question: "In CRUD, what does the C stand for?",
        answers: [
            {text: "remove", correct: false},
            {text: "delete", correct: false},
            {text: "update", correct: false},
            {text: "create", correct: true},
        ]
    },
    {
        question: "Functions are...",
        answers: [
            {text: "Creates multiple objects", correct: false},
            {text: "Extensions of JavaScript", correct: false},
            {text: "Simple set of instructions that can be reuseable", correct: true},
            {text: "helps store and transport data", correct: false},
        ]
    },
    {
        question: "This method helps store and transport data to the internet and then the internet spits it back at us",
        answers: [
            {text: "JSON", correct: true},
            {text: "Constructor", correct: false},
            {text: "Program", correct: false},
            {text: "React", correct: false},
        ]
    },
    {
        question: "API stands for...",
        answers: [
            {text: "Assisted Programming Interface", correct: false},
            {text: "Assistance Programming Internet", correct: false},
            {text: "Application Per Internet", correct: false},
            {text: "Application Programming Interface", correct: true},
        ]
    },
    {
        question: "Which method makes a function and returns a promise",
        answers: [
            {text: "Await", correct: false},
            {text: "Async", correct: true},
            {text: "JSON", correct: false},
            {text: "API", correct: false},
        ]
    },
];