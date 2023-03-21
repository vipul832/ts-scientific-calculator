// TypeScript Calculator

//Input Tag
const inputText = document.getElementById("input-text") as HTMLInputElement;

//All number Tag
const numBtn = document.querySelectorAll(".num-btn");

for (let i of numBtn) {
  i.addEventListener("click", (e) => {
    let input = (<Element>e.target).closest("button")?.dataset.input;
    inputText.value += input;
  });
}

//All arithmetic Operators
const arithBtn = document.querySelectorAll(".arith-btn");

for (let i of arithBtn) {
  i.addEventListener("click", (e) => {
    let input = (<Element>e.target).closest("button")?.dataset.input;
    inputText.value += input;
  });
}

//clear Text Function
function clearText() {
  inputText.value = "";
}

//remove last value

function removeLast() {
  let l = inputText.value.length;
  inputText.value = inputText.value.slice(0, l - 1);
}

//Square root function
function findSqrt() {
  let input = parseInt(inputText.value);
  let ans = Math.sqrt(input);
  inputText.value = String(ans);
}
