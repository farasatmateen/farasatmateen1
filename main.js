"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chalk_1 = require("chalk");
var weighInKg = 70;
var heightInMeter = 1.75;
var bmi = weighInKg / (heightInMeter * heightInMeter);
console.log(chalk_1.default.blue("Your bmi is  ".concat(bmi)));
// let num1 = 5;
// let num2 = 4;
// console.log(num1 == num2);
// console.log(num1 !== num2);
// let a=5;
// let b=9;
// let logicalAnd = (a>0) && (b>0);
// let logicalOR = (a<0) || (b>0);
// let logicalNot = !(b>0);
// console.log(logicalAnd);
// console.log(logicalOR);
// console.log(logicalNot);
// let weather="raining";
// if (weather === "raining"){
//     console.log("wear a rain coat");
// }else if (weather === "cloudy"){
//     console.log("wear a suit");
// }else {
//     console.log("wear a sunglass");
// }
// let dayoff = "monday";
// switch (dayoff) {
//     case "sunday":
//         console.log("Go Hiking");
//         break;
//         case "monday":
//             console.log("read a book");
//             break;
//             default:
//                 console.log("work on Hobby");
// }
// let  guess:number = 7;
// let target:number = 9;
// if (guess > target){
//     console.log("too low");
// }else if (guess < target){
//     console.log("too high");
// }else {
//     console.log("just right");
// }
// let answer:string = "correct"
// if(answer === "correct"){
//     console.log("you got it");
// }else {
//     console.log("try again");
// }
// function getTaxSlab(salary:number){
//     let slab ='';
//     if (salary > 50000){
//         slab = '15%';
//     }else if (salary > 10000){
//         slab = '17%';
//     }else {
//         slab = '10%';
//     }
//     return slab;
// }
// console.log(getTaxSlab(9000));
// function greeting(name:string){
//     console.log(`welcome ${name}  To my Party`);
// }   
// greeting("khan");
// function addition(num1:number, num2:number){
//     return num1+num2;
// }
// console.log(addition(5,5));
// function getOnlineStore(discount:number){
//     let slab ='';
//     if (discount > 50000){
//         slab = '10%';
//     }else if (discount > 10000){
//         slab = '15%';
//     }else {
//         slab = '20%';
//     }
//     return slab;
// }
// console.log(getOnlineStore(5000));
// function halfFryEgg(egg: number, butter: number, salt: number):number{
//     return egg + butter + salt;  
// }
// let response: number = halfFryEgg(2, 3, 4);
// console.log(response);
// let ishungry = false;
// let snake = ishungry ? "apple" : "water";
// console.log(snake);
// let isfriend: string = "ameen";
// if(isfriend === "ameen" || isfriend === "daniyal"){
// console.log(`${isfriend} is your friend` )
// }else {
//     console.log(`${isfriend} is your friend`) 
// }
