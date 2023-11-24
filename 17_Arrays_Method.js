//Array Method
let num = [1,2,3,4,45];
let b = num.toString();

console.log(typeof b)

//Join Method
let c = num.join(" and ");
console.log(c)

//pop Method
let d = num.pop();
console.log(d, num)

//push Method
let f = num.push(96,89,45,69);
console.log(num,f)

//shift Method
let g = num.shift();
console.log("Shift : ", g)

//shift Method
let h = num.unshift(22);
console.log("unShift : ", h)