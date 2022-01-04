const bullEl   = document.getElementById("bull");
const displayEl = document.getElementById("display");
const bearEl = document.getElementById("bear");
const nullEl = document.getElementById("null");

let counterNumber = 0;

bullEl.addEventListener('click',function(){
    counterNumber += 1;
    displayEl.textContent = counterNumber;
});

nullEl.addEventListener('click',function(){
    counterNumber = 0;
    displayEl.textContent = counterNumber;
});

bearEl.addEventListener('click',function(){
    counterNumber -= 1;
    displayEl.textContent = counterNumber;
});