const decrementBtn = document.getElementById("derementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");


decrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >0 ){
        displayValue.innerText = value - 1 ;
    }else {
        alert("Negative Value not allowed");
    }
});

incrementBtn.addEventListener("click", () => {
    const value = Number(displayValue.innerText);
    if (value >= 10) {
      alert("10+ values are not allowed");
    } else {
      displayValue.innerText = value + 1;
    }
});

resetBtn.addEventListener("click", () => {
    displayValue.innerText = 0;
  });