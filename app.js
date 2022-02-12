// JavaScript is case sensitive

// print using console.log(); ****************

// console.log("hello world");
// console.log("beautiful people");
// console.log("hello susan");

// variable ************************************

// let fullname = "john shrimp taco VI";
// console.log(fullname);

// Numbers *********************************
// Loosely Typed = don't declare type *****************

// const number = 34;

// const number2 = 2.456;
// const number3 = '2.456';

// const add = number + number2;
// const sub = number - number2;
// const mult = number * number2;
// const div = number / number2;

// console.log(add);
// console.log(sub);
// console.log(mult);
// console.log(div);
// console.log(number3); used as string because of ''

// ==, -=, /=, *=

// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number++;
// number--;

// console.log(number);

// const slices = 10;
// const children = 4;
// const amount = slices % children;

// console.log(amount);

// const random = 4+6+10*10;
// const random2= (4+6+10)*10;



// Implicit Type Conversation ******************************

// const name = 'john';
// const lastName ='jordan';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// let name = "John"; // no error because let can be reassigned
// name = "peter";
// console.log(name);

// const lastName = "Jordan"; // error because const cannot be reassigned
// lastName = "peters";
// console.log(lastName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName; 
// console.log(value); this is an error

// const number3 = '10';
// const number4 = '24';

// const result2 = number3 + number4; // only (+) will output string value, others (-,*,/) will output number 
// console.log(result2);

// string concatenation *******************************

// let number3 = '10';
// let number4 = '24';

// number4 = 'pants';
// const result2 = number3 + number4;
// console.log(result2);

// const randomNumber = 14;

// console.log('Input Value Type');
// console.log(value);
// console.log('Sum of Two Values');
// console.log(randomNumber + value);

// Data Types *******************************

// const text = 'some text';

// console.log(typeof 3);
// console.log(typeof true);

// Arrays ****************************************

// const friend1 = 'Anna';
// const friend2 = 'Anna';
// const friend3 = 'Anna';
// const friend4 = 'Anna';

// const friends =['john', 'peter', 'bob', 'susy', 45, undefined, null];

// let bestFriend = friends[4];
// console.log(bestFriend);
// console.log(friends);
// console.log(friends[3]);

// Arrays, Functions and Objects 
// params - when declare/ define , used in function
// placeholders, local vars
// arguements - when invoke/call/run
// use vars/values, multiple params undefined

// Function **************************************

// first declare, then invoke (or call, or run)

// function hello(){ // function declaration
// logic
//     console.log('Hello There Bob');
//     console.log('Hello There Anna');
//     console.log('Hello There Susy');
// }

// hello(); // function invocation
// come code here....
// hello(); // function invocation
// come code here....
// hello(); // function invocation
// come code here....

// Without Parameters ************************

// function helloBob() {
//     console.log('Hello There Bob');
// }

// function helloAnna() {
//     console.log('Hello There Bob');
// }

// function helloAnna() {
//     console.log('Hello There Bob');
// }

// greet bob
// helloBob();
// greet Anna
// helloAnna();
//greet Susy
// helloBob();

// function with parameter **************

// function greet(name){
//     console.log('Hello there ' + name);
// }

// // greet bob 
// greet('Kamal');
// // greet anna 
// greet('Sadik');
// // greet susy 
// greet('Sumon');

// using variable with one parameter *****

// const bob ='Bob';
// const susy = 'Susy';
// const anna = 'Anna';

// function greet(name) {
//     console.log('Hello there ' + name);
// }

// greet(4);
// greet(anna);
// greet('Susy');

// using variable with two parameter *****************

// Arrays, Functions and Objects 
// params - when declare/ define, used in function
// placeholders, local vars
// arguements - when invoke/call/run, we pass in the arguements
// use vars/values, multiple params undefined

// const bob ='Bob';
// const susy = 'Susy';
// const anna = 'Anna';

// function greet(name, second) { // double paramenter, first invocation happened undefined, because greet(4) has invoked the first parameter only. Then for second invocation both parameter has been passed and printed as well, thirdly there is undefined because only one para 
//     console.log(second); 
//     console.log('Hello there ' + name);
// }

// greet(4);  
// greet(anna, bob); // double arguements
// greet('Susy');