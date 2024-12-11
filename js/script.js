/*-------------
  DOM ELEMENTS
 -------------- */
const randomNum = document.getElementById("randomNum");
const countdown = document.getElementById("timer");
const numberBox = document.getElementById("numbers");
const timerBox = document.getElementById("timerbox");
const formBox = document.getElementById("form");
const resultBox = document.getElementById("result");
//FORM
const userForm = document.getElementById("userForm");
const userNum1 = document.getElementById("num1");
const userNum2 = document.getElementById("num2");
const userNum3 = document.getElementById("num3");
const userNum4 = document.getElementById("num4");
const userNum5 = document.getElementById("num5");
//RESULT
const guessedNum = document.getElementById("guessedNum");
const winOrLose = document.getElementById("winOrLose");

/*-------------
   FUNCTIONS
-------------- */

// Genera un numero casuale dato un range
const randomNumGen = (min, max) => {
    const Num = Math.floor(Math.random() * (max - min + 1)) + min;
    return Num;
}

/*-------------
   VARIABLES
-------------- */
const randomNumList = [];
let seconds = 30;
const guessedNumList = [];
let userNumbersList = [];


// Ciclo per generare 5 numeri casuali
for (let i = 0; i < 5; i++) {
    let number = randomNumGen(1, 100);
    randomNumList.push(Number(number));
}


//OUT FORM PRINT

//stampo l'array di numeri casuali
randomNum.innerHTML = randomNumList.join(" ");

/*-------------
    TIMING
-------------- */

// Countdown
let time = setInterval(() => {
    if (seconds == 0) {
        clearInterval(time);
        numberBox.classList.add("d-none")
        timerBox.classList.add("d-none")
        formBox.classList.remove("d-none")
    } else {
        countdown.innerHTML = seconds;
    }
    seconds--;
}, 1000)

 //Al termine dei secondi , nascondo dall'elemento html i numeri!
 setTimeout(()=>{
    randomNum.innerHTML = "Non si bara!";
},31000)



/*-------------
     EVENTS
 -------------- */

 userForm.addEventListener("submit", (event) => {
    event.preventDefault();

 
// Inserisco i numeri che inserisce l'utente dentro un array

let userNumbersList = [
    Number(userNum1.value),
    Number(userNum2.value),
    Number(userNum3.value),
    Number(userNum4.value),
    Number(userNum5.value),
];
 
// Confronto i numeri generati casualmente con quelli inseriti dall'utente
const matches = userNumbersList.filter((num) => randomNumList.includes(num));

// Stampare i risultati
guessedNum.innerHTML = matches.join(" "); 
    if (matches.length > 0) {
        winOrLose.innerHTML = `Hai indovinato ${matches.length} numero/i!`;
        resultBox.classList.add("bordered-green");
        resultBox.classList.remove("bordered-orange");
        resultBox.classList.remove("bordered-red")
        resultBox.classList.remove("d-none");
    } else {
        winOrLose.innerHTML = "Non hai indovinato nessun numero.";
        resultBox.classList.add("bordered-orange")
        resultBox.classList.remove("bordered-green")
        resultBox.classList.remove("bordered-red")
        resultBox.classList.remove("d-none")
    }
});






