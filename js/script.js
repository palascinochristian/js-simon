/*-------------
  DOM ELEMENTS
 -------------- */
 const randomNum = document.getElementById("randomNum");
 const countdown = document.getElementById("timer");
//FORM
 const userForm = document.getElementById("userForm");
 const userNum1 = document.getElementById("num1");
 const userNum2 = document.getElementById("num2");
 const userNum3 = document.getElementById("num3");
 const userNum4 = document.getElementById("num4");
 const userNum5 = document.getElementById("num5");


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
const randomNumList= [];



// Ciclo per generare 5 numeri casuali
for(let i = 0; i < 5; i++){
    let number = randomNumGen (1,100);
    randomNumList.push(Number(number))
}



//OUT FORM PRINT

//stampo l'array di numeri casuali
randomNum.innerHTML = randomNumList.join(" ");
