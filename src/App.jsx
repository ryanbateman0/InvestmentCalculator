import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import UserInput from "./components/UserInput";
import { useState } from "react";

const USER_INPUTS = ['Initial Investment', 'Annual Investment', 'Expected Return', 'Duration'];
const DEFAULT_VALUES_FOR_USER_INPUTS = {[USER_INPUTS[0]]: 15000, [USER_INPUTS[1]]: 900, [USER_INPUTS[2]]: 5.5, [USER_INPUTS[3]]: 10};

function calculateInvestmentResults({
  [USER_INPUTS[0]]: initialInvestment,
  [USER_INPUTS[1]]: annualInvestment,
  [USER_INPUTS[2]]: expectedReturn,
  [USER_INPUTS[3]]: duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;
  let totalCaptial = initialInvestment;
  let totalInterest = 0;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    totalInterest += interestEarnedInYear;
    totalCaptial += annualInvestment;
    const currentTotalInterest = totalInterest;
    const currentTotalCapital = totalCaptial;
    annualData.push({
      interest: interestEarnedInYear, // the amount of interest earned in this year
      totalInterest: currentTotalInterest,
      valueEndOfYear: investmentValue, // investment value at end of year
      annualInvestment: annualInvestment, // investment added in this year
      totalCapital: currentTotalCapital
    });
  }

  return annualData;
}

function App() {
  const [userInputs, setUserInputs] = useState({...DEFAULT_VALUES_FOR_USER_INPUTS});

  function changeUserInputs(newValue, currentInput) {
    if (currentInput === USER_INPUTS[3] && parseInt(newValue) < 0) {
      newValue = 0;
    }
    setUserInputs(previousUserInputs => {
    return {
      ...previousUserInputs,
      [currentInput]: parseFloat(newValue)}
      
    })
  }

  const tableValues = calculateInvestmentResults(userInputs)

  return (
    <>
      <Header />
      <UserInput userInputNames={[...USER_INPUTS]} userInputValues={userInputs} handleChangeInput={changeUserInputs} />
      <ResultTable resultTableValues={tableValues}/>
    </>
  )
}

export default App
