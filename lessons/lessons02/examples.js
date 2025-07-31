// let a = 10;
// console.log(a)
// console.log(++a)
// console.log(a)
// console.log(a++)
// console.log(a)
// console.log(1+1+1+"test" + 1 + 1 + 1);

// console.log("5" - 2); // 3
// console.log(8 / "4"); // 
// console.log(2 * "a3"); // NaN

// console.log(10 == 10); // true
// console.log(10 == 20); // false
// console.log(10 == "10"); 

// let a=10
// let b=10

// console.log(true && true && [1,2,3] && "test"); // true
// console.log(true && true && 1 && false && "test"); 

// l = [0,0.0, NaN, null, undefined, "", false, 1, "test", [], [1,2], {}, {a:1}, 0.1];

// l.forEach(item => {
//     console.log(item ? item + " is truthy" : item + " is falsy");
// });


// a = 10 > 5 ? "a is greater than b" : "a is less than or equal to b";
// console.log(a);
// a = 10 > 5 ? {
//     log: () => console.log("a is greater than b"),
//     a: "a is greater than b",
//     b: "b is less than or equal to a"
// } : {a:"a is less than or equal to b"};

// console.log(a);

// parseInt("10.5"); // 10
// parseFloat("10.5"); // 10.5

// a = {}

// console.log(a); 
// console.log(!a); 
// console.log(!!a); 
// a = {a: 1, b: 2};

// console.log(a); 
// console.log(!a); 
// console.log(!!a); 
// a = 0;

// console.log(a); 
// console.log(!a); 
// console.log(!!a); 

// const cities = ["Rome", "Lviv", "Warsaw"];
// console.log(cities[0]); // Rome
// console.log(cities[-1]); // undefined
// console.log(cities[100]); // undefined
// console.log(cities[cities.length - 1]); // Warsaw
// console.log(cities.length); // Warsaw

// cities[5] = "London";
// console.log(cities.length); // 6
// a = 1;
// if (a) {
//     b = 2;// var let constant
//     let c = 3;
//     console.log("a is truthy");
// }
// console.log("b is", b); // 2
// // console.log("c is", c); // ReferenceError: c is not defined

// for(let i=10, a= 20; i < 20; i++, a+=20) {
//     console.log("i is", i, "a is", a);


// }

// const cities = ["Rome", "Lviv", "Warsaw"];
// cities[5] = "London"; // Adding a new city at index 5

// for (let i = 0; i < cities.length; i++) {
//     console.log("City at index", i, "is", cities[i]);
// }
// console.log("============================");
// for (let index in cities) {
//     console.log("City is", cities[index], "at index", index);
// }
// console.log("============================");
// for(let city of cities) {
//     console.log("City is", city);
// }

// for(let city of "cities") {
//     console.log("City is", city);
// }

// function hello() {
//     console.log("Hello, world!");
// }

// hello(); // Calling the function to see the output
// console.log(hello); // Logging the function itself

// function multiplication(a = 1, b = 1, c = 1) {
//     console.log("Multiplication function called with arguments:", a, b, c);
//     console.log("Number of arguments:", arguments.length);
//     console.log("Arguments object:", arguments);


//     const result = a * b * c;
//     console.log(result);
// }

// multiplication(2, 3, 4); // 24
// multiplication(2, 3); // 6
// multiplication(b=2, c=3); // 6
// multiplication(2); // 2
// multiplication(); // 1
// multiplication(2, 3, 4, 5); // 24 (extra argument ignored)
// multiplication(2, 3, 4, 5, 6); // 24 (extra arguments ignored)
// foo()
// function foo() {
//     a = 10; // This will throw an error if 'a' is not defined in the outer scope
//     let b = 20; // This will not throw an error, 'b' is defined in the local scope
//     console.log("Inside foo:", a, b);
//     console.log("Hello from foo!");
// }
// console.log("Before calling foo");
// foo(); // Calling the function to see the output
// console.log("After calling foo");
// // console.log("Outside foo:", a, b); // This will throw an error if 'a' is not defined in the outer scope
// console.log("Outside foo:", a); // This will throw an error if 'a' is not defined in the outer scope
// // console.log("Outside foo:", b); // This will throw an error, 'b' is not defined in the outer scope

// f = foo; // Assigning the function to a variable
// console.log("Function f:", f); // Logging the function itself
// f(); // Calling the function assigned to f


// function calcFactorial(n) {
//     // console.log("Calculating factorial for", n);
//     if (n == 1) {
//         return 1;
//     } else {
//         return calcFactorial(n - 1);
//     }
// }
// let res = calcFactorial(5000); 
// console.log("Factorial of 4 is", res); // 24



function sum_name(name) {
    let sum = 0;
    let _name = name;
    console.log("Initial name:", _name);
    return function(a, b) {
        sum += a + b;
        console.log("Current sum:", sum);
        return _name = _name + " " + (a + b);
    };
};

let sum = sum_name("John");
let sum2 = sum_name("Toni");
console.log(sum(1, 2)); // John 3
console.log(sum(3, 4)); // John 7
console.log(sum2(5, 6)); // Toni 11
console.log(sum(7, 8)); // John 15
