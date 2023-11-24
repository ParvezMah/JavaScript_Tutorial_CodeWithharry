console.log('\n')
console.log("=====================================CodeWithHarry======================================")







console.log('\n')
console.log("=====================================LWS======================================")

// enroll(function(){              // Callback    and Promises comes to solve this.
//     Progress(function(){
//         C(function(){
//             D(function(){
//                 E(function(){
//                       F()
//                 });
//             });
//         });
//     });
// });
// const status = false;
// console.log('\n');
// console.log('Task 1');

// // Promise Definition - Producing Code
// const promise = new Promise(function(resolve, reject){
//     // Asynchronus Programm inside of Promise object
//     setTimeout(function(){
//         if(status){
//             resolve('Task 2');
//         } else {
//             reject('Failed')
//         }
//     },2000);
// });

// // Promise call - Consuming Code
// promise
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })

// console.log('Task 3');
// console.log('\n');






// const PaymentSuccess = true;
// const mark = 90;

// function enroll(callback){
//     console.log('Course enrollment is in progress');
//     const promise = new Promise(function(resolve,reject){
//         setTimeout(function(){
//             if(PaymentSuccess) {
//                 resolve();
//             }
//             else{
//                 reject('Payment Failed');
//             }
    
//         },2000);
//     });
//     return promise;
// }

// function Progress(callback){
//     console.log('Courses on progress....');
//     const promise = new Promise(function(resolve, reject){
//         setTimeout(function(){
//             if(mark>=80){
//                 resolve();
//             }
//             else{
//                 reject("You could not get enough mark to get the certificate");
//             }
//         },3000);
//     })
//     return promise;
// }

// function getCertificate(){
//     console.log('Preparing your certificate!');
//     // const promise = new Promise(function(resolve){
//     //     setTimeout(function(){
//     //         resolve('Congrats! You got the certificate');
//     //     },1000);
//     // });  
//     const promise = Promise.resolve('Congrats! You got the certificate'); // if only we use resolve
//     return promise;
// }

// enroll()
//     .then(Progress)
//     .then(getCertificate)
//     .then(function(value){
//         console.log(value);
//     })
//     .catch(function(err){
//         console.log(err);
//     })








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
// const promise = new Promise((resolve, reject)=>{
//     if(true){
//         resolve("It Worked")
//     }
//     else{
//         reject("It got rejected")
//     }
// })

// promise
//     .then((Resolve)=>{ Resolve + "?"})
//     .then((Resolve2)=>{Resolve2 + "*"})
//     .then((Resolve3)=>{
//         throw Error;
//         console.log(Resolve3);
//     })
//     .catch(()=>{
//         console.log("Error in result 3");
//     });


const promise = new Promise((resolve, reject)=>{
    if(true){
        resolve("It worked");
    }
    else{
        reject("it failed");
    }
})

promise
    .then((Resolve)=>{Resolve + 1})
    .then((Resolve)=>{Resolve + 2})
    .then((Resolve))
