// https://github.com/tc39/proposal-pipeline-operator
// stage 2

const calculatedValueOld = Math.ceil(Math.pow(Math.max(0, -10), 1 / 3));
const calculatedValueNew = -10 |> (n => Math.max(0, n)) |> (n => Math.pow(n, 1 / 3)) |> Math.ceil;
