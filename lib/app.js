"use strict";
// TypeScript Calculator
//Input Tag
const inputText = document.getElementById("input-text");
//All number Tag
const numBtn = document.querySelectorAll(".num-btn");
for (let i of numBtn) {
    i.addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
        inputText.value += input;
    });
}
//All arithmetic Operators
const arithBtn = document.querySelectorAll(".arith-btn");
for (let i of arithBtn) {
    i.addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
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
