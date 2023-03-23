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
  let curInput = inputText.value;
  if (curInput == "") {
    return;
  } else {
    let input = parseInt(curInput);
    if (Number.isNaN(input)) {
      return;
    } else {
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
  } else {
    let input = parseInt(curInput);
    if (Number.isNaN(input)) {
      return;
    } else {
      let ans = Math.cbrt(input);
      inputText.value = String(ans);
    }
  }
}

// **************trigonometry 2nd button *****************

const secondTrigo = document.getElementsByClassName("trigono-btn");
const secondTrigoH = document.getElementsByClassName("trigono-h-btn");
const secondTrigoHinv = document.getElementsByClassName("trigono-h-inv");

let flag_trig = false,
  flag_hyp = false,
  flag_hyp1 = false;

function secondStatus(statue: boolean) {
  if (statue == false) {
    flag_trig = true;
  } else {
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
    } else {
      btn.classList.toggle(setbtn2);
    }
  });
}

//hyp status
function hypstatus() {
  if (flag_hyp1 == false) {
    flag_hyp1 = true;
  } else {
    flag_hyp1 = false;
  }

  if (flag_trig == true) {
    if (flag_hyp == false) {
      flag_hyp = true;
    } else {
      flag_hyp = false;
    }
    let shbtn1 = "trigono-h-inv";
    let shbtn2 = "d-none";
    Array.from(secondTrigoHinv).map((btn) => {
      if (btn.classList.contains(shbtn1)) {
        btn.classList.toggle(shbtn2);
      } else {
        btn.classList.toggle(shbtn2);
      }
    });
  } else {
    flag_hyp = false;
    let shbtn1 = "trigono-h-btn";
    let shbtn2 = "d-none";
    Array.from(secondTrigoH).map((btn) => {
      if (btn.classList.contains(shbtn1)) {
        btn.classList.toggle(shbtn2);
      } else {
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
  } else {
    inputText.value = String(Math.floor(f));
  }
}

//findInvertLX() function
function findInvertLX() {
  let c = parseFloat(inputText.value);
  if (Number.isNaN(c)) {
    return;
  } else {
    inputText.value = String(Math.ceil(c));
  }
}

//findRand() function
function findRand() {
  if (inputText.value.length <= 0) {
    inputText.value = String(Math.random());
  } else {
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
    } else {
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
  } else if (obj.rad == "true") {
    let rvalue = parseFloat(inputText.value);
    if (Number.isNaN(rvalue)) {
      return;
    } else {
      let ans = rvalue * (180 / Math.PI);
      inputText.value = ans.toFixed(4);
    }
  } else {
    let gvalue = parseFloat(inputText.value);
    if (Number.isNaN(gvalue)) {
      return;
    } else {
      let ans = gvalue * 0.9;
      inputText.value = String(ans);
    }
  }
}

//*****************************************************************/
//color change function
function btnColorHandler(e: Element) {
  e.classList.toggle("bg-primary");
}

// unit object
const unit_text = document.getElementById("unit")!;
const obj = { deg: "true", rad: "false", grad: "false" };

function check_unit() {
  if (obj.deg == "true") {
    obj.deg = "false";
    unit_text.innerHTML = "RAD";
    obj.rad = "true";
    obj.grad = "false";
  } else if (obj.rad == "true") {
    obj.rad = "false";
    unit_text.innerHTML = "GRAD";
    obj.deg = "false";
    obj.grad = "true";
  } else if (obj.grad == "true") {
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
let result: number | string;
for (let btn of allBtn) {
  btn.addEventListener("click", (e) => {
    let input = (<Element>e.target).closest("button")?.dataset.input;
    switch (input) {
      case "unit":
        check_unit();
        break;
      case "second-fn-Trigono":
        if (flag_hyp1 != true) {
          btnColorHandler(e.target as Element);
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
        btnColorHandler(e.target as Element);
        let secBtn1 = "2nd-btn-1";
        let secBtn2 = "d-none";
        Array.from(secondBtn).map((btn) => {
          if (btn.classList.contains(secBtn1)) {
            btn.classList.toggle(secBtn2);
          } else {
            btn.classList.toggle(secBtn2);
          }
        });
        break;
      case "hyp":
        btnColorHandler(e.target as Element);
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
      case "^":
        inputText.value += "^";
        break;
      case "10^":
        inputText.value += "10^";
        break;
      case "(":
        inputText.value += "(";
        break;
      case ")":
        inputText.value += ")";
        break;
      case "=":
        if (inputText.value == "") {
          return;
        } else {
          if (trigoprator.includes(inputText.value.replace(/[^A-Za-z]/g, ""))) {
            trigohandle(inputText.value);
          } else if (/[+|-|\/|*|^|(|)]/.test(inputText.value)) {
            let openBracket = 0,
              closeBracket = 0;
            if (
              inputText.value.includes("(") ||
              inputText.value.includes(")")
            ) {
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
                console.log("uneven barcket");
                return;
              } else {
                let teststr = inputText.value;
                let numofb = openBracket;
                let valueofb = cal_bracket(teststr)!;
                let pretext,
                  j = 0;
                for (let i = 0; i < numofb; i++) {
                  pretext = teststr.replace(
                    /\(.*?\)/,
                    valueofb[j] as unknown as string
                  );
                  teststr = pretext;
                  j++;
                }
                console.log("New String", teststr);
                if (teststr.includes(")")) {
                  teststr = teststr.replace(")", "");
                }
                result = String(calculate(tokenize(teststr)));
                result = result.replace(",)", "");

                inputText.value = String(result);
              }
            } else {
              result = String(calculate(tokenize(inputText.value)));
              inputText.value = String(result);
            }
          } else {
            if (result) {
              inputText.value = String(result);
              result = 0;
            } else {
              inputText.value = inputText.value;
            }
          }
        }
    }
  });
}

//calculate Value Function

function tokenize(s: string) {
  const r = [];
  let token = "";
  for (const character of s) {
    if ("^*/+-()".includes(character)) {
      if (token === "" && character === "-") {
        token = "-";
      } else {
        r.push(parseFloat(token), character);
        token = "";
      }
    } else {
      token += character;
    }
  }
  if (token !== "") {
    r.push(parseFloat(token));
  }
  return r;
}

function calculate(tokens: (string | number)[]) {
  // --- Perform a calculation expressed as an array of operators and numbers
  const operatorPrecedence: Object[] = [
    { "^": (a: number, b: number) => Math.pow(a, b) },
    {
      "*": (a: number, b: number) => a * b,
      "/": (a: number, b: number) => a / b,
    },
    {
      "+": (a: number, b: number) => a + b,
      "-": (a: number, b: number) => a - b,
    },
  ];
  let operator: Function | null = null;
  for (const operators of operatorPrecedence) {
    const newTokens: (number | string)[] = [];
    for (const token of tokens) {
      if (token in operators) {
        operator = operators[token as keyof Object];
      } else if (operator) {
        newTokens[newTokens.length - 1] = operator(
          newTokens[newTokens.length - 1],
          token
        );
        operator = null;
      } else {
        newTokens.push(token);
      }
    }
    tokens = newTokens;
  }
  if (tokens.length > 1) {
    console.log("Error: unable to resolve calculation");
    return tokens;
  } else {
    return tokens[0];
  }
}

//addDot function

function AddDot() {
  inputText.value += ".";
}

function expower(num: number, pow: number) {
  return num ** pow;
}

// Factorial Function

function findFact() {
  let inputValue = parseInt(inputText.value);
  if (Number.isNaN(inputValue)) {
    return;
  } else {
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
  if (Number.isNaN(inputValue)) {
    return;
  } else {
    let ans = Math.log10(inputValue);
    inputText.value = String(ans);
  }
}

function findLn() {
  let inputValue = parseInt(inputText.value);
  if (Number.isNaN(inputValue)) {
    return;
  } else {
    let ans = Math.log10(inputValue) * 2.303;
    inputText.value = String(ans);
  }
}

// Trigonometry

const trigoBtn = document.getElementsByClassName("trig-btn");

for (let i of trigoBtn) {
  i.addEventListener("click", (e) => {
    let input = (<Element>e.target).closest("button")?.dataset.input;
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

function trigohandle(inputText: string) {
  let str = inputText;
  let trigof = inputText.replace(/[^A-Za-z]/g, "");
  console.log(trigof);
  let num = parseInt(inputText.split(trigof)[1]);
  if (Number.isNaN(num)) {
    return;
  } else {
    num = covertUnit(num);
    console.log("value:", num);
    console.log(handleTrigoFunction(str, num));
  }
}

function covertUnit(value: number) {
  if (obj["deg"] == "true") {
    value = (value * Math.PI) / 180;
    console.log("Deg to radian", value);
    return value;
  } else if (obj["grad"] == "true") {
    value = value * 0.015708;
    console.log("grad to radian", value);
    return value;
  } else {
    return value;
  }
}

function handleTrigoFunction(text: string, value: number) {
  let x = text.replace(/[^A-Za-z]/g, "");
  if (text.match(/^sin/i)) {
    handleSin(x, value);
  } else if (text.match(/^cos/i)) {
    handleCos(x, value);
  } else if (text.match(/^tan/i)) {
    handleTan(x, value);
  } else if (text.match(/^sec/i)) {
    handleSec(x, value);
  } else if (text.match(/^csc/i)) {
    handleCosec(x, value);
  } else if (text.match(/^cot/i)) {
    handleCot(x, value);
  }
}

// Sin Handler

function handleSin(text: string, value: number) {
  switch (text) {
    case "sin":
      console.log("sin");
      inputText.value = String(Math.sin(value));
      break;
    case "sinin":
      console.log("sin in");
      inputText.value = String(Math.asin(value));
      break;
    case "sinh":
      console.log("sin h");
      inputText.value = String(Math.sinh(value));
      break;
    case "sinhin":
      console.log("sin h in");
      inputText.value = String(Math.asinh(value));
      break;
  }
}
//Cos Handler
function handleCos(text: string, value: number) {
  switch (text) {
    case "cos":
      console.log("cos");
      inputText.value = String(Math.cos(value));
      break;
    case "cosin":
      console.log("cos in");
      inputText.value = String(Math.acos(value));
      break;
    case "cosh":
      console.log("cos h");
      inputText.value = String(Math.cosh(value));
      break;
    case "coshin":
      console.log("cos h in");
      inputText.value = String(Math.acosh(value));
      break;
  }
}
//Tan handler
function handleTan(text: string, value: number) {
  switch (text) {
    case "tan":
      console.log("tan");
      inputText.value = String(Math.round(Math.tan(value)));
      break;
    case "tanin":
      console.log("tan in");
      inputText.value = String(Math.atan(value));
      break;
    case "tanh":
      console.log("tan h");
      inputText.value = String(Math.tanh(value));
      break;
    case "tanhin":
      console.log("tan h in");
      inputText.value = String(Math.atanh(value));
      break;
  }
}
//Sec handler
function handleSec(text: string, value: number) {
  switch (text) {
    case "sec":
      console.log("sec");
      inputText.value = String(1 / Math.cos(value));
      break;
    case "secin":
      console.log("sec in");
      inputText.value = String(1 / Math.acos(value));
      break;
    case "sech":
      console.log("sec h");
      inputText.value = String(1 / Math.cosh(value));
      break;
    case "sechin":
      console.log("sec h in");
      inputText.value = String(1 / Math.acosh(value));
      break;
  }
}
//Cosec handler
function handleCosec(text: string, value: number) {
  switch (text) {
    case "csc":
      console.log("cosec");
      inputText.value = String(1 / Math.sin(value));
      break;
    case "cscin":
      console.log("cosec in");
      inputText.value = String(1 / Math.asin(value));
      break;
    case "csch":
      console.log("cosec h");
      inputText.value = String(1 / Math.sinh(value));
      break;
    case "cschin":
      console.log("cosec h in");
      inputText.value = String(1 / Math.asinh(value));
      break;
  }
}
//Cot handler
function handleCot(text: string, value: number) {
  switch (text) {
    case "cot":
      console.log("cot");
      inputText.value = String(1 / Math.tan(value));
      break;
    case "cotin":
      console.log("cot in");
      inputText.value = String(1 / Math.atan(value));
      break;
    case "coth":
      console.log("cot h");
      inputText.value = String(1 / Math.tanh(value));
      break;
    case "cothin":
      console.log("cot h in");
      inputText.value = String(1 / Math.atanh(value));
      break;
  }
}

function cal_bracket(text: string) {
  let solutionofB: number[] = [];
  let out = calculate(tokenize(text));
  if (typeof out === "number" || typeof out == "string") {
    return;
  }
  console.log("out:", out);
  let index: number;
  for (let i = 0; i < out.length; i++) {
    if (out[i] == "(") {
      index = i;
      while (out[index] != ")") {
        if (out[index] != "(") {
          if (Number.isNaN(out[index])) {
            break;
          }
          solutionofB.push(Number(out[index]));
        }
        index++;
      }
    }
  }

  console.log("solution", solutionofB);
  return solutionofB;
}
