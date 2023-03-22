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
    let curInput = inputText.value;
    if (curInput == "") {
        return;
    }
    else {
        let input = parseInt(curInput);
        if (Number.isNaN(input)) {
            return;
        }
        else {
            let ans = Math.sqrt(input);
            inputText.value = String(ans);
        }
    }
}
// **************trigonometry 2nd button *****************
const secondTrigo = document.getElementsByClassName("trigono-btn");
const secondTrigoH = document.getElementsByClassName("trigono-h-btn");
const secondTrigoHinv = document.getElementsByClassName("trigono-h-inv");
let flag_trig = false, flag_hyp = false, flag_hyp1 = false;
function secondStatus(statue) {
    if (statue == false) {
        flag_trig = true;
    }
    else {
        flag_trig = false;
    }
    if (flag_hyp == true) {
        return;
    }
    if (flag_hyp1 == true) {
        return;
    }
    let setbtn1 = "trigo-btn-1";
    let setbtn2 = "d-none";
    Array.from(secondTrigo).map((btn) => {
        if (btn.classList.contains(setbtn1)) {
            btn.classList.toggle(setbtn2);
        }
        else {
            btn.classList.toggle(setbtn2);
        }
    });
}
//hyp status
function hypstatus() {
    if (flag_hyp1 == false) {
        flag_hyp1 = true;
    }
    else {
        flag_hyp1 = false;
    }
    if (flag_trig == true) {
        if (flag_hyp == false) {
            flag_hyp = true;
        }
        else {
            flag_hyp = false;
        }
        let shbtn1 = "trigono-h-inv";
        let shbtn2 = "d-none";
        Array.from(secondTrigoHinv).map((btn) => {
            if (btn.classList.contains(shbtn1)) {
                btn.classList.toggle(shbtn2);
            }
            else {
                btn.classList.toggle(shbtn2);
            }
        });
    }
    else {
        flag_hyp = false;
        let shbtn1 = "trigono-h-btn";
        let shbtn2 = "d-none";
        Array.from(secondTrigoH).map((btn) => {
            if (btn.classList.contains(shbtn1)) {
                btn.classList.toggle(shbtn2);
            }
            else {
                btn.classList.toggle(shbtn2);
            }
        });
    }
}
// ********* Function Operation related Function **********//
//findMOd() function
function findMod() {
    let neg2 = parseFloat(inputText.value);
    if (neg2 < 0) {
        inputText.value = String(0 - neg2);
    }
}
//findLx() function
function findLX() {
    let f = parseFloat(inputText.value);
    if (Number.isNaN(f)) {
        return;
    }
    else {
        inputText.value = String(Math.floor(f));
    }
}
//findInvertLX() function
function findInvertLX() {
    let c = parseFloat(inputText.value);
    if (Number.isNaN(c)) {
        return;
    }
    else {
        inputText.value = String(Math.ceil(c));
    }
}
//findRand() function
function findRand() {
    if (inputText.value.length <= 0) {
        inputText.value = String(Math.random());
    }
    else {
        let range = parseInt(inputText.value);
        inputText.value = String(Math.floor(Math.random() * range));
    }
}
//findDMS()
function findDMS() {
    if (obj.deg == "true") {
        let dd = parseFloat(inputText.value);
        if (Number.isNaN(dd)) {
            return;
        }
        else {
            let d = Math.floor(dd);
            let m = Math.round((dd - d) * 60);
            let s = Math.round((dd - d - m / 60) * 3600);
            inputText.value = d + ":" + m + ":" + s;
        }
    }
}
//findDEG()
function findDEG() {
    if (obj.deg == "true") {
        return;
    }
    else if (obj.rad == "true") {
        let rvalue = parseFloat(inputText.value);
        if (Number.isNaN(rvalue)) {
            return;
        }
        else {
            let ans = rvalue * (180 / Math.PI);
            inputText.value = ans.toFixed(4);
        }
    }
    else {
        let gvalue = parseFloat(inputText.value);
        if (Number.isNaN(gvalue)) {
            return;
        }
        else {
            let ans = gvalue * 0.9;
            inputText.value = String(ans);
        }
    }
}
//*****************************************************************/
//color change function
function btnColorHandler(e) {
    e.classList.toggle("bg-primary");
}
// unit object
const unit_text = document.getElementById("unit");
const obj = { deg: "true", rad: "false", grad: "false" };
function check_unit() {
    if (obj.deg == "true") {
        obj.deg = "false";
        unit_text.innerHTML = "RAD";
        obj.rad = "true";
        obj.grad = "false";
    }
    else if (obj.rad == "true") {
        obj.rad = "false";
        unit_text.innerHTML = "GRAD";
        obj.deg = "false";
        obj.grad = "true";
    }
    else if (obj.grad == "true") {
        obj.grad = "false";
        unit_text.innerHTML = "DEG";
        obj.deg = "true";
        obj.grad = "false";
    }
}
//all tht btn
const allBtn = document.querySelectorAll(".btn");
//2nd btn
const secondBtn = document.getElementsByClassName("2nd-toggle");
// **********************  MAIN SWITCH CASE **************************
let result;
for (let btn of allBtn) {
    btn.addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
        switch (input) {
            case "unit":
                check_unit();
                break;
            case "second-fn-Trigono":
                if (flag_hyp1 != true) {
                    btnColorHandler(e.target);
                    secondStatus(flag_trig);
                }
                break;
            case "π":
                inputText.value += "π";
                result = Math.PI;
                break;
            // e btn
            case "e":
                inputText.value += "e";
                result = 2.7182;
                break;
            case "2nd":
                btnColorHandler(e.target);
                let secBtn1 = "2nd-btn-1";
                let secBtn2 = "d-none";
                Array.from(secondBtn).map((btn) => {
                    if (btn.classList.contains(secBtn1)) {
                        btn.classList.toggle(secBtn2);
                    }
                    else {
                        btn.classList.toggle(secBtn2);
                    }
                });
                break;
            case "hyp":
                btnColorHandler(e.target);
                hypstatus();
                break;
            case "x2":
                if (inputText.value.length == 0) {
                    return;
                }
                let temp = parseFloat(inputText.value);
                inputText.value = String(expower(temp, 2));
                break;
            case "x3":
                if (inputText.value.length == 0) {
                    return;
                }
                let temp1 = parseFloat(inputText.value);
                inputText.value = String(expower(temp1, 3));
                break;
            case "1/x":
                inputText.value += "1/";
                break;
            case "=":
                if (inputText.value == "") {
                    return;
                }
                else {
                    result = calculate(tokenize(inputText.value));
                    inputText.value = String(result);
                }
        }
    });
}
//calculate Value Function
function tokenize(s) {
    const r = [];
    let token = "";
    for (const character of s) {
        if ("^*/+-()".includes(character)) {
            if (token === "" && character === "-") {
                token = "-";
            }
            else {
                r.push(parseFloat(token), character);
                token = "";
            }
        }
        else {
            token += character;
        }
    }
    if (token !== "") {
        r.push(parseFloat(token));
    }
    return r;
}
function calculate(tokens) {
    // --- Perform a calculation expressed as an array of operators and numbers
    const operatorPrecedence = [
        { "^": (a, b) => Math.pow(a, b) },
        {
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
        },
        {
            "+": (a, b) => a + b,
            "-": (a, b) => a - b,
        },
    ];
    let operator = null;
    for (const operators of operatorPrecedence) {
        const newTokens = [];
        for (const token of tokens) {
            if (token in operators) {
                operator = operators[token];
            }
            else if (operator) {
                newTokens[newTokens.length - 1] = operator(newTokens[newTokens.length - 1], token);
                operator = null;
            }
            else {
                newTokens.push(token);
            }
        }
        tokens = newTokens;
    }
    if (tokens.length > 1) {
        console.log("Error: unable to resolve calculation");
        return tokens;
        //console.log(tokens);
    }
    else {
        console.log(tokens[0]);
        return tokens[0];
    }
}
//addDot function
function AddDot() {
    inputText.value += ".";
}
function expower(num, pow) {
    return num ** pow;
}
