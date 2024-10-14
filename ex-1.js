// Exercise #1: For Each Function

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = [];

function ForEach (array,callback) {
for (let salary of array) {
newEmployeeSalaries.push(callback(salary));
} 
}

let addSalaries = (salary) => salary + 5000;

// Using `forEach` function here

ForEach(employeeSalaries, addSalaries);

console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]







// const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
// const newEmployeeSalaries = [];


// function forEach(array, operation) {
// for (let salaryAdd of array ) {
//   operation.push(salaryAdd+5000)
// }
// return operation
// }


// // Using `forEach` function here
// forEach(employeeSalaries,newEmployeeSalaries)
// console.log(newEmployeeSalaries); // [25005, 45000, 37000, 19500, 349000]

