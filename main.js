const buttonElement = document.querySelector("button");
const PElement = document.querySelector("p");
const back = document.querySelector('.wrapper');
const NumberList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
let random = "#";

function Hexcode() {
  reset()
for(let i = 0; i < 6; i++) {
    const RandomNum = Math.floor(Math.random() * NumberList.length)
    random += NumberList[RandomNum]
    PElement.textContent = `HEX CODE: ${random}`
    back.style.backgroundColor  = `${random}`
  }
}

buttonElement.addEventListener("click", Hexcode)

function reset() {
  random = "#"
}