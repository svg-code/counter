let number = document.querySelector('.number');
let lower = document.querySelector('.lower');
let add = document.querySelector('.add');

let count = 0;

updateDisplay();

lower.addEventListener('click', () => {
    (count > 0 ? count-- : count-=0);
    updateDisplay();
});

add.addEventListener('click', () => {
    (count < 50 ? count++ : count+=0);
    updateDisplay();
});

function updateDisplay(){
    number.innerText = count;
}