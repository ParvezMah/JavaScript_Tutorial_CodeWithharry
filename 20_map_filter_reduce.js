let arr = [45, 23, 21];

console.log("====================Map()========================")
let arr1 = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + index;
})

console.log(arr1);
console.log('\n');




console.log("====================Filter()========================")
let arr2 = [2,5,22,12,56,0,3,5,2,5,9,3];
let a2 = arr2.filter((a)=>{
    return a<10;
})
console.log(a2);

console.log('\n');




console.log("====================Reduce()========================")
let arr3 = [2,5,22,12,56,0,3,5,2,5,9,3];
let a3 = arr3.reduce((PV,CV)=>{
    return PV + CV;
})
console.log(a3);

console.log('\n');



