import "./Calculator.css";

import Button from "../components/Button";
import Display from "../components/Display";
import { useState } from "react";

const getResult = (values: number[], op: string | null) => {
  const result = {
    res: 0,
  };
  if (op === "+") {
    result.res = values[0] + values[1];
  } else if (op === "-") {
    result.res = values[0] - values[1];
  } else if (op === "*") {
    result.res = values[0] * values[1];
  } else if (op === "/") {
    result.res = values[0] / values[1];
  }
  return result.res;
};

type stateType = {
  displayValue: string;
  clearDisplay: boolean;
  operation: null | string;
  values: number[];
  current: number;
};

const initialState: stateType = {
  displayValue: "0",
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

  const handleOperation = (hOperation: string) => {
    if (state.current === 0) {
      setState({
        ...state,
        operation: hOperation,
        current: 1,
        clearDisplay: true,
      });
    } else {
      const equals = hOperation === "=";
      const currentOperation = state.operation;

      const hValues = state.values;
      hValues[0] = getResult(state.values, currentOperation);
      hValues[1] = 0;
      setState({
        ...state,
        displayValue: hValues[0].toString(),
        operation: equals ? null : hOperation,
        current: equals ? 0 : 1,
        clearDisplay: !equals,
        values: hValues,
      });
    }
  };

  const handleDigit = (digit: string) => {
    if (digit === "." && state.displayValue.includes("0")) {
      return;
    }
    const hClearDisplay = state.displayValue === "0" || state.clearDisplay;
    const hCurrentValue = hClearDisplay ? "" : state.displayValue;
    const hDisplayValue = hCurrentValue + digit;
    const i = state.current;
    const newValue = parseFloat(hDisplayValue);
    const hValues = [...state.values];
    hValues[i] = newValue;
    setState({
      ...state,
      displayValue: hDisplayValue,
      clearDisplay: false,
      values: hValues,
    });

    // if (digit !== ".") {
    //   hValues[i] = newValue;
    //   setState({ ...state, values: hValues });
    // }
  };
  return (
    <div className="calculator">
      <Display value={state.displayValue}></Display>
      <Button
        label="AC"
        click={handleClear}
        triple={true}
        operation={false}
        double={false}
      ></Button>
      <Button
        label="/"
        click={handleOperation}
        operation={true}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="7"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="8"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="9"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="*"
        click={handleOperation}
        operation={true}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="4"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="5"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="6"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="-"
        click={handleOperation}
        operation={true}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="1"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="2"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="3"
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="+"
        click={handleOperation}
        operation={true}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="0"
        click={handleDigit}
        operation={false}
        double={true}
        triple={false}
      ></Button>
      <Button
        label="."
        click={handleDigit}
        operation={false}
        double={false}
        triple={false}
      ></Button>
      <Button
        label="="
        click={handleOperation}
        operation={true}
        double={false}
        triple={false}
      ></Button>
    </div>
  );
};

export default Calculator;
