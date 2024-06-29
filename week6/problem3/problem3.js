let count = 0;

document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('increaseBtn').addEventListener('click', increase);
    document.getElementById('decreaseBtn').addEventListener('click', decrease);
    document.getElementById('resetBtn').addEventListener('click', reset);
    updateDisplay();  
});

function increase() {
    count++;
    updateDisplay();
}

function decrease() {
    count--;
    updateDisplay();
}

function reset() {
    count = 0;
    updateDisplay();
}

function updateDisplay() {
    document.getElementById("counterValue").textContent = count;
}
