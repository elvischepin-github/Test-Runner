import { useState } from "react";
import RunnerWindow from "../../widgets/RunnerWindow/RunnerWindow";

export default function Exercise_1_1() {
  const [outputResult, setOutputResult] = useState<string>("");

  const expectedResult = "number";

  function testFunction(userCode: string) {
    try {
      const exeFunction = new Function(userCode);
      const result = exeFunction();

      if (typeof result === "number") {
        setOutputResult(`Passed! Output: ${result}`);
      } else {
        setOutputResult(
          `Failed. Output: ${result}. Expected: ${expectedResult}.`,
        );
      }
    } catch (error: unknown) {
      if (error instanceof Error) {
        setOutputResult(`Failed. Error: ${error.message}.`);
      } else {
        setOutputResult(`Failed. Error: unknown.`);
      }
    }

    return outputResult;
  }

  return (
    <RunnerWindow
      exerciseTitle="Basic variable usage"
      exerciseNumber={1.1}
      description="Declare two variables using appropriate naming conventions and assign them numeric values. Then, declare a variable named 'result' that holds the sum of the two previously defined variables. Return the final result using the `return` keyword."
      requirements="Appropriately selected and showcased naming convention. One variable must be assigned a value that cannot be changed."
      testFunction={testFunction}
      outputResult={outputResult}
    />
  );
}
