//Task 1.2
console.log("Task 1.2:");
let a = 4;
let x = a + 2.5;
let result = Math.sqrt(a) <= x && x < 2.5;
console.log(result);
//Task 2.1
console.log("Task 2.1:");
let alpha = 15.3;
let beta = -0.012;
let x = Math.sin(alpha + 2.3) - Math.tan(beta - 3.2);
let y = Math.sin(alpha - beta) * Math.sin(alpha - beta);
let n = Math.atan(Math.sin(x) * Math.sin(x) + Math.tan(y) * Math.tan(y));
console.log("Result is: " + n);
//Task 3.1
console.log("Task 10:");
let x = 2;
let y = null;
if(Math.abs(x) > 1){
    y = Math.cbrt(Math.tan(x) + Math.log(x*x));
} else if(x <= 1){
    y = Math.exp(x) + 1;
} else if(x === 1){
    y = 1;
}

if (y === null){
    console.log("Wrong input");
} else{
    console.log(y);
}
//Task 4.1
console.log("Task 10:");
for(let x = 3.2; x <= 5.2; x += 0.4){
    let y = (3*x - 2)/(2*Math.atan(Math.abs(x)) + 1);
    console.log(y);
}

console.log("Task 10.2:");
for(let x = 2; x <= 5; x += 1){
    let y = (3*x - 2)/(2*Math.atan(Math.abs(x)) + 1);
    console.log(y);
}
//Task 5.1
console.log("Task 10:");
let S = 0;
for(let n = 2; n <= 5; n++){
    S += Math.pow(-1, n) * (4*n - 5)/(2*n + 2);
}
console.log(S);

console.log("Task 10.2:");
let m = 2;
let P = 1;
for(let k = 1; k <= m; k++){
    P *= (1-1/k)/(Math.pow(k,2)*(k+3)*(k+4));
}
console.log(P);
