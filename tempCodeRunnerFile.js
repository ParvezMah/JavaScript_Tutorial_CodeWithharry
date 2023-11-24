const promise = new Promise(function(resolve, reject){
    // Asynchronus Programm inside of Promise object
    setTimeout(function(){
        if(status){
            resolve('Task 2');
        } else {
            reject('Failed')
        }
    },2000);
});

// Promise call - Consuming Code
promise
    .then(function(value){
        console.log(value);
    })
    .catch(function(err){
        console.log(err);
    })

console.log('Task 3');
console.log('\n');
