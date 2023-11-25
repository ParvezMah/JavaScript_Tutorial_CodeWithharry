const loadScript = ()=>{
    return new Promise((resolve, reject)=>{
        let script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.youtube.com/watch?v=nXe9GlWbBp8'
        document.body.appendChild(script)
        script.onload = () =>{
            resolve(1)
        }
        script.onerror = ()=>{
            reject(0)
        }
    })
}

let p1 = loadScript('localhost:3000/index.js')
p1.then(value=>{
    console.log(value);
})