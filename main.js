console.log("Task 10:");
let a = 4;
let x = a + 2.5;
console.log("a =", a);
console.log("x = a + 2.5 =", x);

let sqrtA = Math.sqrt(a);
console.log("√a =", sqrtA);

let condition1 = sqrtA <= x;
let condition2 = x < 2.5;
let finalCondition = condition1 && condition2;

console.log("√a ≤ x:", condition1, "(", sqrtA, "≤", x, ")");
console.log("x < 2.5:", condition2, "(", x, "< 2.5)");
console.log("√a ≤ x < 2.5:", finalCondition);

console.log("\nTesting with different values a:");

console.log("Task 10.1:");
a = 1;
x = a + 2.5;
sqrtA = Math.sqrt(a);
condition1 = sqrtA <= x;
condition2 = x < 2.5;
finalCondition = condition1 && condition2;
console.log("a =", a, ", x =", x, ", √a =", sqrtA);
console.log("√a ≤ x < 2.5:", finalCondition);

console.log("Task 10.2:");
a = 0.25;
x = a + 2.5;
sqrtA = Math.sqrt(a);
condition1 = sqrtA <= x;
condition2 = x < 2.5;
finalCondition = condition1 && condition2;
console.log("a =", a, ", x =", x, ", √a =", sqrtA);
console.log("√a ≤ x < 2.5:", finalCondition);

console.log("Task 10.3:");
a = 6.25;
x = a + 2.5;
sqrtA = Math.sqrt(a);
condition1 = sqrtA <= x;
condition2 = x < 2.5;
finalCondition = condition1 && condition2;
console.log("a =", a, ", x =", x, ", √a =", sqrtA);
console.log("√a ≤ x < 2.5:", finalCondition);
