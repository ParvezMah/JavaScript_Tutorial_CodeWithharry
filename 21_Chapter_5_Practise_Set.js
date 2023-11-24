console.log("====================Practise_01=====================")
// Create an array of number and take input from user to add number to the array

let arr1 = [2,4,5,4,1,6,7,8];
let a = prompt("Enter your value : ");
a.forEach(element => {
    return element*10;5

});
console.log(a)
// a2 = Number.parseInt(a);
// arr1.push(a2);
// console.log(a);
// console.log('\n')

console.log("====================Practise_02=====================")
//Keep adding to the array untill 0 is added to the number

// let arr2 = [2,4,5,4,1,6,7,8];
// do{
//     let b = prompt("Enter your value : ");
// b2 = Number.parseInt(b);
// arr1.push(b2);
// console.log(b2);
// }
// while(b!=0);
// console.log('\n')


// console.log("====================Practise_03=====================")
// //Filter for numbers divisible by 10 from a given array.

// let arr3 = [1,2,30,4,50,6,7,83,670];
// let c = arr3.filter((x)=>{
//     return x%10==0;
// });
// console.log(c);
// console.log('\n');

// console.log("====================Practise_04=====================")
// //Create a array contained square number of given array

// let arr4 = [1,2,30,4,50,6,7,83,670];
// let d = arr4.map((x)=>{
//     return x*x
// });
// console.log(d);
// console.log('\n');


console.log("====================Practise_05=====================")
//Create a array contained square number of given array

let arr5 = [1,2,30,4,50,6,7,83,670];
let f = arr5.reduce((x,y)=>{
    return x*y;
});
console.log(f);
console.log('\n');




