// function Person(name, age, gender) {
//     this.name = name;
//     this.age = age;
//     this.gender = gender;
// }

// Person.prototype.incrementAge = function () {

// }

class Person {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    incrementAge() {
        this.age = this.age + 1;
    }

    get koreanAge() {
        return this.age + 1
    }

    set koreanAge(age) {
        this.age = age - 1;
    }

    static register(name, age, gender) {
        return new Person(name, age, gender)
    }
}

// const person = new Person('이름', 40, '남')
// console.log(person.age)
// person.incrementAge()
// console.log(person.age)

// console.log(person.koreanAge)
// person.koreanAe = 30;
// console.log(person.age)
// console.log(person.koreanAge)

const person = Person.register('이름', 30, '여')
console.log(person)