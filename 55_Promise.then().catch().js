let p1 = new Promise((resolve, reject)=>{
    console.log('Promise is Pending')
    setTimeout(()=>{
      console.log('I am a promise and i am fulfilled')
      resolve(true)
    },5000)
  })
  
  
  let p2 = new Promise((resolve, reject)=>{
    console.log('Promise is Pending')
    setTimeout(()=>{
      console.log('I am rejected')
      // resolve(true)
      reject(new Error('i am an error'))
    },5000)
  })
  
//   console.log(p1, p2)
p1.then((value)=>{
    console.log(value);
})
p2.catch((error)=>{
    console.log('some error occured');
})
