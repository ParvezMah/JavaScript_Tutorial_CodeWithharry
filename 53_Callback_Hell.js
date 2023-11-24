console.log('\n')
console.log("=====================================CodeWithHarry======================================")







console.log('\n')
console.log("=====================================LWS======================================")
// console.log('Line 1 code');


// setTimeout(function(){
//     console.log('Line 2 code');
// },2000);


// console.log('Line 3 code');
// console.log('\n');


// console.log('Line 1 code');
// setInterval(function(){
//     console.log('Line 2 code');
// },2000);
// console.log('Line 3 code');



console.log('\n')
console.log("=====================================Code Eater======================================")


// const myCalculator1 = (Num1, Num2)=>{
//     let sum = Num1+ Num2;
//     return sum;
// }

// myCalculator1(5,10);

// Using Callback
// runDirection(100, "Top", function(){
//     runDirection(200, "left", function(){
//         runDirection(300, "Bottom", function(){
//             runDirection(400, "right", function(){

//             });
//         });
//     });
// });

// Using Promises
// runDirection(100, "Top")
// .then(()=>runDirection(200, "left"))
// .then(()=>runDirection(300, "Bottom"))
// .then(()=>runDirection(400, "right"))




//Basic Structure of Promises only can run on console
const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve("It Worked")
    }
    else{
        reject("It got rejected")
    }
})

promise
    .then((Resolve)=>{ Resolve + "?"})
    .then((Resolve2)=>{Resolve2 + "*"})
    .then((Resolve3)=>{
        throw Error;
        console.log(Resolve3);
    })
    .catch(()=>{
        console.log("Error in result 3");
    })
