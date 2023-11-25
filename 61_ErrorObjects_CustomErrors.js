console.log("==============================1st code==========================");
// try{
//     harry
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }
// console.log('\n');

console.log("==============================2nd code==========================");
// try{
//     throw new ReferenceError("harry is not good!");
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
// }
// console.log('\n');

// console.log("==============================3rd code==========================");
// try{
//     console.log(Harry);
//     throw new ReferenceError("harry is not good!");
// }
// catch(error){
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)
// }
// console.log('\n');

console.log("==============================4th code==========================");
try{
    let age = prompt("Enter your age : ");
    if(age>150){
        throw new ReferenceError("This code is probably not true!");
    } 
}
catch(error){
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
}
console.log("The Code is still running!");
console.log('\n');