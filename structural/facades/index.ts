import operation from "./operationService.ts";

const calculate = (): number => {
   const num1 = 20;
   const num2 = 30;

   return operation(num1, num2);
};

console.log(calculate());
