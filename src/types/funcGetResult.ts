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

export default getResult;
