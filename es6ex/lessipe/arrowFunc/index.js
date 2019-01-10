// function Person(name) {
//     this.firstName = name
// }

// Person.prototype.prefixName = function (arr) {
//     const that = this;
//     return arr.map(function (character) {
//         return character + ' ' + that.firstName
//     })
// }

// const person = new Person('철수')
// console.log(person.prefixName(['김', '이']))


function Person2(name) {
    this.firstName = name
}

Person2.prototype.prefixName = function (arr) {
    return arr.map((character) => {
        return character + ' ' + this.firstName
    })
}

const person2 = new Person2('철수')
console.log(person2.prefixName(['김', '이']))