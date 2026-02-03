export interface RunnerWindowProps {
  exerciseTitle: string;
  exerciseNumber: number;
  description: string;
  requirements: string;
  testFunction: (userCode: string) => unknown;
  outputResult: string;
}
