//https://www.youtube.com/watch?v=aQkgUUmUJy4&list=PLqKQF2ojwm3l4oPjsB9chrJmlhZ-zOzWT

// Prototype позволяет создавать методы в объекте, даже если они не добавлены в сам объект. 
// Например, sayHello до того, как мы его добавили, не существовал и при вызове этого метода в консоли нам выходила ошибка.
// А toString() сработает, даже если не будет добавлен в объект.
// Таким образом, prototype позволяет нам добавлять новый метод, в который мы можем добавить какое-либо действие

// Класс Object ЯВЛЯЕТСЯ САМЫМ ГЛАВНЫМ ОБЪЕКТОМ В JS

// const person = {
//     name: 'Maksim',
//     age: 25,
//     greet: function () {
//         console.log('Greet!')
//     }
// }

const person = new Object({
    name: 'Maksim',
    age: 25,
    greet: function () {
        console.log('Greet!')
    }
})

Object.prototype.sayHello = function () {
    console.log('Hello')
}

/* 
   create - создает новый прототип поверх прототипа person
   Таким образом, если мы будем прописывать ключ name у lena, то
   он добавит новый ключ в самый верхний уровень proto.
   То есть, если мы вызовем person.name, то нам выведется результат Maksim,
   а если вызовем lena.name, то выведется Elena.
   Это определенный объект у объекта
*/
const lena = Object.create(person)
lena.name = 'Elena'

const str = new String('I am string')