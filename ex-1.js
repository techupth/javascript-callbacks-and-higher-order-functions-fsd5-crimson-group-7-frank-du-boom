// Exercise #1: For Each Function

function forEach(array, operation) {
  for (let i=0 ; i<employeeSalaries.length ; i++){
    let result = array[i]+5000;
    operation(result);
  }
  // Start coding here
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

forEach(employeeSalaries, function(newSalaries){
  newEmployeeSalaries.push(newSalaries);
})
// Using `forEach` function here

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]
