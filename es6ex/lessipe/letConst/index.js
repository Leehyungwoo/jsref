var snake = "Meow Mix"

function getFood(food) {
    if (food) {
        var snake = "Friskies";   //호이스팅이 일어난다
        return snake
    }
    return snake
}

console.log(getFood(false))

// let snake = "Meow Mix"

// function getFood(food) {
//     if (food) {
//         let snake = "Friskies";   //호이스팅이 일어난다
//         return snake
//     }
//     return snake
// }

// console.log(getFood(false))