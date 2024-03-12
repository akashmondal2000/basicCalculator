const defaultResult = 0;
let currentResult = defaultResult;

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
}

function subtract() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredUserInput;
  createAndWriteOutput("-",initialResult,enteredUserInput);
}

function multiplication() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult
  currentResult = currentResult * enteredUserInput;
  createAndWriteOutput("*",initialResult,enteredUserInput);
}
function division() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredUserInput;
  createAndWriteOutput("/",initialResult,enteredUserInput)
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
