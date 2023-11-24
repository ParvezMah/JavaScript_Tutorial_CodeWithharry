
console.log("===================================== Code With Harry ======================================")
// function loadscript(src, callback){
//     var script = document.createElement("Script");  //"https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
//     script.src = src;
//     script.onload = function(){
//         console.log("Loaded script with SRC : " + src);
//         callback();
//     }
//     document.body.appendChild(script);
// }


// function hello(){
//     alert("Hello world");
// }

// function good_morning(){
//     alert("Good Morning");
// }

// loadscript("https://cdn.jsdel ivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js", hello)






console.log('\n')
console.log("=====================================LWS======================================")
//You could call a calculator function (myCalculator), save the result, and then call another function (myDisplayer) to display the result:
console.log('===============1st Concept====================')
// function Display(some) {
//     console.log(some);
//   }
  
// function Calculator(num1, num2) {
//   let sum = num1 + num2;
//   return sum;
// }
  
// let result1 = Calculator(4, 4);
// Display(result1);
// console.log('\n');






// console.log('===============2nd Concept====================')
// function Display2(some) {
//     console.log(some);
//   }
  
//   function Calculator2(num1, num2) {
//     let sum = num1 + num2;
//     Display(sum);
//   }
  
// Calculator2(6, 6);
// console.log('\n');





// console.log('===============3rd Concept====================')
// function Display3(some){
//     console.log(some)
// }
// function Calculator3(num1, num2, callBack3){
//     let sum = num1+num2;
//     if(callBack3) callBack3(sum);
// }
// Calculator3(5,5, Display3);
// console.log('\n');



// console.log('===============4th Concept====================')
// function Calculator4(num1, num2, callback4){
//     let sum = num1+num2;
//     if(callback4) callback4(sum);
    
// }
// Calculator4(8,8, function(result3){
//     console.log(result3);
// });















console.log('\n')
console.log("=====================================LWS Callback Pattern======================================")
// const PaymentSuccess = true;
// const mark = 70;

// function enroll(callback){
//     console.log('Course enrollment is in progress');

//     setTimeout(function(){
//         if(PaymentSuccess) {
//             callback();
//         }
//         else{
//             console.log('Payment Failed');
//         }

//     },2000);
// }

// function Progress(callback){
//     console.log('Courses on progress....');
//     setTimeout(function(){
//         if(mark>=80){
//             callback();
//         }
//         else{
//             console.log("You could not get enough mark to get the certificate");
//         }
//     },3000);
// }

// function getCertificate(){
//     console.log('Preparing your certificate!');
//     setTimeout(function(){
//         console.log('Congrats! You got the certificate');
//     },1000);
// }


// enroll(function(){
//     Progress(getCertificate);
// })













console.log('\n')
console.log("=====================================Code Eater======================================")

function Calculator(num1,num2, callback){
    let sum = num1 + num2;
    callback(sum);

}
Calculator(4,6,function(result){
    console.log(result);
})