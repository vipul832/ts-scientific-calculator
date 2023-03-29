"use strict";
// TypeScript Calculator
//Input Tag
const inputText = document.getElementById("input-text");
//Error div
const errorDisplay = document.getElementById("errorDisplay");
//All number Tag
const numBtn = document.querySelectorAll(".num-btn");
for (let i = 0; i < numBtn.length; i++) {
    numBtn[i].addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
        inputText.value += input;
    });
}
//All arithmetic Operators
const arithBtn = document.querySelectorAll(".arith-btn");
for (let i = 0; i < arithBtn.length; i++) {
    arithBtn[i].addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
        inputText.value += input;
    });
}
//clear Text Function
function clearText() {
    inputText.value = "";
    result = "";
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
        if (isNaN(input)) {
            return;
        }
        else {
            let ans = Math.sqrt(input);
            inputText.value = String(ans);
        }
    }
}
// cube root function
function findThirdSqrt() {
    let curInput = inputText.value;
    if (curInput == "") {
        return;
    }
    else {
        let input = parseInt(curInput);
        if (isNaN(input)) {
            return;
        }
        else {
            let ans = Math.pow(input, 1 / 3);
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
    for (let i = 0; i < secondTrigo.length; i++) {
        let btn = secondTrigo[i];
        if (btn.classList.contains(setbtn1)) {
            btn.classList.toggle(setbtn2);
        }
        else {
            btn.classList.toggle(setbtn2);
        }
    }
    //   Array.from(secondTrigo).map((btn) => {
    //     if (btn.classList.contains(setbtn1)) {
    //       btn.classList.toggle(setbtn2);
    //     } else {
    //       btn.classList.toggle(setbtn2);
    //     }
    //   });
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
        for (let i = 0; i < secondTrigoHinv.length; i++) {
            let btn = secondTrigoHinv[i];
            if (btn.classList.contains(shbtn1)) {
                btn.classList.toggle(shbtn2);
            }
            else {
                btn.classList.toggle(shbtn2);
            }
        }
    }
    else {
        flag_hyp = false;
        let shbtn1 = "trigono-h-btn";
        let shbtn2 = "d-none";
        for (let i = 0; i < secondTrigoH.length; i++) {
            let btn = secondTrigoH[i];
            if (btn.classList.contains(shbtn1)) {
                btn.classList.toggle(shbtn2);
            }
            else {
                btn.classList.toggle(shbtn2);
            }
        }
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
    if (isNaN(f)) {
        return;
    }
    else {
        inputText.value = String(Math.floor(f));
    }
}
//findInvertLX() function
function findInvertLX() {
    let c = parseFloat(inputText.value);
    if (isNaN(c)) {
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
        if (isNaN(dd)) {
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
        if (isNaN(rvalue)) {
            return;
        }
        else {
            let ans = rvalue * (Math.PI / 180);
            inputText.value = ans.toFixed(4);
        }
    }
    else {
        let gvalue = parseFloat(inputText.value);
        if (isNaN(gvalue)) {
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
enableMemoryBtn();
// **********************  MAIN SWITCH CASE **************************
let result, msarr = [];
for (let btn = 0; btn < allBtn.length; btn++) {
    allBtn[btn].addEventListener("click", (e) => {
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
            case "fe":
                if (inputText.value.length == 0) {
                    return;
                }
                let ex = inputText.value;
                //console.log(ex);
                inputText.value = parseFloat(ex).toExponential();
                break;
            case "mc":
                localStorage.setItem("numberStore", "");
                localStorage.setItem("storenum", "0");
                msarr = [];
                enableMemoryBtn();
                break;
            case "mr":
                let recoll = localStorage.getItem("storenum");
                inputText.value = String(recoll);
                break;
            case "m+":
                let cur = parseInt(localStorage.getItem("storenum"));
                if (isNaN(cur)) {
                    return;
                }
                else {
                    let add = parseInt(inputText.value);
                    if (isNaN(add)) {
                        return;
                    }
                    else {
                        //console.log(cur + add);
                        localStorage.setItem("storenum", String(cur + add));
                        enableMemoryBtn();
                    }
                }
                break;
            case "m-":
                let curnum = parseInt(inputText.value);
                if (isNaN(curnum)) {
                    return;
                }
                else {
                    let sup = parseInt(localStorage.getItem("storenum")) - curnum;
                    localStorage.setItem("storenum", String(sup));
                    enableMemoryBtn();
                }
                break;
            case "ms":
                //console.log(msarr);
                if (inputText.value == "") {
                    return;
                }
                else {
                    let num = Number(inputText.value);
                    if (isNaN(num)) {
                        return;
                    }
                    else {
                        msarr.push(Number(inputText.value));
                        localStorage.setItem("numberStore", String(msarr));
                    }
                }
                enableMemoryBtn();
                break;
            case "π":
                inputText.value += "π";
                result = Math.PI;
                break;
            case "e":
                inputText.value += "e";
                result = 2.7182;
                break;
            case "2nd":
                btnColorHandler(e.target);
                let secBtn1 = "2nd-btn-1";
                let secBtn2 = "d-none";
                for (let i = 0; i < secondBtn.length; i++) {
                    let btn = secondBtn[i];
                    if (btn.classList.contains(secBtn1)) {
                        btn.classList.toggle(secBtn2);
                    }
                    else {
                        btn.classList.toggle(secBtn2);
                    }
                }
                break;
            case "hyp":
                btnColorHandler(e.target);
                hypstatus();
                break;
            case "^2":
                inputText.value += "^2";
                break;
            case "^3":
                inputText.value += "^3";
                break;
            case "1/x":
                inputText.value += "1/";
                break;
            case "^":
                inputText.value += "^";
                break;
            case "10^":
                inputText.value += "10^";
                break;
            case "%":
                inputText.value += "%";
                break;
            case "(":
                inputText.value += "(";
                break;
            case ")":
                inputText.value += ")";
                break;
            case "rt":
                inputText.value += "sqrt";
                break;
            case "2^":
                inputText.value += "2^";
                break;
            case "logb":
                inputText.value += "log";
                break;
            case "e^":
                inputText.value += "e^";
                break;
            case "=":
                FinalCalculation();
                break;
        }
    });
}
//calculate Value Function
function tokenize(s) {
    const r = [];
    let token = "";
    for (let i = 0; i < s.length; i++) {
        let character = s[i];
        if (/[\^|*|\/|+|\-|(|)|%|]/.test(character)) {
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
        {
            "^": (a, b) => Math.pow(a, b),
        },
        {
            "*": (a, b) => a * b,
            "/": (a, b) => a / b,
            "%": (a, b) => a % b,
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
        //console.log("Error: unable to resolve calculation", tokens);
        return tokens;
    }
    else {
        //console.log(tokens);
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
// Factorial Function
function findFact() {
    let inputValue = parseInt(inputText.value);
    if (isNaN(inputValue)) {
        return;
    }
    else {
        let sum = 1;
        for (let i = inputValue; i > 0; i--) {
            sum *= i;
        }
        inputText.value = String(sum);
    }
}
// Find Log
function findLog() {
    let inputValue = parseInt(inputText.value);
    if (isNaN(inputValue)) {
        return;
    }
    else {
        let ans = Math.log10(inputValue);
        inputText.value = String(ans);
    }
}
function findLn() {
    let inputValue = parseInt(inputText.value);
    if (isNaN(inputValue)) {
        return;
    }
    else {
        let ans = Math.log10(inputValue) * 2.303;
        inputText.value = String(ans);
    }
}
// Trigonometry
const trigoBtn = document.querySelectorAll(".trig-btn");
for (let i = 0; i < trigoBtn.length; i++) {
    trigoBtn[i].addEventListener("click", (e) => {
        var _a;
        let input = (_a = e.target.closest("button")) === null || _a === void 0 ? void 0 : _a.dataset.input;
        inputText.value += input;
    });
}
const trigoprator = [
    "sin",
    "sinin",
    "sinh",
    "sinhin",
    "cos",
    "cosin",
    "cosh",
    "coshin",
    "tan",
    "tanin",
    "tanh",
    "tanhin",
    "sec",
    "secin",
    "sech",
    "sechin",
    "csc",
    "cscin",
    "csch",
    "cschin",
    "cot",
    "cotin",
    "coth",
    "cothin",
];
//Check the unit and covert
function trigohandle(inputText) {
    let str = inputText;
    let trigof = inputText.replace(/[^A-Za-z]/g, "");
    //console.log("tri", trigof);
    let num = parseInt(inputText.split(trigof)[1]);
    if (isNaN(num)) {
        return;
    }
    else {
        num = covertUnit(num);
        //console.log("value:", num);
        //console.log(handleTrigoFunction(str, num));
    }
}
function covertUnit(value) {
    if (obj["deg"] == "true") {
        value = (value * Math.PI) / 180;
        //console.log("Deg to radian", value);
        return value;
    }
    else if (obj["grad"] == "true") {
        value = value * 0.015708;
        //console.log("grad to radian", value);
        return value;
    }
    else {
        return value;
    }
}
function handleTrigoFunction(text, value) {
    let x = text.replace(/[^A-Za-z]/g, "");
    if (text.match(/sin/i)) {
        handleSin(x, value);
    }
    else if (text.match(/cos/i)) {
        handleCos(x, value);
    }
    else if (text.match(/tan/i)) {
        handleTan(x, value);
    }
    else if (text.match(/sec/i)) {
        handleSec(x, value);
    }
    else if (text.match(/csc/i)) {
        handleCosec(x, value);
    }
    else if (text.match(/cot/i)) {
        handleCot(x, value);
    }
}
// Sin Handler
function handleSin(text, value) {
    switch (text) {
        case "sin":
            // console.log("sin");
            inputText.value = String(Math.sin(value));
            break;
        case "sinin":
            // console.log("sin in");
            inputText.value = String(Math.asin(value));
            break;
        case "sinh":
            //console.log("sin h");
            inputText.value = String((Math.exp(value) - Math.exp(-value)) / 2);
            break;
        case "sinhin":
            // console.log("sin h in");
            inputText.value = String(Math.log(value + Math.sqrt(value * value) + 1));
            break;
    }
}
//Cos Handler
function handleCos(text, value) {
    switch (text) {
        case "cos":
            // console.log("cos");
            inputText.value = String(Math.cos(value));
            break;
        case "cosin":
            // console.log("cos in");
            inputText.value = String(Math.acos(value));
            break;
        case "cosh":
            //console.log("cos h");
            inputText.value = String(Math.exp(value) + Math.exp(-value) / 2);
            break;
        case "coshin":
            //console.log("cos h in");
            inputText.value = String(Math.log(value + Math.sqrt(value * value - 1)));
            break;
    }
}
//Tan handler
function handleTan(text, value) {
    switch (text) {
        case "tan":
            // console.log("tan");
            inputText.value = String(Math.round(Math.tan(value)));
            break;
        case "tanin":
            // console.log("tan in");
            inputText.value = String(Math.atan(value));
            break;
        case "tanh":
            // console.log("tan h");
            inputText.value = String((Math.exp(value) - Math.exp(-value)) /
                (Math.exp(value) + Math.exp(-value)));
            break;
        case "tanhin":
            // console.log("tan h in");
            inputText.value = String((0.5 * Math.log(1 + value)) / (1 - value));
            break;
    }
}
//Sec handler
function handleSec(text, value) {
    switch (text) {
        case "sec":
            // console.log("sec");
            inputText.value = String(1 / Math.cos(value));
            break;
        case "secin":
            // console.log("sec in");
            inputText.value = String(1 / Math.acos(value));
            break;
        case "sech":
            // console.log("sec h");
            inputText.value = String((Math.exp(value) + Math.exp(-value)) / 2);
            break;
        case "sechin":
            // console.log("sec h in");
            inputText.value = String(1 / Math.log(value) + Math.sqrt(value * value) - 1);
            break;
    }
}
//Cosec handler
function handleCosec(text, value) {
    switch (text) {
        case "csc":
            // console.log("cosec");
            inputText.value = String(1 / Math.sin(value));
            break;
        case "cscin":
            // console.log("cosec in");
            inputText.value = String(1 / Math.asin(value));
            break;
        case "csch":
            // console.log("cosec h");
            inputText.value = String((Math.exp(value) - Math.exp(-value)) / 2);
            break;
        case "cschin":
            //console.log("cosec h in");
            inputText.value = String(1 / (Math.log(value) + Math.sqrt(value * value) + 1));
            break;
    }
}
//Cot handler
function handleCot(text, value) {
    switch (text) {
        case "cot":
            // console.log("cot");
            inputText.value = String(1 / Math.tan(value));
            break;
        case "cotin":
            // console.log("cot in");
            inputText.value = String(1 / Math.atan(value));
            break;
        case "coth":
            // console.log("cot h");
            inputText.value = String(1 /
                ((Math.exp(value) - Math.exp(-value)) /
                    (Math.exp(value) + Math.exp(-value))));
            break;
        case "cothin":
            // console.log("cot h in");
            inputText.value = String(1 / ((0.5 * Math.log(1 + value)) / (1 - value)));
            break;
    }
}
function cal_bracket(text) {
    let solutionofB = [];
    let out = calculate(tokenize(text));
    if (typeof out === "number" || typeof out == "string") {
        return;
    }
    // console.log("out:", out);
    let index;
    for (let i = 0; i < out.length; i++) {
        if (out[i] == "(") {
            index = i;
            while (out[index] != ")") {
                if (out[index] != "(") {
                    if (isNaN(Number(out[index]))) {
                        break;
                    }
                    solutionofB.push(Number(out[index]));
                }
                index++;
            }
        }
    }
    // console.log("solution", solutionofB);
    return solutionofB;
}
function FinalCalculation() {
    if (inputText.value == "") {
        return;
    }
    else {
        if (/sqrt/.test(inputText.value)) {
            // console.log("in 1");
            let rootArray = inputText.value.split("sqrt");
            let base = parseInt(rootArray[1]);
            let root = parseInt(rootArray[0]);
            inputText.value = String(Math.pow(base, 1 / root));
        }
        else if (/log/.test(inputText.value)) {
            // console.log("in 2");
            let lobArray = inputText.value.split("log");
            let base = parseInt(lobArray[0]);
            let root = parseInt(lobArray[1]);
            let ans = Math.log(root) / Math.log(base);
            if (isNaN(ans)) {
                return;
            }
            else {
                inputText.value = String(ans);
            }
        }
        else if (ChechTrigo(inputText.value.replace(/[^A-Za-z]/g, ""))) {
            // console.log("in 3");
            trigohandle(inputText.value);
        }
        else if (/[+|\-|\/|*|^|(|)|%]/.test(inputText.value)) {
            // console.log("in 4");
            let openBracket = 0, closeBracket = 0;
            if (/[(]/.test(inputText.value) || /[)]/.test(inputText.value)) {
                //  console.log("in barcket");
                let text = inputText.value;
                for (let i = 0; i < text.length; i++) {
                    if (text[i] == "(") {
                        openBracket++;
                    }
                    if (text[i] == ")") {
                        closeBracket++;
                    }
                }
                if (openBracket != closeBracket) {
                    errorDisplay.innerText = "Uneven Brackets";
                    setTimeout(() => {
                        errorDisplay.innerText = "";
                    }, 2000);
                    return;
                }
                else {
                    let teststr = inputText.value;
                    let numofb = openBracket;
                    let valueofb = cal_bracket(teststr);
                    let pretext, j = 0;
                    if (/[π]/.test(teststr)) {
                        teststr = teststr.replaceAll("π", String(Math.PI));
                    }
                    if (/[e]/.test(teststr)) {
                        teststr = teststr.replaceAll("e", String(2.7182));
                    }
                    for (let i = 0; i < numofb; i++) {
                        pretext = teststr.replace(/\(.*?\)/, valueofb[j]);
                        teststr = pretext;
                        j++;
                    }
                    // console.log("New String", teststr);
                    if (/[)]/.test(teststr)) {
                        teststr = teststr.replace(")", "");
                    }
                    let tempAns = calculate(tokenize(teststr));
                    if (isNaN(Number(tempAns))) {
                        errorDisplay.innerText = "Invalid Input!";
                        setTimeout(() => {
                            errorDisplay.innerText = "";
                        }, 2000);
                        return;
                    }
                    else {
                        result = String(tempAns);
                        result = result.replace(",)", "");
                        inputText.value = String(result);
                    }
                }
            }
            else {
                let teststr = inputText.value;
                if (/[π]/.test(teststr)) {
                    teststr = teststr.replaceAll("π", String(Math.PI));
                }
                if (/[e]/.test(teststr)) {
                    teststr = teststr.replaceAll("e", String(2.7182));
                }
                result = String(calculate(tokenize(teststr)));
                if (result == undefined || isNaN(Number(result))) {
                    // console.log("invalid Input");
                    errorDisplay.innerText = "Invalid Input!";
                    setTimeout(() => {
                        errorDisplay.innerText = "";
                    }, 2000);
                    return;
                }
                inputText.value = String(result);
            }
        }
        else {
            //  console.log("in 5");
            if (result) {
                inputText.value = String(result);
                result = 0;
            }
            else {
                inputText.value = inputText.value;
            }
        }
    }
}
function findNeutral() {
    let input = inputText.value;
    let num = tokenize(input);
    let newstring = "";
    let l = num.length;
    if (typeof num[l - 1] === "number") {
        for (let i = 0; i < l; i++) {
            if (i == l - 1) {
                if (num[i] < 0 && typeof num[i] == "number") {
                    let x = num[i];
                    if (typeof x == "number") {
                        x = x * -1;
                    }
                    newstring += x;
                }
                else {
                    newstring += "-" + num[i];
                }
            }
            else {
                newstring += num[i];
            }
        }
        inputText.value = newstring;
    }
}
//memory
function enableMemoryBtn() {
    let mnum = localStorage.getItem("storenum");
    let msnum = localStorage.getItem("numberStore");
    let mcbtn = document.getElementById("mc");
    let mrbtn = document.getElementById("mr");
    if ((mnum == null && msnum == null) || (mnum == "0" && msnum == "")) {
        mcbtn.disabled = true;
        mrbtn.disabled = true;
        localStorage.setItem("numberStore", "");
        localStorage.setItem("storenum", "0");
    }
    else {
        mcbtn.disabled = false;
        mrbtn.disabled = false;
    }
}
function ChechTrigo(x) {
    let ans = false;
    for (let i = 0; i < trigoprator.length; i++) {
        if (trigoprator[i] == x) {
            ans = true;
            break;
        }
        else {
            ans = false;
        }
    }
    return ans;
}
//# sourceMappingURL=app.js.map