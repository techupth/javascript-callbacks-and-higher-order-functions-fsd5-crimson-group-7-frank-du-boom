// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function forEach(array, operation) {
  // Start coding here
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}

forEach(employeeSalaries, function (salary) {
  newEmployeeSalaries.push(salary + 5000);
});
// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
