import './App.scss';
import { useState } from "react"
import { isFibonnaci, isPrime, onlyPositive } from "./calculation"
function App() {
  // store calculatio mode
  const [calcOption, setCalcOption] = useState("isPrime")
  // store input number
  const [number, setNumber] = useState(1)
  return (
    <div className="App">
      <table className="calcTable">
        <tbody>
          <tr>
            <td><input type="text" value={number} onChange={e => setNumber(onlyPositive(e.target.value))}/></td>
            <td>
              {calcOption}
              <select value={calcOption} onChange={e => setCalcOption(e.target.value)}>
                <option value="isPrime">isPrime</option>
                <option value="isFibonacci">isFibonacci</option>
              </select>
            </td>
            <td>{calcOption == "isPrime" ? isPrime(number) : isFibonnaci(number)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
