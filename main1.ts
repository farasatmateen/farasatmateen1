// function halfFryEgg(): number {
//     let cocked = 1+2+3;
//     return cocked
// }
// let response: number = halfFryEgg()
// console.log(response)

// function addnumber(a: number, b:number):number{
//     return a+b
// }
// let response1 = addnumber(6,9)
// console.log(response1)

// function halfFryEgg(egg: number, ...ingredient: number[]){
//     console.log(egg)
//     console.log(...ingredient)
// }
// halfFryEgg(1, 1.5, 2, 5)



// let halfFryEgg = () => 1+2+3;
// let response = halfFryEgg()
// console.log(response)

// function countdown(num: number): void {
//     if (num <= 0) {
//         console.log("Blastoff!")
//     } else {
//         console.log(num)
//         countdown(num - 1)
//     }
//     return;
// }
// countdown(10)

function factorial(n:number):number{
    if (n === 0){
        return 1;
    }else {
        return n * factorial(n-1);
    }
}
let response = factorial(5)
console.log(response)
