let p1 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Value 1')
        // reject(new Error('Error'))
    }, 11000);
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Value 2')
    }, 6000);
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('Value 3')
    }, 3000);
})

// p1.then(value=>{
//     console.log(value);
// })
// p2.then(value=>{
//     console.log(value);
// })
// p3.then(value=>{
//     console.log(value);
// })

console.log('\n Promise - all');
// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then(value=>{
//     console.log(value)
// })

console.log('\n Promise - allSettled');
// let promise_allSetteled = Promise.allSettled([p1,p2,p3])
// promise_allSetteled.then(value=>{
//     console.log(value)
// })

console.log('\n Promise - race');
// let promise_race = Promise.race([p1,p2,p3])
// promise_race.then(value=>{
//     console.log(value)
// })

console.log('\n Promise - any');
let promise_any = Promise.any([p1,p2,p3])
promise_any.then(value=>{
    console.log(value)
})


// let promise_all = Promise.resolve(6)
// let promise_all = Promise.reject(new Error('Reject Error'))
// promise_all.then(value) => {
//     console.log(value)
// };
