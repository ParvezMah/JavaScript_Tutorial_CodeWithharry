console.log('\n')
console.log("=====================================CodeWithHarry======================================")


async function harry(){
    let delhiWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('27 deg')
        }, 1000)
    })
    let bangaloreWeather = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve('21 deg')
        }, 2000)
    })
    // delhiWeather.then(alert)
    // bangaloreWeather.then(alert)
    
    // using await
    console.log('Fetching Delhi weather please wait....');
    let delhiW = await delhiWeather;
    console.log('Fetched delhiW weather : ' + delhiW);

    console.log('Fething Bangalore weather please wait...');
    let bangaloreW = await bangaloreWeather;
    console.log('Fetched Bangalore weather : ' + bangaloreW);
    return [delhiW, bangaloreW]
}

const cherry =async ()=>{
    // console.log('Hey i am not waiting');
    console.log('Hey i am waiting');
}

const main1 =async()=>{
    console.log('Welcome weather control room');
    let a = await harry()
    let b = await cherry()
    // a.then(value => {
    //     console.log(value);
    // })
}
main1()







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
//     const promise = new Promise(function(resolve){
//         setTimeout(function(){
//             resolve('Congrats! You got the certificate');
//         },1000);
//     });  
//     return promise
// }


// // Using Async  & Await
// async function Course(){
//     try{
//         await enroll();
//         await Progress();
//         const message = await getCertificate();
        
//         console.log(message);
//     } catch(err){
//         console.log(err);
//     }
// }
// Course()








console.log('\n')
console.log("=====================================Code Eater======================================")
// // Using Promises
// runDirection(100, "Top")
// .then(()=>runDirection(200, "left"))
// .then(()=>runDirection(300, "Bottom"))
// .then(()=>runDirection(400, "right"))


// // Using Async & Await
// async function move(){
//     await runDirection(200, "left");
//     await runDirection(300, "Bottom");
//     await runDirection(400, "right");
// }

// async function print(){
//     return 1;
// }
// print()