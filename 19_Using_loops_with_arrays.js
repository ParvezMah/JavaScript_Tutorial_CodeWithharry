let num = [3,54,1,2,4];
let num2 = [4,5,3,2,6,8,9]

console.log("==============for loop==================")
// for(let i=0; i<num.length; i++){
//     console.log(i);
// }
console.log('\n');




// console.log("==============forEach loop==================")
// num.forEach((element)=>{
//     console.log(element*element);
// })
// console.log('\n');

num.forEach((value, index, array)=>{
    console.log("Value : ", value, " index : ", index, "array : ", array);
})



console.log("==============forEach loop==================")
num2.forEach((element)=>{
    console.log(element*element);
})
console.log('\n');




console.log("==============Array.from()==================")
let name = "parvez"
console.log(Array.from(name));
console.log('\n');


console.log("==============for of==================")
for(let j of num){
    console.log(j);
}
console.log('\n');


console.log("==============for in==================")
for(let k in num){
    console.log(k);
}
console.log('\n');