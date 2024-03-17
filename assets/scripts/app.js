const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []

function userInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function add() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + enteredUserInput;
  createAndWriteOutput("+", initialResult, enteredUserInput);
  logEntries.push(currentResult);
  console.log("User Input Entries =>", logEntries);
}

function subtract() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredUserInput;
  createAndWriteOutput("-",initialResult,enteredUserInput);
  logEntries.push(currentResult);
  console.log("User Input Entries =>", logEntries)
}

function multiplication() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult
  currentResult = currentResult * enteredUserInput;
  createAndWriteOutput("*",initialResult,enteredUserInput);
  logEntries.push(currentResult);
  console.log("User Input Entries =>", logEntries);
}
function division() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredUserInput;
  createAndWriteOutput("/",initialResult,enteredUserInput)
  logEntries.push(currentResult);
  console.log("User Input Entries =>", logEntries);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
