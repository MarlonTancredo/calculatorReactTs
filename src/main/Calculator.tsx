import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";
import { useState } from "react";

const initialState = {
  displayValue: 0,
  clearDisplay: false,
  operation: "",
  values: [0, 0],
  current: 0,
};

const Calculator = () => {
  const [state, setState] = useState({ ...initialState });

  const handleClear = () => {
    return setState({ ...initialState });
  };

  const handleOperation = (hOperation: any) => {
    if (state.current === 0) {
      setState({
        ...initialState,
        operation: hOperation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = hOperation === "=";
      const currentOperation = state.operation;

      const hValues = [...state.values];
      hValues[0] = eval(`${+hValues[0]} ${currentOperation} ${+hValues[1]} `);
      hValues[1] = 0;
      setState({
        ...state,
        displayValue: hValues[0],
        operation: equals ? null : hOperation,
      });
    }
  };

  const handleDigit = (n: any) => {
    if (n === "." && state.displayValue.includes(".")) {
      return;
    }
    const hClearDisplay = state.displayValue === 0 || state.clearDisplay;
    const hCurrentValue = hClearDisplay ? "" : state.displayValue;
    const hDisplayValue = hCurrentValue + n;
    setState({
      ...state,
      displayValue: hDisplayValue,
      clearDisplay: false,
    });
    // if (n !== ".") {
    //   const i = state.current;
    //   const newValue = parseFloat(hDisplayValue);
    //   const hValues = [...state.values];
    //   hValues[i] = newValue;
    //   setState({ ...state, values: hValues });
    // }
  };

  return (
    <div className="calculator">
      <Display value={state.displayValue}></Display>
      <Button label="AC" click={handleClear} triple></Button>
      <Button label="/" click={handleOperation} operation></Button>
      <Button label="7" click={handleDigit}></Button>
      <Button label="8" click={handleDigit}></Button>
      <Button label="9" click={handleDigit}></Button>
      <Button label="*" click={handleOperation} operation></Button>
      <Button label="4" click={handleDigit}></Button>
      <Button label="5" click={handleDigit}></Button>
      <Button label="6" click={handleDigit}></Button>
      <Button label="-" click={handleOperation} operation></Button>
      <Button label="1" click={handleDigit}></Button>
      <Button label="2" click={handleDigit}></Button>
      <Button label="3" click={handleDigit}></Button>
      <Button label="+" click={handleOperation} operation></Button>
      <Button label="0" click={handleDigit} double></Button>
      <Button label="." click={handleDigit}></Button>
      <Button label="=" click={handleOperation} operation></Button>
    </div>
  );
};

export default Calculator;
