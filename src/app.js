import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  let who = ['the dog', 'My grandma', 'The mailman', 'My bird'];
  let action = ['ate', 'peed', 'crushed', 'broke'];
  let what = ['my homework', 'my phone', 'the car'];
  let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my luch', 'while I was praying'];
  
  function getRandomElement(array) {
   return array[Math.floor(Math.random() * array.length)]
  }

  

  function generateExcuse() {
    let excuse =
      `${getRandomElement(who)} ` +
      `${getRandomElement(action)} ` +
      `${getRandomElement(what)} ` +
      `${getRandomElement(when)}. `;
    return excuse;
  }
 document.getElementById("excuse").innerHTML = generateExcuse();
};
