const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

function userInputNumber() {
  return parseInt(userInput.value);
}

function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription);
}

function writeToLog(
  operationIdentifire,
  prevNumber,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifire,
    number: operationNumber,
    previousNumber: prevNumber,
    result: newResult,
  }; // Create an object for recored of each entry

  logEntries.push(logEntry);
  console.log("User Input Entries =>", logEntries);
}

function add() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult + enteredUserInput;
  createAndWriteOutput("+", initialResult, enteredUserInput);
  writeToLog("Add",initialResult,enteredUserInput,currentResult);
}

function subtract() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult - enteredUserInput;
  createAndWriteOutput("-", initialResult, enteredUserInput);

  writeToLog("Subtraction",initialResult,enteredUserInput,currentResult);
}

function multiplication() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult * enteredUserInput;
  createAndWriteOutput("*", initialResult, enteredUserInput);

  writeToLog("Multiplication",initialResult,enteredUserInput,currentResult);
}
function division() {
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  currentResult = currentResult / enteredUserInput;
  createAndWriteOutput("/", initialResult, enteredUserInput);

  writeToLog("Division",initialResult,enteredUserInput,currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
