// <⚠️ DONT DELETE THIS ⚠️>
// import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const maxNum = document.querySelector("h2 span");
const numRange = document.querySelector(".num-range");
const inputNum = document.querySelector(".input-num");
const playBtn = document.querySelector(".play-btn");
const choseNums = document.querySelectorAll('.result-area p span');
const resultArea = document.querySelector('.result-area');
const result = resultArea.querySelector('.result')

let num = 0;

function handleRange (e) {
    num = e.target.value;
    maxNum.innerText = num;
}

function handleGame () {
    choseNums[0].innerText = inputNum.value;
    
    const randomNum = Math.floor(Math.random()*num);
    choseNums[1].innerText = randomNum;

    if (inputNum.value/1 === randomNum/1) {
        result.innerText = 'You Won!'
    } else {
        result.innerText = 'You Lost!'
    }

    resultArea.style.display = 'block';
};




function init () {
    numRange.addEventListener('input', handleRange);
    playBtn.addEventListener('click', handleGame);
};

init();