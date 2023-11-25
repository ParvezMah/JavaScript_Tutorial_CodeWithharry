console.log('\n Code - 1');
// let p1 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         console.log('Resolved after 2 sec');
//         resolve(56)
//     }, 2000)
// })

// p1.then((value)=>{
//     console.log(value);
//     let p2 = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Promise 2')
//         },2000)
//     })
//     return p2
// }).then(value=> {
//     console.log('We are done');
//     return 2
// }).then(value=>{
//     console.log('We are finally done');
// })

console.log('\n Code - 2');
// const loadScript = ()=>{
//     return new Promise((resolve, reject)=>{
//         let script = document.createElement('script')
//         script.type = 'text/javascript'
//         script.src = 'https://www.youtube.com/watch?v=nXe9GlWbBp8'
//         document.body.appendChild(script)
//         script.onload = () =>{
//             resolve(1)
//         }
//         script.onerror = ()=>{
//             reject(0)
//         }
//     })
// }

// let p1 = loadScript('localhost:3000/index.js')
// p1.then(value=>{
//     console.log(value);
// })