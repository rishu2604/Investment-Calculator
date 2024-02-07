import Header from "./components/Header.jsx";
import Input from "./components/Input.jsx";
import { useState } from "react";
import Results from "./components/Results.jsx";

function App() {
  const [ userInput, setUserInput ] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 12
  })

  const inputIsValid = userInput.duration>=1

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevValues=>{
        return{
            ...prevValues,
            [inputIdentifier]: +newValue  // to convert the string to integer value as JavaScript always take input as a string even when taken by event.target.value
        };
    });
  }
  return (
    <>
      <Header />
      <Input onChange={handleChange} userInput={userInput}/>
      {!inputIsValid && <p className="center">Please enter a duration greater than zero</p>}
      {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
