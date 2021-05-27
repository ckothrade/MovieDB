// console.log("helloworld");

const data = " harry potter, ron weaseley , hermione granger";
// const data = "harry, ";
// let arr = data.trim().split(",", 2).map(item => item.trim());
let arr = data.trim().split(",", 2).map(item => item.trim()).filter(item => item !== '');

// arr = arr.map(item => item.trim());
console.log(arr);
// console.log(Date.now());