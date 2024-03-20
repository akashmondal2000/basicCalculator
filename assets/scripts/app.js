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

// all calculations hare 
function calculationResult (calculationType){
  const enteredUserInput = userInputNumber();
  const initialResult = currentResult;
  let mathOperator ;

  if(calculationType === "ADD"){
    currentResult = currentResult + enteredUserInput;
    mathOperator = '+'
  }else if (calculationType === "SUBTRACT"){
    currentResult = currentResult - enteredUserInput;
    mathOperator = '-'
  }else if(calculationType === "MULTIPLY"){
    currentResult = currentResult * enteredUserInput;
    mathOperator = '*'
  }else if(calculationType === "DIVIDE"){
    currentResult = currentResult / enteredUserInput;
    mathOperator = '/'
  }
  
  createAndWriteOutput(mathOperator, initialResult, enteredUserInput);
  writeToLog(calculationType,initialResult,enteredUserInput,currentResult);
  
}


function add() {
calculationResult("ADD")
}

function subtract() {
  calculationResult("SUBTRACT")
}

function multiplication() {
  calculationResult("MULTIPLY")

}
function division() {
  calculationResult("DIVIDE")

}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiplication);
divideBtn.addEventListener("click", division);
