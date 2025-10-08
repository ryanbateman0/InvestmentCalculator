import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { useState } from "react";

const USER_INPUTS = ['Initial Investment', 'Annual Investment', 'Expected Return', 'Duration'];
const DEFAULT_VALUES_FOR_USER_INPUTS = {[USER_INPUTS[0]]: 10000, [USER_INPUTS[1]]: 1000, [USER_INPUTS[2]]: 5, [USER_INPUTS[3]]: 10};

function calculateInvestmentResults({
  [USER_INPUTS[0]]: initialInvestment,
  [USER_INPUTS[1]]: annualInvestment,
  [USER_INPUTS[2]]: expectedReturn,
  [USER_INPUTS[3]]: duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // year identifier
      interest: interestEarnedInYear, // the amount of interest earned in this year
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
    });
  }

  return annualData;
}

function App() {
  const [userInputs, setUserInputs] = useState(DEFAULT_VALUES_FOR_USER_INPUTS);

  function changeUserInputs(newValue, currentInput) {
    setUserInputs(previousUserInputs => {
    return {
      ...previousUserInputs,
      [currentInput]: newValue}
      
    })
  }

  const tableValues = calculateInvestmentResults(userInputs)

  console.log(tableValues)

  return (
    <>
      <Header />
      <UserInput userInputNames={[...USER_INPUTS]} userInputValues={userInputs} handleChangeInput={changeUserInputs} />
      <ResultTable resultTableValues={tableValues}/>
    </>
  )
}

export default App
